class CoresView{
    mudarCorMenu(){
        const output = $('input[name=inlineRadioOptions]:checked','#myForm').val();
        switch (output) {
            case "option1":
                console.log('deu certo');
                $(".banner1").css("background", "#FFF900");
                break;
            case "option2":
                $(".banner1").css("background", "#8EFF00");
                break;
            case "option3":
                $(".banner1").css("background", "#F186B4");
                break;
            case "option4":
                $(".banner1").css("background", "#86C0F1");
                break;
            case "option5":
                $(".banner1").css("background", "#FFA500");
                break;
            default:
                break;
        }

    }
    mudarCorBanner(){
        const output = $('input[name=inlineRadioOptions]:checked','#myForm').val();
        switch (output) {
            case "option1":
                console.log('deu certo');
                $(".banner").css("background", "#FFF900");
                break;
            case "option2":
                $(".banner").css("background", "#8EFF00");
                break;
            case "option3":
                $(".banner").css("background", "#F186B4");
                break;
            case "option4":
                $(".banner").css("background", "#86C0F1");
                break;
            case "option5":
                $(".banner").css("background", "#FFA500");
                break;
            default:
                break;
        }

    }
}