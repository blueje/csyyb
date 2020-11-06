$(document).ready(function(){
						   

$(".nav ul li").hover(
		function(){
		$(this).find("ol").show();
			},
		function(){
		$(this).find("ol").hide();
			}
		);
$(".kxdh").hover(
		function(){
		$(this).find("ol").show();
			},
		function(){
		$(this).find("ol").hide();
			}
		);


$(".dicd").hover(
		function(){
		$(this).find("div").show();
			},
		function(){
		$(this).find("div").hide();
			}
		);

$(".kxdh_ol_div").hover(
		function(){
		$(this).find("div.kxdh_body").show();
		$(this).css({"padding-right":"0px"});
		$(this).css({"background-color":"#fff"});
			},
		function(){
		$(this).find("div.kxdh_body").hide();
		$(this).css({"padding-right":"0px"});
		$(this).css({"background-color":"#f65354"});
			}
		);
$(".nav ol li").hover(
		function(){
		$(this).css({"background-color":"#31a3e3"});
			},
		function(){
		$(this).css({"background-color":"#4CBAF7"});
			}
		);

$(".car_zplbny li").hover(
		function(){
		$(this).css({"background-color":"#31a3e3"});
			},
		function(){
		$(this).css({"background-color":"#FFFFFF"});
			}
		);
//$(".ind_cpzs_lb2 li").hover(
//		function(){
//		$(this).find("img").css({"background-color":"#e0e0e0"});
//		$(this).find("img").css({"border":"#0075BA solid 1px"});
//			},
//		function(){
//		$(this).find("img").css({"background-color":"#FFFFFF"});
//		$(this).find("img").css({"border":"#CCC solid 1px"});
//			}
//		);
$(".sub_piclist li").hover(
		function(){
		//$(this).css({"background-color":"#e0e0e0"});
		$(this).css({"border":"#0075BA solid 1px"});
			},
		function(){
		//$(this).css({"background-color":"#FFFFFF"});
		$(this).css({"border":"#c5c5c5 solid 1px"});
			}
		);

$(".sub_piclistpxkc li").hover(
		function(){
		//$(this).css({"background-color":"#e0e0e0"});
		$(this).css({"border":"#0075BA solid 1px"});
			},
		function(){
		//$(this).css({"background-color":"#FFFFFF"});
		$(this).css({"border":"#363636 solid 1px"});
			}
		);

$(".sub_piclistszll li").hover(
		function(){
		//$(this).css({"background-color":"#e0e0e0"});
		$(this).css({"border":"#0075BA solid 1px"});
			},
		function(){
		//$(this).css({"background-color":"#FFFFFF"});
		$(this).css({"border":"#363636 solid 1px"});
			}
		);


$(".sub_piclistsszp li").hover(
		function(){
		//$(this).css({"background-color":"#e0e0e0"});
		$(this).css({"border":"#0075BA solid 1px"});
			},
		function(){
		//$(this).css({"background-color":"#FFFFFF"});
		$(this).css({"border":"#363636 solid 1px"});
			}
		);

$(".news_list_title h2").hover(
		function(){
			$(this).addClass("news_list_title_hover");
			$(this).siblings().removeClass("news_list_title_hover");
			var $dangqian = $(".news_list_box").eq($(".news_list_title h2").index(this)); 
		    $dangqian.addClass("showdiv"); 
		    $dangqian.siblings().removeClass("showdiv"); 
			}
		);


$(".main_box li i").css({"opacity":"0.3"});
$(".main_box li p").css({"opacity":"1"});
$(".main_box li").hover(
		function(){
			$(this).find("i").css({"opacity":"0.7"});
			},
		function(){
			$(this).find("i").css({"opacity":"0.3"});
			}		
			);
 


//图片鼠标经过

//	$(".sbjg").hover(
//			function(){
//				$(this).css({"border":"#F00 solid 1px"});
//				},
//			function(){
//				$(this).css({"border":"#999 solid 1px"});
//				}
//			);

	$(".car_zp ul li").hover(
			function(){
				$(this).find(".sbjg").css({"border":"#F00 solid 1px"});
				},
			function(){
				$(this).find(".sbjg").css({"border":"#999 solid 1px"});
				}
			);
	
	$("#zitixiao").click(
			function(){
				$("#zitida").addClass("t4"); 
		    	$("#zitixiao").removeClass("t4"); 
				$(".ny_nr").css({"font-size":"16px"});
				}
			);
	$("#zitida").click(
			function(){
				$("#zitixiao").addClass("t4"); 
		    	$("#zitida").removeClass("t4"); 
				$(".ny_nr").css({"font-size":"18px"});
				}
			);
	
	
	$(function(){
	$(window).resize(function(){goTop();});
	$(window).scroll(function(){goTop();});
	});
	function goTop(){
	$(".piaofu").stop().animate({"top":($(window).height()+$(window).scrollTop()-($(window).height()+$(".piaofu").height())/2)<620 ? 620 : 
	
	$(window).height()+$(window).scrollTop()-($(window).height()+$(".piaofu").height())/2},620);
	}
	
	
	$("#myCont > div:not(:first)").hide();   //查找编号是myCont内的所有DIV将除第一个DIV外的隐藏
			var myLi = $("#myTop > ul > li");           //查找编号是myCont内的所有ul，再在ul找所有的li
				var myDiv =$("#myCont > div");
			myLi.each(function(i){                            //循环
			$(this).mouseover(function(){
			myLi.removeClass("hover");
			$(this).addClass("hover");
			myDiv.hide();
			myDiv.eq(i).show();                         //取对应的现实出来(i就是对应前面的function(i))
			})
			})
	
});

function lbajax(divc){
	$("."+divc).show();
	}
	
function lbajax2(divc){
	$("."+divc).hide();
	}