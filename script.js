// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

  // Newsletter Email Validation
  const subscribeBtn = document.querySelector(".sub-btn");
  const emailInput = document.querySelector(".email-address");

  subscribeBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if (!email || !validateEmail(email)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    alert(`Thanks for subscribing with ${email}!`);
    emailInput.value = "";
  });

  // Email Format Validator
  function validateEmail(email) {
    const regex = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
    return regex.test(email);
  }

  // Scroll To Top Button (Optional)
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑";
  scrollBtn.id = "scrollTopBtn";
  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 14px;
    font-size: 18px;
    background-color: #00b6d1;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 1000;
  `;
  document.body.appendChild(scrollBtn);

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});
