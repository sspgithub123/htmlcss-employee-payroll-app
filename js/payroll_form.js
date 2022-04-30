window.addEventListener('DOMContentLoaded', (event) =>{
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
       if(name.value.length == 0){
           textError.textContent = "";
           return;
       } 
       try{
           (new EmployeePayRollData()).name = name.value;
           textError.textContent = "";
       }catch(e){
           textError.textContent = e;
       }
    });
    
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input',function () {
        output.textContent = salary.value; 
    });
    
    });
    
    
    const save = () => {
        let employeePayrollData;
        try{
            employeePayrollData = createEmployeePayroll();
        }catch(e){
            return;
        }
    }
    
    const createEmployeePayroll = () => {
        let employeePayrollData = new EmployeePayRollData();
        employeePayrollData.name = getInputValueById('#name');
        employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
        employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
        employeePayrollData.department = getSelectedValues('[name=department]');
        employeePayrollData.salary = getInputValueById('#salary');
        employeePayrollData.note = getInputValueById('#notes');
        let year = getInputValueById('#year');
        let month = parseInt(getInputValueById('#month'))-1;
        let day = getInputValueById('#day');
        employeePayrollData.startDate = new Date(year,month,day);
        alert(employeePayrollData.toString());
        return employeePayrollData;
    }
    
    const getInputValueById = (id) => {
        let value = document.querySelector(id).value;
        return value;
    }
    
    const getSelectedValues = (propertyValue) => {
        let allItems = document.querySelectorAll(propertyValue);
        let selItems = [];
        allItems.forEach(item => {
            if(item.checked)
            selItems.push(item.value);
        });
        return selItems;
    }