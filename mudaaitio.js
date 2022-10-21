function tamanho(){
	texto = document.querySelector(`h${num}`);
	texto.style.fontSize = `${tam}em`;
}
function botao(){
	mais = document.createElement('button');
	mais.innerHTML = "+";
	mais.style.width = '4em';
	mais.style.height = '4em';
	mais.style.fontSize = '13px';
	mais.style.color = 'white';
	mais.style.backgroundColor = 'purple';
	mais.addEventListener('click', function () {
		alteraTamanho('+');
	});
	menos = document.createElement('button');
	menos.innerHTML = "-";
	menos.style.width = '4em';
	menos.style.height = '4em';
	menos.style.fontSize = '13px';
	menos.style.color = 'white';
	menos.style.backgroundColor = 'black';
	menos.addEventListener('click', function () {
		alteraTamanho('-');
	});
	texto = document.querySelector(`h${num}`);
	texto.after(mais);
	texto.after(menos);
}
function alteraTamanho(sinal){
	if(sinal == '+' && tam <= 10){
		tam += 1;
		tamanho();
	} else if(sinal == '-' && tam > 1) {
		tam -= 1;
		tamanho();
	}
}
