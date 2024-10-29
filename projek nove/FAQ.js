function sendToWhatsApp() {
    const phoneNumber = "6285736412263"; // Ganti dengan nomor tujuan
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=Halo,%20saya%20${encodeURIComponent(name)}.%20${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, "_blank");
}