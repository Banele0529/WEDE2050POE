
// ======================================
// XPRESSO CAFE - CONTACT PAGE JAVASCRIPT
// ======================================


// CAFE EMAIL ADDRESS
const cafeEmail = "info@xpressocafe.co.za";


// ======================================
// ENQUIRY FORM VALIDATION
// ======================================

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();
            return;
        }

        const name = document.getElementById("enquiryName").value.trim();

        const email = document.getElementById("enquiryEmail").value.trim();

        const phone = document.getElementById("enquiryPhone").value.trim();

        const type = document.getElementById("enquiryType").value;

        const message = document.getElementById("enquiryMessage").value.trim();


        // DISPLAY DYNAMIC RESPONSE

        const response = document.getElementById("enquiryResponse");

        response.textContent =
            "Thank you, " + name + "! Your enquiry about " + type +
            " has been prepared. Please email us at " + cafeEmail +
            " for current prices and availability.";

        response.classList.add("success-message");


        // PREPARE ENQUIRY EMAIL

        const subject = "Xpresso Cafe - " + type + " Enquiry";

        const body =
            "ENQUIRY DETAILS\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phone + "\n" +
            "Enquiry Type: " + type + "\n\n" +
            "Message:\n" + message;


        const mailLink =
            "mailto:" + cafeEmail +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);


        // OPEN EMAIL APPLICATION

        const emailButton = document.createElement("a");

        emailButton.href = mailLink;

        emailButton.textContent = "Open Email to Send Enquiry";

        emailButton.className = "email-link";

        response.appendChild(document.createElement("br"));

        response.appendChild(emailButton);

        enquiryForm.reset();

    });

}



// ======================================
// GENERAL CONTACT FORM VALIDATION
// ======================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = document.getElementById("contactName").value.trim();

        const email = document.getElementById("contactEmail").value.trim();

        const phone = document.getElementById("contactPhone").value.trim();

        const type = document.getElementById("messageType").value;

        const message = document.getElementById("contactMessage").value.trim();


        // CREATE EMAIL SUBJECT AND BODY

        const subject = "Xpresso Cafe - " + type;

        const body =
            "GENERAL CONTACT MESSAGE\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + (phone || "Not provided") + "\n" +
            "Message Type: " + type + "\n\n" +
            "Message:\n" + message;


        const mailLink =
            "mailto:" + cafeEmail +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);


        // DISPLAY SUCCESS MESSAGE

        const response = document.getElementById("contactResponse");

        response.textContent =
            "Thank you, " + name +
            "! Your message is ready. Select the button below to open your email application and send it.";

        response.classList.add("success-message");


        // CREATE EMAIL BUTTON

        const emailButton = document.createElement("a");

        emailButton.href = mailLink;

        emailButton.textContent = "Open Email to Send Message";

        emailButton.className = "email-link";

        response.appendChild(document.createElement("br"));

        response.appendChild(emailButton);

    });

}