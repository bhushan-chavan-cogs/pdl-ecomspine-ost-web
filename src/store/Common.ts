import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCommonStore = defineStore('counter', {
  state: () => ({ showSideBar: false, brand: 'FoodLion', brandLogo: '', count: 0 }),
  getters: {
    getSidebarVal: (state) => state.showSideBar,
    getBrandVal: (state) => state.brand
  },
  actions: {
    setSidebarVal () {
      this.showSideBar = !this.showSideBar
    },
    setBrandVal (brandName: string) {
      this.brand = brandName
      this.brandLogo = brandName
    }
  }
})
