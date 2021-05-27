const button = document.getElementById("button");
const toasts = document.getElementById("toasts");
const toast = document.querySelector(".toast");

const messages = ["Hi", "Welcome", "Oops, There was an error"];

button.addEventListener("click", () => createNotification());

if (toast.innerHTML === "") {
  toast.style.backgroundColor = "transparent";
}

function createNotification() {
  if (toast.innerHTML === "") {
    toast.style.backgroundColor = "transparent";
  }
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerText = getRandomMessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
