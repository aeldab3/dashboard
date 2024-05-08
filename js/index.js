let tickets = document.querySelector(".tickets");
let nums = document.querySelectorAll(".nums .num");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= tickets.offsetTop - 400) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

function handleActive(ev) {
  // Remove Active Class From All children's
  ev.target.parentElement.querySelectorAll(".active").forEach((ele) => {
    ele.classList.remove("active");
  });
  // Add  Active Class For Target
  ev.target.classList.add("active");
}


