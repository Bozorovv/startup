const title = document.getElementById("h");

title.addEventListener("mouseenter", () => {
    title.style.transform = "scale(1.03)";
    title.style.transition = "0.3s";
});

title.addEventListener("mouseleave", () => {
    title.style.transform = "scale(1)";
});