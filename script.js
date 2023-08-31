document.addEventListener("DOMContentLoaded", function() 
{
    const welcomeMessage = document.getElementById("welcome-message");
    const userName = "Evandika Nazwansyah"; // Replace with actual user's name
    welcomeMessage.textContent = `Hi ${userName}`;

    document.getElementById("message-form").addEventListener("submit", function(event) {
        event.preventDefault();
      
        const name = document.getElementById("name").value;
        const birthdate = document.getElementById("birthdate").value;
        const gender = document.getElementById("gender").value;
        const message = document.getElementById("message").value;
      
        // Mengisi elemen-elemen output dengan nilai dari form
        document.getElementById("output-name").textContent = name;
        document.getElementById("output-birthdate").textContent = birthdate;
        document.getElementById("output-gender").textContent = gender;
        document.getElementById("output-message").textContent = message;
      
        // Menampilkan output container
        const outputContainer = document.getElementById("output-container");
        outputContainer.style.display = "block";
      });
      
});
