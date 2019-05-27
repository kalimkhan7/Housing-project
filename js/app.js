/**
 * plays video on click
 * @param {object} event 
 */
function playVideo(event) {
    event.preventDefault();
    var video = document.querySelector("video");
    var playButton = document.querySelector(".playVideo");
    playButton.style.display = "none";
    video.play();

}


var noOfItems = 1;

/**
 * increase the quantity 
 */
function increase() {
    noOfItems++;
    document.querySelector("#quantity").innerText = noOfItems;
}

/**
 * decrease the quantity 
 */
function decrease() {
    if (noOfItems > 1) {
        noOfItems--;
    }
    document.querySelector("#quantity").innerText = noOfItems;
}


/**
 * update the number of items in cart
 */
function addToCart() {
    var cartElements = document.querySelectorAll(".cartQuantity span");
    cartElements.forEach(function (cartElement) {
        var cartQuantity = +cartElement.innerText;
        cartQuantity = cartQuantity + noOfItems;
        cartElement.innerText = cartQuantity;
    })


}

/**
 * apply star rating on hover and click
 * @param {object} item 
 */
function rating(item) {
    var count;
    count = item.id;
    for (i = 0; i <= 4; i++) {
        if (i < count) {
            document.getElementById(i + 1).style.color = "#ffd300";
        }
        else {
            document.getElementById(i + 1).style.color = "#000";
        }
    }


}


/**
 * Select the colour of the product
 */
$(document).ready(function () {
    $('.color span').click(function () {
        $(this).addClass('fa-check-circle');
        $(this).removeClass('fa-circle');
        $(this).siblings('.fa-check-circle').removeClass('fa-check-circle');
        $(this).siblings('.fas').addClass('fa-circle');
    })
})



window.addEventListener('scroll', selectSection);



/**
 * Update the Side Text and Select Navigation Item on scroll
 */
function selectSection() {

    var sideBarItems = document.querySelectorAll('#sideBar .nav-item a');
    var altNavItems = document.querySelectorAll('.altNav li');
    var sections = document.querySelectorAll('section'); 
    var sidetext = document.querySelector(".sideText h3");

    for (let index = 0; index < sections.length; index++) {
        if (sections[index].offsetTop <= window.pageYOffset) {
            sideBarItems.forEach((link) => link.classList.remove('sideBarSelected'));
            sideBarItems[index].classList.add('sideBarSelected');
            sidetext.innerText = sections[index].getAttribute('data-section-active');
            altNavItems.forEach((link) => link.classList.remove('altNavSelected'));
            altNavItems[index].classList.add('altNavSelected');
            altNavItems.forEach((link) => link.classList.remove('altNavSelected'));
        }
    }
}


window.addEventListener('scroll', animate);

/**
 * Animations
 */
function animate() {
    var sections = document.querySelectorAll('.slide');
   
    sections.forEach(section => {
        const slideInAt = (window.pageYOffset + window.innerHeight) - section.offsetHeight;
        const atTheSection = slideInAt > section.offsetTop;
       
        const playButton = document.querySelector('.playVideo');
        console.log(playButton);
        if (atTheSection) {
            let overlay = section.querySelector('.animationOverlay');
            console.log(overlay);
            overlay.style.cssText = "left: 100%;width: 0;";
            playButton.style.opacity = '1';
        }
    });
}








