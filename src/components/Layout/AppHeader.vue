<template>	
	<!--Menubar :model="items" class="bg-color"/-->
	<!--Menubar :model="items" class="bg-color">
		<template #start>
			Logo
		</template>
		<template #item="{item}">			
			<a class="p-menuitem-link" aria-haspopup="false" aria-expanded="false" role="menuitem" tabindex="0">
				<span class="p-menuitem-icon pi pi-fw pi-file"></span><span class="p-menuitem-text">{{item.label}}</span>
			</a>
		</template>
		<template #end>
			After
		</template>+
	</Menubar-->

	<Toolbar class="bg-color shadow-2 headerimg">
		<!--template #start>			
			<Button icon="pi pi-list" class="mr-2 p-button-raised p-button-rounded" />
		</template>

		<template #end>
			<Button icon="pi pi-search" class="mr-2 p-button-raised p-button-rounded" />
			<Button icon="pi pi-calendar" class="p-button-info mr-2 p-button-raised p-button-rounded" />
			<Button icon="pi pi-user" class="p-button-info p-button-raised p-button-rounded" />
		</template-->
	</Toolbar>
</template>

<script>
import { defineComponent, computed } from 'vue'
import Menubar from 'primevue/menubar'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'

export default defineComponent({
	data() {
        return {
            items: [
                {
					label:'File',
					icon:'pi pi-fw pi-file'
                },
                {
					label:'Edit',
					icon:'pi pi-fw pi-pencil'
                },
                {
					label:'Users',
					icon:'pi pi-fw pi-user'
                },
                {
					label:'Events',
					icon:'pi pi-fw pi-calendar'
                },
                {
					label:'Quit',
					icon:'pi pi-fw pi-power-off'
                }
            ]
        }
    },
    methods: {},
	computed: {},
	components: {
    	Menubar,
		Toolbar,
		Button
  	}
})
</script>
<style scoped>
.bg-color{
  background-color: var(--surface-card) !important;
}

.p-menuitem:first-child {
  color: red;
}

</style>