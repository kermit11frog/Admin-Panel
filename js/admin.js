var close_side_btn = $('#close-side-btn');
var sidebar = $('.sidebar');
var usernameInput = $('.msg span');
var logoutBtn = $('#logout');
var darkBack = $('.dark-background');

close_side_btn.addEventListener('click', () => {
	sidebar.classList['toggle']('close');
});

let cookies = document.cookie.split(';');
let cookie = cookies.find(cok => {
	return cok.indexOf('login=') === 0;
});

if (!cookie) {
	window.location = 'file:///C:/Users/iman/Desktop/Front%20Resume%20Projects/Admin%20Panel/login.html';
} else {
	let username = cookie.substring(6);
	var i = 0;
	var writeUsername = setInterval(() => {
	usernameInput.innerText += username[i];
	i++;
	if (!username[i]) {
		clearInterval(writeUsername);
			i = 0;
		}
	}, 200);
		logoutBtn.onclick = e => {
		document.cookie = `login=${username};expires=Wed, 06 Nov 2020 04:42:51 GMT`;
		window.location = 'file:///C:/Users/iman/Desktop/Front%20Resume%20Projects/Admin%20Panel/login.html';
	};
}

darkBack.onclick = () => {
	sidebar.classList['remove']('close');
};