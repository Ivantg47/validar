<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<script src="js/jquery-3.6.0.js"></script>
		<script src="js/jquery.validate.min.js"></script>
		<script src="js/validar.js"></script>
	</head>
	
	<?php
		if(isset($_GET)){
			if($_GET['error']==1){
				echo "Favor de correguir los datos del formulario";
			}
		}
	?>

	<body>
		<p>Favor de ingresar los siguientes datos:</p>
		<form id="form" name="alta" action="alta.php" method="post">
			<label for="nombre">Nombre:</label>
			<input id="nombre" type="text" name="nombre"><br />
			<label for="apaterno">Apellido paterno:</label>
			<input id="apaterno" type="text" name="apaterno"><br />
			<label for="amaterno">Apellido materno:</label>
			<input id="amaterno" type="text" name="amaterno"><br />
			<label for="email">Correo electrónico:</label>
			<input id="email" type="email" name="correo"><br />
			<button>enviar</button>
		</form>
	</body>
</html>