const generateBtn = document.querySelector("form button");
const qrCodeBox = document.querySelector(".qr_code");
const qrInput = document.querySelector("form input");
const qrImage = document.querySelector(".qr_code img");

generateBtn.addEventListener("click", () => {
  let qrvalue = qrInput.value;
  if (!qrvalue) {
    return alert("لطفا یک متن یا ادرس رو وارد بکن");
  }
  generateBtn.innerHTML = "در حال دریافت QR code";
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
  qrImage.addEventListener("load", () => {
    qrCodeBox.classList.remove("hidden");
    generateBtn.innerHTML = "تولید QR code";
  });
});
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    qrCodeBox.classList.add("hidden");
  }
});
