// register and login form
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const bookTicket = document.getElementById("bookTicketBtn");

loginBtn.onclick = function () {
  document.getElementById("loginModel").style.display = "flex";
};

registerBtn.onclick = function () {
  document.getElementById("registerModel").style.display = "flex";
};
bookTicket.onclick = function () {
  document.getElementById("registerModel").style.display = "flex";
};

function closeModel(id) {
  document.getElementById(id).style.display = "none";
}

// Close modal if user clicks outside the content
window.onclick = function (event) {
  if (event.target.classList.contains("model")) {
    event.target.style.display = "none";
  }
};