<template>
<br>
<div class="grid"> 
  <Card class="shadow-none col-12 md:col-12 lg:col-12 sm:col-12 xl:col-12">
    <template #title>
      <div class="p-card-title-new-16px">Add Employee
      <Button label="ADD" icon="pi pi-arrow-circle-right" class="mr-2 p-button-success  p-button-rounded grey2-btn text-float-right" @click="saveEmployee"/>
      <Button label="Never Mind" class="mr-2 p-button-link link-btn-green text-float-right" @click="cancelSaveOperation"/>
      </div>
      
      
    </template>
    <template #content class="">

      <!---->
      <div class="formgrid grid">
        <div class="col-12 md:col-6 lg:col-6 sm:col-12 xl:col-6">
          <h4 class="p-card-title-new-14px">Employee Details</h4>
          <br>
          <!--div class="field col-12">
                  <label for="firstname6">Firstname</label>
                  <InputText type="text" v-model="Firstname" />
                  
          </div-->
          <div class="field col-12 p-fluid">                  
                  <span class="p-float-label">
                    <InputText id="FirstName" type="text" v-model="employee.firstName" class="border-radius-24 "  style="outline-style: none;box-shadow: none;border-color: transparent;"/>
                    <span class="text-red-400 col-12" v-if="v$.employee.firstName.$error"> {{ v$.employee.firstName.$errors[0].$message }} </span>
                    <label for="FirstName">First Name</label>
                  </span>
          </div><br>
          <div class="field col-12 p-fluid">                  
                  <span class="p-float-label">
                    <InputText id="LastName" type="text" v-model="employee.lastName" class="border-radius-24 "  style="outline-style: none;box-shadow: none;border-color: transparent;"/>
                    <span class="text-red-400 col-12" v-if="v$.employee.lastName.$error"> {{ v$.employee.lastName.$errors[0].$message }} </span>
                    <label for="LastName">Last Name</label>
                  </span>
          </div><br>
          <div class="field col-12 ">                  
                  <span class="p-float-label ">
                    <InputText id="EmployeeID" type="text" v-model="employee.userId"  class="border-radius-24 width-78 margin-right-10px " style="outline-style: none;box-shadow: none;border-color: transparent;"/>
                    
                    <label for="EmployeeID">Employee ID</label>                    

                    <Button label="Check ID" class="p-button-rounded black-btn width-20 vertical-align-middle" />
                    <span class="text-red-400 col-12" v-if="v$.employee.userId.$error"> {{ v$.employee.userId.$errors[0].$message }} </span>
                  </span>
                  
                  
          </div><br>
          <div class="field col-12 p-fluid">                  
                  <span class="p-float-label">
                    <Calendar  id="BirthDate" type="text" v-model="employee.dateOfBirth"  class="border-radius-24 " style="outline-style: none;box-shadow: none;border-color: transparent;"/>
                    <span class="text-red-400 col-12" v-if="v$.employee.dateOfBirth.$error"> {{ v$.employee.dateOfBirth.$errors[0].$message }} </span>
                    <label for="BirthDate">Birth Date ( mm/dd/yyyy)</label>
                  </span>
          </div><br>
          <div class="field col-12 p-fluid">                  
                  <span class="p-float-label">
                    <!--InputText id="Password" type="text" v-model="value" /-->
                    <Password v-model="employee.password" toggleMask  class="border-radius-24 " style="outline-style: none;box-shadow: none;border-color: transparent;"></Password>
                    <span class="text-red-400 col-12" v-if="v$.employee.password.$error"> {{ v$.employee.password.$errors[0].$message }} </span>
                    <label for="Password">Password</label>
                  </span>
          </div><br>
          <div class="field col-12 p-fluid">                  
                  <span class="p-float-label">
                    <!--InputText id="Role" type="text" v-model="value" /-->
                    <Dropdown v-model="employee.roleId" :options="roleIdList" optionLabel="name" placeholder=""  class="border-radius-24 "/>
                    <span class="text-red-400 col-12" v-if="v$.employee.roleId.$error"> {{ v$.employee.roleId.$errors[0].$message }} </span>
                    <label for="Role">Select Role</label>
                  </span>
          </div>
          <div class="field col-12 p-fluid">
            <h4 class="p-card-title-new-14px">Status : {{employeeStatus}}</h4>            
              <InputSwitch v-model="employee.status" @change="setEmployeeStatus()"/>
              <span class="text-red-400 col-12" v-if="v$.employee.status.$error"> {{ v$.employee.status.$errors[0].$message }} </span>
          </div>
        </div>  
        <div class="col-12 md:col-6 lg:col-6 sm:col-12 xl:col-6 align-content-center justify-content-center">
          <!--h4>Brands</h4><br-->
          <div class="field col-8 col-offset-2 p-fluid mt-4">                  
                  <!--span class="p-float-label"-->
                  <h4 class="p-card-title-new-14px">Brands</h4>
                  <Listbox v-model="selectedBrands" :options="brandList" :multiple="true" :filter="true" optionLabel="name" listStyle="max-height:120px"  filterPlaceholder="Search">
                      <template #option="slotProps">
                          <div class="country-item">
                              <!--img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" /-->
                              <!--<div @click="showRegionsList(slotProps.option.code)" >-->
                              <div class="">                                
                                  <span class="col ">
                                    <Checkbox name="canRead"  v-model="canRead[slotProps.option.code]" @change="canWriteOperation(slotProps.option.code)" :binary="true"/>
                                  </span> 
                                  <span @click="showRegionsList(slotProps.option.code)" class=" col">                                
                                    {{ slotProps.option.name }}
                                  </span>                                 
                                <span class="col float-right-new">
                                  <Checkbox name="canWrite" v-model="canWrite[slotProps.option.code]" @change="canWriteChildsOperation(slotProps.option.code)" :binary="true" class="text-right"/> Add / Edit
                                </span> 
                              </div>
                          </div>
                      </template>
                  </Listbox>
                  <!--/span-->
          </div><!--br-->

          <div class="field col-8 col-offset-2 p-fluid">                  
                  <!--span class="p-float-label"-->
                  <h4 class="p-card-title-new-14px">Regions</h4>
                  <Listbox v-model="selectedRegions" :options="regionList" :multiple="true" :filter="true" optionLabel="name" listStyle="max-height:120px"  filterPlaceholder="Search">
                      <template #option="slotProps">
                          <div class="country-item">
                              <!--img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" /-->
                              <!--div @click="showStoresList(slotProps.option.code)" >{{ slotProps.option.name }}</div-->
                              <div class="">
                                <span class="col">
                                  <Checkbox name="canRead"  v-model="canRead[slotProps.option.code]" @change="canWriteOperation(slotProps.option.code)" :binary="true"/>
                                </span> 
                                <span @click="showStoresList(slotProps.option.code)" class="col">                                
                                  {{ slotProps.option.name }}
                                </span> 
                                <span class="col float-right-new">
                                  <Checkbox name="canWrite" v-model="canWrite[slotProps.option.code]" @change="canWriteChildsOperation(slotProps.option.code)" :binary="true"/>Add / Edit 
                                </span> 
                              </div>

                          </div>
                      </template>
                  </Listbox>                    
          </div><!--br-->
          
          <div class="field col-8 col-offset-2 p-fluid">                  
                  <!--span class="p-float-label"-->
                  <h4 class="p-card-title-new-14px">Stores</h4>
                  <Listbox v-model="selectedStores" :options="storeList" :multiple="true" :filter="true" optionLabel="name" listStyle="max-height:150px"  filterPlaceholder="Search">
                      <template #option="slotProps">
                          <div class="country-item">
                              <!--img src="../../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" /-->
                              <!--div>{{ slotProps.option.name }}</div-->
                              <div class="">
                                <span class="col">
                                  <Checkbox name="canRead"  v-model="canRead[slotProps.option.code]" @change="canWriteOperation(slotProps.option.code)" :binary="true"/>
                                </span> 
                                <span @click="showStoresList(slotProps.option.code)" class="col">                                
                                  {{ slotProps.option.name }}
                                </span> 
                                <span class="col float-right-new">
                                  <Checkbox name="canWrite" v-model="canWrite[slotProps.option.code]"  :binary="true"/> Add / Edit 
                                </span> 
                              </div>
                          </div>
                      </template>
                  </Listbox>                    
          </div><!--br-->
        </div>
        
        <!--div class="col-12 md:col-4 md:col-offset-8 lg:col-4 lg:col-offset-8 sm:col-12 xl:col-4 xl:col-offset-8"><br><br>
        <Button label="Cancel" icon="pi pi-times-circle" class="mr-2 p-button-secondary  p-button-rounded grey-btn" @click="cancelSaveOperation"/>
        <Button label="Accept" icon="pi pi-arrow-circle-right" class="mr-2 p-button-success  p-button-rounded green-btn" @click="saveEmployee"/>
        </div-->
        
      </div><!--{{brandRegionStoreListObjs}}-->
      <!---->      
      <!---->
    </template>
  </Card><br>
	</div>
  <br>
</template>

<script lang='ts'>
import { defineComponent, computed, ref } from 'vue'
import Employee from '../../types/Employee'

import useValidate from '@vuelidate/core'
import { required,alpha } from '@vuelidate/validators'

import brandRegionStoreList from '../../assets/demo/data/listForCreateEmployee.json'

import { useEmployeeStore } from '../../store/Employees'
import { EmployeeService } from '../../service/EmployeeService'


import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'     //optional for column grouping
import Row from 'primevue/row'                     //optional for row
import InputText from 'primevue/inputtext'                     //optional for InputText
import Card from 'primevue/card'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Password from 'primevue/password'
import Dropdown from 'primevue/dropdown'
import InputSwitch from 'primevue/inputswitch'
import MultiSelect from 'primevue/multiselect'
import Listbox from 'primevue/listbox'
import Checkbox from 'primevue/checkbox'

export default defineComponent({ 
  name: 'AddEmployee',
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
      v$: useValidate(),
      test: '',
      birthDate: '',
      password: '',
      roleId: null,
      roleIdList: [
        {name: 'Corporate', code: 'corporate'},
        {name: 'Regional', code: 'regional'}
      ],
      status: true,
      brandRegionStoreListObjs: brandRegionStoreList,
      employeeStatus : 'Active',
      selectedCountries: null,
      countries: [
                { name: 'Australia', code: 'AU' },
                { name: 'Brazil', code: 'BR' },
                { name: 'China', code: 'CN' },
                { name: 'Egypt', code: 'EG' },
                { name: 'France', code: 'FR' },
                { name: 'Germany', code: 'DE' },
                { name: 'India', code: 'IN' },
                { name: 'Japan', code: 'JP' },
                { name: 'Spain', code: 'ES' },
                { name: 'United States', code: 'US' }
            ],
      selectedBrands: null,
      brandList: [],
      selectedRegions: null,
      regionList: [
                /*{ name: 'Region 1', code: 'Region 1' },
                { name: 'Region 2', code: 'Region 2' },
                { name: 'Region 3', code: 'Region 3' },
                { name: 'Region 4', code: 'Region 4' },
                { name: 'Region 5', code: 'Region 5' },
                { name: 'Region 6', code: 'Region 6' },*/
                
            ],
      selectedStores: null,
      storeList: [
                /*{ name: 'Store 1', code: 'Store 1' },
                { name: 'Store 2', code: 'Store 2' },
                { name: 'Store 3', code: 'Store 3' },
                { name: 'Store 4', code: 'Store 4' },
                { name: 'Store 5', code: 'Store 5' },
                { name: 'Store 6', code: 'Store 6' },*/
            ],
      canRead: [],
      canWrite: [],
      employee: ref<Employee>({ firstName : '', lastName : '', dateOfBirth : '', password : '', userId : '', roleId : '', number : '', 
        lastStoreNumberAccessed : '', lastStoreZoneIDAccessed : '', status : true,  brands: [], regions : [], stores : [] }),
      formValidationWarn: false,
      timeoutVal: 500
    }
  },  
    created() {},
    mounted() {
      console.log('mounted function add employee screen')      
      for (let i = 0; i < this.brandRegionStoreListObjs.length; i++) {
          console.log(this.brandRegionStoreListObjs[i].brandName)
          let tempBrandObj = {}
          tempBrandObj.name = this.brandRegionStoreListObjs[i].brandName
          tempBrandObj.code = this.brandRegionStoreListObjs[i].brandId
          tempBrandObj.write = this.brandRegionStoreListObjs[i].write
          tempBrandObj.read = this.brandRegionStoreListObjs[i].read          
          this.brandList.push(tempBrandObj)
          this.canRead[this.brandRegionStoreListObjs[i].brandId]=this.brandRegionStoreListObjs[i].read
          this.canWrite[this.brandRegionStoreListObjs[i].brandId]=this.brandRegionStoreListObjs[i].write
          console.log("this.canRead")
          console.log(this.canRead)
      }
      console.log(this.brandList)    
    },
    validations () {
      return {
        employee: {          
          firstName : { required,alpha }, 
          lastName : { required,alpha },
          dateOfBirth : { required },
          password : { required },
          userId : { required },
          roleId : { required },          
          status : { required }
        }
      }
    },
    methods: {
      cancelSaveOperation() {
        this.$router.push({ name: 'HomeView' })
      },
      saveEmployee() {

          console.log(this.v$.$validate())
          console.log(this.v$.$error)
          if (!this.v$.$error) {
            console.log('Form successfully submitted.')
            console.log('getEmployeeList=')
            console.log(this.getEmployeeList)
            this.employee.lastStoreUpdated = "357"
            this.employee.brand = "PAA"

            console.log('this.employee =')
            console.log(this.employee.roleId)
            if(this.employee.roleId){
              this.employee.roleId = this.employee.roleId.code
            }

            if(this.employee.status == true ){
              this.employee.status = 'Active'
            }
            else{
              this.employee.status = 'Inactive'
            }

            this.getEmployeeList.push(this.employee)
            //console.log('new value getEmployeeList=')
            //console.log(this.getEmployeeList)
            //this.getEmployeeList.reverse()
            this.setEmployeeList(this.getEmployeeList)            
            this.$router.push({ name: 'HomeView' })
          } else {
            this.formValidationWarn = true
            console.log('Form failed validation')
            setTimeout(() => {
              this.formValidationWarn = false
            }, 4000)
          }            
      },
      setEmployeeStatus() {
        if( this.employee.status === true ){
          this.employeeStatus= 'Active'
        }
        else{
          this.employeeStatus= 'Inactive'
        }
      },
      showRegionsList(brandId) {
        setTimeout(() => {
          console.log(brandId)
          console.log(this.selectedBrands)
          this.regionList = []
          for (let i = 0; i < this.brandRegionStoreListObjs.length; i++) {
            let brandIdExits = this.selectedBrands.find((brandObj) => {
              return brandObj.code === this.brandRegionStoreListObjs[i].brandId;
            });
            console.log('brandIdExits=')
            console.log(brandIdExits)
            if(brandIdExits){
              for (let j = 0; j < this.brandRegionStoreListObjs[i].regions.length; j++) {
                let tempRegionObj = {}
                tempRegionObj.name = this.brandRegionStoreListObjs[i].regions[j].regionName
                tempRegionObj.code = this.brandRegionStoreListObjs[i].regions[j].regionId
                tempRegionObj.write = this.brandRegionStoreListObjs[i].regions[j].write
                tempRegionObj.read = this.brandRegionStoreListObjs[i].regions[j].read
                this.regionList.push(tempRegionObj)
                
                this.canRead[this.brandRegionStoreListObjs[i].regions[j].regionId]=this.brandRegionStoreListObjs[i].regions[j].read
                this.canWrite[this.brandRegionStoreListObjs[i].regions[j].regionId]=this.brandRegionStoreListObjs[i].regions[j].write

              }
            }
          }
        }, this.timeoutVal)
      },
      showStoresList(regionId){
        setTimeout(() => {
          console.log(regionId)
          console.log(this.selectedRegions)
          this.storeList = []
          for (let i = 0; i < this.brandRegionStoreListObjs.length; i++) {
            let brandIdExits = this.selectedBrands.find((brandObj) => {
              return brandObj.code === this.brandRegionStoreListObjs[i].brandId;
            });
            //console.log('brandIdExits=')
            //console.log(brandIdExits)
            if(brandIdExits){
              for (let j = 0; j < this.brandRegionStoreListObjs[i].regions.length; j++) {
                let regionIdExits = this.selectedRegions.find((regionObj) => {
                  return regionObj.code === this.brandRegionStoreListObjs[i].regions[j].regionId;//this.brandRegionStoreListObjs[i].brandId;
                });
                if(regionIdExits){
                  for (let k = 0; k < this.brandRegionStoreListObjs[i].regions[j].stores.length; k++) {
                    let tempStoreObj = {}
                    tempStoreObj.name = this.brandRegionStoreListObjs[i].regions[j].stores[k].storeName
                    tempStoreObj.code = this.brandRegionStoreListObjs[i].regions[j].stores[k].recordId
                    tempStoreObj.write = this.brandRegionStoreListObjs[i].regions[j].stores[k].write
                    tempStoreObj.read = this.brandRegionStoreListObjs[i].regions[j].stores[k].read
                    this.storeList.push(tempStoreObj)

                    this.canRead[this.brandRegionStoreListObjs[i].regions[j].stores[k].recordId]=this.brandRegionStoreListObjs[i].regions[j].stores[k].read
                    this.canWrite[this.brandRegionStoreListObjs[i].regions[j].stores[k].recordId]=this.brandRegionStoreListObjs[i].regions[j].stores[k].write
                  }
                }                
              }
            }
          }

        }, this.timeoutVal)
      },
      canWriteOperation(canReadId){
        setTimeout(() => {
          console.log("canReadId=")
          console.log(canReadId)
          console.log( this.canRead[canReadId])
          this.canWrite[canReadId] = this.canRead[canReadId]

        }, this.timeoutVal)
      },
      canWriteChildsOperation(canWriteId){
        //Top to bottom approch 
        //If brand 'FreshDirect' s 'canWrite' checked/ unchecked
        //then all childs need to checked/ unchecked
        setTimeout(() => {
          for (let i = 0; i < this.brandRegionStoreListObjs.length; i++) {

              //tempBrandObj.code = this.brandRegionStoreListObjs[i].brandId
              //this.canWrite[this.brandRegionStoreListObjs[i].brandId]=this.brandRegionStoreListObjs[i].write
              let isBrandIdExits=false
              if( canWriteId == this.brandRegionStoreListObjs[i].brandId){
                //isBrandIdExits = this.brandRegionStoreListObjs[i].brandId
                this.brandRegionStoreListObjs[i].write = this.canWrite[canWriteId] /*update write's value in main array*/
                this.canWrite[this.brandRegionStoreListObjs[i].brandId] = this.canWrite[canWriteId] /*update write's value in canWrite array*/
                isBrandIdExits=true
              }

              for (let j = 0; j < this.brandRegionStoreListObjs[i].regions.length; j++) {

                let isRegionIdExits=false
                if ( isBrandIdExits == false ){
                  if( canWriteId == this.brandRegionStoreListObjs[i].regions[j].regionId ){
                    //isRegionIdExits = this.brandRegionStoreListObjs[i].regions[j].regionId
                    //this.brandRegionStoreListObjs[i].regions[j].write = this.canWrite[canWriteId] /*update write's value in main array*/
                    //this.canWrite[this.brandRegionStoreListObjs[i].regions[j].regionId] = this.canWrite[canWriteId] /*update write's value in canWrite array*/
                    isRegionIdExits=true
                  }
                }

                if( isBrandIdExits == true || isRegionIdExits == true ){
                  this.brandRegionStoreListObjs[i].regions[j].write = this.canWrite[canWriteId] /*update write's value in main array*/
                  this.canWrite[this.brandRegionStoreListObjs[i].regions[j].regionId] = this.canWrite[canWriteId] /*update write's value in canWrite array*/
                }
                  //tempRegionObj.code = this.brandRegionStoreListObjs[i].regions[j].regionId
                  //this.canWrite[this.brandRegionStoreListObjs[i].regions[j].regionId]=this.brandRegionStoreListObjs[i].regions[j].write

                  for (let k = 0; k < this.brandRegionStoreListObjs[i].regions[j].stores.length; k++) {                    
                    if( isBrandIdExits == true || isRegionIdExits == true ){
                      this.brandRegionStoreListObjs[i].regions[j].stores[k].write = this.canWrite[canWriteId] /*update write's value in main array*/
                      this.canWrite[this.brandRegionStoreListObjs[i].regions[j].stores[k].recordId] = this.canWrite[canWriteId] /*update write's value in canWrite array*/
                    }
                    //tempStoreObj.code = this.brandRegionStoreListObjs[i].regions[j].stores[k].recordId
                    //tempStoreObj.write = this.brandRegionStoreListObjs[i].regions[j].stores[k].write
                    //this.canWrite[this.brandRegionStoreListObjs[i].regions[j].stores[k].recordId]=this.brandRegionStoreListObjs[i].regions[j].stores[k].write
                  }                
              }
          }
        }, this.timeoutVal)
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
    Calendar,
    Password,
    Dropdown,
    InputSwitch,
    MultiSelect,
    Listbox,
    Checkbox
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

.float-right-new{
  float: right;
}

</style>