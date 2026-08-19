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

        // Database ma data save karva
        let formData = new FormData();

        formData.append("checkin", checkin);
        formData.append("checkout", checkout);
        formData.append("guests", guests);
        formData.append("room", room);
        formData.append("book", "1");

        fetch("index.php", {
            method: "POST",
            body: formData
        })

            .then(Response => Response.text())
            .then(data => {
                let bookingWhatsAppMessage = `🏨 New Villa Booking Request
                📅 Check-in Date: ${checkin}
                📅 Check-out Date: ${checkout}
                👥 Guests: ${guests}
                🏡 Room: ${room}`;



                let bookingWhatsAppURL = `https://wa.me/919316009175?text=${encodeURIComponent(bookingWhatsAppMessage)}`;

                window.open(bookingWhatsAppURL, "_blank");
            })
            .catch(error => {
                console.log(error);
                alert("Booking failed!");
            });
    });
}
