document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelector(".sliders");
  const dots = document.querySelectorAll(".dot");

  let currentSlide = 0;
  const slideCount = sliders.children.length;
  const slideWidth = sliders.children[0].offsetWidth;

  // Function to show the current slide
  function showSlide(index) {
    sliders.style.transition = "transform 1s ease"; // Adjust the transition time as needed
    sliders.style.transform = `translateX(-${index * slideWidth}px)`;

    // Update active dot
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Function to handle dot click

  // Attach click event to each dot
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => dotClickHandler(index));
  });

  // Automatically slide to the next image every few seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
  }, 5000); // Adjust the interval time as needed

  document.getElementById("contactus").addEventListener("click", function () {
    document.getElementById("myModal").style.display = "block";
  });

  document
    .getElementsByClassName("close")[0]
    .addEventListener("click", function () {
      document.getElementById("myModal").style.display = "none";
    });

  window.onclick = function (event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  };
});
function dotClickHandler(index) {
  currentSlide = index;
  showSlide(currentSlide);
}
function changeImg(imgName) {
  var imgPath;
  switch (imgName) {
    case "image1":
      imgPath = "image-1.jpeg";
      break;
    case "image2":
      imgPath = "image-2.jpeg";
      break;
    case "image3":
      imgPath = "image-3.jpg";
      break;
    default:
      imgPath = "main.jpeg";
  }
  document.getElementById("mainImg").src = imgPath;
  var contentItems = document.querySelectorAll(".info");
  contentItems.forEach((item) => item.classList.remove("active"));
  document
    .querySelector(`.info[data-img="${imgName}"]`)
    .classList.add("active");
}
