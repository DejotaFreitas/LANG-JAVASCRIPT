<?php

// Atribui o conteúdo do arquivo para variável $arquivo
$arquivo = file_get_contents('cadastro.json');
var_dump($arquivo);
// Decodifica o formato JSON e retorna um Objeto
$json = json_decode($arquivo);
var_dump($json);

// Loop para percorrer o Objeto
foreach($json as $registro):
    echo 'Código: ' . $registro->codigo . ' - Nome: ' . $registro->nome . ' - Telefone: ' . $registro->telefone . '<br>';
endforeach;
