function gerarQRCode() {
    let url = document.getElementById("url").value;
    document.getElementById("qrcode").innerHTML = ""; // Limpa QR Code anterior

    new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 200,
        height: 200
    });
}
