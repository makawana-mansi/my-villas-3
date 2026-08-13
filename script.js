const bookingForm = document.querySelector(".booking1");
if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let checkin = document.getElementById("checkin").value;
        let checkout = document.getElementById("checkout").value;
        let guests = document.getElementById("guests").value;
        let room = document.getElementById("rooms").value;

        if (!checkin || !checkout) {
            alert("lease select check-in and check-out dates.");
            return;
        }

        let bookingWhatsAppMessage = `🏨 New Villa Booking Request\n\n📅 Check-in Date: ${checkin}
        📅 Check-out Date: ${checkout}
        👥 Guests: ${guests}
        🏡 Room: ${room}`;

        let bookingWhatsAppURL = `https://wa.me/919316009175?text=${encodeURIComponent(bookingWhatsAppMessage)}`;

        window.open(bookingWhatsAppURL, "_blank");
    });
}
