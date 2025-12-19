
<?php
require_once 'connect.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$name = isset($_POST['name']) ? trim($_POST['name']) : '';
	$email = isset($_POST['email']) ? trim($_POST['email']) : '';
	$password = isset($_POST['password']) ? trim($_POST['password']) : '';

	if ($name && $email && $password) {
		try {
			$stmt = $pdo->prepare("INSERT INTO form (name, email, password) VALUES (?, ?, ?)");
			$stmt->execute([$name, $email, $password]);
			echo '<p>User registered successfully!</p>';
		} catch (PDOException $e) {
			echo '<p>Error: ' . htmlspecialchars($e->getMessage()) . '</p>';
		}
	} else {
		echo '<p>All fields are required.</p>';
	}
} else {
	echo '<p>Invalid request.</p>';
}

echo '<a href="index.html">Back to Form</a> | <a href="users.php">View All Users</a>';
?>
