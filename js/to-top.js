let span = document.querySelector(".to-top");
window.onscroll = function () {
  this.scrollY >= 70 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
