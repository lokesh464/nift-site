console.log('this is my js');

var popup = document.getElementsByClassName("select-qualities");

popup[0].addEventListener('click', function () {
    document.getElementsByClassName("popup-container")[0].classList.add("active");
    var blur = document.getElementById('blur');
    blur.classList.add('blurred');
});

var exit = document.getElementsByClassName("popup-close-btn");
exit[0].addEventListener("click", function () {
    document.getElementsByClassName("popup-container")[0].classList.remove("active");
    var blur = document.getElementById('blur');
    blur.classList.remove('blurred');

});


