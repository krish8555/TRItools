let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQRCode() {
  const text = qrText.value.trim();
  if (text.length > 0) {
    qrImage.src = "https://quickchart.io/qr?text=" + encodeURIComponent(text);
    imgBox.classList.add("show-img");
    document.getElementById("down").disabled = false;
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
    document.getElementById("down").disabled = true;
  }
}

async function downloadQRCode() {
  const qrImageElement = document.getElementById("qrImage");
  if (qrImageElement.src) {
    try {
      const response = await fetch(qrImageElement.src);
      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "qr_code.png";
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else {
        alert("Failed to download QR code image.");
      }
    } catch (error) {
      console.error("Error fetching the QR code image:", error);
      alert("Error downloading QR code image.");
    }
  } else {
    alert("Please generate a QR code first.");
  }
}

document.getElementById("down").disabled = true;
