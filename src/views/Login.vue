<template>
  <v-app id="login">
    <v-form  v-model="valid" :lazy-validation="true">
      <v-container style="d-flex justify-center align-center">
        
          <v-col cols="12" xs="6" class="login-box" v-if="!emailExiste">
            <v-card :elevation="10" class="login-box-form">
              <p class="text-center">Acesse com seu email</p>
              <div v-if="!checandoEmail">
                <v-text-field
                  v-model="usuario.email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  autofocus
                  color="#50435D"
                ></v-text-field>
                <div class="d-flex flex-row-reverse">
                  <v-btn rounded small @click="checarEmail" class="link-cadastro" :disabled="!valid">
                    Ir
                  </v-btn>
                </div>
              </div>
              <div v-if="checandoEmail" class="text-center mt-5">
                <v-progress-circular
                  :size="70"
                  :width="6"
                  indeterminate
                  color="#50435D"
                ></v-progress-circular>
              </div>
            </v-card>
          </v-col>

          <v-col cols="8" xs="4" class="login-box" v-else>
            <v-card :elevation="10" class="login-box-form">
              <p class="text-center">Entrar na conta</p>
              <v-text-field
                v-model="usuario.email"
                :rules="emailRules"
                label="E-mail"
                required
                color="#50435D"
              ></v-text-field>
              <v-text-field
                v-model="usuario.senha"
                :append-icon="mostrar ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="senhaRule"
                :type="mostrar ? 'text' : 'password'"
                name="senha"
                label="Senha"
                required
                color="#50435D"
                @click:append="mostrar = !mostrar"
              ></v-text-field>
              <div class="d-flex flex-row-reverse">
                <v-btn rounded small @click="validarLogin" :disabled="!valid">Ir</v-btn>
              </div>
            </v-card>
          </v-col>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    mostrar: '',
    usuario: {
      senha: '',
      email:''
    },
    checandoEmail: false,
    valid:'',
    emailExiste: false,
    emailRules: [
      v => !!v || 'Digite seu E-mail',
      v => /.+@+.+/.test(v) || 'E-mail deve ser válido'
    ],
    senhaRule: [
      v => !!v || 'Digite sua senha'
    ]
  
  }),

  methods: {
    checarEmail () {
      this.checandoEmail = true
      this.$http.get('usuarios.json')
        .then(res => {
          let contadorExiste = 0
          Object.keys(res.data).forEach(id => {
            if (this.usuario.email == res.data[id].email) {
              contadorExiste++
            }
          })
          if (contadorExiste == 1) {
            this.checandoEmail = false
            this.emailExiste = true
          } else {
            console.log('Email nao encontrado')
            this.checandoEmail = false
            this.emailExiste = false
            this.$router.push('/cadastro')
          }
        })
        .catch( err => {
          console.log(`Email nao encontrado no banco. Erro: ${ err }`)
          this.checandoEmail = false
          this.naoLogado = false
        })
    },

    validarLogin () {
      this.$http.get('usuarios.json')
        .then(res => {
          Object.keys(res.data).forEach(id => {
            if (this.usuario.email == res.data[id].email) {
              if(this.usuario.senha == res.data[id].senha) {
                this.$emit('email', this.usuario.email)
                this.$router.push('/home/' + id)
              } else {
                console.log('Senha errada')
              }
            }
          }) 
        })
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Public+Sans:400,700&display=swap');

  

  * {
    font-family: 'Public Sans', sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
  }

  

  #login {
    background-color: #50435D;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .login-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 30vh;
  }

  .login-box-form {
    background-color: white;
    padding: 10px;
  }

  .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #50435D;
  }

  .theme--light.v-btn {
    color: white;
  }

  .link-cadastro{
    color:white;
    font-size: .75rem;
    text-decoration: none;
  }
</style>
