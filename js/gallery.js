
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");
  images.forEach(img => {
    img.addEventListener("click", () => {
      alert("Lightbox feature coming soon! (Replace with real lightbox if desired)");
    });
  });
});
