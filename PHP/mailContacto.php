 <?php
    $destino = 'info@tourlibre.com';
    $nombre = $_POST["nombre"];
    $remitente = $_POST["remitente"];
    $mensaje = $_POST["mensaje"];
    $contenido = "Nombre:" .$nombre . "\nRemitente:" .$remitente . "\nMensaje:" .$mensaje;
    mail($destino, "Contacto", $contenido);
    header("Location:..HTML/contacto.html");

 
