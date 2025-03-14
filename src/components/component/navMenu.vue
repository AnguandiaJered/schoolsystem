<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <span style="cursor: pointer" v-bind="attrs" v-on="on">
          <!-- <v-chip link>
            <v-badge dot bottom color="green" offset-y="10" offset-x="10">
              <v-avatar size="60">
                <img :src="`${baseURL}/images/vue.png`" />
              </v-avatar>
            </v-badge>
            <span class="ml-3">Jane Smith</span>
          </v-chip> -->
        </span>
      </template>
      <v-list width="250" class="py-0">
        <v-list-item dense two-line>
          <v-list-item-avatar>
            <img src="#" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jered</v-list-item-title>
            <v-list-item-subtitle>
              jered@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item
          dense
          link
          v-for="(menu, i) in menus"
          :key="i"
          :to="menu.href"
        >
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ menu.title }}
          </v-list-item-title>
        </v-list-item>

        <v-list-item dense link href="#">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title> Déconnexion </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titre: "",
      menus: [
        {
          title: "Profile",
          icon: "mdi-account",
          href: "/profil",
        },
      ],
      hader: "",

    };
  },
  created() {

  },
  methods: {

  },
  filters: {
    subStr(value) {
      if (value.length > 20) {
        return value.slice(0, 20).toLowerCase();
      } else {
        return value;
      }
    },
    LowerCase(value) {
      return value.toLowerCase();
    },
  },
};
</script>
