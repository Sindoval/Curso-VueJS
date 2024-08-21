new Vue({
	el: '#desafio',
	data: {
	classe1: 'destaque',
	perigo: true,
	classeDigit: '',
	classeDigit4:'',
	desafio4: '',
	cor: '',
	estilo5: {
		width: '100px',
		height: '100px',
	},
	width: '0',
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				const newClasse = this.classe1 === 'destaque' ? 'encolher' : 'destaque';
				this.classe1 = newClasse;
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador);
			}, 500)
		},
		setPerigo(e) {
			if(e.target.value === 'true') {
				this.perigo = true
		} else if (e.target.value === 'false'){
			this.perigo = false
		}
		}
	}
})
