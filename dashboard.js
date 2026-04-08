// Elements
const addTaskBtn = document.getElementById("addTaskBtn");
const taskModal = document.getElementById("taskModal");
const cancelTaskBtn = document.getElementById("cancelTaskBtn");
const saveTaskBtn = document.getElementById("saveTaskBtn");
const taskList = document.getElementById("taskList");
const taskTitle = document.getElementById("taskTitle");
const taskDesc = document.getElementById("taskDesc");

// Cards counters
const totalTasksEl = document.getElementById("totalTasks");
const completedTasksEl = document.getElementById("completedTasks");
const pendingTasksEl = document.getElementById("pendingTasks");

// Task storage (frontend state)
let tasks = [];

// Show modal
addTaskBtn.addEventListener("click", () => {
  taskModal.style.display = "flex";
  taskTitle.value = "";
  taskDesc.value = "";
});

// Hide modal
cancelTaskBtn.addEventListener("click", () => {
  taskModal.style.display = "none";
});

// Close modal on clicking outside
taskModal.addEventListener("click", (e) => {
  if (e.target === taskModal) taskModal.style.display = "none";
});

// Save task
saveTaskBtn.addEventListener("click", () => {
  const title = taskTitle.value.trim();
  const desc = taskDesc.value.trim();

  if (!title || !desc) {
    alert("Please fill in all fields");
    return;
  }

  const task = { title, desc, status: "Pending" };
  tasks.push(task);   // Add task to array
  renderTasks();      // Render tasks dynamically
  taskModal.style.display = "none";
});

// Function to render tasks dynamically
function renderTasks() {
  taskList.innerHTML = "";
  let completedCount = 0;

  tasks.forEach((task, index) => {
    const card = document.createElement("div");
    card.className = "task-card";
    card.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.desc}</p>
      <span class="status ${task.status}">${task.status}</span>
      <div style="margin-top:5px;">
        ${task.status === "Pending" ? `<button class="complete-btn" data-index="${index}">Mark Completed</button>` : ""}
        <button class="delete-btn" data-index="${index}">Delete</button>
      </div>
    `;
    taskList.appendChild(card);

    if (task.status === "Completed") completedCount++;
  });

  // Update dashboard cards
  totalTasksEl.textContent = tasks.length;
  completedTasksEl.textContent = completedCount;
  pendingTasksEl.textContent = tasks.length - completedCount;

  // Add event listeners for buttons after rendering
  document.querySelectorAll(".complete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      tasks[i].status = "Completed";
      renderTasks();
    });
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const i = e.target.dataset.index;
      tasks.splice(i, 1);  // Remove task from array
      renderTasks();
    });
  });
}