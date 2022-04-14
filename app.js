
const qrcode = document.getElementById("qrcode");
const textInput = document.querySelector("input");

const qr = new QRCode(qrcode);
qr.makeCode(textInput.value.trim());

textInput.oninput = (e) => {
    qr.makeCode(e.target.value.trim());
};