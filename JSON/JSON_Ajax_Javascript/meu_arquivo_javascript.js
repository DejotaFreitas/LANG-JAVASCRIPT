// Função para capturar eventos
function capturaEventos(obj, evt, fn) {
	// Verifica se o objeto suporta addEventListener
	if(obj.addEventListener){
		obj.addEventListener(evt, fn, true);
	} 
	// Adiociona attachEvent da Microsoft
	else {
		var evento = 'on' + evt;
		obj.attachEvent(evento, fn);
	}
}

// Cancela evento
function cancelaEvento(evt){
	// Verifica se o evento suporta stopPropagation
	if(evt.stopPropagation) {
		// Aplica-se para Firefox, Chrome e demais
		evt.stopPropagation();
		evt.preventDefault();
	} else {
		// Aplica-se para IEs antigos
		evt.cancelBubble = true;
		evt.returnValue = false;
	}
}

// Função para capturar a requisição XMLHttpRequest
function verificaXmlHttp() {
	// Uma variável sem valor
	var xmlhttp;
	// Verifica se suporta XMLHttpRequest
	if (window.XMLHttpRequest) {
		// Adiciona o valor à variável
		xmlhttp = new XMLHttpRequest();
	} else {
		// Adiciona ActiveXObject da Microsoft 
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	// Retorna o valor
	return xmlhttp;
}

// Captura evento load da página
capturaEventos(window, 'load', function(evt){
	// Localiza o link com id "a"
	var a = document.getElementById('a');
	
	// Captura o evento de clique neste link
	capturaEventos(a, 'click', function(evt){
		var xmlhttp = verificaXmlHttp();

		// Verifica os estados da requisição
		xmlhttp.onreadystatechange = function(){
			// Verifica se a página foi carregada corretamente
			if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
				var dadosJSON;
				try {
					dadosJSON = JSON.parse(xmlhttp.responseText);
				} catch(e) {
					eval("dadosJSON = (" + xmlhttp.responseText + ");");
				}

				// Localiza nossa div dentro do HTML
				var div = document.getElementById('texto');

				// Utiliza um laço for ... in
				for( var propriedade in dadosJSON ){
					// Adiciona a propriedade no texto da div
					div.innerHTML += propriedade + ' = ';
					
					// Verifica se a propriedade é um objeto
					if (typeof dadosJSON[propriedade] !== 'object') {
						// Adiciona o valor da propriedade no texto da div
						div.innerHTML += dadosJSON[propriedade] + '<br>';
					} else { 
						// Se for objeto, acessa o valor da maneira alterativa e 
						// adiciona na div
						div.innerHTML += '<br>';
						div.innerHTML += 'Desenvolver: ' + dadosJSON[propriedade][0].Desenvolver;
						div.innerHTML += '<br>';
						div.innerHTML += 'Ler: ' + dadosJSON[propriedade][1].Ler;
						div.innerHTML += '<br>';
						div.innerHTML += 'Beber: ' + dadosJSON[propriedade][2].Beber;
					}
				}				
			}
		}
		
		// Abre a requisição com o método e url
		xmlhttp.open('GET', 'dados.json', true);
		// Modifica o MimeType da requisição
		xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		// Envia os valores
		xmlhttp.send(null);
		
		// Checagem para os IEs antigos
		var evento = evt ? evt : window.event;
		// Cancela o evento
		cancelaEvento(evento);
	});
});