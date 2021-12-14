var cont = 1
var placarX = document.querySelector('#TD3')
var placarO = document.querySelector('#TD4')
var msg = document.querySelector('#MsgVencedor')
var end = false

placarX.innerHTML = 0
placarO.innerHTML = 0

var x = Number(placarX)

var estilo = document.querySelector('#TD1')
var estilo2 = document.querySelector('#TD2')

function ZerarPlacar() {
    window.location.reload()
}

function Reiniciar() {
    var tds = document.querySelectorAll('#TabelaVelha td')
    for (var i = 0; i < tds.length; i++) {
        tds[i].innerHTML = ''
    }
    msg.innerHTML = ''
    cont = 1
    end = false
}

function jogada(mostra) {
    if (end == false) {
        if (cont % 2 == 0) {
            mostra.innerHTML = `X`
            estilo.style.backgroundColor = "#00ff14"
            estilo2.style.backgroundColor = "rgb(42, 216, 48)"
        } else {
            mostra.innerHTML = `O`
            estilo2.style.backgroundColor = "#00ff14"
            estilo.style.backgroundColor = "rgb(42, 216, 48)"
        }
        cont++
        comparar()

    }else{
        mostra.innerHTML = ''

    }
}
function comparar() {
    //Vertical

    if (tab('a_1') == 'X' &&
        tab('a_2') == 'X' &&
        tab('a_3') == 'X'
    ) {
        msg.innerHTML = 'o X é o vencedor!! Parabéns'
        placarX.innerHTML = Number(placarX.innerHTML) + 1
        end = true

    } else if (tab('b_1') == 'X' &&
        tab('b_2') == 'X' &&
        tab('b_3') == 'X'
    ) {
        msg.innerHTML = 'o X é o vencedor!! Parabéns'
        placarX.innerHTML = Number(placarX.innerHTML) + 1
        end = true

    } else if (tab('c_1') == 'X' &&
        tab('c_2') == 'X' &&
        tab('c_3') == 'X'
    ) {
        msg.innerHTML = 'o X é o vencedor!! Parabéns'
        placarX.innerHTML = Number(placarX.innerHTML) + 1
        end = true

        //Diagonal

    } else if (tab('a_1') == 'X' &&
        tab('b_2') == 'X' &&
        tab('c_3') == 'X'
    ) {
        msg.innerHTML = 'o X é o vencedor!! Parabéns'
        placarX.innerHTML = Number(placarX.innerHTML) + 1
        end = true

    } else if (tab('a_3') == 'X' &&
        tab('b_2') == 'X' &&
        tab('c_1') == 'X'
    ) {
        msg.innerHTML = 'o X é o vencedor!! Parabéns'
        placarX.innerHTML = Number(placarX.innerHTML) + 1
        end = true

        //Horizontal

    } else if (tab('a_1') == 'X' &&
        tab('b_1') == 'X' &&
        tab('c_1') == 'X'
    ) {

        msg.innerHTML = 'o X é o vencedor!! Parabéns'
        placarX.innerHTML = Number(placarX.innerHTML) + 1
        end = true

    } else if (tab('a_2') == 'X' &&
        tab('b_2') == 'X' &&
        tab('c_2') == 'X'
    ) {
        msg.innerHTML = 'o X é o vencedor!! Parabéns'
        placarX.innerHTML = Number(placarX.innerHTML) + 1
        end = true

    } else if (tab('a_3') == 'X' &&
        tab('b_3') == 'X' &&
        tab('c_3') == 'X'
    ) {
        msg.innerHTML = 'o X é o vencedor!! Parabéns'
        placarX.innerHTML = Number(placarX.innerHTML) + 1
        end = true

        //ifs do O a parti de agora

        //Horizontal

    } else if (tab('a_1') == 'O' &&
        tab('a_2') == 'O' &&
        tab('a_3') == 'O'
    ) {

        msg.innerHTML = 'o O é o vencedor!! Parabéns'
        placarO.innerHTML = Number(placarO.innerHTML) + 1
        end = true

    } else if (tab('b_1') == 'O' &&
        tab('b_2') == 'O' &&
        tab('b_3') == 'O'
    ) {

        msg.innerHTML = 'o O é o vencedor!! Parabéns'
        placarO.innerHTML = Number(placarO.innerHTML) + 1
        end = true

    } else if (tab('c_1') == 'O' &&
        tab('c_2') == 'O' &&
        tab('c_3') == 'O'
    ) {

        msg.innerHTML = 'o O é o vencedor!! Parabéns'
        placarO.innerHTML = Number(placarO.innerHTML) + 1
        end = true

        //Diagonal   

    } else if (tab('a_1') == 'O' &&
        tab('b_2') == 'O' &&
        tab('c_3') == 'O'
    ) {

        msg.innerHTML = 'o O é o vencedor!! Parabéns'
        placarO.innerHTML = Number(placarO.innerHTML) + 1
        end = true

    } else if (tab('a_3') == 'O' &&
        tab('b_2') == 'O' &&
        tab('c_1') == 'O'
    ) {

        msg.innerHTML = 'o O é o vencedor!! Parabéns'
        placarO.innerHTML = Number(placarO.innerHTML) + 1
        end = true

        //vertical

    } else if (tab('a_1') == 'O' &&
        tab('b_1') == 'O' &&
        tab('c_1') == 'O'
    ) {

        msg.innerHTML = 'o O é o vencedor!! Parabéns'
        placarO.innerHTML = Number(placarO.innerHTML) + 1
        end = true

    } else if (tab('a_2') == 'O' &&
        tab('b_2') == 'O' &&
        tab('c_2') == 'O'
    ) {

        msg.innerHTML = 'o O é o vencedor!! Parabéns'
        placarO.innerHTML = Number(placarO.innerHTML) + 1
        end = true

    } else if (tab('a_3') == 'O' &&
        tab('b_3') == 'O' &&
        tab('c_3') == 'O'
    ) {

        msg.innerHTML = 'o O é o vencedor!! Parabéns'
        placarO.innerHTML = Number(placarO.innerHTML) + 1
        end = true

    } else if (cont == 10) {
        msg.innerHTML = 'O Jogo deu Velha! '
        end = true
    }
}

function tab(id) {
    return document.querySelector(`#${id}`).innerHTML
}

