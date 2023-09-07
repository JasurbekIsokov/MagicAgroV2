var myVideo = document.getElementById("detectVideo");

myVideo.addEventListener("ended", function () {
  myVideo.play();
});

// upload image
// HTML elementlarni tanlash
const fileInput = document.getElementById("file-input");
const imagePreview = document.getElementById("image-preview");
const skeletonImage = document.getElementById("skeleton-image");
const uploadDefaultText = document.getElementById("uploadDefaultText");

// Foydalanuvchidan rasmni yuklash uchun fayl tanlashini kuzatish
fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imageUrl = e.target.result;
      imagePreview.innerHTML = `<img src="${imageUrl}" alt="Rasmni ko'rish">`;
      imagePreview.style.display = "block";
      skeletonImage.style.display = "none";
    };

    reader.readAsDataURL(file);
  }
});

// HTML elementlarni tanlash

const loadingText = document.getElementById("loading-text");
const cameraButton = document.getElementById("camera-button");

// Foydalanuvchidan rasmni yuklash uchun fayl tanlashini kuzatish
fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  if (file) {
    const formData = new FormData();
    formData.append("image", file);

    // Loading stavatkasini ko'rsatish
    loadingText.textContent = "Loading...";
    imagePreview.style.display = "none";

    console.log(file);

    // Fetch orqali rasmni backendga yuborish
    fetch("/backend/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Xatolik yuz berdi.");
        }
        return response.json();
      })
      .then((data) => {
        // Javobni brauzerga chiqarish
        loadingText.textContent = ""; // Loading yozuvi o'chiriladi
        imagePreview.innerHTML = `<img src="${data.imageUrl}" alt="Rasmni ko'rish">`;
        imagePreview.style.display = "block";
        uploadDefaultText.style.display = "none";
      })
      .catch((error) => {
        console.error(error);
        loadingText.textContent = "Xatolik yuz berdi. Qaytadan urinib ko'ring.";
      });
  }
});
