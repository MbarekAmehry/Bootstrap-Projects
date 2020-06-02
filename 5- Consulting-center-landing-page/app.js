const counters = document.querySelectorAll(".counters");
const speed = 299;

counters.forEach((counter) => {
  const updateCounters = () => {
    const target = +counter.getAttribute("data-target");
    const countValue = +counter.innerText;

    const increament = Math.floor(target / speed);
    if (countValue < target) {
      counter.innerText = countValue + increament;
      setTimeout(updateCounters, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounters();
});
