<template>
  <v-layout>
      <v-flex md12>

          <!-- modal  -->


          <v-dialog v-model="dialog" max-width="500px" hide-overlay transition="dialog-bottom-transition">
              <v-card :loading="loading">
                  <v-form ref="form" lazy-validation>
                      <v-card-title>
                          {{ titleComponent }} <v-spacer></v-spacer>
                          <v-tooltip bottom color="black">
                              <template v-slot:activator="{ on, attrs }">
                                  <span v-bind="attrs" v-on="on">
                                      <v-btn @click="dialog = false" text fab depressed>
                                          <v-icon>mdi-close</v-icon>
                                      </v-btn>
                                  </span>
                              </template>
                              <span>Fermer</span>
                          </v-tooltip>
                      </v-card-title>
                      <v-card-text max-height="500px" background-color: white>
                          <v-flex>

                              <v-flex cols="12" md="6" xs="12" sm="12" lg="6">
                                  <div class="mr-1">
                                      <v-text-field label="Designation" prepend-inner-icon="draw" dense
                                          :rules="[(v) => !!v || 'Ce champ est requis']" outlined
                                          >
                                      </v-text-field>
                                  </div>
                              </v-flex>

                          </v-flex>
                      </v-card-text>
                      <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn depressed text @click="dialog = false"> Fermer </v-btn>
                          <v-btn color="primary" dark :loading="loading" @click="validate">
                              {{ edit ? "Modifier" : "Ajouter" }}
                          </v-btn>
                      </v-card-actions>
                  </v-form>
              </v-card>
          </v-dialog>
          <br /><br />
          <v-layout>
              <v-layout>

                   <v-flex md="12"></v-flex>

              </v-layout>

              <v-flex md12>
                  <!-- bande -->
                  <v-layout>
                      <v-flex md1>
                          <v-tooltip bottom>
                              <template v-slot:activator="{ on, attrs }">
                                  <span v-bind="attrs" v-on="on">
                                      <v-btn :loading="loading" fab @click="onPageChange">
                                          <v-icon>mdi-autorenew</v-icon>
                                      </v-btn>
                                  </span>
                              </template>
                              <span>Initialiser</span>
                          </v-tooltip>
                      </v-flex>
                      <v-spacer></v-spacer>
                      <v-text-field v-model="search" append-icon="mdi-magnify" label="Recherche..." single-line solo outlined
                        rounded hide-details></v-text-field>
                      <v-flex md="6"></v-flex>

                      <v-flex md1>
                          <v-tooltip bottom color="black">
                              <template v-slot:activator="{ on, attrs }">
                                  <span v-bind="attrs" v-on="on">
                                      <v-btn @click="showModal" fab color="primary">
                                          <v-icon>mdi-plus</v-icon>
                                      </v-btn>
                                  </span>
                              </template>
                              <span>Ajouter une opération</span>
                          </v-tooltip>
                      </v-flex>
                  </v-layout>
                  <!-- bande -->

                  <br />
                  <v-card>
                      <v-card-text>
                          <v-table class="elevation-1">
                              <template v-slot:default>
                                  <thead>
                                      <tr>
                                          <th class="text-left">Id</th>
                                          <th class="text-left">Designation</th>
                                          <th>Mise à jour</th>

                                          <th class="text-left">Action</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                          <td>
                                              <v-menu bottom rounded offset-y transition="scale-transition">
                                                  <template v-slot:activator="{ on }">
                                                      <v-btn icon v-on="on" small fab depressed text>
                                                        <v-icon>mdi-dots-vertical</v-icon>
                                                      </v-btn>
                                                  </template>

                                                  <v-list dense width="">

                                                      <v-list-item link click="#">
                                                          <v-list-item-icon>
                                                              <v-icon color="primary">mdi-pencil</v-icon>
                                                          </v-list-item-icon>
                                                          <v-list-item-title style="margin-left: -20px">Modifier
                                                          </v-list-item-title>
                                                      </v-list-item>

                                                      <v-list-item link click="#">
                                                          <v-list-item-icon>
                                                              <v-icon color="red">mdi-delete</v-icon>
                                                          </v-list-item-icon>
                                                          <v-list-item-title style="margin-left: -20px">Supprimer
                                                          </v-list-item-title>
                                                      </v-list-item>
                                                  </v-list>
                                              </v-menu>


                                          </td>
                                      </tr>
                                  </tbody>
                              </template>
                          </v-table>
                          <hr />

                          <v-pagination color="primary"
                              :total-visible="7" @input="onPageChange"></v-pagination>
                      </v-card-text>
                  </v-card>
                  <!-- les composants -->

                  <!-- fin des composants -->
              </v-flex>
          </v-layout>
      </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  components: {

  },
  data() {

      return {
          header: "crud operation",
          titleComponent: "",
          query: "",
          dialog: false,
          loading: false,
          disabled: false,
          edit: false,
          style: {
              height: "0px",
          },
          svData: {
              id: "",
          },
          stataData: {
              paysList: [],
              provinceList: [],
              villeList: [],
              communeList: [],
              quartierList: [],
              avenueList: [],


          },
          fetchData: null,
          titreModal: "",
          image: "",
          clientList: [],
          fonctionList: [],
          editor: ClassicEditor,
          editorConfig: {
              // The configuration of the editor.
              //  toolbar: [ 'bold', 'italic', '|', 'link' ]
          },
      };
  },

  computed: {
      ...mapGetters(["basicList", "paysList",
          "provinceList", "ListeEdition", "entrepriseList", "isloading"]),
  },
  methods: {
      ...mapActions(["getBasic", "getPays", "getCategorie",
          "getProvince", "getEntrepriseList", "getMyEntrepriseList"]),
      showModal() {
          this.dialog = true;
          this.titleComponent = "Enregistrement Année";
          this.edit = false;
          this.resetObj(this.svData);
      },

      testTitle() {
          if (this.edit == true) {
              this.titleComponent = "Modification Année";
              this.style.height = "0px";
          } else {
              this.titleComponent = "Paramètrage d'Année ";
              this.style.height = "0px";
          }
      },

      onPageChange() {
          //var connected = this.userData.id;

      },

      onImageChange(e) {
          this.image = e.target.files[0];
          let output = document.getElementById("output");
          output.src = URL.createObjectURL(e.target.files[0]);
          output.onload = function () {
              URL.revokeObjectURL(output.src);
              this.style.height = "240px"; // free memory
          };
      },

      validate() {

      },

      //les operation commence
      //fultrage de donnees

  },
  created() {
      this.onPageChange();
      this.testTitle();
  },
};
</script>

<style scoped>
.mb-2 {
  margin-top: 10px;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out
}
</style>
