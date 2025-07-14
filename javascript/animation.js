document.querySelectorAll(".animated-details").forEach(details => {
  const content = details.querySelector(".details-content");

  details.addEventListener("click", e => {
    if (details.open && !details.classList.contains("closing")) return;

    e.preventDefault();
    if (!details.open) {
      details.open = true;
      details.classList.add("opening");
      setTimeout(() => {
        details.classList.remove("opening");
      }, 500);
    } else {
      details.classList.add("closing");
      content.style.maxHeight = content.scrollHeight + "px";
      setTimeout(() => {
        details.open = false;
        details.classList.remove("closing");
      }, 500);
    }
  });
});
