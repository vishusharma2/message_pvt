function showNextCard(cardNumber) {
    // Hide all cards first
    document.querySelectorAll(".card").forEach(card => {
        card.style.display = "none";
    });

    // Show the selected card
    const nextCard = document.getElementById(`card${cardNumber}`);
    if (nextCard) {
        nextCard.style.display = "block"; // or "flex", depending on your card layout
    }
}


function sendResponse(userResponse) {
    // Prepare the data to send
    const templateParams = {
        user_response: userResponse, // Captures the response (YES or NO)
    };

    // Call EmailJS's send method
    emailjs.send('service_6pezi2g', 'template_3ibi981', templateParams, 'Fy1qc9177ft5CMZmJ')
        .then(function (result) {
            // Success callback
            alert('Thank you! Your response has been recorded.');
            console.log('Email sent successfully:', result);
        })
        .catch(function (error) {
            // Error callback
            alert('Oops! Something went wrong. Please try again.');
            console.error('EmailJS Error:', error);
        });
}
