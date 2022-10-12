<!--template>    
    <div class="card">
    <div class="card-container yellow-container">        
        <h1 class="block font-bold text-center p-4 border-round mb-3">Landing page</h1>
    </div>
  </div>
</template-->
<template>
	<!--Card>
    <template #header>        
    </template>
    <template #title>
        Advanced Card
    </template>
    <template #content></template>
    <template #footer></template>
  </Card-->

  <Card class="shadow-none bg-color">
    <template #title >
        <div class="p-card-title-new">User Management</div>
    </template>
    <template #content>
      <div class="">
        <Button label="Add Employee" class="mr-2 p-button-success  p-button-rounded green-btn" @click="addEmployee">Add Employee<i class="pi pi-plus" style="margin-left: 5px;"></i></Button>

        <span class="p-field text-float-right controls-1"><label for="" style="vertical-align: super;">Include Inactive</label><InputSwitch aria-label="Remember Me" style="margin-left: 7px;"/>
        <Button label="All Employee"  class="mr-2  p-button-rounded gray-btn1" style=" margin-left: 12px;">All Employee<i class="pi pi-filter" style="margin-left: 5px;" ></i></Button></span>

      </div>
    </template>
  </Card>
  <div class="card">
  <div class="card-container font-roboto" >
        <DataTable :value="customers" :paginator="true" :rows="10"
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" sortField="userId" :sortOrder="-1" ><!--filterDisplay="row" v-model:filters="filters2"-->

            <Column field="firstName" header="First Name" class="text-left w-14rem1 font-roboto" :sortable="true" >                
                    <!--template #body="{data}"> 
                        {{data.firstName}}
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="``"  v-tooltip.top.focus="'Hit enter key to filter First Name'"/>
                    </template-->

            </Column>
            <Column field="lastName" header="Last Name" class="text-left w-14rem1 font-roboto" :sortable="true">
                    <!--template #body="{data}">
                        {{data.lastName}}
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="``"  v-tooltip.top.focus="'Hit enter key to filter Last Name'"/>
                    </template-->
            </Column>
            <Column field="userId" header="Employee ID" class="text-left w-14rem1 font-roboto" :sortable="true">
                    <!--template #body="{data}">
                        {{data.userId}}
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="``"  v-tooltip.top.focus="'Hit enter key to filter Employee ID'"/>
                    </template-->
            </Column>
            <Column field="roleId" header="Role [Access Level]" class="text-left w-14rem1 font-roboto" :sortable="true">
                    <!--template #body="{data}">
                        {{data.roleId}}
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="``"  v-tooltip.top.focus="'Hit enter key to filter Role'"/>
                    </template-->
            </Column>
            <Column field="brand" header="Brand" class="text-left w-14rem1 font-roboto" :sortable="true">
                    <!--template #body="{data}">
                        {{data.brand}}
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="``"  v-tooltip.top.focus="'Hit enter key to filter Brand'"/>
                    </template-->
            </Column>
            <Column field="region" header="Region" class="text-left w-14rem1 font-roboto" :sortable="true">
                    <!--template #body="{data}">
                        {{data.brand}}
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="``"  v-tooltip.top.focus="'Hit enter key to filter Brand'"/>
                    </template-->
            </Column>

            <Column field="lastStoreUpdated" header="Store Access" class="text-left w-14rem1 font-roboto" :sortable="true">
                    <!--template #body="{data}">
                        {{data.lastStoreUpdated}}
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="``"  v-tooltip.top.focus="'Hit enter key to filter Last Store Update'"/>
                    </template-->
            </Column>
            
            <Column field="status" header="Status" class="text-left w-14rem1 font-roboto" :sortable="true">
                    <!--template #body="{data}">
                        {{data.status}}
                    </template>
                    <template #filter="{filterModel,filterCallback}">
                        <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="``"  v-tooltip.top.focus="'Hit enter key to filter Status'"/>
                    </template-->
            </Column>
            <!--template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" class="p-button-text" />
            </template-->
            <!--template #paginatorend>
                <Button type="button" icon="pi pi-cloud" class="p-button-text" />
            </template-->
        </DataTable>  
	</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, ref } from 'vue'
import Employee from '../../types/Employee'

import { useEmployeeStore } from '../../store/Employees'
import { EmployeeService } from '../../service/EmployeeService'


import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'     //optional for column grouping
import Row from 'primevue/row'                     //optional for row
import InputText from 'primevue/inputtext'                     //optional for InputText
import Card from 'primevue/card'
import Button from 'primevue/button'
import Tooltip from 'primevue/tooltip';
import InputSwitch from 'primevue/inputswitch'

import {FilterMatchMode,FilterOperator} from 'primevue/api'
//import {FilterMatchMode,FilterService} from 'primevue/api';
export default defineComponent({ 
  name: 'DashBoard',
  setup () {
    const EmployeeStore = useEmployeeStore()
    const getLoadFromStore = computed(() => EmployeeStore.getLoadFromStore)

    const setLoadFromStore = () => {
      EmployeeStore.setLoadFromStore()
    }
    const getEmployeeList = computed(() => EmployeeStore.getEmployeeList)
    const setEmployeeList = (empList as Employee[]) => {
      EmployeeStore.setEmployeeList(empList)
    }
    // ..return variables
    return { getLoadFromStore , getEmployeeList , setLoadFromStore , setEmployeeList}
  },
  data () {
    return {
      test: '',
      EmployeeService: null,
      customers: [] as Employee[],
      filters2: {
        firstName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        lastName: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        userId: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        roleId: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        lastStoreUpdated: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        status: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        brand: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
      }
    }
  },  
    created() {
      console.log('created function')
        this.EmployeeService = new EmployeeService();
    },
    mounted() {
      console.log('mounted function')
      console.log('this.getLoadFromStore=')
      console.log(this.getLoadFromStore)
        if( this.getLoadFromStore === false ){
            this.EmployeeService.getEmployees().then(data => {                    
                    this.customers = data
                    this.setEmployeeList(this.customers)
                    this.setLoadFromStore()
                    console.log('--------this.getLoadFromStore-----------------')
                    console.log(this.getLoadFromStore)
                    console.log('-test-------this.getEmployeeList-----------------')
                    console.log(this.getEmployeeList)
                });
        }
        else if( this.getLoadFromStore === true ){
            this.customers = this.getEmployeeList
            console.log('in else part this.customers=')
            console.log(this.getEmployeeList)
        }
        
    },
    methods: {
        addEmployee() {
            this.$router.push({ name: 'AddEmployeeView' })
        }
    },
    components: {
    	DataTable,
		Column,
		ColumnGroup,
    Row,
    InputText,
    Card,
    Button,
    Tooltip,
    InputSwitch
  	}
})
</script>
<style scoped>

.p-card22 {
    background-color: var(--surface-ground);
    color: #495057;
    box-shadow: 0 !important;
    /* box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%); */
    /* border-radius: 3px; */
}





</style>