const btn = document.querySelector(".btn");
const formEl = document.querySelector(".form");

var position;

// mouse hover event listener
btn.addEventListener("mouseover", function () {
  //form validation callback return true or false, trigged because of built in form validation in HTML 'required'
  if (!formEl.checkValidity()) {
    position ? (position = 0) : (position = 100);
    //adding the css animation property
    btn.style.transform = `translate(${position}px, 0px)`;
    btn.style.transition = "all 0.3s ease";
  } else {
    return;
  }
});

//on click function
btn.addEventListener("click", function () {
  e.preventDefault();
  alert("welldone");
});
