let scrollUp = document.getElementById('goUp');

window.addEventListener('scroll', function() {
    // const header = document.querySelector('.header');
    if (window.scrollY > 10) {

        scrollUp.style.display = 'flex';
        scrollUp.style.opacity = '1';
        
        // scrollUp.classList.add('scrolled');
    } else {
        // scrollUp.classList.remove('scrolled');
        scrollUp.style.opacity = '0';
        scrollUp.style.display = 'none';
    }
});

// ANIMATION COUNTING

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
// //   VALUE ONE
//   const objOne = document.getElementById("valueOne");
//   animateValue(objOne, 1000, 3600, 1000);
// //   VALUE TWO
//   const objTwo = document.getElementById("valueTwo");
//   animateValue(objTwo, 1, 18, 1000);
// //   VALUE Three
//   const objThree = document.getElementById("valueThree");
//   animateValue(objThree, 100, 489, 1000);

document.addEventListener("DOMContentLoaded", function() {
    const objOne = document.getElementById("valueOne");
    const objTwo = document.getElementById("valueTwo");
    const objThree = document.getElementById("valueThree");
    const objFour = document.getElementById("valueFour");
    const objFive = document.getElementById("valueFive");
    const objSix = document.getElementById("valueSix");
    const objSeven = document.getElementById("valueSeven");

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 1 // Trigger when 50% of the element is in view
    };

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'valueOne') {
                    animateValue(objOne, 1000, 3600, 2500);
                } else if (entry.target.id === 'valueTwo') {
                    animateValue(objTwo, 1, 18, 1000);
                } else if (entry.target.id === 'valueThree') {
                    animateValue(objThree, 100, 489, 2500);
                } else if (entry.target.id === 'valueFour') {
                    animateValue(objFour, 0, 16, 2500);
                } else if (entry.target.id === 'valueFive') {
                    animateValue(objFive, 100, 840, 2500);
                } else if (entry.target.id === 'valueSix') {
                    animateValue(objSix, 0, 99, 2500);
                } else if (entry.target.id === 'valueSeven') {
                    animateValue(objSeven, 0, 5, 100);
                }
                // Unobserve the element after animation
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    observer.observe(objOne);
    observer.observe(objTwo);
    observer.observe(objThree);
    observer.observe(objFour);
    observer.observe(objFive);
    observer.observe(objSix);
    observer.observe(objSeven);
    // observer.observe(objThree);
});


// FOR DECIMALS
