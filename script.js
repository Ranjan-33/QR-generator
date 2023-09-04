document.addEventListener('DOMContentLoaded', function () {
  let imgBox = document.getElementById("imgBox");
  let QRimage = document.getElementById("QRimage");
  let qrText = document.getElementById("qrText");

  function generateQR() {
    if (qrText.value.length > 0) {
      QRimage.src =
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

  const qrForm = document.getElementById('qrForm');

  qrForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    generateQR();
  });

  qrText.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      generateQR();
    }
  });
});
