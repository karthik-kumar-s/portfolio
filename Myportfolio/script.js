const header = document.querySelector ("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('active');
};

const sr = ScrollReveal({
  distance: '45px',
  duration: 2700,
  reset: true
})

sr.reveal('.home-text', { delay: 350, origin: 'left' })
sr.reveal('.home-img', { delay: 350, origin: 'right' })

sr.reveal('.sub-service,.about,.projects,.skills,.cta,.experience,.contact', { delay: 200, origin: 'bottom' })

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  contactProject = document.getElementById('contact-project'),
  contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()
  // Check if the field has a value
  if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
    // Add and remove color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')

    // Show message
    contactMessage.textContent = 'Write all the input fields';
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_ioz8t41', 'template_jgguy55', '#contact-form', 'SyHjzLC9X6PBuD2zh')
      .then(() => {
        //show message and add color
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Message sent'

        //remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = ''
        }, 5000)
      }, (error) => {
        alert('OOPS! SOMETHING HAS FAILED...', error)
      })
    //to clear the input field
    contactName.value = ''
    contactEmail.value = ''
    contactProject.value = ''
  }
}
contactForm.addEventListener('submit', sendEmail)

