/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// generare primo numero random e metterlo nella variabile numUser
const numUser = Math.floor(Math.random() * 6) + 1;

// generare il secondo numero random e metterlo nella variabile numComputer
const numComputer = Math.floor(Math.random() * 6) + 1;

console.log(numUser, numComputer);

/* SE numUser > numComputer
		ha vinto il giocatore
	ALTRIMENTI numComputer > numUser
		ha vinto il computer
	ALTRIMENTI
		pareggio
	FINE SE */

if (numUser > numComputer) {
	console.log('vince il giocatore');
} else if (numComputer > numUser) {
	console.log('vince il computer');
} else {
	console.log('avete pareggiato');
}