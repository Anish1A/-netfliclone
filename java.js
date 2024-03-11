function toggleFAQ(event) {
  const faqTitle = event.target;
  const faqContent = faqTitle.nextElementSibling;

  if (faqContent.style.display === "block") {
    faqContent.style.display = "none";
    faqTitle.querySelector("i").classList.remove("fa-minus");
    faqTitle.querySelector("i").classList.add("fa-plus");
  } else {
    faqContent.style.display = "block";
    faqTitle.querySelector("i").classList.remove("fa-plus");
    faqTitle.querySelector("i").classList.add("fa-minus");
  }
}