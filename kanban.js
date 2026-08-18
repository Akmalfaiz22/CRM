const todoBtn = document.getElementById('todoBtn');
const progressBtn = document.getElementById('progressBtn');
const reviewBtn = document.getElementById('reviewBtn');
const doneBtn = document.getElementById('doneBtn');
const blockBtn = document.getElementById('blockBtn');

const sections = ["todo", "progress", "review", "done", "block"];

function showSection(id) {
  sections.forEach(section => {
    document.getElementById(section).classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");
}

todoBtn.addEventListener("click", () => {
    showSection("todo")
});

progressBtn.addEventListener("click", () =>{
     showSection("progress")
});

reviewBtn.addEventListener("click", () => {
     showSection("review")
});

doneBtn.addEventListener("click", () => {
    showSection("done")
});

blockBtn.addEventListener("click", () => {
    showSection("block")
});

