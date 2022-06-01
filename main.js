// 1. צרו אלמנט h1, שבלחיצה עליו מופעל alert , עם הודעה.

function alertText() {
  alert("STOP!");
}

// 2.

function PrintPtoLog() {
  console.log("SOLOMON");
}

// 3.

function changeColor() {
  var a = document.getElementById("three");
  a.style.color = "red";
}

// 4.

function alertH1() {
  var e = document.getElementById("four");
  e.style.fontSize = "10px";
}

// 5.
function replaceText() {
  var e = document.getElementById("six");
  e.textContent = "Hello World!!!";
}

// 6.

function PrintNameViaButton() {
  var userInput = prompt("");
  document.body.innerText = userInput;
}

// 7.	צרו תוכנית שבעת עלייה יוצרת אובייקט של DATE,
//   אם השעה לפני 12 בצהריים, הרקע של החלון יהיה צהוב,
//   אחרת הצבע יהיה כחול.הוסיפו אלמנט של טקסט לחלון,
//   אם השעה לפני 12 בצהריים יהיה רשום יום טוב,
//     אחרי 12 בצהריים יהיה רשום ערב טוב.

function dateAlert() {
  var dateObejct = document.getElementById("nine");
  var myDate = new Date();
  var hour = myDate.getHours();
  dateObejct.style = " cursor: pointer";

  if (hour < 12) {
    dateObejct.onclick = function () {
      dateObejct.innerHTML = "<h1>Have a Good Day!</h1>";
      dateObejct.style = "background-color:yellow; cursor: pointer;";
    };
  } else {
    dateObejct.onclick = function () {
      dateObejct.innerHTML = "<h1>Have a Good Evening!</h1>";
      dateObejct.style = "background-color:blue; cursor: pointer;";
    };
  }
}
dateAlert();

// 8.	צרו תוכנית שבעת עלייה מקבלת מהמשתמש גיל,
//   אם מעל 18 מדפיסה למסך הודעה של ברוכים הבאים למסך באדום אחרת הודעה דומה בכחול
//     .ריחוף מעל הטקסט משנה את הצבע לירוק.

function ageAlert() {
  var printHere = document.getElementById("ten");
  printHere.style = "cursor: pointer";
  printHere.addEventListener("mouseover", mouseHoverOne);
  printHere.addEventListener("mouseout", mouseHoverTwo);
  printHere.onclick = function () {
    var userAgeInput = prompt("Age:");

    if (userAgeInput > 18) {
      printHere.innerHTML = "<h1>Welcome!</h1>";
      printHere.style = "color:red; cursor: pointer;";
    } else {
      printHere.innerHTML = "<h1>Welcome!</h1>";
      printHere.style = "color:blue; cursor: pointer;";
    }
  };
}
ageAlert();

function mouseHoverOne() {
  var a = document.getElementById("ten");
  a.style.color = "green";
}

function mouseHoverTwo() {
  var a = document.getElementById("ten");
  a.style.color = "black";
}

// 9.	צרו תוכנית לוטו,
//   התוכנית מקבלת מהמשתמש מספר בין 0 ל - 56 ובעת לחיצה על כפתור מדפיסה אותו למסך,
//   הפעולה קורית 5 פעמים.לאחר מכן, התוכנית מגרילה מספר בין 0 ל 56 ומדפיסה אותו למסך.

function lottryFunc() {
  var firstButtonToPrompt = document.getElementById("eleven");
  firstButtonToPrompt.onclick = function () {
    for (var i = 0; i < 5; i++) {
      var userInput = prompt("Pick a Number Between 0-56:");
      var printToDoc = document.getElementById("thirteen");
      printToDoc.innerText += " " + userInput;

    }


  };

  var secondButtonToPrompt = document.getElementById("tweleve");
  secondButtonToPrompt.onclick = function () {
    var printToDocTwo = document.getElementById("fourteen");
    printToDocTwo.innerText = Math.floor(Math.random() * 57);
  };


// console.log(firstButtonToPrompt.cloneNode("printToDoc."));

  // if (true) {
  //   var a = document.getElementById("fithteen");
  //   a.innerHTML = "<h1>Matching Numbers!</h1>";
  // } else {
  //   var a = document.getElementById("fithteen");
  //   a.innerHTML = "<h1>ERROR!</h1>";
  // }
  

}
lottryFunc();
