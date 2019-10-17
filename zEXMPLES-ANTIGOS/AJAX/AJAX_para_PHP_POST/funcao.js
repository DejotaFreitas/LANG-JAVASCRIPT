function Ajax(){
	var ajax;
	try	{
		ajax = new XMLHttpRequest();
	}	catch(e) {
		try		{
			ajax = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try			{
				ajax = new ActiveXObject("Microsoft.XMLHTTP");
			}	catch(e) {
				alert("Seu browser nao da suporte o AJAX!");
				return false;
			}
		}
	}
	return ajax;
}

function AlteraConteudo(){
	var ajax = Ajax();
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200)
		{
			document.getElementById('conteudo').innerHTML = ajax.responseText;
		}
	}
	var dados = "nome="+document.getElementById('txtnome').value;
	ajax.open("POST", "retorna_informacoes.php", true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send(dados);
	return false;
}
