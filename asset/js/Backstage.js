$(document).ready(function() {
				$(".header_logo").show();

				$(".btn-mobile-sidenav .nav-bar ").on("click", function() {
					if($(this).hasClass("nav-bar-animate")) {
						$(this).removeClass("nav-bar-animate");
						$(".contianer_leftMenu").removeClass("contianer_leftMenu_animate")
					} else {
						$(this).addClass("nav-bar-animate");
						$(".contianer_leftMenu").addClass("contianer_leftMenu_animate")
					}
				});
				$(".btn-mobile-sidenav2 .nav-bar").on("click",function(){
					if($(".application_wrap").hasClass("showApplication")){
						$(".application_wrap").removeClass("showApplication")
					}else{
						$(".application_wrap").addClass("showApplication")
					}
				})
				$(".hasSubMenu").on("click", function() {
					if($(this).hasClass("open")) {
						$(this).removeClass("open active");
						$("." + $(this).attr("open-url")).removeClass("show");
					} else {
						$(this).addClass("open active");
						$("." + $(this).attr("open-url")).addClass("show");
					}
				});
				
				$(".header-menu-item img,.header-menu-item2 img").on('click',function(e){
					e.stopPropagation();
					if($(".header_tips_wrap").css("display")==="none"||$(".header_tips_wrap").css("display")==undefined){
						$(".header_tips_wrap").show();
					}else{
						$(".header_tips_wrap").hide();
					}
				});
				$(".header_tips_wrap").on('click',function(e){
					e.stopPropagation();
				})
				$(document).on("click",function(){
					$(".header_tips_wrap").hide();
				})
			})