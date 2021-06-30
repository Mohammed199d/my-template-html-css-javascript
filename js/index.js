$(function(){
	// nav bar check
	

	$(window).resize(function(){
		
		if($(window).width() <= 767){
		$('.navbar .container .links').height($(window).height() - 100);
		$('.navbar .container .links').width($(window).width());
		}
	
		/*console.log($(window).width());*/
		

	});
	$('.navbar .container .btn').click(function(){
		$('.navbar .container .links').toggleClass('block');
	});
	


	// adjust header height

	var myheader = $(".header");
	myheader.height($(window).height());
	$(window).resize(function(){
		myheader.height($(window).height());
		$('.bx-viewport li').each(function(){
		$(this).css("paddingTop",($(window).height() - $(this).height()) /2 );

	});
	});

	// links add active class
/*	$(".links li a").click(function(){
		$(this).addClass("active");$
		(this).siblings().removeClass("active");
	});*/

	// trigger bx-slider
	$('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true
});
	$('.bx-viewport li').each(function(){
		$(this).css("paddingTop",($(window).height() - $(this).height()) / 2 - 100 );

	});
	
	/*$(".bxslider").width($(window).width());
	$(".bxslider").resize(function(){
		$(".bxslider").width($(window).width());
	});*/
	// Smooth scroll to div
	$(".links li a").click(function(){
		$("html , body").animate({
		scrollTop:$("#" + $(this).data("value")).offset().top
		
		}, 1000);
	});


	// auto slider code
	(function autoslider(){
		$('.slider .active').each(function(){
			if(!$(this).is(':last-child')){
				$(this).delay(3000).fadeOut(1000,function(){
					$(this).removeClass("active").next().addClass("active").fadeIn();
					autoslider();
				});
			}
			else{
				$(this).delay(3000).fadeOut(1000,function(){
					$(this).removeClass('active');
					$('.slider div').eq(0).addClass('active').fadeIn();
					autoslider();
				});
			}
		});

	}());


	

});


// add and remoce class active 
let a = document.querySelectorAll(".links li a");



a.forEach(ancher =>{
	ancher.onclick = (e)=>{


	a.forEach(a =>{
		a.classList.remove("active");
	});
	ancher.classList.add("active");
}
});


// add and remove class active 

let li = document.querySelectorAll(".Our-Project ul li");
let art =document.querySelectorAll(".Our-Project .gallery .art ");

li.forEach(a =>{
	a.onclick =function(e){
	e.preventDefault();
	li.forEach( l=>{
		l.classList.remove("active");
	});



	e.target.classList.add("active");


	const filter = e.target.dataset.filter;

	

	
		art.forEach(b =>{


		if(filter == "all"){
			b.style.display="block";
		}else{


			if(b.dataset.filter == e.target.dataset.filter ){

				b.style.display="block";

			}else{
				b.style.display="none";
			}
		}
			
		});

	};	
});





