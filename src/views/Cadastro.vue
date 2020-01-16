<template>
<v-app id="cadastro">
  <form class="formulario">
   <v-card elevation="20">
  
    <p class="text-center pt-8 font-weight-bold title mb-0"> cadastrar ?</p>
    <div class="formulario-input">
    <v-text-field 
      v-model="email"
      :error-messages="emailErrors"
      label="e-mail"
      required
      filled
      autofocus
       color="#50435D"
       background-color="#EFEBEB"
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="nome"
      :error-messages="nomeErrors"
      label="nome completo"
      required
      filled
      color="#50435D"
      background-color="#EFEBEB"
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="usuário"
      :error-messages="usuarioErrors"
      label="usuário"
      required
      filled
      background-color="#EFEBEB"
       color="#50435D"
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="senha"
      :error-messages="senhaErrors"
      label="senha"
      required
      filled
      height="20"
      color="#50435D"
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    </div>
    <div class="botoes">
         <v-btn rounded x-small class="mb-5" @click="Cancelar">
             <router-link to="/" class="link-cadastro"> Voltar </router-link>
         </v-btn>
          
         <v-btn rounded x-small class="mb-5" @click="submit">Cadastrar</v-btn>
    </div>
   
  
   </v-card>
 </form>
 </v-app>
</template>



<script>
export default {
  data: () => ({})
};
</script>


<style scoped>
.formulario {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:20%;
  padding: 5px;
}

.formulario-input{
    margin:25px;
}

#cadastro{
    background-color: #50435D;
    background-image: url('../assets/Celular_Android_–_12.svg');
    background-size: cover;
    background-repeat: no-repeat;
}
.botoes{
    display: flex;
    justify-content: space-around;
}

.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #50435D;
    color:white;
  }

.link-cadastro{
  color:white;
  font-size: .75rem;
  text-decoration: none;
}
</style>
   