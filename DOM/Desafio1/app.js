new Vue({
    el: '#desafio',
    data: {
        nome: 'Sindoval',
        idade: '25',
        imagem: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg'
    },
    methods: {
        randomNumber() {
            const random = Math.random();
            return random
        }
    }
})