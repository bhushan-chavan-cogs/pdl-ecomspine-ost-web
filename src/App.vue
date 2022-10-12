<template>
  <div class="grid grid-nogutter">
    <div class="col-12 md:col-12 lg:col-12 sm:col-12 xl:col-12">
      <AppHeader/>
      <div class="col-10 col-offset-1 md:col-10 lg:col-10 sm:col-10 xl:col-10">
        <router-view></router-view>
      </div>
      <AppFooter/>
    </div>
  </div>  
</template>

<script  lang="ts">
//setup
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import { defineComponent, computed } from 'vue'
import AppHeader from './components/Layout/AppHeader.vue'
import AppFooter from './components/Layout/AppFooter.vue'



export default defineComponent({
  name: 'App',
  setup () {},
  data () {
    return {}
  },
  computed: {},
  components: {
    AppHeader,
    AppFooter
  }
})
</script>

<style ></style>
<style>

@font-face {  font-family: "Roboto Slab";  src: local("Roboto_Slab"),   url("./assets/fonts/Roboto_Slab/static/RobotoSlab-Regular.ttf") format("truetype");}

@font-face {  font-family: "Roboto";  src: local("Roboto"),   url("./assets/fonts/Roboto/Roboto-Regular.ttf") format("truetype");}
</style>
