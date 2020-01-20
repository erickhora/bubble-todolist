<template>
  <v-app id="home">
      <v-col class="col-xs-12">
        <v-container id="home-dia">
            <p class="text-center">HOJE</p>
        </v-container>
        <v-container id="home-tarefas">
            <v-list rounded>
                <v-list-item-group v-model="item" color="primary">
                    <v-dialog v-model="dialog">
                        <template v-slot:activator="{ on }">
                            <v-list-item v-for="(item, i) in items" :key="i" @click="enviarIndice(i)">
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
                                {{ items[item].title }}
                            </v-card-title>
                            <v-card-text>
                                {{ items[item].content }}
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
        <v-container class="purple">
            <p>LOREM IPSUM</p>
        </v-container>
      </v-col>
  </v-app>
</template>

<script>
export default {

 data: () => ({
        dialog: false,
        j: null,
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
        enviarIndice: (i) => {
            this.j = i;
        }
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
    }
    
</style>
