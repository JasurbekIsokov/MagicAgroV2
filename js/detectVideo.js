var myVideo = document.getElementById("detectVideo");

myVideo.addEventListener("ended", function () {
  myVideo.play();
});

// upload image
// HTML elementlarni tanlash
const fileInput = document.getElementById("file-input");
const imagePreview = document.getElementById("image-preview");
const skeletonImage = document.getElementById("skeleton-image");

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

    // Axios orqali rasmni backendga yuborish
    axios
      .post("/backend/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // Javobni brauzerga chiqarish
        loadingText.textContent = ""; // Loading yozuvi o'chiriladi
        imagePreview.innerHTML = `<img src="${response.data.imageUrl}" alt="Rasmni ko'rish">`;
        imagePreview.style.display = "block";
      })
      .catch((error) => {
        console.error(error);
        loadingText.textContent = "Xatolik yuz berdi. Qaytadan urinib ko'ring.";
      });
  }
});

// Kamera tugmasi bosilganda
cameraButton.addEventListener("click", function () {
  // Kamera orqali rasm olish
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      const video = document.createElement("video");
      video.srcObject = stream;
      video.onloadedmetadata = function (e) {
        video.play();
        // Rasm olish va backendga jo'natish
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext("2d");
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(
          function (blob) {
            const formData = new FormData();
            formData.append("image", blob);
            // Backendga yuborish
            axios
              .post("/backend/upload", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
              .then((response) => {
                // Javobni brauzerga chiqarish
                loadingText.textContent = ""; // Loading yozuvi o'chiriladi
                imagePreview.innerHTML = `<img src="${response.data.imageUrl}" alt="Rasmni ko'rish">`;
                imagePreview.style.display = "block";
              })
              .catch((error) => {
                console.error(error);
                loadingText.textContent =
                  "Xatolik yuz berdi. Qaytadan urinib ko'ring.";
              });
          },
          "image/jpeg",
          0.95
        );
      };
    })
    .catch(function (error) {
      console.error(error);
      loadingText.textContent = "Kamera foydalanilishi rad etildi.";
    });
});
