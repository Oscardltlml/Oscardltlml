<?php
// Configuración de la base de datos
$host = "localhost";
$usuario = "root";
$contrasena = "";
$base_datos = "contacto";

// Conexión a la base de datos
$conexion = new mysqli($host, $usuario, $contrasena, $base_datos);

// Verificar conexión
if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
}

// Verificar si el formulario fue enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los valores del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Sentencia SQL utilizando una consulta preparada
    $stmt = $conexion->prepare("INSERT INTO mensajes (nombre, email, mensaje, fecha) VALUES (?, ?, ?, NOW())");
    $stmt->bind_param("sss", $nombre, $email, $mensaje);

    // Ejecutar la consulta
    if ($stmt->execute()) {
        echo "Mensaje enviado exitosamente";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Cerrar la sentencia
    $stmt->close();
}

// Cerrar la conexión
$conexion->close();
?>
