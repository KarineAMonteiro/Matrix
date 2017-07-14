 new Vue({
 el:'#form', 
 data: function (){
 return {
	 selected: [
 {text:"nome", value:"1"},
 {text:,"e-mail", value:"2"},
 {text:,"sexo", value:"3"}
 {text:,"curso", value:"4"}
 {text:,"correspondencia", value:"5"}
 {text:,"complemento", value:"6"}
 {text:,"cep", value:"7"}
 {text:,"municipio", value:"8"}
 {text:,"uf", value:"9"}
 
 ]};
 },
 
 methods:{
	 
	 salvar: function (){					
				localStorage.setItem("cadastro", this.resultado);					
				}				
			},
			created: function() {				
				var valorResultado = localStorage.getItem("cadastro");
					if(valorResultado){
						this.resultado = valorResultado;
					}
			}
		});
	</script>
</body>
</html>

 