function updateStatusDisplay() {
    const currentChoice = localStorage.getItem('cookie-consent-choice');

    const statusSpan = document.getElementById('current-status');

    if (statusSpan) {
        if (currentChoice === 'accept') {
            statusSpan.innerText = "Accepted ✅";
            statusSpan.style.color = "#2ecc71";
        } else if (currentChoice === 'reject') {
            statusSpan.innerText = "Rejected ❌";
            statusSpan.style.color = "#e74c3c";
        } else {
            statusSpan.innerText = "No choice made yet.";
        }
    }
}

function resetConsent() {
    localStorage.removeItem('cookie-consent-choice');
    window.location.href = "/";
}

document.addEventListener('DOMContentLoaded', updateStatusDisplay);