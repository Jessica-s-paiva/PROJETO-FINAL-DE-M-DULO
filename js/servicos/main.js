$("#btn1").click((event)=>{
    event.preventDefault();
    const menu = new CoresView();
    menu.mudarCorMenu();
})

$("#btn2").click((event)=>{
    event.preventDefault();
    const banner = new CoresView();
    banner.mudarCorBanner();
})

$("#btn3").click((event)=>{
    event.preventDefault();
    const letras = new CoresView();
    letras.mudarTipografia();
})
