// SELETOR DE ELEMENTOS
$("#ID")
$(".class")
$(".class1, .class2")
$("img") //elemento html
$("div a")
$("input[type=text]")

//PEGAR OU ATERAR VALORES ATRIBUTOS E PROPRIEDADES
$("div").html(); //retorna conteudo
$("div").html("novo conteudo"); //subistitui conteudo
$("div").append("novo conteudo ao final"); //adiciona conteudo ao final

$("img").attr(); //retorna valor do atributo
$("img").attr("img/novo.jpeg"); //subistitui valor do atributo

$("input").val(); //retorna value da tag
$("input").val("novo value"); //subistitui value da tag

$("div").css("background"); //retorna value da tag CSS
$("div").css("background", "black"); //altera value da tag CSS

$("div").offset(); //retorna as coordenadas, ("div").offset().left, ("div").offset().top
$("div").offset({left:100, top:100}); //altera value das coordenadas

$("div").addClass("invalido"); //adiciona classe
$("div").removeClass("invalido"); //remove classe


$("img").width();//retorna largura
$("img").width(400); //altera largura
$("img").height(); //retorna Altura
$("img").height(300); //altera Altura


//EVENTO será executado depois que pagina ja estiver carregado
$(document).ready(function() {
  //...código
});

//EVENTO ao clicar no elemento
$("a").click(function(event) {
  alert("clicou no link");
  event.preventDefault(); //evento padrão do html nao sera executado;
});

//EVENTO quando elemento receber focus
$("input").focus(function(event) {
  this.val(""); //limpando conteudo do input
});

//EVENTO quando elemento perde focus
$("input").blur(function(event) {
  $(this).val("kkkkkkk"); //limpando conteudo do input
});

//EVENTO quando mouse entra e sai da area do elemento
$("div").hover(
  function(event) {//quando mouse entra na area do elemento
    alert("entrou na div");
},function (event) {//quando mouse sai da area do elemento
    alert("saiu na div");
});

//EVENTO quando altera valor do elemento
//usar no <select> <option>
$("input").change(function(event) {
  alert("valor do elemento foi udado para "+$(this).val());
});

//EVENTO quando elemento está em focus e tecla e pressionada
$(document).keypress(function(event) {
  if (event.charCode == '114') {
    //faz algo
  }
});

//EVENTO quando formulario vai ser submetido
$("#formulario").submit(function(event) {
  $('input[type=text]').each(function() {//percorre todos inputs
    if ($(this).val() == "") { //olha se input esta vazio
      alert("algum campo do formulario está vazio");
      event.preventDefault(); //impede o submit
    }
  })
});


//EFEITO fazer algo sumir
$("#sumir").click(function(event) {
  $("#caixa").hide('slow');
});

//EFEITO fazer algo aparecer
$("#aparecer").click(function(event) {
  $("#caixa").show('slow');
});

//EFEITO alternar entre as duas funçoes
$("#alternar").toggle(
  function(event) {//quando mouse entra na area do elemento
    $("#caixa").hide('slow');
},function (event) {//quando mouse sai da area do elemento
    $("#caixa").show('slow');
});

//EFEITO fazer algo sumir com transparencia
$("#sumir").click(function(event) {
  $("#caixa").fadeOut('slow');
});

//EFEITO fazer algo aparecer com transparencia
$("#aparecer").click(function(event) {
  $("#caixa").fadeIn('slow');
});

//EFEITO fazer algo sumir com efeito deslizarmento
$("#sumir").click(function(event) {
  $("#caixa").slideUp('slow');
});

//EFEITO fazer algo aparecer com efeito deslizarmento
$("#aparecer").click(function(event) {
  $("#caixa").slideDown('slow');
});
