"use strict"
$(document).ready(function(){
	
	$('body').on('click','a', function(event){

		event.preventDefault();

		var montrer = $(this).attr('href');

		$('.para').hide();
		
		$(montrer).show();

		if(montrer == '#contact'){

			$('.modalDialog').show();

			$('#close').on('click', function(){

			$('.modalDialog').hide();

		});


		} else {
			$('.para').hide();

			$(montrer).show()
		};
	});

	/*var yolo = function (champ, cible, json){
		var boogie = champ;
		var aziz = Mustache.to_html(boogie, json);
		$(cible).html(aziz);
	}*/

	$.getJSON('https://s.idsympa.com/u-21.json', function(data){

		var template = $('#template').html();

		Mustache.parse(template);

		var rendered = Mustache.render(template, data);

		$('body').html(rendered);
	});
		/*yolo("{{first_name}}",$('span[elt="first_name"]'),data);
		yolo("{{last_name}}",$('span[elt="last_name"]'),data);
		yolo("{{occupation}}",$('span[elt="occupation"]'),data);
		yolo("{{id}}",$('span[elt="id"]'),data);
		yolo("{{contact.email}}",$('span[elt="email"]'),data);
		yolo("{{contact.website}}",$('span[elt="website"]'),data);




	});*/

	});


		



	/*var result =$('[elt]')
	for (var m=0; m<result.length; m++){
		var attribut =$(result[m]).attr('elt');
		var value = data[attribut];
		$(result[m]).html(value);

	}

});,*/