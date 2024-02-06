function sendMessage() {
    var message = document.getElementById("messageInput").value;

    // Check if the message is not empty before sending
    if (message.trim() !== "") {
        // Send the message using AJAX to a PHP script
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "send_email.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // Clear the input field after successful sending
                document.getElementById("messageInput").value = "";
                alert("Message sent successfully!");
            }
        };
        xhr.send("message=" + encodeURIComponent(message));
    } else {
        alert("Please enter a message before sending.");
    }
}
