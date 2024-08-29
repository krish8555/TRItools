let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQRCode() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

// const downloadLinks = document.querySelectorAll("[download-link]");
// downloadLinks.forEach((button) => {
//   const id = button.dataset.download;
//   const img = document.getElementById(id);
//   const a = document.createElement("a");
//   a.href = img.src;
//   a.download = "";
//   a.style.display = "none";
//   button.addEventListener("click", () => {
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   });
// });
function downloadQRCode() {
  const qrImageElement = document.getElementById("qrImage");
  const a = document.createElement("a");
  a.href = qrImageElement.src;
  a.download = "qr_code.png";
  a.style.display = "none";
  document.body.appendChild(a);

  // Use a timeout to delay the click, allowing the user to see the QR code
  setTimeout(() => {
    a.click();
    document.body.removeChild(a);
  }, 500); // Adjust the timeout as needed
}
