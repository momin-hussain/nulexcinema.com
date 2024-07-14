const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const dots = document.querySelectorAll('.dot');

// Counter
let counter = 0;

// Update active dot
function updateDots() {
    dots.forEach((dot, index) => {
        if (index === counter) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Move to the next slide
function nextSlide() {
    counter++;
    if (counter >= carouselImages.length) {
        counter = 0;
    }
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    carouselSlide.style.transform = 'translateX(' + (-carouselImages[0].clientWidth * counter) + 'px)';
    updateDots();
}

// Dot Listeners
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        counter = index;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = 'translateX(' + (-carouselImages[0].clientWidth * counter) + 'px)';
        updateDots();
    });
});

// Initialize the first dot as active
updateDots();

// Set interval for automatic slideshow
setInterval(nextSlide, 12000); // Change slide every 5 seconds



// CARE SECTION JS //
const caresCarouselSlide = document.querySelector('.cares-carousel-slide');
const caresCarouselImages = document.querySelectorAll('.cares-carousel-slide img');
const caresDots = document.querySelectorAll('.cares-dot');

// Counter
let caresCounter = 0;

// Update active dot
function updateCaresDots() {
    caresDots.forEach((dot, index) => {
        if (index === caresCounter) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Dot Listeners
caresDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        caresCounter = index;
        caresCarouselSlide.style.transition = "transform 0.5s ease-in-out";
        caresCarouselSlide.style.transform = 'translateX(' + (-caresCarouselImages[0].clientWidth * caresCounter) + 'px)';
        updateCaresDots();
    });
});

// Initialize the first dot as active
updateCaresDots();


document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('button');
      const menuItems = dropdown.querySelectorAll('.dropdown-item');
  
      menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
          e.preventDefault();
          // Just close the dropdown without changing the button text
          const dropdownInstance = bootstrap.Dropdown.getInstance(button);
          dropdownInstance.hide();
        });
      });
    });
  });

// CARES SECTION
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter-number');

    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / 200;

            if (count < target) {
                counter.innerText = `${Math.ceil(count + increment)}`;
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});

// JAVA SCRIPT SUBMIT

    document.getElementById('booking-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById('name').value.trim();
        const contact = document.getElementById('contact').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const tickets = document.getElementById('tickets').value.trim();
        const movie = document.getElementById('movie').value.trim();
        const date = document.getElementById('date').value.trim();
        const time = document.getElementById('time').value.trim();

        let popupMessage = '';

        if (name && contact && email && address && tickets && movie && date && time) {
            popupMessage = 'The details will be sent to your email';
        } else {
            popupMessage = 'Please fill out the form';
        }

        // Show the popup
        const popup = document.getElementById('popup');
        const popupMessageElement = document.getElementById('popup-message');
        popupMessageElement.textContent = popupMessage;
        popup.style.display = 'flex';

        // Close the popup
        document.getElementById('closePopup').addEventListener('click', function() {
            popup.style.display = 'none';
        });
    });