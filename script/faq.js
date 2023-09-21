const faqs = document.querySelectorAll('.faq_faq_header');

faqs.forEach( faq => {
    faq.addEventListener('click', (e) => {
        const faqBody = faq.parentNode.childNodes[3];
        faqBody.classList.toggle('faq_active');
    })
})
