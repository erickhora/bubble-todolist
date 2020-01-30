<template>
  <v-app id="cadastro">
    <v-form class="formulario" ref="form" v-model="valid" lazy-validation>
      <v-card elevation="20">
        <p class="text-center pt-8 font-weight-bold title mb-0">cadastrar ?</p>
        <div class="formulario-input">
          <v-text-field
            v-model="usuario.email"
            :rules="emailRules"
            label="e-mail"
            required
            autofocus
            color="#50435D"
            background-color="#EFEBEB"
          ></v-text-field>
          <v-text-field
            v-model="usuario.nome"
            :rules="nomeRules"
            label="nome completo"
            required
            color="#50435D"
            background-color="#EFEBEB"
          ></v-text-field>
          <v-text-field
            v-model="usuario.usuario"
            label="usuário"
            :rules="usuarioRules"
            required
            background-color="#EFEBEB"
            color="#50435D"
          ></v-text-field>
          <v-text-field
            v-model="usuario.senha"
            :rules="senhaRules"
            label="senha"
            required
            background-color="#EFEBEB"
            :type="mostrarSenha ? 'text' : 'password'"
            color="#50435D"
            @click:append="mostrarSenha = !mostrarSenha"
            :append-icon="mostrarSenha ? 'mdi-eye' : 'mdi-eye-off'"
          ></v-text-field>
        </div>
        <div class="botoes">
          <v-btn rounded x-small class="mb-5">
            <router-link to="/" class="link-cadastro">Voltar</router-link>
          </v-btn>

          <!-- adicionar a classe link-cadastro quando adicionar o router-link -->
          <v-btn rounded x-small class="mb-5 link-cadastro" @click="cadastrar">Cadastrar</v-btn>
        </div>
      </v-card>
    </v-form>
  </v-app>
</template>


<script>
export default {
  data: () => ({
    valid: true,
    mostrarSenha: false,
    usuario: {
      nome: '',
      senha: '',
      usuario: '',
      email: ''
    },
    nomeRules: [v => !!v || 'Campo Obrigatório'],
    emailRules: [
      v => !!v || 'Digite seu e-mail',
      v => /.+@+.+/.test(v) || 'E-mail deve ser válido'
    ],
    usuarioRules: [v => !!v || 'Campo Obrigatório'],
    senhaRules: [
      v => !!v || 'Campo Obrigatório',
      v => (v && v.length >= 4) || 'A senha deve ter mais de 3 caracteres'
    ]
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    cadastrar() {
      this.$http.post('usuarios.json', this.usuario)
        // eslint-disable-next-line no-unused-vars
        .then(res => {
          this.usuario = {}
          console.log(res)
        })
    }
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Public+Sans:400,700&display=swap");

* {
  font-family: "Public Sans", sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
}

.formulario {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
  padding: 5px;
}

.formulario-input {
  margin: 25px;
}

#cadastro {
  background-color: #50435d;
  background-image: url("../assets/Celular_Android_–_12.svg");
  background-size: cover;
  background-repeat: no-repeat;
}
.botoes {
  display: flex;
  justify-content: space-around;
}

.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: #50435d;
  color: white;
}

.link-cadastro {
  color: white;
  font-size: 0.75rem;
  text-decoration: none;
}
</style>
   