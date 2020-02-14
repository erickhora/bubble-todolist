<template>
    <v-app id="meus-dados">
        <app-navbar :nome="usuario.nome"/>
        <p class="text-center" id="meus-dados-titulo">MEUS DADOS</p>
        <v-container>
            <v-card
                :elevation="9"
                height="30%"
                width="50%"
                id="dados"
            >
                <div id="dados-conteudo">
                    <p><b>Email:</b> {{ usuario.email }}</p>
                    <p><b>Nome:</b> {{ usuario.nome }}</p>
                    <p><b>Usuário:</b> {{ usuario.usuario }}</p>
                </div>
            </v-card>
        </v-container>

    </v-app>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
    components: {'app-navbar': Navbar},

    data: () => ({
        usuario: {
            email: '',
            nome: '',
            usuario: ''
        }
    }),

    created() {
        this.$http.get('usuarios/' + this.$route.params.id + '.json')
            .then(res => {
                let array = {}
                array = { ...res.data }
                this.usuario = {
                    email: array.email,
                    nome: array.nome,
                    usuario: array.usuario
                }
            })
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Public+Sans:400,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Amatic+SC&display=swap');
    
    #dados {
        margin: 0 auto;
        font-family: 'Public Sans', sans-serif;
    }

    #meus-dados-titulo {
        font-family: 'Amatic SC', cursive;
        color: black;
        font-size: 2.5rem;
    }

    #dados-conteudo {
        padding: 20px
    }
</style>