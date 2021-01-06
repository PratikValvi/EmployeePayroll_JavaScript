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
  const innerHtml = `${headerHtml}
  <tbody>
  <tr>
    <td data-label="Profile Pic">
      <img class="profile" src="../assets/profile-images/Ellipse -2.png" alt="">
    </td>
    <td data-label="Name">
      Pratik Valvi
    </td>
    <td data-label="Gender">
      Male
    </td>
    <td data-label="Department">
      <div class="dept-label">HR</div>
      <div class="dept-label">Finance</div>
    </td>
    <td data-label="Salary">
      300000
    </td>
    <td data-label="Start">
      1 Nov 2020
    </td>
    <td data-label="Actions">
      <img id="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
      <img id="1" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
    </td>
  </tr>
  </tbody>
  `;
  document.querySelector('#table-display').innerHTML = innerHtml;
}