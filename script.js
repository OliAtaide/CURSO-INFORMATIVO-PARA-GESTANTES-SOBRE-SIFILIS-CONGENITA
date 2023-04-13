

var notokModal = new bootstrap.Modal(document.getElementById('notokModal'))

var okModal = new bootstrap.Modal(document.getElementById('okModal'))

// $('.notok-modal').show()

questoes.forEach(function (questao, index) {
    $('.container').append(
        `
        <div class="card card-`+ index + `" style="display: none;">
            <div class="card-body">
                <div class="d-flex">
                    <h1 class="card-title justify-content-between w-100">
                        Revisão: unidade `+ n_unidade + `
                    </h1>
                    <div class="numero-questao">
                        `
        +
        (index + 1)
        + "/" +
        questoes.length
        +
        `
                    </div>
                </div>
                <div class="question w-75 m-auto my-5 py-5">
                    <div class="card-title text-center">
                        <h2>
                        `
        + questao.titulo +
        `
                        </h2>
                    </div>
                    <div class="card-text">
                        <p>
                            Selecione uma das alternativas abaixo:
                        </p>`
        +
        '<button class="btn btn-option" value=' + index + '>'
        + questao.opcoes[0] +
        '</button><button class="btn btn-option" value=' + index + '>'
        + questao.opcoes[1] +
        '</button>' +
        `
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    )
});


$('.btn-start').on(
    'click',
    function () {
        $('.card-inicio').hide();
        proximaQuestao(0);
    }
)

function proximaQuestao(index) {
    $('.card-' + index).show();
    $('.ok-modal p').html(questoes[index].textoAcertou);
    $('.notok-modal p').html(questoes[index].textoErrou);
}

$('.btn-option').on(
    'click',
    function () {
        const index = $(this).index();
        const resposta = questoes[$(this).val()].resposta;

        if (index == resposta) {
            okModal.show();
        }
        else {
            notokModal.show();
        }
    }
)

var current = 0;

$('.ok-modal .btn').on(
    'click',
    function () {
        current++;
        $('.card').hide();
        if (current < questoes.length) {
            proximaQuestao(current);
        }
        else {
            $('.card-parabens').show();
        }
    }
)