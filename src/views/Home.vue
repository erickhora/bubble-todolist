<template>
  <v-app id="home">
      <v-col class="col-xs-12">
        <v-container id="home-dia">
            <p class="text-center">HOJE</p>
        </v-container>
        <v-container id="home-tarefas">
            <v-list rounded>
                <v-list-item-group v-model="item" color="primary">
                    <v-dialog v-model="dialog" persistent>
                        <template v-slot:activator="{ on }">
                            <v-list-item v-for="(item, i) in items" :key="i" @click="j = i">
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content> 
                                    <v-list-item-title v-text="item.title" v-on="on"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                        <v-card v-model="items">
                            <v-card-title>
                                {{ items[j].title }}
                            </v-card-title>
                            <v-card-text>
                                {{ items[j].content }}
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" text @click="dialog =false">Fechar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-list-item-group>
            </v-list>
        </v-container>
        <v-container class="d-block text-center">
            <v-dialog v-model="dialog2">
                <template v-slot:activator="{ on }">
                    <v-btn class="mx-2" fab dark large color="purple" v-on="on">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>Nova Tarefa</v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="title" :counter="20" label="Titulo"></v-text-field>
                            <v-textarea v-model="content" :counter="120" label="Descrição" required></v-textarea>
                        </v-form>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="purple" submit @click="dialog2 = false">Salvar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
      </v-col>
  </v-app>
</template>

<script>
export default {

 data: () => ({
        dialog: false,
        dialog2: false,
        j: 0,
        title: '',
        content: '',
        item: 1,
        items: [
            {
                title: "Comida",
                content: "compŕar pão e queijo",
                icon: "mdi-food"
            },
            {
                title: "Saúde",
                content: "marcar clinico geral e dentista",
                icon: "mdi-hospital"
            },
            {
                title: "Trabalho",
                content: "definir quem deve ser demitido",
                icon: "mdi-briefcase"
            },
            {
                title: "Finanças",
                content: "Conseguir um milhão em 1 min",
                icon: "mdi-cash"
            },
            {
                title: "Amor",
                content: "Aprender hipnose para conseguir alguém",
                icon: "mdi-heart"
            },
            {
                title: "Lazer",
                content: "Planejar o próximo salto de paraquedas",
                icon: "mdi-balloon"
            },
        ],
    }),

    methods: {
        // enviarIndice: (i) => {
        //     this.j = i;
        // }
    },
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
    
</style>
