let inputImage = document.getElementById("main-img");
let imgContainer = document.getElementById("img-container");
let mainEditableImg = document.getElementById("img-main");
let imgUploader = document.getElementById("img-uploader");
let pannerSettingHandeler = document.getElementById("panner-setting-handeler");
let settingMainPannel = document.getElementById("settings");
let settingPannel = document.getElementById("setting-pannel");
let loaderBody = document.getElementById("loader")

let notificationBar = document.getElementById("notificationBar")
let notificationText = document.getElementById("notificationText ")



// filter








// notification function 


const notification = (text = "hello", time = 2000, type = "success") => {
  notificationBar.style.left = "1%";
  notificationText.innerText = text;

  if (type == "success") {
    notificationBar.style.borderRight = "10px solid green";
  } else {
    notificationBar.style.borderRight = "10px solid red";
  }

  setTimeout(() => {
    notificationBar.style.left = "-100%";
  }, time);
};









// all image control settings
let brightness = document.getElementById("Brightness");
let contrast = document.getElementById("Contrast");
let saturation = document.getElementById("Saturation");
let grayscale = document.getElementById("Grayscale");
let invert = document.getElementById("Invert");
let sepia = document.getElementById("Sepia");
let blurr = document.getElementById("Blur");

// Function to update image filters
function updateImageFilter() {
    mainEditableImg.style.filter = `
        brightness(${brightness.value || 100}%)
        contrast(${contrast.value || 100}%)
        saturate(${saturation.value || 100}%)
        grayscale(${grayscale.value || 0}%)
        invert(${invert.value || 0}%)
        sepia(${sepia.value || 0}%)
        blur(${blurr.value || 0}px)
    `;
}

// Image upload event
inputImage.addEventListener("change", () => {
    let imgObj = inputImage.files[0];
    if (!imgObj) return;
    let imgUrl = URL.createObjectURL(imgObj);
    mainEditableImg.src = imgUrl;

    imgUploader.style.display = "none";
    imgContainer.style.display = "block";
});


pannerSettingHandeler.addEventListener("click", () => {
    settingMainPannel.style.display = "block";
});

settingMainPannel.addEventListener("click", () => {
    settingMainPannel.style.display = "none";
});


settingPannel.addEventListener("click", (e) => {
    e.stopPropagation();
});


[brightness, contrast, saturation, grayscale, invert, sepia, blurr].forEach((slider) => {
    slider.addEventListener("input", updateImageFilter);
});

// set timeput
window.addEventListener("load", () => {
  
    loaderBody.style.display = "flex";
   
    setTimeout(() => {
        loaderBody.style.display = "none";
        document.querySelector(".main-container").style.display = "block";
    }, 2000);
});







