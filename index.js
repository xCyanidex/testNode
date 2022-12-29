let tasktext = document.querySelector(".inputtext");
let addbtn = document.querySelector(".addbtn");
let taskdiv = document.querySelector(".taskdiv");
let closebtn = document.querySelector("icon");

function checkchild() {
  if (taskdiv.hasChildNodes()) {
    console.log(`not empty`);
  } else {
    document.querySelector(".taskdiv").classList.add("hidden");

    document.querySelector(".msg").classList.remove("hidden");

    setTimeout(function () {
      document.querySelector(".msg").classList.add("hidden");
    }, 2000);
  }
}

addbtn.addEventListener("click", function () {
  taskgiven = tasktext.value;
  taskdiv.classList.remove("hidden");
  var taskgivendiv = document.createElement("div");
  taskgivendiv.classList.add("taskgivendiv");
  taskdiv.appendChild(taskgivendiv);

  taskgivendiv.classList.add("flex");

  taskgivendiv.classList.add("icon-div");
  var ptext = document.createElement("p");
  var iconpdiv = document.createElement("div");
  var icon = document.createElement("i");
  taskgivendiv.appendChild(ptext);
  taskgivendiv.appendChild(iconpdiv);
  iconpdiv.appendChild(icon);
  ptext.innerText = taskgiven;
  icon.classList.add("fa-solid");
  icon.classList.add("fa-rectangle-xmark");
  icon.classList.add("icon");
  iconpdiv.addEventListener("click", function () {
    iconpdiv.parentElement.remove();
    checkchild();
  });
  tasktext.value = "";
});
