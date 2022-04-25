$(document).ready(function(){
<<<<<<< HEAD
    $('#myForm').validate({
        rules:{
            nome:{
                required: true,
                minlength: 5,
                minWords:2
            },
            email:{
                required:true,
                email: true
            },
            senha1:{
                required:true,
                minlength: 8
            },
            senha2:{
                required:true,
                equalTo: "#inputPassword5"
            },
            inputRG:{
                required:true
            },
            inputCEP:{
                required:true
            },
            num:{
                required: true
            }
        },
        messages:{
            nome:{
                required: "Este campo é obrigatório.",
                minlength: "O nome deve conter no mínimo 5 caracteres.",
                minWords:"Por favor, informe no mínimo duas palavras"
            },
            email:{
                required:"Este campo é obrigatório.",
                email: "Informe um email válido"
            },
            senha1:{
                required:"Este campo é obrigatório.",
                minlength:"Sua senha deve conter no mínimo 8 caracteres."
            },
            senha2:{
                required:"Este campo é obrigatório.",
                equalTo: "As senhas diferem."
            },
            inputRG:{
                required:"Este campo é obrigatório.",
            },
            inputCEP:{
                required:"Este campo é obrigatório.",
            },
            num:{
                required:"Este campo é obrigatório.",  
            }
        }
    })
=======
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

>>>>>>> origin/criando-a-base-do-cadastro-com-bootstrap
});