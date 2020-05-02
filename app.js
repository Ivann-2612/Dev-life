function bgChanger() {
	if (this.scrollY > this.innerHeight / 1.7) {
	document.body.classList.add('bg-active');
}else {
	document.body.classList.remove('bg-active');
}
}
window.addEventListener("scroll",bgChanger);

const changeColor = document.querySelector('.changeColor');
const body = document.querySelector('body');

changeColor.addEventListener('click',function () {
	body.classList.toggle('change');
});
