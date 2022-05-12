$(document).ready(function(){
	$("#form").validate({
		rules: {
			nombre: {
				required: true
			},
			apaterno: {
				required: true
			},
			amaterno: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			nombre: {
				required: "Favor de introduzcir su nombre"
			},
			apaterno: {
				required: "Favor de introduzcir su apellido paterno"
			},
			amaterno: {
				required: "Favor de introduzcir su apellido materno"
			},
			email: {
				required: "Favor de introduzcir un correo electronico",
				email: "Favor de introduzcir un correo con formato correo@dirc.algo"
			}
		}
	});
});


$(document).ready(function(){
  $("button").click(function () {       
    $.post(
      "alta.php", { 
        nombre: $('input[name=nombre]').val(), 
        apaterno:   $('input[name=apaterno]').val(),
        amaterno:   $('input[name=amaterno]').val(),
        email:   $('input[name=email]').val()
      },
      function(data, status){alert("Datos: "+data+"\nEstatus: "+status);
  		}
    );
    
  });
});