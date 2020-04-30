  let checkboxDark = document.querySelector('#dark'),
	labelDark = document.querySelector('.label-mod');
 let darkcs;
 let litecs;

  labelDark.addEventListener('click', () => {
	if (!checkboxDark.checked) {
		darkcss = document.createElement('link');
		darkcss.rel = 'stylesheet';
		darkcss.href = './main2.css';
		let head = document.querySelector('head');
		head.append(darkcss);
		console.log(darkcss);
	}
	else {
		darkcss = document.createElement('link');
		darkcss.rel = 'stylesheet';
		darkcss.href = './main.css';
		let head = document.querySelector('head');
		head.append(darkcss);
		console.log(darkcss);
	}
 })
