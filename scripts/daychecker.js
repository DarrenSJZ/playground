// Function to show a simple alert popup
function showAlert(message) {
    alert(message);
}

// Function to show a custom HTML popup
function showCustomPopup(message) {
    // Create popup container
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border: 2px solid #333;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        z-index: 1000;
        font-family: Arial, sans-serif;
        font-size: 16px;
        text-align: center;
        min-width: 200px;
    `;
    
    // Create message
    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageText.style.margin = '0 0 15px 0';
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'OK';
    closeBtn.style.cssText = `
        background: #007bff;
        color: white;
        border: none;
        padding: 8px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
    `;
    
    // Add hover effect
    closeBtn.onmouseover = () => closeBtn.style.background = '#0056b3';
    closeBtn.onmouseout = () => closeBtn.style.background = '#007bff';
    
    // Close popup when button is clicked
    closeBtn.onclick = () => {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    };
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 999;
    `;
    
    // Close popup when clicking overlay
    overlay.onclick = () => {
        document.body.removeChild(popup);
        document.body.removeChild(overlay);
    };
    
    // Add elements to popup
    popup.appendChild(messageText);
    popup.appendChild(closeBtn);
    
    // Add to page
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
}

// Function to show a toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #333;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Fade in
    setTimeout(() => toast.style.opacity = '1', 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            if (toast.parentNode) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

function getDayType() {
    const input = document.getElementById("day_field");
    if (!input) {
        showCustomPopup("Input field not found");
        return;
    }
    const day = String(input.value).trim().toLowerCase();

    switch (day) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
            showCustomPopup("It's a weekday! 📅");
            break;
        case "saturday":
        case "sunday":
            showCustomPopup("It's the weekend! 🎉");
            break;
        default:
            showCustomPopup("Not a day of the week! 🤔");
            break;
    }
}