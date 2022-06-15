let sortType = 0,
  background = 0;
const students = [
  {
    name: "Martin",

    lastName: "Lant",

    marks: [9, 8, null, 7, 5],
  },

  {
    name: "Francesco",

    lastName: "Portus",

    marks: [5, 4, 2, 3, 2],
  },

  {
    name: "Bill",

    lastName: "Merdoc",

    marks: [10, null, null, null, 10],
  },

  {
    name: "John",

    lastName: "Entman",

    marks: [9, 8, 9, 7, 5],
  },
];

function changeState(clickedId) {
  var checkBox = document.getElementById(clickedId);
  if (checkBox.checked == true) {
    if (clickedId == "lastncb") sortType++;
  } else {
    if (clickedId == "lastncb") sortType--;
  }
  if (clickedId != "checkbox") displayPeopleList();
}

function formatStudents() {
  students.forEach(function (user, index) {
    let avarage = 0;
    for (let i = 0; i < user.marks.length; i++) {
      if (user.marks[i] != null) {
        avarage += user.marks[i];
      }
    }
    avarage /= user.marks.length;
    user["avarage"] = avarage;
    const count = user.marks.filter((obj) => {
      if (obj != null) {
        return true;
      }

      return false;
    }).length;
    user["lectures"] = count;
  });
  console.log(students);
}

function changeBG(id) {
  let p = id;
  p.style.color = "red";
}

function displayPeopleList() {
  var people = [...students];
  let tab = "";
  if (sortType != 0) {
    people.sort(function (a, b) {
      let NameA = a.avarage,
        NameB = b.avarage;
      return NameA == NameB ? 0 : NameA < NameB ? 1 : -1;
    });
  }

  people.forEach(function (user, index) {
    tab += `
    ${
      user.avarage >= 5
        ? '<div class="card greenBorder" onclick="changeBG(this)">'
        : '<div class="card redBorder" onclick="changeBG(this)">'
    }
       <p class="card__name">${user.name} ${user.lastName}</p>
       <p class="card__info">Lectures: ${user.lectures}</p>
       <p class="card__info">Average: ${user.avarage}</p>
     </div>`;
  });
  if (people.length != 0) document.querySelector(".container").innerHTML = tab;
}
