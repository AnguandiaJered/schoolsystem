<template>
  <div>
    <v-app>
      <v-main>
        <v-container fluid>

          <br />
          <v-layout row wrap>
            <v-flex x12 md4></v-flex>
            <v-flex x12 md4>
              <v-card class="elevation-12">

                <v-card-text>

                  <v-layout row wrap>
                    <v-flex x12 md2></v-flex>
                    <v-flex x12 md8>
                      <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        autocomplete="off"
                      >
                      <div
                          align="center"
                          style="cursor: pointer"
                          class="headline"
                        >
                          <br />
                          <img
                            style=""
                            src=""
                            alt=""
                            width="30%"
                          />
                        </div>
                        <br />
                        <v-text-field
                          v-model="svData.email"
                          outlined
                          append-icon="email"
                          :rules="[
                            (v) => !!v || 'Ce champ est requis',
                            (v) =>
                              /.+@.+\..+/.test(v) ||
                              'Doit être un email valide',
                          ]"
                          placeholder="E-mail"
                        ></v-text-field>
                        <v-text-field
                          placeholder="Password"
                          v-model="svData.password"
                          :type="show1 ? 'text' : 'password'"
                          outlined
                          :append-icon="show1 ? 'visibility' : 'visibility_off'"
                          :rules="[(v) => !!v || 'Ce champ est requis']"
                          @click:append="show1 = !show1"
                        ></v-text-field>

                        <v-checkbox
                          label="Mot de passe oublié?"
                        ></v-checkbox>

                        <v-btn
                          dark
                          color="primary"
                          block

                          ><v-icon>login</v-icon> Connexion</v-btn
                        >

                        <br />

                        Avez-vous un compte?
                        <a style="text-decoration: none">Créer un compte</a>

                        <br />
                        <br />
                      </v-form>
                    </v-flex>
                    <v-flex x12 md2></v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex x12 md4></v-flex>
          </v-layout>

        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      svData: {
        email: "",
        password: "",
      },
      valid: false,
      diaL: false,
      show1: false,
      titre: "Connexion et authentification au système",
    };
  },
  methods: {

  },
};
</script>
