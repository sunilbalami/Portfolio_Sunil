$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    //tooggle menubar/navbar  script
    $('.menu-btn').click(function(){
        $('.navbar .nav').toogleClass("active");
        $('.menu-btn i').toogleClass("active");

    });
});