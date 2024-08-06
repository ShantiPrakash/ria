
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
            const scaleValue = Math.max(0.5, 1 - scrollPosition / 1000); // Adjust the divisor to control the scaling speed
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

var speed = 29;

/* Call this function with a string containing the ID name to
 * the element containing the number you want to do a count animation on.*/
function incEltNbr(id) {
  elt = document.getElementById(id);
  endNbr = Number(document.getElementById(id).innerHTML);
  endNbr = 100;
  incNbrRec(0, endNbr, elt);
}

/*A recursive function to increase the number.*/
function incNbrRec(i, endNbr, elt) {
  if (i <= endNbr) {
    elt.innerHTML = i;
    setTimeout(function() {//Delay a bit before calling the function again.
      incNbrRec(i + 1, endNbr, elt);
    }, speed);
  }
}

/*Function called on button click*/
function incNbr(){
  incEltNbr("nbr");
}

incEltNbr("nbr"); /*Call this funtion with the ID-name for that element to increase the number within*/
