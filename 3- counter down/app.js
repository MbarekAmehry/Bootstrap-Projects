const titles = document.querySelectorAll(".title");
const tabContent = document.querySelector(".tab-2");
const tabImage = document.querySelector(".tab-1");
const contentItem = document.querySelectorAll(".content-item");

tabContent.addEventListener("click", (e) => {
  titles.forEach((title) => {
    // title.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      title.classList.remove("white");
      console.log(e.target);
      e.target.parentNode.classList.add("white");

      contentItem.forEach((item) => {
        // remove all content
        item.classList.remove("visible");
        // show the coresponding content
        const el = document.getElementById(id);
        el.classList.add("visible");

        // show the coresponding img
        tabImage.style.background = `url(images/${id}.jpg) center center/cover`;
      });
    }
  });
});
