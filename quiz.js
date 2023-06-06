var respostaf = document.getElementById("res")
var p = 0
var input = document.getElementById("ttt")
respostaf.innerHTML = `Parabens vc acertou um total de ${p}/10`;
function ver1() {
    let r1 = document.getElementById("r1");
    let opcao1 = document.getElementById("p1r1");
    let opcao2 = document.getElementById("p1r2");
    let opcao3 = document.getElementById("p1r3");
    let opcao4 = document.getElementById("p1r4");

    if (opcao1.checked) {
        r1.innerHTML = `Parabéns, ganhou 1 ponto`;
        p++;
        
        input.style.backgroundColor = "green";
        r1.style.color = "green";
        
    } else if (opcao2.checked || opcao3.checked || opcao4.checked) {
        r1.innerHTML = `Resposta incorreta: a resposta certa era ciano`;
        input.style.backgroundColor = "red";
        r1.style.color = "red";
    } else {
        r1.innerHTML = `Nenhuma opção selecionada, `;
    }

    respostaf.innerHTML = `Parabens vc acertou um total de ${p}/10`;
}

function ver2() {
    let r2 = document.getElementById("r2");
    let opcao1 = document.getElementById("p2r1");
    let opcao2 = document.getElementById("p2r2");
    let opcao3 = document.getElementById("p2r3");
    let opcao4 = document.getElementById("p2r4");

    if (opcao3.checked) {
        r2.innerHTML = `Parabéns, ganhou 1 ponto`;
        p++;
        input2.style.backgroundColor = "green";
        r2.style.color = "green";
    } else if (opcao1.checked || opcao2.checked || opcao4.checked) {
        r2.innerHTML = `Resposta incorreta: a resposta certa era  a Meg`;
        input2.style.backgroundColor = "red";
        r2.style.color = "red";
    } else {
        r2.innerHTML = `Nenhuma opção selecionada`;
    }

    respostaf.innerHTML = `Parabens vc acertou um total de ${p}/10`;
}
function ver3() {
    let r3 = document.getElementById("r3");
    let opcao1 = document.getElementById("p3r1");
    let opcao2 = document.getElementById("p3r2");
    let opcao3 = document.getElementById("p3r3");
    let opcao4 = document.getElementById("p3r4");

    if (opcao1.checked) {
        r3.innerHTML = `Parabéns, ganhou 1 ponto`;
        p++;
        input3.style.backgroundColor = "green";
        r3.style.color = "green";
    } else if (opcao3.checked || opcao2.checked || opcao4.checked) {
        r3.innerHTML = `Resposta incorreta: a resposta certa era  a Meg`;
        input2.style.backgroundColor = "red";
        r3.style.color = "red";
    } else {
        r3.innerHTML = `Nenhuma opção selecionada`;
    }

    respostaf.innerHTML = `Parabens vc acertou um total de ${p}/10`;
}
function ver4() {
    let r4 = document.getElementById("r4");
    let opcao1 = document.getElementById("p4r1");
    let opcao2 = document.getElementById("p4r2");
    let opcao3 = document.getElementById("p4r3");
    let opcao4 = document.getElementById("p4r4");

    if (opcao3.checked) {
        r4.innerHTML = `Parabéns, ganhou 1 ponto`;
        p++;
        input4.style.backgroundColor = "green";
        r4.style.color = "green";
    } else if (opcao1.checked || opcao2.checked || opcao4.checked) {
        r4.innerHTML = `Resposta incorreta: a resposta certa era  a Meg`;
        input2.style.backgroundColor = "red";
        r4.style.color = "red";
    } else {
        r4.innerHTML = `Nenhuma opção selecionada`;
    }

    respostaf.innerHTML = `Parabens vc acertou um total de ${p}/10`;
}
function ver5() {
    let r5 = document.getElementById("r5");
    let opcao1 = document.getElementById("p5r1");
    let opcao2 = document.getElementById("p5r2");
    let opcao3 = document.getElementById("p5r3");
    let opcao4 = document.getElementById("p5r4");

    if (opcao2.checked) {
        r5.innerHTML = `Parabéns, ganhou 1 ponto`;
        p++;
        input5.style.backgroundColor = "green";
        r5.style.color = "green";
    } else if (opcao1.checked || opcao3.checked || opcao4.checked) {
        r5.innerHTML = `Resposta incorreta: a resposta certa era  a Meg`;
        input5.style.backgroundColor = "red";
        r5.style.color = "red";
    } else {
        r5.innerHTML = `Nenhuma opção selecionada`;
    }

    respostaf.innerHTML = `Parabens vc acertou um total de ${p}/10`;
}


