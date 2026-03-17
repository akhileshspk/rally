// shared-assets.js

const brandName = "Rally";
const primaryColor = "#ee6c4c";

// 1. Navigation HTML
const navHTML = `
<nav style="display: flex; justify-content: space-between; align-items: center; padding: 20px 5%; background: #FFFFFF; border-bottom: 1px solid #E2E8F0;">
    <a href="index.html" style="font-size: 1.2rem; font-weight: 800; color: #0F172A; text-decoration: none; display: flex; align-items: center; gap: 10px;">
        <i class="fa-solid fa-chart-line" style="color: ${primaryColor};"></i>${brandName}
    </a>
    <div style="display: flex; gap: 20px; align-items: center;">
        <div class="learning-paths" style="display: none; gap: 15px; font-size: 0.9rem; font-weight: 600;">
            <a href="index.html#fundamentals" style="text-decoration: none; color: #64748B;">Fundamentals</a>
            <a href="index.html#commodities" style="text-decoration: none; color: #64748B;">Commodities</a>
        </div>
        <a href="#newsletter-footer" style="background: ${primaryColor}; color: white; text-decoration: none; padding: 8px 18px; border-radius: 6px; font-weight: 600; font-size: 0.9rem;">Subscribe to Newsletter</a>
    </div>
</nav>`;

// 2. Newsletter HTML
const newsletterHTML = `
<section id="newsletter-footer" style="background: #F8FAFC; padding: 60px 20px; text-align: center; margin-top: 60px; box-sizing: border-box;">
    <div style="max-width: 600px; margin: 0 auto; box-sizing: border-box;">
        <i class="fa-regular fa-envelope-open" style="font-size: 2.5rem; color: ${primaryColor}; margin: 0 0 20px 0; padding: 0; display: block;"></i>
        
        <h2 style="font-size: 2rem; color: #0F172A; margin: 0 0 10px 0; padding: 0; padding-bottom: 0; border: none; line-height: 1.2;">Stay Ahead of the Market</h2>
        
        <p style="color: #64748B; margin: 0 0 30px 0; padding: 0; line-height: 1.5;">Get the latest insights on trading.</p>
        
        <form id="newsletterForm" style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin: 0; padding: 0;">
            <input type="email" id="emailInput" placeholder="Enter your email" required 
                   style="padding: 12px 20px; border: 1px solid #E2E8F0; border-radius: 8px; flex: 1; min-width: 250px; font-family: 'Inter'; outline: none; box-sizing: border-box; margin: 0;">
            <button type="submit" style="background: ${primaryColor}; color: white; border: none; padding: 12px 30px; border-radius: 8px; font-weight: 600; cursor: pointer; box-sizing: border-box; margin: 0;">
                Subscribe
            </button>
        </form>
        <p id="responseMessage" style="margin: 15px 0 0 0; padding: 0; font-size: 0.9rem; font-weight: 500; min-height: 24px; line-height: 1.5;"></p>
    </div>
</section>`;

// Inject into page
document.addEventListener("DOMContentLoaded", () => {
    // Inject Nav (replaces any existing <nav> tag)
    const existingNav = document.querySelector("nav");
    if (existingNav) existingNav.outerHTML = navHTML;

    // Inject Newsletter (adds before <footer>)
    const footer = document.querySelector("footer");
    if (footer) footer.insertAdjacentHTML("beforebegin", newsletterHTML);

    // Initialize Newsletter Logic
    initNewsletter();
});

// 3. Validation & Submit Logic
function initNewsletter() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('emailInput').value.trim();
        const msg = document.getElementById('responseMessage');

        // VALIDATION SCRIPT
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            msg.innerText = "Please enter a valid email address.";
            msg.style.color = "#DC2626";
            return;
        }

        msg.innerText = "Subscribing...";
        msg.style.color = "#64748B";

        try {
            const response = await fetch('https://www.webtoolsbackend.com/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            });

            if (response.ok) {
                msg.innerText = "Welcome to the Rally community!";
                msg.style.color = "#059669";
                document.getElementById('emailInput').value = "";
            } else {
                msg.innerText = "Subscription failed. Please try again.";
                msg.style.color = "#DC2626";
            }
        } catch (error) {
            msg.innerText = "Connection error. Is the backend running?";
            msg.style.color = "#DC2626";
        }
    });
}