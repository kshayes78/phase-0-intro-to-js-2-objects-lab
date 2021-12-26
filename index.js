const employee = {name:"P Sherman",
streetAddress:"42 Wallaby Way"};
//employee;


//function updateEmployeeWithKeyAndValue(employee, key, value) {
    //const newEmployee= {...employee};
//}
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployee= {...employee};
  newEmployee[key] = value;
  return newEmployee;

}
const key = updateEmployeeWithKeyAndValue();
 updateEmployeeWithKeyAndValue;

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee; 
 }

//function deleteFromEmployeeByKey(employee, key) {
  //delete employee[key]
//return employee; 
//}
//deleteFromEmployeeByKey();


//function deleteFromEmployeeByKey (employee, key) {
    //const deleteEmployee = {...employee};

    //delete employee[key];
    //return deleteEmployee;
//}

function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = {...employee};

    delete newEmployee[key];
    return newEmployee;


  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) 
  {
    delete employee[key];
    return employee;
  }

  

   
  
  
  

  


