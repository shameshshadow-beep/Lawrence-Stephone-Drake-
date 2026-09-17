document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Newsletter form
    const newsletterForm = document.getElementById("newsletterForm");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("newsletter").value;

            if (email) {
                alert("Thank you for subscribing to Lawrence Stephone Drake.");
                newsletterForm.reset();
            }
        });
    }
});

// Donation buttons
function handleDonation(amount) {
    const donationAmount = Number(amount);

    if (!donationAmount || donationAmount <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    alert(
        "Thank you for supporting Lawrence Stephone Drake. " +
        "Donation selected: $" +
        donationAmount.toFixed(2)
    );
                          }
