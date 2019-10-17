
  var celular = document.getElementById('celular');
  celular.setAttribute('maxlength', '15');
  celular.setAttribute('placeholder', '(xx) xxxxx-xxxx');
//  celular.setAttribute('autocomplete', 'off');
  celular.setAttribute('onkeypress', 'javascript: return entradaNumericaCELULAR(event);');
  celular.setAttribute('onkeydown', 'javascript: formatarCELULAR();');
  celular.setAttribute('onkeyup', 'javascript: formatarCELULAR();');
  celular.setAttribute('onblur', 'javascript: reacaoValidacaoCELULAR();');
  celular.setAttribute('onfocus', 'javascript: emFocusCELULAR();');

  function emFocusCELULAR() {
    elementoEmFocus(celular);
  }

  function reacaoValidacaoCELULAR() {
    if (validadorcelular())
      notificar(true, celular);
    else
      notificar(false, celular, "Número inválido.");
  }

  function validadorcelular() {
    var valor = celular.value.replace(/[^\d]+/g,'');
    if (valor.length < 10) return false;
    if (valor.length >= 10 && (parseInt(valor.substr(2,1)) < 7 || parseInt(valor.substr(2,1)) > 9)) return false;
  //  if (valor.length == 11 && (valor.substr(2,1) != '9' || parseInt(valor.substr(3,1)) < 7 || parseInt(valor.substr(3,1)) > 9)) return false;
    return true;
  }

  function formatarCELULAR() {
    var valor = celular.value.replace(/[^\d]+/g,'');
    if (valor.length > 10)
        valor =  '('+ valor.substr(0,2) + ') ' + valor.substr(2, 5) + '-' + valor.substr(7, 4);
    else if (valor.length > 6)
        valor =  '('+ valor.substr(0,2) + ') ' + valor.substr(2, 4) + '-' + valor.substr(6, 4);
    else if (valor.length > 2)
        valor = '('+ valor.substr(0,2) + ') ' + valor.substr(2, 4);
    celular.value = valor;
}

function entradaNumericaCELULAR(evt) {
    var key_code = evt.keyCode ? evt.keyCode : evt.charCode ? evt.charCode : evt.which ? evt.which : void 0;
    if (key_code == 8  ||  key_code == 9  ||  key_code == 13  ||  key_code == 27  ||  key_code == 46) return true;
    else if ((key_code >= 35)  &&  (key_code <= 40))  return true;
    else if ((key_code >= 48)  &&  (key_code <= 57))  return true;
    return false;
}
