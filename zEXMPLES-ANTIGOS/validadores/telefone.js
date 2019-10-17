
  var telefone = document.getElementById('telefone');
  telefone.setAttribute('maxlength', '14');
  telefone.setAttribute('placeholder', '(xx) xxxx-xxxx');
//  telefone.setAttribute('autocomplete', 'off');
  telefone.setAttribute('onkeypress', 'javascript: return entradaNumericaTELEFONE(event);');
  telefone.setAttribute('onkeydown', 'javascript: formatarTELEFONE();');
  telefone.setAttribute('onkeyup', 'javascript: formatarTELEFONE();');
  telefone.setAttribute('onblur', 'javascript: reacaoValidacaoTELEFONE();');
  telefone.setAttribute('onfocus', 'javascript: emFocusTELEFONE();');

  function emFocusTELEFONE() {
    elementoEmFocus(telefone);
  }

  function reacaoValidacaoTELEFONE() {
    if (validadorTELEFONE())
      notificar(true, telefone);
    else
      notificar(false, telefone, "Número inválido.");
  }

  function validadorTELEFONE() {
    var valor = telefone.value.replace(/[^\d]+/g,'');
    if (valor.length < 10) return false;
    if (valor.length == 10 && (parseInt(valor.substr(2,1)) < 2 || parseInt(valor.substr(2,1)) > 6)) return false;
    return true;
  }

  function formatarTELEFONE() {
    var valor = telefone.value.replace(/[^\d]+/g,'');
    if (valor.length > 6)
        valor =  '('+ valor.substr(0,2) + ') ' + valor.substr(2, 4) + '-' + valor.substr(6, 4);
    else if (valor.length > 2)
        valor = '('+ valor.substr(0,2) + ') ' + valor.substr(2, 4);
    telefone.value = valor;
}

function entradaNumericaTELEFONE(evt) {
    var key_code = evt.keyCode ? evt.keyCode : evt.charCode ? evt.charCode : evt.which ? evt.which : void 0;
    if (key_code == 8  ||  key_code == 9  ||  key_code == 13  ||  key_code == 27  ||  key_code == 46) return true;
    else if ((key_code >= 35)  &&  (key_code <= 40))  return true;
    else if ((key_code >= 48)  &&  (key_code <= 57))  return true;
    return false;
}
