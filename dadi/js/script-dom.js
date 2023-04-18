/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const eleBtnPlay = document.querySelector('#btn-play');
const eleScoreUser = document.querySelector('#score-player');
const eleScoreComputer = document.querySelector('#score-computer');
const eleOutput = document.querySelector('#output');

eleBtnPlay.addEventListener('click',
	function() {

		// generare primo numero random e metterlo nella variabile numUser
		const numUser = Math.floor(Math.random() * 6) + 1;

		// generare il secondo numero random e metterlo nella variabile numComputer
		const numComputer = Math.floor(Math.random() * 6) + 1;

		/* SE numUser > numComputer
				ha vinto il giocatore
			ALTRIMENTI numComputer > numUser
				ha vinto il computer
			ALTRIMENTI
				pareggio
			FINE SE */

		let message;
		if (numUser > numComputer) {
			message = 'Hai vinto';
		} else if (numComputer > numUser) {
			message = 'Hai perso';
		} else {
			message = 'Avete pareggiato';
		}

		eleOutput.innerHTML = message;
		console.log(message);

		eleScoreUser.innerHTML = numUser;
		eleScoreComputer.innerHTML = numComputer;
		console.log(numUser, numComputer);
		// condizione ? se vero : se falso
		eleScoreUser.className = message == 'Hai vinto' ? 'green' : 'red';
		eleScoreComputer.className = message == 'Hai vinto' ? 'red' : 'green';
	}
);