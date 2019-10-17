window.onload = function() {
// document.writeln(typeof(4582) +"<br>");
// prompt("digite algo")
// confirm("Click aqui ganhe um milhão");
// alert("HELLO WORLD!");
// var a = document.getElementById('a');
	document.getElementById('enviar').onclick = logar;
}

function logar(){
	try {
		var ajax = Ajax()
		ajax.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				var obj = JSON.parse(this.responseText);
				console.log(obj);
				if(obj==false){
					document.getElementById('conteudo').innerHTML = "login ou senha invalido";
				} else{
					document.getElementById('conteudo').innerHTML = obj.nome;
				}
			}
		}

		var loginvalue = document.getElementById('login').value;
		var senhavalue = document.getElementById('senha').value;
		var dados = {'login':loginvalue, 'senha':senhavalue};
		dados = JSON.stringify(dados);

		ajax.open("POST", "db.php", true);
		ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		ajax.send("json="+dados);
		return false;
	} catch (e) {
		alert("ERRO: "+ e.message);
		return false;
	}
}



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
