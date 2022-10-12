export default interface Employee {
 firstName : string,
 lastName : string,
 dateOfBirth : Date,
 password : string, 
 userId : string,
 roleId : string,
 number : string,
 lastStoreNumberAccessed : string,
 lastStoreZoneIDAccessed : string,
 status : string,
 brands: [
    {
      brandId : string,
      brandName : string,
      write : string
    }
  ],
  regions : [
    {
      regionId : string,
      brandId : string,
      storeIds : [],
      write : string
    }
  ],
  stores : []
}
