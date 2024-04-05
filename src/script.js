function burgerOnClick() {
  document.querySelector('.burger-bg__content').classList.toggle("change");
  document.getElementById("burger").classList.toggle("change");
  document.querySelector(".header__links").classList.toggle("change");
  document.getElementById("burger-bg").classList.toggle("change-bg");
}

const sidebarBtn = document.querySelector('.sidebar__btn');
const sidebar = document.querySelector('.sidebar');
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("_open");
  sidebarBtn.classList.toggle("_open");
})

// if (window.innerWidth >= 1024) {
//   sidebar.classList.add("_open");
//   sidebarBtn.classList.add("_open");
// }