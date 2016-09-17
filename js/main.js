jQuery(document).ready(function($){
	  // $('.cd-main-content h1').on('click',function(){
	  // 			$(this).addClass('bounceIn');
	 	// });
			


    $('.cd-main-content h1').addClass('bounceIn');
      $('.cd-main-content h2').addClass('bounceIn');

      // $('#weixin').on('click',function(){
      // 	$('.tag').show();
      $('#weixin').hover(
      	function(){
      	$('.tag').show();
      },function(){
      	   	$('.tag').hide();
      });
     


    
	//open the lateral panel
	$('.cd-btn').on('click', function(event){
		event.preventDefault();
		$('.cd-panel').addClass('is-visible');
		$(".search_bar").hide(100);
	});
	//clode the lateral panel
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			$(".search_bar").show(2000);
			event.preventDefault();
		}
	});
});