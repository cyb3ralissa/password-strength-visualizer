// Select input and feedback elements
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");

// Listen for input changes
passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    let strength = 0;

    // Check password rules
    if (password.length >= 8) strength++; // At least 8 characters
    if (/[A-Z]/.test(password)) strength++; // Has uppercase
    if (/[a-z]/.test(password)) strength++; // Has lowercase
    if (/[0-9]/.test(password)) strength++; // Has numbers
    if (/[^A-Za-z0-9]/.test(password)) strength++; // Has symbols

    // Update feedback
    switch (strength) {
        case 0:
        case 1:
            feedback.textContent = "Weak ❌";
            feedback.style.color = "red";
            break;
        case 2:
        case 3:
            feedback.textContent = "Medium ⚠️";
            feedback.style.color = "orange";
            break;
        case 4:
        case 5:
            feedback.textContent = "Strong ✅";
            feedback.style.color = "green";
            break;
    }
});
