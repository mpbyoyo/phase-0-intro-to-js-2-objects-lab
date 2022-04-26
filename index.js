// Write your solution in this file!
let employee = {
  name: "maxwell",
  streetAddress: "283 Street"
}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  const result = {...employee}
  result[key]=value
  return result
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value

  return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
  const result = {...employee}
  delete result[key]
  return result
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key]
  return employee
}