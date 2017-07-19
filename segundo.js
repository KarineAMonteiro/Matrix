var obj = {
  email: "",
  nome: "",
  sexo: "",
  curso: "",
  endereco: "",
  complemento: "",
  cep: "",
  municipio: "",
  uf: ""
} //cria um objeto com todos os elementos do form

new Vue({
 el: "#form", 
 data: function(){
      return obj; //retorna para os inputs/selects os dados
  },
  created: function(){//toda vez que a pagina for executada ele irá executar
	  var formulario = JSON.parse(localStorage.getItem("inscritos"));
	  if(formulario){//verifica se o formulario está no LS, se tiver, faz isso
			  this.email = formulario.email;//para cada elemento do objeto, ele pega o que foi armazenado no LS e manda para o input ou select.
              this.nome = formulario.nome;
              this.sexo = formulario.sexo;
              this.curso = formulario.curso;
              this.endereco = formulario.endereco;
              this.complemento = formulario.complemento;
              this.cep = formulario.cep;
              this.municipio = formulario.municipio;
		}
  },
  methods: {
	 salvar: function (){					
				localStorage.setItem("inscritos", JSON.stringify(obj));
			
			}		
		}
});
