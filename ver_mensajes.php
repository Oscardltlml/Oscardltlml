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

// Consultar los datos de la tabla mensajes
$sql = "SELECT id, nombre, email, mensaje, fecha FROM mensajes ORDER BY fecha DESC";
$resultado = $conexion->query($sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mensajes Recibidos</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style1.css">
</head>

<body>
    <header>
        <h1>Mensajes Recibidos</h1>
        <nav>
            <a href="index.html">Inicio</a>
            <a href="contacto.html">Contacto</a>
        </nav>
    </header>

    <main class="contenedor sombra">
        <h2>Lista de Mensajes</h2>
        <table border="1" class="tabla-mensajes">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo Electrónico</th>
                    <th>Mensaje</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // Verificar si hay resultados
                if ($resultado->num_rows > 0) {
                    while ($fila = $resultado->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . $fila['id'] . "</td>";
                        echo "<td>" . htmlspecialchars($fila['nombre']) . "</td>";
                        echo "<td>" . htmlspecialchars($fila['email']) . "</td>";
                        echo "<td>" . htmlspecialchars($fila['mensaje']) . "</td>";
                        echo "<td>" . $fila['fecha'] . "</td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='5'>No hay mensajes disponibles</td></tr>";
                }
                ?>
            </tbody>
        </table>
    </main>

    <footer class="footer">
        <p>Todos los derechos reservados. Óscar Omar Aguilera</p>
    </footer>
</body>
</html>

<?php
// Cerrar conexión
$conexion->close();
?>
