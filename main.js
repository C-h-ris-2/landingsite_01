const faqHeaders = document.querySelectorAll(".faqs-cont .faq-header");

faqHeaders.forEach((header,i) => {
    header.addEventListener("click", () => {
        header.nextElementSibling.classList.toggle("active");

        const open = header.querySelector(".op");
        const close = header.querySelector(".cl");

        if(header.nextElementSibling.classList.contains("active")){
            open.classList.remove("active");
            close.classList.add("active");
        } else{
            open.classList.add("active");
            close.classList.remove("active");
        }
    });
});