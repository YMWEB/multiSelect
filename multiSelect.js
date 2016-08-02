(function($){
	"use strict"

		var MultiSelect = function(element,options){
			this.$element = $(element);

		};
		MultiSelect.prototype = {
			
			init:function(){
				
				var root=this.$element;
					
				var selfvalue= root.find("input").text();
				root.find('li').on('click',function(){
					
					root.find("input").val(selfvalue + $(this).text());
				})
				root.find('li').hover(function(){
					$(this).css({
					"background":"#eee",
					"color":"#fff"
					});
				},function(){
					$(this).css({
						"background":"#fff",
						"color":"black"
					})

				})	
			},

			error:function(){
				//errorMesssage();
			}
			
			}


	$.fn.multiSelect= function(){
		var option = arguments[0],
		args = arguments;	

			return this.each(function(){
				var $this = $(this),
				data = $(this).data('multiselect'),
				options = $.extend({},$.fn.multiSelect.defaults,$this.data(),typeof option === 'object' && option);

				if(!data){
					$this.data('multiselect',(data = new MultiSelect(this,options)));
					
				}

				if(typeof option ==="string"){
					data[option](arg[1]);
				}else{
					data.init();
				}
			})
				
			};



			$.fn.multiSelect.defaults={

			};

			$.fn.errorMesssage = function(){
				console.log('error!');
				
			};


$(function(){
	$(".multi-select").multiSelect(this);
})

})(jQuery)