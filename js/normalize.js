function $(query) {
	let elements = document.querySelectorAll(query);
	if (elements.length === 1) {
		let elements = document.querySelector(query);
		return elements;
	}
	return elements;
}

function createMessage() {
	if (document.querySelector('.message')) {
		console.error('message is exist');
	} else {
		let message = `
			<div class="message">
				<div class="message__progress">
					<div class="progressbar"></div>
				</div>
				<span class="message__symbol">
					<ion-icon></ion-icon>
				</span>
				<div class="message__content">
					<span class="text text1"></span>
					<span class="text text2"></span>
				</div>
				<span class="message__close">
					<ion-icon name="close-outline"></ion-icon>
				</span>
			</div>
		`;

		$('body').innerHTML += message;
	}
}

function showMessage(type='s', text="empty value") {
	document.querySelector('.message') ? '':createMessage();
	var message = $('.message');
	var messageSymbol = $('.message').querySelector('.message__symbol ion-icon');
	var canShow = true;
	switch (type) {
		default:
			canShow = false;
			break;
		case 's':
			message.classList.add('message--success');
			message.querySelector('.text1').innerText = 'Success';
			messageSymbol.setAttribute('name', 'checkmark-circle');
			break;
		case 'w':
			message.classList.add('message--warning');
			message.querySelector('.text1').innerText = 'Warning';
			messageSymbol.setAttribute('name', 'warning');
			break;
		case 'e':
			message.classList.add('message--error');
			message.querySelector('.text1').innerText = 'Error';
			messageSymbol.setAttribute('name', 'alert-circle');
			break;
		case 'i':
			message.classList.add('message--info');
			message.querySelector('.text1').innerText = 'Info';
			messageSymbol.setAttribute('name', 'information-circle');
	}
	if (canShow) {
		$('.message__close').onclick = e => {message.className = 'message';clearTimeout(fiveSec)};
		message.querySelector('.text2').innerText = text;
		message.classList.add('show');
		var fiveSec = setTimeout(() => {
			message.className = 'message';
		}, 5000);
	} else {
		console.error('please enter correct type: [s, w, e, i]');
	}
};