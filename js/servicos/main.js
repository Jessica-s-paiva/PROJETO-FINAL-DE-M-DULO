$('#btn1').on('click', (event) => {
    event.preventDefault();
    const corBanner = new CoresView();
    corBanner.mudarCorBanner();
});

$('#btn').on('click', (event) => {
    event.preventDefault();
    const corMenu = new CoresView();
    corMenu.mudarCorMenu();
});

