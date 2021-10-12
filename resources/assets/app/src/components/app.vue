<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>

        <v-list>
        <v-list-item
          v-for="[icon, text, url] in links"
          :key="icon"
          :href="url"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Hello {{name()}}</v-toolbar-title>
    </v-app-bar>

    <v-main>
        <router-view></router-view>
    </v-main>
  </v-app>
</template>


<script>
export default {
    data() {
        return {
            drawer: null,
            links: [
                ['mdi-home', 'Home','#/home'],
                ['mdi-account', 'Account','#/account'],
                ['', 'Workers','#/workers']
            ],
        }
    },

    methods: {
        name() {
            return '' //this.$store.getters.a.userFirstname;
        }
    }
}
</script>