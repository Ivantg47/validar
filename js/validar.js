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
				required: "Favor de ingresar el nombre"
			}
		}

	});
});