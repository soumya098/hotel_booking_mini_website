document.querySelectorAll(".hotel-item")[0].addEventListener("click", (e) => {
  console.log(e);

  window.location.href = "./detail.html";
});

document.getElementById("list-view-tab").addEventListener("click", function () {
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("active"));
  this.querySelector(".nav-link").classList.add("active");

  document.getElementById("hotel-view").style.display = "flex";
  document.getElementById("map-view").style.display = "none";
});

document.getElementById("map-view-tab").addEventListener("click", function () {
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.remove("active"));
  this.querySelector(".nav-link").classList.add("active");

  document.getElementById("hotel-view").style.display = "none";
  document.getElementById("map-view").style.display = "block";
});
