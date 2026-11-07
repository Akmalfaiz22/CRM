const todoBtn = document.getElementById('todoBtn');
const progressBtn = document.getElementById('progressBtn');
const reviewBtn = document.getElementById('reviewBtn');
const doneBtn = document.getElementById('doneBtn');
const blockBtn = document.getElementById('blockBtn');

const sections = ["todo", "progress", "review", "done", "block"];

function showSection(id) {
  if (!id) return;

  sections.forEach((section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.classList.add("hidden");
    }
  });

  const selectedSection = document.getElementById(id);
  if (selectedSection) {
    selectedSection.classList.remove("hidden");
  }
}

if (todoBtn) {
  todoBtn.addEventListener("click", () => {
    showSection("todo");
  });
}

if (progressBtn) {
  progressBtn.addEventListener("click", () => {
    showSection("progress");
  });
}

if (reviewBtn) {
  reviewBtn.addEventListener("click", () => {
    showSection("review");
  });
}

if (doneBtn) {
  doneBtn.addEventListener("click", () => {
    showSection("done");
  });
}

if (blockBtn) {
  blockBtn.addEventListener("click", () => {
    showSection("block");
  });
}

