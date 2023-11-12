var adminUsers = [
	{first_name: 'Aryan', last_name: '', username: 'kermitfrog123', password: '1234'},
	{first_name: 'Aryan', last_name: '', username: 'amirhossein', password: '1234'},
	{first_name: 'Aryan', last_name: '', username: 'mohammad', password: '1234'},
];

alert('username: kermitfrog123, password: 1234\nusername: amirhossein, password: 1234\nusername: mohammad, password: 1234');

function checkLog() {
	var cookies = document.cookie.split(';');
	var log = false;
	cookies.forEach((cok) => {
		if (cok.indexOf('login') === 0) {
			log = true;
		}
	});
	if (log) {
		return true;
	} else {
		return false;
	}
}

var isLoggedIn = checkLog();

if (isLoggedIn) {
	window.location = 'file:///C:/Users/iman/Desktop/Front%20Resume%20Projects/Admin%20Panel/admin.html';
}

$('form').addEventListener('submit', (e) => {
	e.preventDefault();
	var username = $('input')[0].value;
	var password = $('input')[1].value;
	let user = adminUsers.find(user => {
		return user.username === username;
	});
	if (user) {
		if (password === user.password) {
			var d = new Date();
			d.setTime(d.getTime() + (1 * 365 * 24 * 60 * 60 * 1000));
			document.cookie = `login=${user.username};expires=${d.toUTCString()}`;
			$('form button').disabled = 'true';
			showMessage('s', 'you logged in !');
			setTimeout(() => {
				window.location = 'file:///C:/Users/iman/Desktop/Front%20Resume%20Projects/Admin%20Panel/admin.html';
			}, 5000);
		} else {
			showMessage('e', 'password is wrong !');
		};
	} else {
		showMessage('e', 'user not found !');
	};
});