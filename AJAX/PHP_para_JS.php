<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">

    <script type="text/javascript">
      // variavel global que recebe dados do servidor passar pra todas paginas js
      var VARS_AMBIENTE = new Array();
      VARS_AMBIENTE['dados'] = "<?php echo $dados;  ?>";
    </script>

    <title></title>
  </head>
  <body>
    <?php
    echo "Um Hello World!";
    $nome_individuo = "Cicrano de Mattos Pinto";
    ?>
  </body>
</html>
<script type="text/javascript">
  var nome_individuo_1 = "Fulano";
  var nome_individuo_2 = "<?php echo $nome_individuo; ?>";
  alert(nome_individuo_1 + "  " + nome_individuo_2);
</script>
