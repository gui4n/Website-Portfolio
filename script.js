function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Initialize EmailJS with your Public Key
emailjs.init("AOMoJ3ZN-p9sDtwFV"); // Replace with your actual public key

// Add event listener for form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const serviceID = "service_r6ip1sf"; // Replace with your EmailJS service ID
  const templateID = "template_lcokpf2"; // Replace with your EmailJS template ID

  // Send the form data to EmailJS
  emailjs.sendForm(serviceID, templateID, this)
    .then((response) => {
      document.getElementById("status").innerText = "Message sent successfully!";
      document.getElementById("contact-form").reset(); // Clear the form after sending
    })
    .catch((error) => {
      document.getElementById("status").innerText = "Failed to send message. Please try again later.";
      console.error("Error:", error);
    });
});

