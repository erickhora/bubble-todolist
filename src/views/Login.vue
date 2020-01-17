<template>
  <v-app id="login">
    <!-- splash screen -->
    <div class="login-splash" v-show="isActive" @click="isActive = !isActive"></div> 
    <v-form  v-model="valid">
      <v-container style="d-flex justify-center align-center">
        <v-row>
          <v-col cols="8" xs="4" class="login-box" v-if="!naoLogado">
            <v-card :elevation="10" class="login-box-form">
              <p class="text-center">Acesse com seu email</p>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                autofocus
              ></v-text-field>
              <div class="d-flex flex-row-reverse">
                <v-btn rounded small @click="naoLogado = !naoLogado">
                  <router-link to="/cadastro" class="link-cadastro"> Ir </router-link>
                </v-btn>
                 
              </div>
            </v-card>
          </v-col>

          <v-col cols="8" xs="4" class="login-box" v-else>
            <v-card :elevation="10" class="login-box-form">
              <p class="text-center">Entrar na conta</p>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                v-model="senha"
                :append-icon="mostrar ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="senhaRule"
                :type="mostrar ? 'text' : 'password'"
                name="senha"
                label="Senha"
                required
                @click:append="mostrar = !mostrar"
              ></v-text-field>
              <div class="d-flex flex-row-reverse">
                <v-btn rounded small @click="naoLogado = !naoLogado">Ir</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
/*  setTimeout(function() { console.log("setTimeout: Ja passou 1 segundo!");
                      this.isActive= false }, 5000);  */
export default {
  data: () => ({
    isActive:true,
    senha: '',
    naoLogado: false,
    emailRules: [
      v => !!v || 'Digite seu e-mail',
      v => /.+@+.+/.test(v) || 'E-mail deve ser válido'
    ],
    senhaRule: [
      v => !!v || 'Digite sua senha'
    ]
  
  })
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
    background-image: url('../assets/Celular_Android_–_12.svg');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .login-box {
    margin: 0 auto;
    margin-top: 50%;
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
  /* Splash screen */
 
 .login-splash{
  display:flex;
  position: absolute;
  background-image: url('../assets/splash.svg');
  background-position: center;
  width: 100%;
  height: 100%;
  background-color:white;
  z-index:1;
  animation-name: fade-out;
  animation-direction:normal;
  animation-duration: 2s;
  animation-iteration-count:initial;
  animation-fill-mode: forwards;

} 

 @keyframes fade-out {
  0%   { opacity: 1;}
  25%  { opacity: 1;}
  50%  { opacity: 1;}
  75%  { opacity: 1;}
  100% { opacity: 0;
         } 
}


</style>
