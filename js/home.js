let empPayrollList;
window.addEventListener('DOMContentLoaded',(event) => {
  empPayrollList = getEmployeePayrollDataFromStorage();
  // console.log(empPayrollList.length);
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
  localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
  return localStorage.getItem("EmployeePayrollList") ?
                      JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
  const headerHtml = ` 
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
  `;
  if(empPayrollList.length == 0) return;
  let innerHtml = `${headerHtml}`;
  for(const empPayrollData of empPayrollList)
  {
  innerHtml = `${innerHtml}
  <tr>
      <td>
      <img class="profile" alt="" src="${empPayrollData._profilePic}">
      </td>
      <td>${empPayrollData._name}</td>
      <td>${empPayrollData._gender}</td>
      <td>${getDeptHtml(empPayrollData._department)}</td>
      <td>${empPayrollData._salary}</td>
      <td>${stringifyDate(empPayrollData._startDate)}</td>
      <td>
      <img name="${empPayrollData._id}" onclick="removie(this)" alt="delete" 
              src="../assets/icons/delete-black-18dp.svg">
      <img name="${empPayrollData._id}" alt="edit" onclick="update(this)"
              src="../assets/icons/create-black-18dp.svg">
      </td>
  </tr>
  `;
  }
document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
let deptHtml = '';
for(const dept of deptList){
  deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
}
return deptHtml;
}

const createEmployeePayrollJSON = () => {
  let empPayrollListLocal = [
  {
    _name: 'Ashvini Kanojia',
    _gender: 'male',
    _department: [
      'Finance',
      'Engineer'
    ],
    _salary: '499999',
    _startDate: '14 May 2016',
    _note: 'Hi There',
    _id: new Date().getTime(),
    _profilePic: '../assets/profile-images/Ellipse -3.png'
  },
  {
    _name: 'Yashraj',
    _gender: 'female',
    _department: ['Others'],
    _salary: '299999',
    _startDate: '21 Feb 2020',
    _note: 'Hello',
    _id: new Date().getTime(),
    _profilePic: '../assets/profile-images/Ellipse -1.png'
  }
  ];
  return empPayrollListLocal;
}