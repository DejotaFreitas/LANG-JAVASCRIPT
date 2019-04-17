
  var cpf = document.getElementById('cpf');
  cpf.setAttribute('maxlength', '14');
  cpf.setAttribute('placeholder', 'xxx.xxx.xxx-xx');
//  cpf.setAttribute('autocomplete', 'off');
  cpf.setAttribute('onkeypress', 'javascript: return entradaNumericaCPF(event);');
  cpf.setAttribute('onkeydown', 'javascript: formatarCPF();');
  cpf.setAttribute('onkeyup', 'javascript: formatarCPF();');
  cpf.setAttribute('onblur', 'javascript: reacaoValidacaoCPF();');
  cpf.setAttribute('onfocus', 'javascript: emFocusCPF();');

  function emFocusCPF() {
    elementoEmFocus(cpf);
  }

  function reacaoValidacaoCPF() {
    if (validadorCPF())
      notificar(true, cpf);
    else
      notificar(false, cpf, "Número inválido.");
  }

  function validadorCPF() {
    var valor = cpf.value.replace(/[^\d]+/g,'');
    if (valor.length < 11) return false;
    if (valor == '00000000000' ||  valor == '11111111111' ||  valor == '22222222222' ||
 				valor == '33333333333' ||	valor == '44444444444' ||	valor == '55555555555' ||
 				valor == '66666666666' ||	valor == '77777777777' ||	valor == '88888888888' ||
 				valor == '99999999999') return false;
    var Soma = 0;
    var Resto = 0;
    for (i=1; i<=9; i++) Soma = Soma + parseInt(valor.substring(i-1, i)) * (11 - i);
    Resto = Soma % 11;
    if ((Resto == 0) || (Resto == 1)) Resto = 0;
    else Resto = 11 - Resto;
    if (Resto != parseInt(valor.substring(9, 10)) ) return false;
    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(valor.substring(i-1, i)) * (12 - i);
    Resto = Soma % 11;
    if ((Resto == 0) || (Resto == 1)) Resto = 0;
    else Resto = 11 - Resto;
    if (Resto != parseInt(valor.substring(10, 11) ) ) return false;
    return true;
  }

  function formatarCPF() {
    var valor = cpf.value.replace(/[^\d]+/g,'');
    if (valor.length > 9)
        valor = valor.substr(0, 3) + '.' + valor.substr(3, 3) + '.' + valor.substr(6, 3) + '-' + valor.substr(9, 2);
    else if (valor.length > 6)
        valor = valor.substr(0, 3) + '.' + valor.substr(3, 3) + '.' + valor.substr(6, 3);
    else if (valor.length > 3)
        valor = valor.substr(0, 3) + '.' + valor.substr(3, 3);
    cpf.value = valor;
}

function entradaNumericaCPF(evt) {
    var key_code = evt.keyCode ? evt.keyCode : evt.charCode ? evt.charCode : evt.which ? evt.which : void 0;
    if (key_code == 8  ||  key_code == 9  ||  key_code == 13  ||  key_code == 27  ||  key_code == 46) return true;
    else if ((key_code >= 35)  &&  (key_code <= 40))  return true;
    else if ((key_code >= 48)  &&  (key_code <= 57))  return true;
    return false;
}
