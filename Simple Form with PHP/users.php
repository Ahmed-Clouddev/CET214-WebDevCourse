<?php
require_once 'connect.php';

echo '<h2>Registered Users</h2>';

try {
	$stmt = $pdo->query("SELECT id, name, email FROM form ORDER BY id DESC");
	$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
	if ($users) {
		echo '<table border="1" cellpadding="5"><tr><th>ID</th><th>Name</th><th>Email</th></tr>';
		foreach ($users as $user) {
			echo '<tr>';
			echo '<td>' . htmlspecialchars($user['id']) . '</td>';
			echo '<td>' . htmlspecialchars($user['name']) . '</td>';
			echo '<td>' . htmlspecialchars($user['email']) . '</td>';
			echo '</tr>';
		}
		echo '</table>';
	} else {
		echo '<p>No users found.</p>';
	}
} catch (PDOException $e) {
	echo '<p>Error: ' . htmlspecialchars($e->getMessage()) . '</p>';
}

echo '<br><a href="index.html">Back to Form</a>';
?>
