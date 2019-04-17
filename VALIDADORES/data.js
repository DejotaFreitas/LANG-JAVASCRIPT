
  var data = document.getElementById('data');
  data.setAttribute('maxlength', '10');
  data.setAttribute('placeholder', 'xx/xx/xxxx');
//  data.setAttribute('autocomplete', 'off');
  data.setAttribute('onkeypress', 'javascript: return entradaNumericaDATA(event);');
  data.setAttribute('onkeydown', 'javascript: formatarDATA();');
  data.setAttribute('onkeyup', 'javascript: formatarDATA();');
  data.setAttribute('onblur', 'javascript: reacaoValidacaoDATA();');
  data.setAttribute('onfocus', 'javascript: emFocusDATA();');

  function emFocusDATA() {
    elementoEmFocus(data);
  }

  function reacaoValidacaoDATA() {
    if (validadorDATA())
      notificar(true, data);
    else
      notificar(false, data, "Data inválida.");
  }

  function validadorDATA() {
    var valor = data.value.replace(/[^\d]+/g,'');
    if (valor.length < 8) return false;
    if (parseInt(valor.substr(0, 2)) < 1 || parseInt(valor.substr(0, 2)) > 31) return false;
    if (parseInt(valor.substr(2, 2)) < 1 || parseInt(valor.substr(2, 2)) > 12) return false;
    return true;
  }

  function formatarDATA() {
    var valor = data.value.replace(/[^\d]+/g,'');
    if (valor.length > 4)
        valor = valor.substr(0,2) + '/' + valor.substr(2, 2) + '/' + valor.substr(4, 4);
    else if (valor.length > 2)
        valor = valor.substr(0,2) + '/' + valor.substr(2, 2);
    data.value = valor;
}

function entradaNumericaDATA(evt) {
    var key_code = evt.keyCode ? evt.keyCode : evt.charCode ? evt.charCode : evt.which ? evt.which : void 0;
    if (key_code == 8  ||  key_code == 9  ||  key_code == 13  ||  key_code == 27  ||  key_code == 46) return true;
    else if ((key_code >= 35)  &&  (key_code <= 40))  return true;
    else if ((key_code >= 48)  &&  (key_code <= 57))  return true;
    return false;
}
