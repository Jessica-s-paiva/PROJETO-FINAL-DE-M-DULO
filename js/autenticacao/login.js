function validaEmail(){
    let email = $('#email').val();

    let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailRegex.test(email) && email != ""){
       inserirAlerta('Email inválido', 'danger');
    }else if(email == ""){
        inserirAlerta('Insira um email válido', 'info');
    }
}

function inserirAlerta(message, type) {
    let alertPlaceholder = $('#liveAlertPlaceholder');

    let wrapper = document.createElement('div');

    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' +
    '<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>'
     + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  
    alertPlaceholder.append(wrapper);
}



