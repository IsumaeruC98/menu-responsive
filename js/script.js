var d_menu = document.getElementById('menu');
var altura = menu.offsetTop;

window.addEventListener('scroll',function() {
	if(window.pageYOffset > altura) {
		d_menu.classList.add('fixed');
	} else {
		d_menu.classList.remove('fixed');
	}
});

function activar() {
	var m_nav = document.getElementById('opciones');

	if (m_nav.className === "menu") {
		m_nav.classList.add('menu_p');
	} else {
		m_nav.classList.remove('menu_p');
	}
}