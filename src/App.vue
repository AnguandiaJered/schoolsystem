<template>
  <v-app id="inspire">
    <!-- navigation -->
    <v-navigation-drawer v-model="drawer" app>
      <!-- navigation -->
      <Navigation :linkAdmin="linkAdmin" />
      <!-- fin navigation -->
    </v-navigation-drawer>
    <!-- fin navigation -->

    <!-- appbar -->
    <v-app-bar app elevate-on-scroll elevation="3" color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-spacer />
      <v-col lg="6" cols="6" xs="6">
        <v-form>
          <v-text-field
            class="p-0 m-0 mt-6"
            full-width
            dense
            append-icon="mdi-magnify"
            outlined
            rounded
            placeholder="Search"
          />
        </v-form>
      </v-col>
      <v-spacer />

      <v-btn @click="changeTheme" small fab depressed class="mr-2">
        <v-icon>{{ themeIcon }}</v-icon>
      </v-btn>

      <!-- notification -->

      <!-- <Notification /> -->

      <!-- fin notification -->

      <!-- navMenu avatar -->
      <NavMenu />
      <!-- fin navMenu avatar -->

      <v-spacer></v-spacer>

      <v-menu bottom rounded offset-y transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">

            <v-tooltip bottom color="black">
              <template v-slot:activator="{ on, attrs }">

                <span v-bind="attrs" v-on="on">
                  <v-avatar size="48" color="rgb(183, 44, 44)">
                    <span class="white--text headline" style="text-transform: lowercase">
                      Jered
                    </span>
                  </v-avatar>
                </span>

              </template>
              <span>Mon comptes</span>
            </v-tooltip>

          </v-btn>
        </template>
        <v-card width="300">
          <v-card-text>
            <div style="text-align: center">
              <v-avatar size="60" color="rgb(183, 44, 44)">
                <span class="white--text headline">Jered</span>
              </v-avatar><br />
              <b style="text-transform: lowercase">Jered</b>
              <br />
              jered@gmail.com
              <br /><br />
              <v-divider></v-divider><br />
              <v-btn small outlined :href="`/logout`">
                <v-icon>exit_to_app</v-icon>
                déconnexion
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>

    </v-app-bar>
    <!-- fin apbar -->

    <v-main style="background: #f5f5f540">
      <v-container class="py-8 px-6" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/component/navigation.vue";
import NavMenu from "./components/component/navMenu.vue";
export default {
  name: "App",
  components: {
    Navigation,
    NavMenu,
  },
  data() {
    return {
      cards: ["Today", "Yesterday"],
      drawer: true,

      themeIcon: "dark_mode",
      lightBg: "background: rgb(246 248 250)",
      darkBg: "background:rgb(40, 42, 54)",

      linkAdmin: [],
    };
  },
  created() {
    this.testLink();
  },
  methods: {

    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      !this.$vuetify.theme.dark ? this.lightMode() : this.darkMode();
    },
    lightMode() {
      this.themeIcon = "dark_mode";
      this.$store.state.bgColor = this.lightBg;
    },
    darkMode() {
      this.themeIcon = "light_mode";
      this.$store.state.bgColor = this.darkBg;
    },
    testLink() {

        this.linkAdmin = {
          links: [
            {
              icon: "mdi-microsoft-windows",
              text: "Tableau de bord",
              href: "/admin/dashboard",
            }
          ],

          links_operation: [
            {
              icon: "mdi-school-outline",
              text: "Entreprise",
              href: "/admin/entreprise",
            },
          ],

          links_systems: [
            {
              icon: "mdi-account-settings-outline",
              text: "Utilisateurs",
              href: "/admin/utilisateurs",
            },
          ],

          listGroup1: [
            {
              icon: "mdi-account-school-outline",
              text: "Elèves",
              href: "/admin/eleve",
            }
          ],
          listGroup2: [
            {
              icon: "mdi-text-box-multiple-outline",
              text: "Inscription",
              href: "/admin/inscription",
            }
          ],
          listGroup3: [
            {
              icon: "mdi-account-check-outline",
              text: "Présence",
              href: "/admin/presence",
            }
          ],
          listGroup4: [
            {
              icon: "mdi-checkbox-marked-outline",
              text: "Cours & Cotation",
              href: "/admin/cours"
            }
          ],
          listGroup5: [
            {
              icon: "mdi-book-education-outline",
              text: "Livre",
              href: "/admin/livre",
            }
          ],
          listGroup6: [
            {
              icon: "mdi-book-outline",
              text: "Emprunt & Remise Livre",
              href: "/admin/empruntLivre",
            }
          ],
          listGroup7: [
            {
              icon: "mdi-cash-check",
              text: "Paiement",
              href: "/admin/paiement",
            }
          ],
          listGroup8: [
            {
              text: "Frais & Prévision",
              icon: "mdi-cash-100",
              href: "/admin/frais",
            }
          ],
          listGroup9: [
            {
              icon: "mdi-account-outline",
              text: "Personnels",
              href: "/admin/enseignant",
            }
          ],
          listGroup10: [
            {
              icon: "mdi-email-outline",
              text: "Communication",
              href: "/admin/communication",
            }
          ],



          admins: [
            ["Management", ""],
            ["Settings", ""],
          ],
        };
      }
    },
};
</script>


