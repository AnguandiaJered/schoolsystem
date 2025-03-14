<template>
  <div>
    <v-sheet color="grey lighten-4" class="pa-4" id="navimg">
      <div class="text-center">
        <v-avatar class="mb-4" color="grey darken-1" size="64" transparent>
          <img src="#" />
        </v-avatar>

        <div>
          <h2 class="white--text">SHULE SYSTEM</h2>
        </div>
      </div>
    </v-sheet>

    <v-divider></v-divider>

    <v-list dense>
      <!-- mes menus -->

      <!-- test -->
      <v-list nav dense>
        <v-list-item-group color="primary">
          <v-list-item style="text-decoration: none" v-for="link in linkAdmin.links" :key="link.text" :to="link.href">
            <v-tooltip right color="black">
              <template v-slot:activator="{ on, attrs }">
                <v-list-item-icon v-bind="attrs" v-on="on">
                  <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-icon> <span v-bind="attrs" v-on="on">{{ link.text }}</span>
              </template>
              <span>{{ link.text }}</span>
            </v-tooltip>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <!-- fin -->

      <v-divider></v-divider>
      <v-list nav dense style="margin-bottom: -18px;">
        <v-list-group :value="false" no-action group>
          <template v-slot:activator>
            <v-list-item-title>GESTION ELEVES</v-list-item-title>
          </template>
        </v-list-group>

        <v-list-item-group>
          <v-list-item v-for="submenu in linkAdmin.listGroup1" :key="submenu.text" :to="submenu.href">
            <v-list-item-icon>
              <v-icon>{{ submenu.icon }}</v-icon>
            </v-list-item-icon> <span>{{ submenu.text }}</span>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group>
          <v-list-item v-for="submenu in linkAdmin.listGroup2" :key="submenu.text" :to="submenu.href">
            <v-list-item-icon>
              <v-icon>{{ submenu.icon }}</v-icon>
            </v-list-item-icon> <span>{{ submenu.text }}</span>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group>
          <v-list-item v-for="submenu in linkAdmin.listGroup3" :key="submenu.text" :to="submenu.href">
            <v-list-item-icon>
              <v-icon>{{ submenu.icon }}</v-icon>
            </v-list-item-icon> <span>{{ submenu.text }}</span>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group>
          <v-list-item v-for="submenu in linkAdmin.listGroup4" :key="submenu.text" :to="submenu.href">
            <v-list-item-icon>
              <v-icon>{{ submenu.icon }}</v-icon>
            </v-list-item-icon> <span>{{ submenu.text }}</span>
          </v-list-item>
        </v-list-item-group>

        <!-- <v-list-group v-for="list in linkAdmin.listGroup6" :key="list.id" :value="false" no-action group>
          <template v-slot:activator="{ props }">
            <v-list-item-icon>
              <v-icon>{{ list.icon }}</v-icon>
            </v-list-item-icon>
            <span v-bind="props">{{ list.text }}</span>
            <v-list-item-title v-bind="props">{{ list.text }}</v-list-item-title>
          </template>
          <v-list>
            <v-list-item v-for="submenu in list.items" :key="submenu.id" :to="submenu.href">
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                <span>{{ submenu.text }}</span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-group> -->

      </v-list><br>
      <v-divider></v-divider>

      <v-list nav dense style="margin-bottom: -18px;">
        <v-list-group :value="false" no-action group>
          <template v-slot:activator>
            <v-list-item-title>BIBLIOTHEQUES</v-list-item-title>
          </template>
        </v-list-group>

        <!-- <v-list-group style="text-decoration: none;">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-needle" title="Classe"></v-list-item>
          </template>

          <v-list-item  :value="title" :title="title" link></v-list-item>
        </v-list-group> -->

          <v-list-item-group>
            <v-list-item v-for="submenu in linkAdmin.listGroup5" :key="submenu.text" :to="submenu.href">
              <v-list-item-icon>
                <v-icon>{{ submenu.icon }}</v-icon>
              </v-list-item-icon> <span>{{ submenu.text }}</span>
            </v-list-item>
          </v-list-item-group>

          <v-list-item-group>
            <v-list-item v-for="submenu in linkAdmin.listGroup6" :key="submenu.text" :to="submenu.href">
              <v-list-item-icon>
                <v-icon>{{ submenu.icon }}</v-icon>
              </v-list-item-icon> <span>{{ submenu.text }}</span>
            </v-list-item>
          </v-list-item-group>
      </v-list><br>
      <v-divider></v-divider>

      <v-list nav dense style="margin-bottom: -18px;">
        <v-list-group :value="false" no-action group>
          <template v-slot:activator>
            <v-list-item-title>COMPTABILITES</v-list-item-title>
          </template>
        </v-list-group>

        <v-list-item-group>
          <v-list-item v-for="submenu in linkAdmin.listGroup7" :key="submenu.text" :to="submenu.href">
              <v-list-item-icon>
                <v-icon>{{ submenu.icon }}</v-icon>
              </v-list-item-icon> <span>{{ submenu.text }}</span>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group>
          <v-list-item v-for="submenu in linkAdmin.listGroup8" :key="submenu.text" :to="submenu.href">
              <v-list-item-icon>
                <v-icon>{{ submenu.icon }}</v-icon>
              </v-list-item-icon> <span>{{ submenu.text }}</span>
          </v-list-item>
        </v-list-item-group>

      </v-list><br>
      <v-divider></v-divider>

      <v-list nav dense style="margin-bottom: -18px;">
        <v-list-group :value="false" no-action group>
          <template v-slot:activator>
            <v-list-item-title>ECOLE</v-list-item-title>
          </template>
        </v-list-group>

        <v-list-item-group>
          <v-list-item v-for="submenu in linkAdmin.listGroup9" :key="submenu.text" :to="submenu.href">
              <v-list-item-icon>
                <v-icon>{{ submenu.icon }}</v-icon>
              </v-list-item-icon> <span>{{ submenu.text }}</span>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group>
          <v-list-item v-for="submenu in linkAdmin.listGroup10" :key="submenu.text" :to="submenu.href">
              <v-list-item-icon>
                <v-icon>{{ submenu.icon }}</v-icon>
              </v-list-item-icon> <span>{{ submenu.text }}</span>
          </v-list-item>
        </v-list-item-group>

      </v-list><br>
      <v-divider></v-divider>

      <v-list nav dense style="margin-bottom: -18px;">
        <v-list-group :value="false" no-action group>
          <template v-slot:activator>
            <v-list-item-title>PARAMETRES</v-list-item-title>
          </template>
        </v-list-group>

        <v-list-item-group>
          <v-list-item v-for="list in linkAdmin.links_systems" :key="list.text" :to="list.href">
              <v-list-item-icon>
                <v-icon>{{ list.icon }}</v-icon>
              </v-list-item-icon> <span>{{ list.text }}</span>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group>
          <v-list-item v-for="list in linkAdmin.links_operation" :key="list.text" :to="list.href">
              <v-list-item-icon>
                <v-icon>{{ list.icon }}</v-icon>
              </v-list-item-icon> <span>{{ list.text }}</span>
          </v-list-item>
        </v-list-item-group>
      </v-list><br>

      <!-- fin scripts 2 -->

      <v-divider></v-divider>

      <v-list-item style="text-decoration: none" href="#">
        <v-list-item-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Déconnexion</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- fin scripts -->
    </v-list>
  </div>
</template>

<script>
export default {
  props: ['linkAdmin'],
  data() {
    return {
      titre: "",
      menuList: []
    }

  },


}
</script>

<style scoped>
#navimg {
  background-image: url("./background1.jpg");
  width: 100%;
  height: 140px;
}
</style>
