$(document).ready(function(){
    function limpaFormCep() {
        $("#cidade").val("");
        $("#estado").val("");
        $("#bairro").val("");
        $("#rua").val("");
    }

    $("#inputCEP").blur(function(){
        const cep = $("#inputCEP").val();
        if (cep != "" ) {
            const validarCep = /^[0-9]{8}$/;
            if (validarCep.test(cep)){
                $("#cidade").val("...");
                $("#estado").val("...");
                $("#bairro").val("...");
                $("#rua").val("...");

                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                    if (!("erro" in dados)) {

                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#estado").val(dados.uf);
                        
                    } else {
                        //CEP pesquisado não foi encontrado.
                        limpaFormCep();
                        alert("CEP não encontrado.");
                    }
                });
            } else {
                limpaFormCep();
                alert("Formato de CEP inválido.");
            }
        } else {
            limpaFormCep();
        }
    });

});