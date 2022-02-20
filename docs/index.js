$title = $(".title");
$subTitle = $(".sub-title");
$mainText = $(".main-text");
$button = $(".button");
$logo = $(".logo");
$icons = $(".icons");

$title.hide();
$subTitle.hide();
$mainText.hide();
$button.hide();


window.onload = function() {
    setTimeout(function() {
        $title.slideDown(1000);
    }, 500);
    setTimeout(function() {
        $subTitle.show(1000);
    }, 700);
    setTimeout(function() {
        $mainText.show(1000);
    }, 900);
    setTimeout(function() {
        $button.slideDown(1000);
    }, 1500);
        
    setTimeout(function() {
        AOS.init();
    }, 2000);
}
