
        /* $(function () { 
            $(window).scroll(function () {
                if ($(this).scrollTop() > 1000) { 
                    $('.navbar-brand-img img').attr('src','img/logo/half.png');
                }
                if ($(this).scrollTop() < 1000) { 
                    $('.navbar-brand-img img').attr('src','img/logo/full.png');
                }
            })
        }); */
        window.addEventListener('scroll', function() {
            const image = document.querySelector('.scalable-image');
            const scrollPosition = window.scrollY;
            const scaleValue = Math.max(0.3, 1 - scrollPosition / 1000); // Adjust the divisor to control the scaling speed
            image.style.transform = `scale(${scaleValue})`;
        });
    


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(function() {
            loader.style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 1000); // Match this duration with the CSS transition duration
    }, 5000); // 5000 milliseconds = 5 seconds
});