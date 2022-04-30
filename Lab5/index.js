((Utils) => {
    const App = {
        htmlElements: {
            form: document.querySelector('#fibonacci'),
            input: document.querySelector('#size'),
            response: document.querySelector('#container'),
            reset: document.querySelector('#carReset')
        },
        init: () => {
            App.htmlElements.form.addEventListener('submit', App.handlers.onFormSubmit);
            App.htmlElements.response.addEventListener('click', App.handlers.onCardClick);
            App.htmlElements.reset.addEventListener('click', App.handlers.onReset);
        },
        utils: {
            ...Utils.methods,
        },
        templates: {
            card: (n) => {
                return `<p class="tarjeta">${n}</p>`;
            }
        },
        handlers: {
            onCardClick: (e) => {
                if(e.target.className === 'tarjeta' ) {
                    if(confirm("[MENSAJE]: Desea Borrar este elemento ?")){
                        e.target.remove();
                    }
                }
            },
            onFormSubmit: (e) => {
                e.preventDefault();

                App.htmlElements.response.innerHTML = '';

                const n = App.htmlElements.input.value;
                App.utils.fibonacci(n).forEach(value => {
                    App.htmlElements.response.innerHTML += App.templates.card(value);
                });
                App.htmlElements.input.value="";
            },
            onReset:() => {
                window.location.reload();
            }
        }
    };
    App.init();
})(document.Utils);