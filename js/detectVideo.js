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
const yechim1 = document.getElementById("yechim1");
const yechim2 = document.getElementById("yechim2");

yechim1.innerHTML = `<h5>Pomidor va kartoshka o'simliklarida tez-tez uchraydigan erta blight Alternaria solani qo'ziqorinidan kelib chiqadi va butun Qo'shma Shtatlarda uchraydi. Semptomlar birinchi navbatda pastki, eski barglarda "buqaning ko'zlari" naqshini tashkil etuvchi konsentrik halqalarga ega kichik jigarrang dog'lar shaklida paydo bo'ladi. Kasallik o'sib ulg'ayganida, u barg yuzasiga tarqalib, sarg'ayadi, quriydi va o'ladi. Oxir-oqibat o'simlikning poyasi, mevasi va yuqori qismi infektsiyalanadi. Ekinlarga jiddiy zarar yetishi mumkin.
Erta blight infektsiyalangan o'simlik to'qimalarida qishlaydi va yomg'ir, sug'orish, hasharotlar va bog' asboblari orqali tarqaladi. Kasallik pomidor urug'larida va kartoshka ildizlarida ham o'tkaziladi. Nomiga qaramay, erta blight o'simlik mavsumining istalgan vaqtida sodir bo'lishi mumkin. Yuqori harorat (80-85˚F) va nam, nam sharoitlar uning tez tarqalishiga yordam beradi. Ko'p hollarda yomon oziqlangan yoki stressli o'simliklar hujumga uchraydi. Optimal o'sish sharoitlarini saqlash, jumladan, to'g'ri o'g'itlash, sug'orish va boshqa zararkunandalarga qarshi kurashish orqali erta blightni kamaytirish mumkin. Keyinchalik pishgan, uzoqroq mavsum navlarini o'stiring. Fungitsidlarni qo'llash faqat kasallik iqtisodiy yo'qotishlarga olib keladigan darajada erta boshlanganida oqlanadi.
Havo aylanishini yaxshilash va qo'ziqorin bilan bog'liq muammolarni kamaytirish uchun o'simliklarni kesing yoki qoziq.
Har bir kesishdan so'ng, Azizillo qaychilarini dezinfeksiya qiling (bir qism oqartgichning 4 qismi suv).
O'simliklar ostidagi tuproqni toza va bog'ning qoldiqlaridan tozalang. Organik kompost qatlamini qo'shing, bu sporalarning o'simliklarga qaytib ketishini oldini oladi.
Barglarning quruq bo'lishiga yordam berish uchun tomchilatib sug'orish va namlash shlanglaridan foydalanish mumkin.
Eng yaxshi nazorat qilish uchun mis asosidagi fungitsidlarni kasallik odatda paydo bo'lishidan ikki hafta oldin yoki ob-havo ma'lumotlari uzoq vaqt nam ob-havoni bashorat qilganda qo'llang. Shu bilan bir qatorda, kasallik birinchi marta paydo bo'lganda davolanishni boshlang va kerak bo'lganda har 7-10 kunda takrorlang.
Mis va piretrinlarni o'z ichiga olgan Bonide® Garden Dust ko'plab hasharotlar hujumlari va qo'ziqorin muammolari uchun xavfsiz, bir bosqichli nazoratdir. Eng yaxshi natijaga erishish uchun barglarning yuqori va pastki qismlarini nozik bir tekis plyonka yoki chang bilan yoping. Barglarning zichligiga qarab, 10 oz 625 kvadrat futni qoplaydi. Zarur bo'lganda, har 7-10 kunda bir marta takrorlang.
SERENADE Garden ko'plab muhim o'simlik kasalliklarini nazorat qilish yoki bostirish uchun tavsiya etilgan keng spektrli, profilaktik biofugitsiddir. Eng yaxshi natijalarga erishish uchun, barg kasalligi rivojlanishidan oldin yoki infektsiyaning birinchi belgisida davolang. 7 kunlik interval bilan yoki kerak bo'lganda takrorlang.
O'rim-yig'imdan keyin barcha bog' qoldiqlarini olib tashlang va yo'q qiling va keyingi yil almashlab ekishni mashq qiling.
Yuqtirilgan o'simlik qismlarini kuydiring yoki sumka.
</h5>`;

yechim2.innerHTML = `<h5>
Pomidor va kartoshka o'simliklarida uchraydi, kech blight Phytophthora infestans qo'ziqorinidan kelib chiqadi va Amerika Qo'shma Shtatlarida keng tarqalgan. Nomiga to'g'ri keladigan bo'lsak, kasallik o'simlik mavsumining oxirida paydo bo'ladi, alomatlar ko'pincha gullashdan keyin paydo bo'lmaydi.

Kech blight birinchi navbatda pastki, eski barglarda suv bilan namlangan, kulrang-yashil dog'lar shaklida paydo bo'ladi. Kasallikning etukligi bilan bu dog'lar qorayadi va pastki qismida oq qo'ziqorin o'sishi hosil bo'ladi. Oxir-oqibat, butun o'simlik infektsiyalanadi. Ekinlarga jiddiy zarar yetishi mumkin

Boshqa qo'ziqorin kasalliklaridan farqli o'laroq, bu o'simlik muammosi tuproqda yoki bog 'axlatida qishlamaydi. Buning o'rniga sporlar infektsiyalangan ildiz, transplantatsiya yoki urug'lar tomonidan kiritiladi. Shamol ham kasallikni yaqin atrofdagi bog'lardan olib keladi. Issiq harorat (70-80˚F) va nam, nam sharoitlar uning tez tarqalishiga yordam beradi.

Agar mavjud bo'lsa, o'simliklarga chidamli navlar.
Ekishdan oldin ko'ngillilarni bog'dan olib tashlang va ko'p miqdorda havo aylanishini ta'minlash uchun kosmik o'simliklarni bir-biridan uzoqroq tuting.
Erta tongda sug'oring yoki kun davomida o'simliklar qurib qolishiga vaqt berish uchun shlanglardan foydalaning - yuqoridan sug'orishdan saqlaning.
O'rim-yig'imdan keyin barcha pomidor va kartoshka qoldiqlarini yo'q qiling (qarang: kuzgi bog'ni tozalash).
Agar alomatlar kuzatilsa, o'simliklarni quyidagi fungitsidlardan biri bilan davolang:

Kuchli yomg'irdan keyin yoki kasallik miqdori tez o'sib borayotganda, har 7 kunda yoki undan kamroq vaqt ichida mis asosidagi fungitsidni (2 oz / gallon suv) qo'llang. Iloji bo'lsa, qo'llashdan keyin kamida 12 soat quruq ob-havo bo'lishi uchun vaqtni qo'llang.
Barglardan purkagich sifatida ishlatiladigan Organocide® Plant Doctor butun o'simlik bo'ylab zamburug'li muammolar paydo bo'lishining oldini olish va mavjud ko'plab muammolarni bartaraf etish uchun ishlaydi. 2 osh qoshiq / gallon suv aralashtiriladi va transplantatsiya paytida yoki to'g'ridan-to'g'ri ekilgan ekinlar 2-4 haqiqiy bargda, keyin esa kasallik bilan kurashish uchun 1-2 hafta oralig'ida püskürtülür.
SERENADE Garden bilan qo'ziqorin bilan bog'liq muammolarni xavfsiz davolang. Ushbu keng spektrli biofugitsid Bacillus subtilisning patentlangan shtammidan foydalanadi va organik foydalanish uchun tasdiqlangan. Eng muhimi, SERENADE asalarilar va foydali hasharotlar uchun mutlaqo toksik emas.
Monterey® All Natural Disease Control - bu o'simlik barglarining ko'p kasalliklarini nazorat qiluvchi tabiiy ingredientlarning ishlatishga tayyor aralashmasi. Kasallikning barcha bosqichlari nazorat qilinadi, ammo infektsiyadan oldin qo'llash eng yaxshi natijalarni beradi.
</h5>`;

// Foydalanuvchidan rasmni yuklash uchun fayl tanlashini kuzatish
fileInput.addEventListener("change", function () {
  yechim2.style.display = "none";
  yechim1.style.display = "none";
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
    loadingText.style.display = "flex";
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
        loadingText.style.display = "none"; // Loading yozuvi o'chiriladi
        resultText.innerText = `${data.class}`;
        resultFoiz.innerText = `${data.confidence}%`;
        imagePreview.style.display = "block";
        uploadDefaultText.style.display = "none";

        if (data.class.toLowerCase() == "late blight") {
          yechim2.style.display = "block";
        }

        if (data.class.toLowerCase() == "early blight ") {
          yechim1.style.display = "block";
        }
      })
      .catch((error) => {
        console.error(error);
        loadingText.style.display = "flex";
        loadingText.textContent = "Xatolik yuz berdi. Qaytadan urinib ko'ring.";
      });
  }
});
