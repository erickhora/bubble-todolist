<template>
  <v-app id="home">
      <app-navbar/>
      <v-col class="col-xs-12 home-body">
          
        <v-container id="home-dia" class="pa-0">
            <p class="text-center ma-0">HOJE</p>
        </v-container>

        <v-container id="home-semTarefas" v-if="items.length == 0" class="mt-5 mb-5 text-center">
            <h3>Você não tem nenhuma tarefa hoje!</h3>
            <v-icon size="5rem" class="d-block">mdi-emoticon-happy-outline</v-icon>
            <h4 class="mt-5">Crie uma nova tarefa abaixo!</h4>
        </v-container>

        <v-container id="home-tarefas" class="pa-0" v-else>
            <v-list rounded>
                <v-dialog v-model="dialog" persistent>
                    <template v-slot:activator="{ on }">
                        <v-list-item-group v-model="item" color="primary">
                            <v-list-item v-for="(item, i) in itemsAtualizados" :key="i" @click="j = i" v-on="on">
                                <v-list-item-icon>
                                    <v-icon v-text="item.icone"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content> 
                                    <v-list-item-title v-text="item.titulo"> </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </template>
                    <v-card v-model="itemsAtualizados">
                        <v-card-title>
                            {{ itemsAtualizados[j].titulo }}
                        </v-card-title>
                        <v-card-text>
                            {{ itemsAtualizados[j].conteudo }}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="danger" text @click="dialog = false">Excluir</v-btn>
                            <v-btn color="primary" text @click="dialog =false">Fechar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-list>
        </v-container>
        <v-container class="d-block text-center">
            <v-dialog v-model="dialog2" persistent>
                <template v-slot:activator="{ on }">
                    <v-btn class="mx-2" fab large v-on="on">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>Nova Tarefa</v-card-title>
                    <v-card-text>
                        <v-form v-model="valid">
                            <v-text-field v-model="addItem.titulo" :rules="tituloRules" :counter="20" label="Titulo" required></v-text-field>
                            <v-textarea v-model="addItem.conteudo" :rules="conteudoRules" :counter="120" label="Descrição" required></v-textarea>
                            <v-select v-model="addItem.categoria" :rules="categoriaRules" :items="categorias" label="Selecione uma categoria" required></v-select>
                        </v-form>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="danger" @click="dialog2 = false">Cancelar</v-btn>
                        <v-btn submit @click="dialog2 = false; submit()">Salvar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
      </v-col>
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
    components: {'app-navbar': Navbar},

    data: () => ({
        dialog: false,
        dialog2: false,
        usuario: {
            nome: '',
            tarefas: []
        },
        valid: '',
        icone: "mdi-emoticon-happy-outline",
        j: 0,
        tituloRules: [
            v => !!v || 'Digite um título para a tarefa'
        ],
        conteudoRules: [
            v => !!v || 'Digite um conteúdo para a tarefa'
        ],
        categoriaRules: [
            v => !!v || 'Escolha uma categoria para a tarefa'
        ],
        addItem: {
            titulo: '',
            conteudo: '',
            categoria: '',
            icone: ''
        },
        item: 1,
        categorias: ['Comida', 'Saúde', 'Trabalho', 'Finanças', 'Lazer'],
        items: []
    }),

    methods: {
        submit() {
            switch(this.addItem.categoria) {
                case 'Comida':
                    this.addItem.icone = 'mdi-food'
                    break
                case 'Saúde':
                    this.addItem.icone = 'mdi-hospital'
                    break
                case 'Trabalho':
                    this.addItem.icone = 'mdi-briefcase'
                    break     
                case 'Finanças':
                    this.addItem.icone = 'mdi-cash'
                    break
                case 'Lazer':
                    this.addItem.icone = 'mdi-balloon'
                    break            
            }
            this.items.push(this.addItem);
            this.addItem = {
                titulo: '',
                conteudo: '',
                categoria: '',
                icone: ''
            }
        }
    },

    computed: {
        itemsAtualizados(){
            return this.items;
        }
    },

    created () {
        this.$http.get('usuarios/' + this.$route.params.id)
            .then(res => {
                console.log(res)
            })    
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Public+Sans:400,700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Amatic+SC&display=swap');

    #home-dia {
        font-family: 'Amatic SC', cursive;
        color: black;
        font-size: 3rem;
    }

    #home-semTarefas {
        font-family: 'Amatic SC', cursive;
        color: black;
        letter-spacing: 3px;
    }

    #home-tarefas {
        font-family: 'Public Sans', sans-serif;
        font-weight: bold;
        /* text-align: center; */
        color: #A09E9E;
    }

    .theme--light.v-list {
        background: #fafafa;
    }

    .v-list--rounded {
        padding: 0;
    }
    
    .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
        background-color: #50435D;
        color:white;
    }
</style>
