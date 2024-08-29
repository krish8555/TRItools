let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQRCode() {
  const text = qrText.value.trim();
  if (text.length > 0) {
    // Generate the QR code URL using quickchart.io
    qrImage.src = "https://quickchart.io/qr?text=" + encodeURIComponent(text);
    imgBox.classList.add("show-img");
    // Enable the download button after generating the QR code
    document.getElementById("down").disabled = false;
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
    // Disable the download button if no QR code is generated
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
        a.download = "qr_code.png"; // Specify the filename for the download
        a.style.display = "none"; // Hide the anchor element
        document.body.appendChild(a); // Add the anchor element to the DOM
        a.click(); // Trigger the download
        document.body.removeChild(a); // Remove the anchor element from the DOM
        URL.revokeObjectURL(url); // Clean up the object URL
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

// Disable the download button initially
document.getElementById("down").disabled = true;
