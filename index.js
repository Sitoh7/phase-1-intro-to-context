// Your code here


const createEmployeeRecord = ([firstName,familyName,title,payRate]) =>{
    const employeeRecord =
    {
         firstName:firstName,
         familyName:familyName,
         title:title,
         payPerHour:payRate,
         timeInEvents:[],
         timeOutEvents:[]
     }
     return employeeRecord
 }

 function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
  }

  function createTimeInEvent(record, dateStamp) {
    const [date, time] = dateStamp.split(" ");
    const hour = parseInt(time, 10);
  
    record.timeInEvents.push({
      type: "TimeIn",
      date,
      hour,
    });
  
    return record;
  }
  
  function createTimeOutEvent(record, dateStamp) {
    const [date, time] = dateStamp.split(" ");
    const hour = parseInt(time, 10);
  
    record.timeOutEvents.push({
      type: "TimeOut",
      date,
      hour,
    });
  
    return record;
  }
  
  function hoursWorkedOnDate(employeeObject,date){
    const timeOut = employeeObject.timeOutEvents[0].hour
  const timeIn =employeeObject.timeInEvents[0].hour
  return (timeOut - timeIn)/100
  
}

function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const payEarned = hoursWorked * employeeRecord.payPerHour;
    return payEarned;
  }
  
  function allWagesFor(employee){
    let daysWorked = employee.timeInEvents.map(e => e.date);
    let daysPaid = daysWorked.reduce((accum, element) => accum + wagesEarnedOnDate(employee, element), 0)
    return daysPaid;
};
  
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => {
      return totalPayroll + allWagesFor(employee);
    }, 0);
  }