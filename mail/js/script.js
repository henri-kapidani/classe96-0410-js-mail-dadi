/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

// creaiamo array con un po' di mail (arrEmails)
const arrEmails = [  //zxcv@zxcv.zxcv
	'qwer@qewr.qwer',
	'asdf@asdf.asdf',
	'zxcv@zxcv.zxcv',
	'uiop@uiop.uiop',
	'hjkl@hjkl.hjkl',
	'zxcv@zxcv.zxcv',
	'vbnm@vnnm.vbnm',
];

// chiedere l'email e metterla in emailUser
const emailUser = prompt('Qual e\' la tua mail?');

/* RIPETI finche' e' vero che i < arrEmails.length
		SE emailUser == arrEmails[i]
			stampo che ho trovato la mail
		FINE SE
		incrementare i
	FINE CICLO
*/

let isFound = false;
debugger;
for (let i = 0; i < arrEmails.length && !false; i++) {  // true && true = true
	console.log(arrEmails[i]);
	const emailFromArray = arrEmails[i];
	if (emailUser == emailFromArray) {
		isFound = true;
		// break;
	}
}

if (isFound == true) {
	console.log('email trovata')
} else {
	console.log('email non trovata')
}