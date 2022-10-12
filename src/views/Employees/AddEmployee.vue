<template>
  <add-employee />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Components
// import HelloWorld from '../components/HelloWorld.vue'
import AddEmployee from '../../components/DashBoard/AddEmployee.vue'

export default defineComponent({
  name: 'AddEmployeeView',

  components: {
    AddEmployee
  }
})
</script>
