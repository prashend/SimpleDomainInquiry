document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("inquiryForm");
  if (form && typeof FORM_TOKEN !== "undefined") {
    form.action = `https://formsubmit.co/${FORM_TOKEN}`;
  }


  const domainName = window.location.hostname;

  const domainText = document.getElementById("domainText");
  if (domainText) domainText.textContent = domainName;

  const domainField = document.getElementById("domainField");
  if (domainField) domainField.value = domainName;

  const referrerField = document.getElementById("referrerField");
  if (referrerField) referrerField.value = document.referrer || "Direct Visit";

  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const nextField = document.getElementById("nextField");
  if (nextField) {

    const nextURL = `https://${domainName}/thanks.html?return=https://${domainName}`;
    nextField.value = nextURL;
  }


  const returnLink = document.getElementById("returnLink");
  if (returnLink) {
    const params = new URLSearchParams(window.location.search);
    const returnUrl = params.get('return') || '/';
    returnLink.href = returnUrl;
    returnLink.textContent = returnUrl;
  }
});
