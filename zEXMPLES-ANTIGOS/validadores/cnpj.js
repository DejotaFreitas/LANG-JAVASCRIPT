
  var cnpj = document.getElementById('cnpj');
  cnpj.setAttribute('maxlength', '18');
  cnpj.setAttribute('placeholder', 'xx.xxx.xxx/xxxx-xx');
//  cnpj.setAttribute('autocomplete', 'off');
  cnpj.setAttribute('onkeypress', 'javascript: return entradaNumericaCNPJ(event);');
  cnpj.setAttribute('onkeydown', 'javascript: formatarCNPJ();');
  cnpj.setAttribute('onkeyup', 'javascript: formatarCNPJ();');
  cnpj.setAttribute('onblur', 'javascript: reacaoValidacaoCNPJ();');
  cnpj.setAttribute('onfocus', 'javascript: emFocusCNPJ();');

  function emFocusCNPJ() {
    elementoEmFocus(cnpj);
  }

  function reacaoValidacaoCNPJ() {
    if (validadorCNPJ())
      notificar(true, cnpj);
    else
      notificar(false, cnpj, "Número inválido.");
  }

  function validadorCNPJ() {
    var valor = cnpj.value.replace(/[^\d]+/g,'');
    if (valor.length < 14)   return false;
    if (valor == "00000000000000" ||
        valor == "11111111111111" ||
        valor == "22222222222222" ||
        valor == "33333333333333" ||
        valor == "44444444444444" ||
        valor == "55555555555555" ||
        valor == "66666666666666" ||
        valor == "77777777777777" ||
        valor == "88888888888888" ||
        valor == "99999999999999")  return false;

    var tamanho = valor.length - 2
    var numeros = valor.substring(0,tamanho);
    var digitos = valor.substring(tamanho);
    var soma = 0;
    var pos = tamanho - 7;

    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)  pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))  return false;
    tamanho = tamanho + 1;
    numeros = valor.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)  pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) return false;
    return true;
  }

  function formatarCNPJ() {
    var valor = cnpj.value.replace(/[^\d]+/g,'');
    if (valor.length > 12)
      valor =  valor.substr(0,2) + '.' + valor.substr(2, 3) + '.' + valor.substr(5, 3)
         + '/' + valor.substr(8, 4) + '-' + valor.substr(12, 2);
    else if (valor.length > 8)
      valor =  valor.substr(0,2) + '.' + valor.substr(2, 3) + '.' + valor.substr(5, 3)
         + '/' + valor.substr(8, 4);
   else if (valor.length > 5)
      valor =  valor.substr(0,2) + '.' + valor.substr(2, 3) + '.' + valor.substr(5, 3);
   else if (valor.length > 2)
      valor =  valor.substr(0,2) + '.' + valor.substr(2, 3);
    cnpj.value = valor;
}

function entradaNumericaCNPJ(evt) {
    var key_code = evt.keyCode ? evt.keyCode : evt.charCode ? evt.charCode : evt.which ? evt.which : void 0;
    // Habilita teclas <DEL>, <TAB>, <ENTER>, <ESC> e <BACKSPACE>
    if (key_code == 8  ||  key_code == 9  ||  key_code == 13  ||  key_code == 27  ||  key_code == 46) return true;
    // Habilita teclas <HOME>, <END>, mais as quatros setas de navegação (cima, baixo, direta, esquerda)
    else if ((key_code >= 35)  &&  (key_code <= 40))  return true;
    // 48 a 57 são os códigos para números
    else if ((key_code >= 48)  &&  (key_code <= 57))  return true;
    return false;
}
