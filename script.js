const input = document.querySelector(".input");
const body = document.querySelector(".body");
var dataObj = {};
let isToggled = false;

fetch("https://dummyjson.com/users")
  .then((data) => {
    return data.json();
  })
  .then((objectdata) => {
    dataObj = objectdata;

    objectdata.users.map((user, i) => {
      const tr = body.insertRow();

      const td1 = tr.insertCell();
      const td2 = tr.insertCell();
      const td3 = tr.insertCell();
      const td4 = tr.insertCell();
      const td5 = tr.insertCell();
      const td6 = tr.insertCell();
      const td7 = tr.insertCell();
      const td8 = tr.insertCell();

      td1.innerHTML = i + 1;
      td2.innerHTML =
        objectdata.users[i].firstName + "" + objectdata.users[i].lastName;
      td3.innerHTML = objectdata.users[i].email;
      td4.innerHTML = objectdata.users[i].address.address;
      td5.innerHTML = objectdata.users[i].phone;
      td6.innerHTML = objectdata.users[i].gender;
      td7.innerHTML = objectdata.users[i].birthDate;
      td8.innerHTML = objectdata.users[i].age;
    });
  });

function nameSort() {
  body.innerHTML = "";
  dataObj.users.sort((a, b) => a.firstName.localeCompare(b.firstName));
  console.log(dataObj);

  dataObj.users.map((user, i) => {
    const tr = body.insertRow();

    const td1 = tr.insertCell();
    const td2 = tr.insertCell();
    const td3 = tr.insertCell();
    const td4 = tr.insertCell();
    const td5 = tr.insertCell();
    const td6 = tr.insertCell();
    const td7 = tr.insertCell();
    const td8 = tr.insertCell();

    td1.innerHTML = i + 1;
    td2.innerHTML = dataObj.users[i].firstName + "" + dataObj.users[i].lastName;
    td3.innerHTML = dataObj.users[i].email;
    td4.innerHTML = dataObj.users[i].address.address;
    td5.innerHTML = dataObj.users[i].phone;
    td6.innerHTML = dataObj.users[i].gender;
    td7.innerHTML = dataObj.users[i].birthDate;
    td8.innerHTML = dataObj.users[i].age;
  });
}

function ageSort() {
  body.innerHTML = "";
  dataObj.users.sort((a, b) => a.age - b.age);
  console.log(dataObj);

  dataObj.users.map((user, i) => {
    const tr = body.insertRow();

    const td1 = tr.insertCell();
    const td2 = tr.insertCell();
    const td3 = tr.insertCell();
    const td4 = tr.insertCell();
    const td5 = tr.insertCell();
    const td6 = tr.insertCell();
    const td7 = tr.insertCell();
    const td8 = tr.insertCell();

    td1.innerHTML = i + 1;
    td2.innerHTML = dataObj.users[i].firstName + "" + dataObj.users[i].lastName;
    td3.innerHTML = dataObj.users[i].email;
    td4.innerHTML = dataObj.users[i].address.address;
    td5.innerHTML = dataObj.users[i].phone;
    td6.innerHTML = dataObj.users[i].gender;
    td7.innerHTML = dataObj.users[i].birthDate;
    td8.innerHTML = dataObj.users[i].age;
  });
}

function genderSort() {
  isToggled = !isToggled;

  if (isToggled === true) {
    body.innerHTML = "";
    dataObj.users.sort((a, b) => b.gender.localeCompare(a.gender));
    console.log(dataObj);

    dataObj.users.map((user, i) => {
      const tr = body.insertRow();

      const td1 = tr.insertCell();
      const td2 = tr.insertCell();
      const td3 = tr.insertCell();
      const td4 = tr.insertCell();
      const td5 = tr.insertCell();
      const td6 = tr.insertCell();
      const td7 = tr.insertCell();
      const td8 = tr.insertCell();

      td1.innerHTML = i + 1;
      td2.innerHTML =
        dataObj.users[i].firstName + "" + dataObj.users[i].lastName;
      td3.innerHTML = dataObj.users[i].email;
      td4.innerHTML = dataObj.users[i].address.address;
      td5.innerHTML = dataObj.users[i].phone;
      td6.innerHTML = dataObj.users[i].gender;
      td7.innerHTML = dataObj.users[i].birthDate;
      td8.innerHTML = dataObj.users[i].age;
    });
  } else {
    body.innerHTML = "";
    dataObj.users.sort((a, b) => a.gender.localeCompare(b.gender));
    console.log(dataObj);

    dataObj.users.map((user, i) => {
      const tr = body.insertRow();

      const td1 = tr.insertCell();
      const td2 = tr.insertCell();
      const td3 = tr.insertCell();
      const td4 = tr.insertCell();
      const td5 = tr.insertCell();
      const td6 = tr.insertCell();
      const td7 = tr.insertCell();
      const td8 = tr.insertCell();

      td1.innerHTML = i + 1;
      td2.innerHTML =
        dataObj.users[i].firstName + "" + dataObj.users[i].lastName;
      td3.innerHTML = dataObj.users[i].email;
      td4.innerHTML = dataObj.users[i].address.address;
      td5.innerHTML = dataObj.users[i].phone;
      td6.innerHTML = dataObj.users[i].gender;
      td7.innerHTML = dataObj.users[i].birthDate;
      td8.innerHTML = dataObj.users[i].age;
    });
  }
}

function search() {
  body.innerHTML = "";
  const name = input.value;
  console.log(name);
  const searchUser = dataObj.users.filter((user) => {
    return user.firstName.includes(name);
  });

  searchUser.map((user, i) => {
    const tr = body.insertRow();

    const td1 = tr.insertCell();
    const td2 = tr.insertCell();
    const td3 = tr.insertCell();
    const td4 = tr.insertCell();
    const td5 = tr.insertCell();
    const td6 = tr.insertCell();
    const td7 = tr.insertCell();
    const td8 = tr.insertCell();

    td1.innerHTML = i + 1;
    td2.innerHTML = user.firstName + " " + user.lastName;
    td3.innerHTML = user.email;
    td4.innerHTML = user.address.address;
    td5.innerHTML = user.phone;
    td6.innerHTML = user.gender;
    td7.innerHTML = user.birthDate;
    td8.innerHTML = user.age;
  });
  console.log(searchUser);
}
