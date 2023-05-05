$(document).ready(function(){
    $('.hide-image').hide()
    $('.show-image').mouseover(function(){
        $(this).hide()
        $(this).siblings('img').show()
    })
    $('.hide-image').mouseout(function(){
        $(this).hide()
        $(this).siblings('img').show()
    })
    $('.hide-this-1, .hide-this-2 ').hide()
    $('.click-here').click(function(){
      $('.hide-this').show()
      $('.hide-this-1, .hide-this-2').hide()
    })
    $('.click-here-1').click(function(){
      $('.hide-this-1').show()
      $('.hide-this-2, .hide-this').hide()
    })
    $('.click-here-2').click(function(){
      $('.hide-this-2').show()
      $('.hide-this, .hide-this-1').hide()
    })
    $('.change-lang').click(function(){
        var attr = $(this).attr('lang');
        if(attr == "Armenian"){
            $(".title").text("Տուն")
            $(".title1").text("Հավաքածու")
            $(".title2").text("Խանութ")
            $(".title3").text("Բլոգ")
            $(".title4").text("Էջեր")
            $(".title5").text("Մեր Մասին")
            $(".title6").text("Կապնվել մեր հետ")
        }else if(attr == "Russian"){
            $(".title").text("Дом")
            $(".title1").text("Коллекция")
            $(".title2").text("Магазин")
            $(".title3").text("Блог")
            $(".title4").text("Страница")
            $(".title5").text("О нас")
            $(".title6").text("Звони нас")
        }else{  
            $(".title").text("Home")
            $(".title1").text("Collection")
            $(".title2").text("Shop")
            $(".title3").text("Blog")
            $(".title4").text("Pages")
            $(".title5").text("About Us")
            $(".title6").text("Contact Us")
        }
    })

    $(".animate-top").click(function(){
        var gotoheader = $("header").offset().top;
       
        $("html, body").animate({
            scrollTop:gotoheader
        }, 100);
    })
    $(".animate-down").click(function(){
      var gotoSec1 = $(".section-1").offset().top;
      $('html, body').animate({
        scrollTop: gotoSec1
      }, 200)
    });
    $(window).scroll(function(){ 
        $('.section').each(function(){ 
          var x = $(window).scrollTop() + $(window).height(); 
          var y = $(this).offset().top + $(this).height(); 
          if(x >= y){ 
            $(this).addClass('active-sec') 
          }

          var a = $('.animate-top');
          if($(document).scrollTop() > 200){
            a.show()
           }else{
            a.hide()
           }
        }) 
      })
      $('.plus-btn').click(function(){
        $(".hide-info").slideToggle('slow')
      })
      $('.plus-btn1').click(function(){
        $(".hide-service").slideToggle('slow')
      })  
       $('.plus-btn2').click(function(){
        $(".hide-extras").slideToggle('slow')
      })  
       $('.plus-btn3').click(function(){
        $(".hide-contact").slideToggle('slow')
      })
      var cont = $("#hide-cont");
      cont.hide()
      $('.images li').on('click', 'img', function(){
        cont.fadeIn(200)
        var imgURL = $(this).attr('src');
        $("#mainBIGImg").fadeIn(200, function(){
          $(this).attr('src', imgURL)
        })
      })
      
      $('.close').click(function(){
        cont.hide()
      })
      $('.click-btn').click(function(){
        $('.click-btn').removeClass('active-btn')
        $(this).addClass('active-btn')
      })

})





