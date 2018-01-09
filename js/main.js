 /* $("#imenu").click(function(){
 	$(".menu-hamburguesa ul").toggle("fast","linear");
 	$( ".menu-hamburguesa i" ).removeClass("fa-bars" ).addClass( "fa-times icon2" );
 });
 */
 $("#imenu").click(function(){
 	$(".menu-hamburguesa ul").slideToggle();
 	$("i").toggleClass('fa-bars fa-times icon2');
 });
  
        
     