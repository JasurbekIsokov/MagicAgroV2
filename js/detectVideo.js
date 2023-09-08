var myVideo = document.getElementById("detectVideo");

myVideo.addEventListener("ended", function () {
  myVideo.play();
});

// upload image
// HTML elementlarni tanlash
const fileInput = document.getElementById("file-input");
const imagePreview = document.getElementById("image-preview");
const resultText = document.getElementById("resultText");
const resultFoiz = document.getElementById("resultFoiz");
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
    formData.append("file", file);

    // Loading stavatkasini ko'rsatish
    loadingText.textContent = "Loading...";
    imagePreview.style.display = "none";

    console.log(file);

    // Fetch orqali rasmni backendga yuborish
    fetch("https://umidbekrustamov.jprq.live/predict", {
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
        console.log(data);
        // Javobni brauzerga chiqarish
        loadingText.textContent = ""; // Loading yozuvi o'chiriladi
        resultText.innerHTML = `${data.class}`;
        resultFoiz.innerHTML = `${data.confidence}`;
        imagePreview.style.display = "block";
        uploadDefaultText.style.display = "none";
      })
      .catch((error) => {
        console.error(error);
        loadingText.textContent = "Xatolik yuz berdi. Qaytadan urinib ko'ring.";
      });
  }
});
