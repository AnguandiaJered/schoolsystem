<template>
  <div>
      <!-- composent -->
      <v-layout
          row
          wrap
          class="mt-0"
          >
          <!-- statistique -->
          <v-flex md3 lg3 xs12 class="mb-2">
              <v-container>
              <v-card
                  class="mx-auto"
                  outlined
                  tile
                  max-width="344"
              >
                  <!-- card commence -->

                  <v-list-item three-line router to="/admin/conf_remise">
                  <v-list-item-content>
                      <div class="text-overline mb-4">Elèves Inscrits</div>
                      <v-list-item-title class="text-h5 mb-1">
                         5
                      </v-list-item-title>
                      <v-list-item-subtitle>Dans le système</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="pink darken-1">
                      <v-icon size="60" color="white">devices</v-icon>
                  </v-list-item-avatar>

                  </v-list-item>
                  <!-- fin card -->
              </v-card>
              </v-container>
          </v-flex>

          <v-flex md3 lg3 xs12 class="mb-2">
              <v-container>
              <v-card
                  class="mx-auto"
                  :loading="loading"
                  
                  outlined
                  tile
                  max-width="344"
              >
                  <!-- card commence -->
                  <v-list-item three-line router to="/admin/agent">
                  <v-list-item-content>
                      <div class="text-overline mb-4">Classes</div>
                      <v-list-item-title class="text-h5 mb-1">
                       5
                      </v-list-item-title>
                      <v-list-item-subtitle
                      >Dans le système</v-list-item-subtitle
                      >
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="indigo">
                      <v-icon size="60" color="white">developer_board_off</v-icon>
                  </v-list-item-avatar>
                  </v-list-item>

                  <!-- fin card -->

              </v-card>
              </v-container>
          </v-flex>

          <v-flex md3 lg3 xs12 class="mb-2">
              <v-container>
              <v-card
                  class="mx-auto"
                  :loading="loading"
                  
                  outlined
                  tile
                  max-width="344"
              >
                  <!-- card commence -->
                  <v-list-item three-line router to="/admin/agent">
                  <v-list-item-content>
                      <div class="text-overline mb-4">Utilisateurs</div>
                      <v-list-item-title class="text-h5 mb-1">
                       5
                      </v-list-item-title>
                      <v-list-item-subtitle
                      >Dans le système</v-list-item-subtitle
                      >
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="indigo">
                      <v-icon size="60" color="white">developer_board_off</v-icon>
                  </v-list-item-avatar>
                  </v-list-item>

                  <!-- fin card -->

              </v-card>
              </v-container>
          </v-flex>

          <v-flex md3 lg3 xs12 class="mb-2">
              <v-container>
              <v-card
                  class="mx-auto"
                  :loading="loading"
                  
                  outlined
                  tile
                  max-width="344"
              >
                  <!-- card commence -->
                  <v-list-item three-line router to="/admin/agent">
                  <v-list-item-content>
                      <div class="text-overline mb-4">Consultations</div>
                      <v-list-item-title class="text-h5 mb-1">
                       5
                      </v-list-item-title>
                      <v-list-item-subtitle
                      >Dans le système</v-list-item-subtitle
                      >
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="indigo">
                      <v-icon size="60" color="white">developer_board_off</v-icon>
                  </v-list-item-avatar>
                  </v-list-item>

                  <!-- fin card -->

              </v-card>
              </v-container>
          </v-flex>

          <v-flex md3 lg3 xs12 class="mb-2">
              <v-container>
              <v-card
                  class="mx-auto"
                  :loading="loading"
                
                  outlined
                  tile
                  max-width="344"
              >
                  <!-- card commence -->
                  <v-list-item three-line @click="sheet = !sheet">
                  <v-list-item-content>
                      <div class="text-overline mb-4">Ordonances</div>
                      <v-list-item-title class="text-h5 mb-1">
                       5
                      </v-list-item-title>
                      <v-list-item-subtitle
                      >Dans le système </v-list-item-subtitle
                      >
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="success">
                      <v-icon size="60" color="white">real_estate_agent</v-icon>
                  </v-list-item-avatar>
                  </v-list-item>



                  <!-- fin card -->
              </v-card>
              </v-container>
          </v-flex>

           <v-flex md3 lg3 xs12 class="mb-2">
              <v-container>
              <v-card
                  class="mx-auto"
                  :loading="loading"
                 
                  outlined
                  tile
                  max-width="344"
              >
                  <!-- card commence -->
                  <v-list-item three-line @click.stop="showPDGNavigation()">
                  <v-list-item-content>
                      <div class="text-overline mb-4">Medecins</div>
                      <v-list-item-title class="text-h5 mb-1">
                      5
                      </v-list-item-title>
                      <v-list-item-subtitle
                      >Dans le système</v-list-item-subtitle
                      >
                  </v-list-item-content>

                  <v-list-item-avatar tile size="80" color="blue lighten-2">
                      <v-icon size="60" color="white">supervised_user_circle</v-icon>
                  </v-list-item-avatar>
                  </v-list-item>



                  <!-- fin card -->
              </v-card>
              </v-container>
          </v-flex>

          <!-- fin statistique -->
          </v-layout>



          <v-layout row wrap>
              <v-flex md6 xs12 sm12  lg6 class="mb-0">
                  <v-container>
                      

                  </v-container>
              </v-flex>

              <v-flex md6 xs12 sm12  lg6 class="mb-0">
                  <v-container>
                     
                  </v-container>
              </v-flex>

          </v-layout>

          <v-layout row wrap>
              <v-flex xs12 lg12 md12 sm12>

                  <div class="text-center">
                      <v-bottom-sheet
                      v-model="sheet"
                      persistent


                      >

                      <v-sheet
                          class="text-center"
                          height="350px"


                      >
                          <v-btn
                          class="mt-6"
                          text
                          color="error"
                          @click="sheet = !sheet"
                          >
                          Fermer
                          </v-btn>
                          <div class="py-3">



                          <v-layout row wrap>

                              <v-flex xs12 sm12 md5 lg5>
                                  <v-container class="ml-0">



                                  </v-container>
                              </v-flex>
                              <v-flex xs12 sm12 md5 lg5>
                                  <v-container class="ml-0">



                                  </v-container>
                              </v-flex>

                              <v-flex xs12 sm12 md2 lg2>

                              </v-flex>
                          </v-layout>


                          </div>
                      </v-sheet>
                      </v-bottom-sheet>
                  </div>

              </v-flex>
          </v-layout>




  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";





export default {
  components:{


  },
  data(){
      return{
          titre: "Statistique",
          team: [],
          query: "",
          dialog: false,
          loading: false,
          disabled: false,
          drawer:null,

          stateData:{

              titre:'',
              list:[],
              titre2:'',
              listSecteur:[],
              listEdition:[],
          },


          fav: false,

          svData: {
              NombreTotalUtilisateur: '',
              NombreMedecin:'',
              NombreMembre:'',
              NombreAdmin:'',

              NombreEntrepriseActif:'',
              NombreEntrepriseInactif:'',
              NombreOrdonance:'',
              NombreConsultation:"",
              NombreMaladeTotal:"",

          },

          sheet: false,

          picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
              .toISOString()
              .substr(0, 10),

          query: "",
          fetchData: null,



      }

  },

  computed: {
      ...mapGetters(["roleList","isloading"]),
  },
  methods: {

       ...mapActions([
          "getPays",
          "getProvince",
          "getUser2",
          "getFormejuridique",
          "getSecteurList"
      ]),

      showPDGNavigation()
      {
          this.drawer = !this.drawer;
      },

  },
  created() {

  },

}
</script>
<style scoped>
#views {
max-height: 470px;
overflow: scroll;
}
#views2 {
max-height: 250px;
overflow: scroll;
}


</style>
