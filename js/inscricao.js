$(document).ready(function(){
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
});