// function afmelden() {
//     var antwoord = confirm('Wilt u zich afmelden?');
//     if (antwoord == true) {
//         alert('U wordt afgemeld!!!');
//         window.close();
//     }
// }

function begroeten() {
    var datum = new Date();
    var uur = datum.getHours();
    if (uur >= 0 && uur <= 11) {
        alert('Goedemorgen!');
    }
    if (uur >= 12 && uur <= 17) {
        alert('Goedemiddag!')
    } else {
        alert('Goedenavond')
    }
}

function dollarKoers() {
    return (1.36)
}
function euroKoers() {
    return (0.74)
}

function dollar_naar_euro(inputdollars) {
    return (inputdollars * euroKoers());
}

function wissel(bedrag, valuta) {
    if (valuta == 'euro') {
        return (bedrag * dollarKoers());
    } else if (valuta == 'dollar') {
        return (bedrag * euroKoers());
    }
}