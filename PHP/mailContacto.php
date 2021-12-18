 <?php
    $destino = 'info@tourlibre.com';
    $nombre = $_Post["nombre"];
    $remitente = $_Post["remitente"];
    $mensaje = $_Post["mensaje"];
    $contenido = "Nombre:" .$nombre . "\nRemitente:" .$remitente . "\nMensaje:" .$mensaje;
    mail($destino, "Contacto", $contenido);
    header("Location:..HTML/contacto.html");

 ?>
