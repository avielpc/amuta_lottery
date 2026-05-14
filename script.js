// פונקציה לבחירת כמות כרטיסים בדף amuta1
function selectTicket(element) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.classList.remove('active'));
    element.classList.add('active');
}

// פונקציות לפלוס ומינוס בדף פרסים
function changeValue(id, amount) {
    const valueElement = document.getElementById(id);
    if(valueElement) {
        let currentValue = parseInt(valueElement.innerText);
        let newValue = currentValue + amount;
        if (newValue >= 0) {
            valueElement.innerText = newValue;
        }
    }
}

// טיפול בשליחת הטופס בדף האחרון (הדמיה)
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("checkoutForm");
    if(form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("תודה רבה! פרטיך התקבלו, קבלה ואישור השתתפות יישלחו אליך למייל.");
            window.location.href = "index.html"; // חזרה להתחלה
        });
    }
});