<template>
  <v-app id="home">
      <app-navbar/>
      <v-col class="col-xs-12">
          
        <v-container id="home-dia" class="pa-0">
            <p class="text-center ma-0">HOJE</p>
        </v-container>
        <v-container id="home-tarefas" class="pa-0">
            
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
                            <v-btn color="primary" text @click="dialog =false">Fechar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-list>
        </v-container>
        <v-container class="d-block text-center">
            <v-dialog v-model="dialog2">
                <template v-slot:activator="{ on }">
                    <v-btn class="mx-2" fab large v-on="on">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>Nova Tarefa</v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="addItem.titulo" :counter="20" label="Titulo"></v-text-field>
                            <v-textarea v-model="addItem.conteudo" :counter="120" label="Descrição" required></v-textarea>
                            <v-select v-model="addItem.categoria" :items="categorias" label="Selecione uma categoria"></v-select>
                        </v-form>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
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
        j: 0,
        addItem: {
            titulo: '',
            conteudo: '',
            categoria: '',
            icone: ''
        },
        item: 1,
        categorias: ['Comida', 'Saúde', 'Trabalho', 'Finanças', 'Amor', 'Lazer'],
        items: [
            {
                titulo: "Compras do dia",
                conteudo: "compŕar pão e queijo",
                icone: "mdi-food",
                categoria: "Comida"
            },
            {
                titulo: "Marcar consultas",
                conteudo: "marcar clinico geral e dentista",
                icone: "mdi-hospital",
                categoria: "Saúde"
            },
            {
                titulo: "Decisões no trabalho",
                conteudo: "definir quem deve ser demitido",
                icone: "mdi-briefcase",
                categoria: "Trabalho"
            },
            {
                titulo: "Metas financeiras",
                conteudo: "Conseguir um milhão em 1 min",
                icone: "mdi-cash",
                categoria: "Finanças"
            },
            {
                titulo: "Planos para a vida",
                conteudo: "Aprender hipnose para conseguir alguém",
                icone: "mdi-heart",
                categoria: "Amor"
            },
            {
                titulo: "Viagens",
                conteudo: "Planejar o próximo salto de paraquedas",
                icone: "mdi-balloon",
                categoria: "Lazer"
            }
        ]
    }),
    methods: {
        submit() {
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
