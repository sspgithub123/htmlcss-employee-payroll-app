window.addEventListener('DOMContentLoaded',(event) => {
  createInnerHtml();
  });
  
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
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList)
    {
    innerHtml = `${innerHtml}
    <tr>
        <td>
        <img class="profile" alt="" src="${empPayrollData._profilePic}">
        </td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td><div class="dept-label">${getDeptHtml(empPayrollData._department)}</div></td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
        <img id="${empPayrollData._id}" src="../assets/icon/delete-black-18dp.svg" alt="delete" onclick="remove(this)">
        <img id="${empPayrollData._id}" src="../assets/icon/create-black-18dp.svg" alt="edit" onclick="update(this)">
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
      _name: 'Shubham Pawar',
      _gender: 'male',
      _department: [
        'HR',
        'Engineer'
      ],
      _salary: '395000',
      _startDate: '5 Feb 2018',
      _note: 'Hi Shubham',
      _id: new Date().getTime(),
      _profilePic: '../assets/profile-images/Ellipse -3.png'
    },
    {
      _name: 'Nisha Pawar',
      _gender: 'female',
      _department: ['Engineer'],
      _salary: '400000',
      _startDate: '2 Mar 2020',
      _note: 'Hello',
      _id: new Date().getTime(),
      _profilePic: '../assets/profile-images/Ellipse -7.png'
    }
    ];
    return empPayrollListLocal;
  }