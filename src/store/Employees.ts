import { ref } from 'vue'
import { defineStore } from 'pinia'
import Employee from '../types/Employee'

export const useEmployeeStore = defineStore('Employees', {
  state: () => ({ loadFromStore: false, list : [] as Employee[] }),
  getters: {
    getLoadFromStore: (state) => state.loadFromStore,
    getEmployeeList: (state) => state.list
  },
  actions: {
    setLoadFromStore () {
      this.loadFromStore = !this.loadFromStore
    },
    setEmployeeList (empList : Employee[]) {
      this.list = empList
    }
  }
})
