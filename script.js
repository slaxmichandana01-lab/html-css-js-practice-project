// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill all fields.";
    formMessage.style.color = "red";
    return;
  }

  if (!validateEmail(email)) {
    formMessage.textContent = "Invalid email address.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "green";
  this.reset();
});

function validateEmail(email) {
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return regex.test(email);
}

// To-Do list
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button onclick="removeTask(this)">X</button>`;
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
