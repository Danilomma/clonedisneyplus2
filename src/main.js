document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('data-faq-question')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo= botao.target.dataset.tabButton;
            const aba = document.querySelector(`data-tab-id=${abaAlvo}`);
            escondeTodasAbas();
            aba.classList.add('list--is-active');
            Removebotao();
            botao.target.classList.add('play--is-active');

        })
    }

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreouFechaResposta)
    }
    })

    function abreouFechaResposta (elemento) {
    const classe = 'faq_questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
    }

    function Removebotao () {
        const buttons = document.querySelectorAll('[data-tab-button]');
        for (let i = 0; i < tabsContainer.length; i++) {
            buttons.classList.remove ('play--is-active');
        }
    }

    function escondeTodasAbas () {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('list--is-active');
        }
    }