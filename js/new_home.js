window.addEventListener('DOMContentLoaded', (event) => {
  createInnerHtml();
});

/* Template Literal ES6 feature */
const createInnerHtml = () => {
  const headerHtml = 
  "<thead>"+
  "<tr><th>Profile Pic</th>"+
    "<th>Name</th>"+
    "<th>Gender</th>"+
    "<th>Department</th>"+
    "<th>Salary</th>"+
    "<th>Start</th>"+
    "<th>Actions</th></tr>"+
  "</thead>";
  let innerHtml = `${headerHtml}`;
  let empPayrollList = createEmployeePayrollJSON();
  for (const empPayrollData of empPayrollList) {
    innerHtml = `${innerHtml}
    <tbody>
    <tr>
      <td data-label="Profile Pic">
        <img class="profile" src="${empPayrollData._profilePic}" alt="">
      </td>
      <td data-label="Name">
        ${empPayrollData._name}
      </td>
      <td data-label="Gender">
        ${empPayrollData._gender}
      </td>
      <td data-label="Department">
        ${getDeptHtml(empPayrollData._department)}
      </td>
      <td data-label="Salary">
        ${empPayrollData._salary}
      </td>
      <td data-label="Start">
        ${empPayrollData._startDate}
      </td>
      <td data-label="Actions">
        <img id="${empPayrollData._id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
        <img id="${empPayrollData._id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
      </td>
    </tr>
    </tbody>
    `;
  }
  document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
  let empPayrollListLocal = [
    {
      _name: 'Pratik',
      _gender: 'male',
      _department: [
        'Engineering',
        'Finance'
      ],
      _salary: '500000',
      _startDate: '29 Oct 2020',
      _note: '',
      _id: new Date().getTime(),
      _profilePic: '../assets/profile-images/Ellipse -2.png'
    },
    {
      _name: 'Pranav',
      _gender: 'male',
      _department: [
        'Engineering',
        'Finance'
      ],
      _salary: '600000',
      _startDate: '29 Nov 2020',
      _note: '',
      _id: new Date().getTime(),
      _profilePic: '../assets/profile-images/Ellipse -3.png'
    }
  ];
  return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
  let deptHtml = '';
  for (const dept of deptList) {
      deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`
  }
  return deptHtml;
}