function clearCols() {
  cols = ``;
  content.innerHTML = cols;
}

var cols = ``;
var content = document.querySelector("#rows");

async function HomePage() {
  var response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  response = await response.json();
  console.log(response);
  for (let i = 0; i < response.meals.length; i++) {
    cols += `<div class="col-3   ">
        <div id="akla" class="position-relative overflow-hidden akla ">
            <img id="mealimg" class="h-100 w-100 rounded-3 " src="${response.meals[i].strMealThumb}" alt="">
            <div class="position-absolute layer p-3  w-100 h-100 rounded-3 bg-white d-flex align-items-center  "><h3>${response.meals[i].strMeal}</h3></div>    
        </div>
        </div>`;
  }
  content.innerHTML = cols;

  getHomeDetails(response);
}
HomePage();
function getHomeDetails(response) {
  let mealsCont = document.querySelectorAll("#akla");
  for (let i = 0; i < mealsCont.length; i++) {
    mealsCont[i].addEventListener("click", function () {
      document.querySelector("#mealname").innerText = response.meals[i].strMeal;
      document.querySelector("#Instructions").innerText =
        response.meals[i].strInstructions;
      document
        .querySelector("#detailimg")
        .setAttribute("src", response.meals[i].strMealThumb);
      document.querySelector("#area").innerText = response.meals[i].strArea;
      document.querySelector("#category").innerText =
        response.meals[i].strCategory;
      document
        .querySelector("#Source")
        .setAttribute("href", response.meals[i].strSource);
      document
        .querySelector("#Youtube")
        .setAttribute("href", response.meals[i].strYoutube);

      var measures = [];
      for (let j = 1; j <= 20; j++) {
        var measureNum = `strMeasure${j}`;
        let measure = response.meals[i][measureNum];
        measures.push(measure);
      }
      var ingredients = [];
      for (let j = 1; j <= 20; j++) {
        var ingredientNum = `strIngredient${j}`;
        let ingredient = response.meals[i][ingredientNum];
        ingredients.push(ingredient);
      }
      let recipes = ``;
      for (let x = 0; x < 20; x++) {
        if (measures[x] != "" && ingredients[x] != "" && measures[x] != "0") {
          recipes += `<p  class="bg-info-subtle m-1 d-flex text-black p-1 rounded-2">
                    ${measures[x] + "&nbsp" + ingredients[x]} 
                    </p>`;
        }
        console.log(measures[x] + ingredients[x]);
        document.querySelector("#Recipe").innerHTML = recipes;
      }
      document.querySelector("#rows").style.display = "none";
      document.querySelector("#details").style.display = "flex";
    });
  }
}

function getMealDetails(response) {
  let mealsCont = document.querySelectorAll("#akla");
  for (let i = 0; i < mealsCont.length; i++) {
    mealsCont[i].addEventListener("click", function () {
      document.querySelector("#mealname").innerText = response.meals[i].strMeal;
      document.querySelector("#Instructions").innerText =
        response.meals[i].strInstructions;
      document
        .querySelector("#detailimg")
        .setAttribute("src", response.meals[i].strMealThumb);
      document.querySelector("#area").innerText = response.meals[i].strArea;
      document.querySelector("#category").innerText =
        response.meals[i].strCategory;
      document
        .querySelector("#Source")
        .setAttribute("href", response.meals[i].strSource);
      document
        .querySelector("#Youtube")
        .setAttribute("href", response.meals[i].strYoutube);

      var measures = [];
      for (let j = 1; j <= 20; j++) {
        var measureNum = `strMeasure${j}`;
        let measure = response.meals[i][measureNum];
        measures.push(measure);
      }
      var ingredients = [];
      for (let j = 1; j <= 20; j++) {
        var ingredientNum = `strIngredient${j}`;
        let ingredient = response.meals[i][ingredientNum];
        ingredients.push(ingredient);
      }
      let recipes = ``;
      for (let x = 0; x < 20; x++) {
        if (measures[x] != "" && ingredients[x] != "" && measures[x] != "0") {
          recipes += `<p  class="bg-info-subtle m-1 d-flex text-black p-1 rounded-2">
                    ${measures[x] + "&nbsp" + ingredients[x]} 
                    </p>`;
        }
        console.log(measures[x] + ingredients[x]);
        document.querySelector("#Recipe").innerHTML = recipes;
      }
      document.querySelector("#rows").style.display = "none";
      document.querySelector("#search").style.display = "none";
      document.querySelector("#details").style.display = "flex";
    });
  }
}

function sections() {
  let navItems = document.querySelectorAll("#sections p");
  for (let i = 0; i < 5; i++) {
    navItems[i].addEventListener("click", function (e) {
      var section = e.target.textContent;
      if (section == "Search") {
        searchName();
        searchFirstLetter();
        document.querySelector("#searchName").value = "";
        document.querySelector("#searchFirstLetter").value = "";
      }
      if (section == "Categories") {
        category();
      }
      if (section == "Area") {
        area();
      }
      if (section == "Ingredients") {
        ingredients();
      }
      if (section == "Contact Us") {
        console.log("mnawarna walahy");
        contactUs();
      }
    });
  }
}
sections();

function searchName() {
  clearCols();
  document.querySelector("#search").style.display = "flex";
  document.querySelector("#details").style.display = "none";
  document.querySelector("#contact").style.display = "none";

  document
    .querySelector("#searchName")
    .addEventListener("keyup", async function () {
      clearCols();
      var response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.value}`
      );
      response = await response.json();
      console.log(response);
      console.log(response.meals.length);
      for (let i = 0; i < response.meals.length; i++) {
        cols += `<div class="col-3   ">
        <div id="akla" class="position-relative overflow-hidden akla ">
            <img id="mealimg" class="h-100 w-100 rounded-3 " src="${response.meals[i].strMealThumb}" alt="">
            <div class="position-absolute layer p-3  w-100 h-100 rounded-3 bg-white d-flex align-items-center  "><h3>${response.meals[i].strMeal}</h3></div>    
        </div>
        </div>`;
        document.querySelector("#rows").style.display = "flex";
      }
      content.innerHTML = cols;
      getMealDetails(response);
    });
}
function searchFirstLetter() {
  clearCols();
  document.querySelector("#search").style.display = "flex";
  document
    .querySelector("#searchFirstLetter")
    .addEventListener("keyup", async function () {
      clearCols();
      var response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${this.value}`
      );
      response = await response.json();
      console.log(response);
      console.log(response.meals.length);
      for (let i = 0; i < response.meals.length; i++) {
        cols += `<div class="col-3   ">
        <div id="akla" class="position-relative overflow-hidden akla ">
            <img id="mealimg" class="h-100 w-100 rounded-3 " src="${response.meals[i].strMealThumb}" alt="">
            <div class="position-absolute layer p-3  w-100 h-100 rounded-3 bg-white d-flex align-items-center  "><h3>${response.meals[i].strMeal}</h3></div>    
        </div>
        </div>`;
      }
      content.innerHTML = cols;
      getMealDetails(response);
    });
}

async function category() {
  document.querySelector("#details").style.display = "none";
  document.querySelector("#search").style.display = "none";

  var response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  response = await response.json();
  console.log(response);
  clearCols();
  for (let i = 0; i < response.categories.length; i++) {
    cols += `<div class="col-3   ">
            <div id="akla" class="position-relative overflow-hidden akla ">
                <img id="mealimg" class="h-100 w-100 rounded-3 " src="${response.categories[i].strCategoryThumb}" alt="">
                <div class="position-absolute layer p-3 text-center  w-100 h-100 rounded-3 bg-white    ">
                    <h3 >${response.categories[i].strCategory}</h3>
                    <p class="mt-0 ">${response.categories[i].strCategoryDescription} </p>
                </div>
                
            </div>
        </div>`;
    content.style.display = "flex";
  }
  content.innerHTML = cols;

  getCategoryDetails(response);
}
function getCategoryDetails(response) {
  let categoryCont = document.querySelectorAll("#akla");
  for (let i = 0; i < categoryCont.length; i++) {
    categoryCont[i].addEventListener("click", async function () {
      clearCols();

      var newResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${response.categories[i].strCategory}`
      );
      newResponse = await newResponse.json();
      for (let i = 0; i < newResponse.meals.length; i++) {
        cols += `<div class="col-3   ">
                <div id="akla" class="position-relative overflow-hidden akla ">
                    <img id="mealimg" class="h-100 w-100 rounded-3 " src="${newResponse.meals[i].strMealThumb}" alt="">
                    <div class="position-absolute layer p-3  w-100 h-100 rounded-3 bg-white d-flex align-items-center  "><h3>${newResponse.meals[i].strMeal}</h3></div>    
                </div>
                </div>`;
        document.querySelector("#rows").style.display = "flex";
      }
      console.log(newResponse);
      content.innerHTML = cols;
      getMealDetailsThroughName(newResponse);
    });
  }
}

async function area() {
  document.querySelector("#details").style.display = "none";
  document.querySelector("#search").style.display = "none";
  document.querySelector("#contact").style.display = "none";

  var response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  response = await response.json();
  console.log(response);
  clearCols();
  for (let i = 0; i < response.meals.length; i++) {
    cols += `<div class="col-3   ">
            <div id="akla" class="position-relative text-center text-white akla ">
                <i class="fa-solid caticon p-1 m-1  h-100 fa-2xl fa-house-laptop"></i>
                <h3 class="m-2 ">${response.meals[i].strArea} </h3>
                
            </div>
        </div>`;
    content.style.display = "flex";
  }
  content.innerHTML = cols;
  getAreaDetails(response);
}
function getAreaDetails(response) {
  let areaCont = document.querySelectorAll("#akla");
  for (let i = 0; i < areaCont.length; i++) {
    areaCont[i].addEventListener("click", async function () {
      clearCols();

      var newResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${response.meals[i].strArea}`
      );
      newResponse = await newResponse.json();
      for (let i = 0; i < newResponse.meals.length; i++) {
        cols += `<div class="col-3   ">
                <div id="akla" class="position-relative overflow-hidden akla ">
                    <img id="mealimg" class="h-100 w-100 rounded-3 " src="${newResponse.meals[i].strMealThumb}" alt="">
                    <div class="position-absolute layer p-3  w-100 h-100 rounded-3 bg-white d-flex align-items-center  "><h3>${newResponse.meals[i].strMeal}</h3></div>    
                </div>
                </div>`;
        document.querySelector("#rows").style.display = "flex";
      }
      console.log(newResponse);
      content.innerHTML = cols;
      getMealDetailsThroughName(newResponse);
    });
  }
}

async function ingredients() {
  document.querySelector("#details").style.display = "none";
  document.querySelector("#search").style.display = "none";
  document.querySelector("#contact").style.display = "none";

  var response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  response = await response.json();
  console.log(response);
  clearCols();
  for (let i = 0; i < 20; i++) {
    cols += `<div class="col-3   ">
            <div id="akla" class="position-relative text-center text-white akla ">
                <i class="fa-solid caticon p-1 m-1  h-100 fa-2xl fa-drumstick-bite"></i>
                <h3 class="m-2 ">${response.meals[i].strIngredient} </h3>
                <p class="overflow-hidden ingredientsdesc ">${response.meals[i].strDescription} </p>
                
            </div>
        </div>`;
    content.style.display = "flex";
  }
  content.innerHTML = cols;
  getIngredientsDetails(response);
}
function getIngredientsDetails(response) {
  let areaCont = document.querySelectorAll("#akla");
  for (let i = 0; i < areaCont.length; i++) {
    areaCont[i].addEventListener("click", async function () {
      clearCols();

      var newResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${response.meals[i].strIngredient}`
      );
      newResponse = await newResponse.json();
      for (let i = 0; i < newResponse.meals.length; i++) {
        cols += `<div class="col-3   ">
                <div id="akla" class="position-relative overflow-hidden akla ">
                    <img id="mealimg" class="h-100 w-100 rounded-3 " src="${newResponse.meals[i].strMealThumb}" alt="">
                    <div class="position-absolute layer p-3  w-100 h-100 rounded-3 bg-white d-flex align-items-center  "><h3>${newResponse.meals[i].strMeal}</h3></div>    
                </div>
                </div>`;
        document.querySelector("#rows").style.display = "flex";
      }
      console.log(newResponse);
      content.innerHTML = cols;
      getMealDetailsThroughName(newResponse);
    });
  }
}

function contactUs() {
  content.style.display = "none";
  document.querySelector("#search").style.display = "none";
  document.querySelector("#contact").style.display = "flex";

  userName();
  userEmail();
  userPhone();
  userAge();
  userPassword();
  userRepassword();
}
var username;
function userName() {
  document.querySelector("#username").addEventListener("keyup", function () {
    username = this.value;
    if (!NameVerification(username)) {
      document.querySelector("#warningname").style.display = "flex";
    } else {
      document.querySelector("#warningname").style.display = "none";
    }
    if (
      NameVerification(username) &&
      EmailVerification(useremail) &&
      PhoneVerification(userphone) &&
      ageVerification(userage) &&
      passVerification(userPass) &&
      userPass == userRepass
    ) {
      document.querySelector("#SubmitbtnClosed").style.display = "none";
      document.querySelector("#SubmitbtnOpened").style.display = "flex";
    } else {
      document.querySelector("#SubmitbtnClosed").style.display = "flex";
      document.querySelector("#SubmitbtnOpened").style.display = "none";
    }
  });
}

var useremail;
function userEmail() {
  document.querySelector("#useremail").addEventListener("keyup", function () {
    useremail = this.value;
    if (!EmailVerification(useremail)) {
      document.querySelector("#warningemail").style.display = "flex";
    } else {
      document.querySelector("#warningemail").style.display = "none";
    }
    if (
      NameVerification(username) &&
      EmailVerification(useremail) &&
      PhoneVerification(userphone) &&
      ageVerification(userage) &&
      passVerification(userPass) &&
      userPass == userRepass
    ) {
      document.querySelector("#SubmitbtnClosed").style.display = "none";
      document.querySelector("#SubmitbtnOpened").style.display = "flex";
    } else {
      document.querySelector("#SubmitbtnClosed").style.display = "flex";
      document.querySelector("#SubmitbtnOpened").style.display = "none";
    }
  });
}

var userphone;
function userPhone() {
  document.querySelector("#userphone").addEventListener("keyup", function () {
    userphone = this.value;
    if (!PhoneVerification(userphone)) {
      document.querySelector("#warningphone").style.display = "flex";
    } else {
      document.querySelector("#warningphone").style.display = "none";
    }
    if (
      NameVerification(username) &&
      EmailVerification(useremail) &&
      PhoneVerification(userphone) &&
      ageVerification(userage) &&
      passVerification(userPass) &&
      userPass == userRepass
    ) {
      document.querySelector("#SubmitbtnClosed").style.display = "none";
      document.querySelector("#SubmitbtnOpened").style.display = "flex";
    } else {
      document.querySelector("#SubmitbtnClosed").style.display = "flex";
      document.querySelector("#SubmitbtnOpened").style.display = "none";
    }
  });
}

var userage;
function userAge() {
  document.querySelector("#userage").addEventListener("keyup", function () {
    userage = this.value;
    if (!ageVerification(userage)) {
      document.querySelector("#warningage").style.display = "flex";
    } else {
      document.querySelector("#warningage").style.display = "none";
    }
    if (
      NameVerification(username) &&
      EmailVerification(useremail) &&
      PhoneVerification(userphone) &&
      ageVerification(userage) &&
      passVerification(userPass) &&
      userPass == userRepass
    ) {
      document.querySelector("#SubmitbtnClosed").style.display = "none";
      document.querySelector("#SubmitbtnOpened").style.display = "flex";
    } else {
      document.querySelector("#SubmitbtnClosed").style.display = "flex";
      document.querySelector("#SubmitbtnOpened").style.display = "none";
    }
  });
}

var userPass;
function userPassword() {
  document
    .querySelector("#userpassword")
    .addEventListener("keyup", function () {
      userPass = this.value;
      if (!passVerification(userPass)) {
        document.querySelector("#warningpassword").style.display = "flex";
      } else {
        document.querySelector("#warningpassword").style.display = "none";
      }
      if (
        NameVerification(username) &&
        EmailVerification(useremail) &&
        PhoneVerification(userphone) &&
        ageVerification(userage) &&
        passVerification(userPass) &&
        userPass == userRepass
      ) {
        document.querySelector("#SubmitbtnClosed").style.display = "none";
        document.querySelector("#SubmitbtnOpened").style.display = "flex";
      } else {
        document.querySelector("#SubmitbtnClosed").style.display = "flex";
        document.querySelector("#SubmitbtnOpened").style.display = "none";
      }
    });
}

var userRepass;
function userRepassword() {
  document
    .querySelector("#userrepassword")
    .addEventListener("keyup", function () {
      userRepass = this.value;
      if (userRepass != userPass) {
        document.querySelector("#warningrepassword").style.display = "flex";
      } else {
        document.querySelector("#warningrepassword").style.display = "none";
      }
      if (
        NameVerification(username) &&
        EmailVerification(useremail) &&
        PhoneVerification(userphone) &&
        ageVerification(userage) &&
        passVerification(userPass) &&
        userPass == userRepass
      ) {
        document.querySelector("#SubmitbtnClosed").style.display = "none";
        document.querySelector("#SubmitbtnOpened").style.display = "flex";
      } else {
        document.querySelector("#SubmitbtnClosed").style.display = "flex";
        document.querySelector("#SubmitbtnOpened").style.display = "none";
      }
    });
}

function NameVerification(name) {
  var verifyName = /^[a-zA-Z\s]+$/;
  return verifyName.test(name);
}

function EmailVerification(email) {
  var VerifyEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return VerifyEmail.test(email);
}

function PhoneVerification(phone) {
  var VerifyPhone = /^\d{10,12}$/;
  return VerifyPhone.test(phone);
}

function ageVerification(age) {
  var VerifyAge = /^\d{0,2}$/;
  return VerifyAge.test(age);
}

function passVerification(pass) {
  var Verifypass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return Verifypass.test(pass);
}

function getMealDetailsThroughName(response) {
  let mealsCont = document.querySelectorAll("#akla");
  let mealName;
  for (let i = 0; i < mealsCont.length; i++) {
    mealsCont[i].addEventListener("click", async function () {
      mealName = response.meals[i].strMeal;
      var newResponse = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
      );
      newResponse = await newResponse.json();

      getMealDetailsThroughName2(newResponse);
    });
  }
}
function getMealDetailsThroughName2(response) {
  document.querySelector("#mealname").innerText = response.meals[0].strMeal;
  document.querySelector("#Instructions").innerText =
    response.meals[0].strInstructions;
  document
    .querySelector("#detailimg")
    .setAttribute("src", response.meals[0].strMealThumb);
  document.querySelector("#area").innerText = response.meals[0].strArea;
  document.querySelector("#category").innerText = response.meals[0].strCategory;
  document
    .querySelector("#Source")
    .setAttribute("href", response.meals[0].strSource);
  document
    .querySelector("#Youtube")
    .setAttribute("href", response.meals[0].strYoutube);

  var measures = [];
  for (let j = 1; j <= 20; j++) {
    var measureNum = `strMeasure${j}`;
    let measure = response.meals[0][measureNum];
    measures.push(measure);
  }
  var ingredients = [];
  for (let j = 1; j <= 20; j++) {
    var ingredientNum = `strIngredient${j}`;
    let ingredient = response.meals[0][ingredientNum];
    ingredients.push(ingredient);
  }
  let recipes = ``;
  for (let x = 0; x < 20; x++) {
    if (measures[x] != "" && ingredients[x] != "" && measures[x] != "0") {
      recipes += `<p  class="bg-info-subtle m-1 d-flex text-black p-1 rounded-2">
                    ${measures[x] + "&nbsp" + ingredients[x]} 
                    </p>`;
    }
    console.log(measures[x] + ingredients[x]);
    document.querySelector("#Recipe").innerHTML = recipes;
  }
  document.querySelector("#rows").style.display = "none";
  document.querySelector("#search").style.display = "none";
  document.querySelector("#details").style.display = "flex";
}

$("#togglenav").click(() => {
  if ($("#nav-bar").css("left") == "0px") {
    document.querySelector("#togglenav").classList.replace("fa-x", "fa-bars");
    $("#nav-bar").animate({ left: "-260px" }, 500);
    $("#sections p").css("margin-top", "50px");
  } else {
    $("#nav-bar").animate({ left: "0px" }, 500);
    $("#sections p").css("margin-top", "0px");

    document.querySelector("#togglenav").classList.replace("fa-bars", "fa-x");
  }
});
