document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.circle');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = target / 200; // Adjust this value for speed

        function updateCount() {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        }

        updateCount();
    });
});



window.addEventListener('scroll', function() {
    var fadeIns = document.querySelectorAll('.features-grid-item');
    fadeIns.forEach(function(element) {
        var top_of_element = element.offsetTop;
        var bottom_of_element = element.offsetTop + element.offsetHeight;
        var bottom_of_screen = window.scrollY + window.innerHeight;
        var top_of_screen = window.scrollY;

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !element.classList.contains('is-visible')) {
            element.classList.add('is-visible');
        }
    });
});
