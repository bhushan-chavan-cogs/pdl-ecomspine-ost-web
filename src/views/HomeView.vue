<template>
  <dash-board />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Components
// import HelloWorld from '../components/HelloWorld.vue'
import DashBoard from '../components/DashBoard/DashBoard.vue'

export default defineComponent({
  name: 'HomeView',

  components: {
    DashBoard
  }
})
</script>
