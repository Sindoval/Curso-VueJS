new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        buttonClick() {
            alert('Clicou no botão')
        },
        alert(e) {
            this.valor = e.target.value
        }
    }
})