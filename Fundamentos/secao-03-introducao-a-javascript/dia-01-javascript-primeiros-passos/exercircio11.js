let PecasXadrez = 'rainha'
switch (PecasXadrez.toLowerCase()){
    case 'rei':
        console.log('Rei -> uma casa para qualquer direção')
    break;
    case 'rainha':
        console.log('Quantas casas livres em qualquer direção')
    break;
    case 'bispo':
        console.log ('somente em diagonal, quantas casas estiver disponivel')
        break;

    default:
        console.log('Peça invalida')
};
