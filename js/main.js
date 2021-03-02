function verifyN(num, numss) {
    console.log(num);
    for (i = 0; i < numss.length; i++) {

        if (num == numss[i]) {
            return true;
        }

    }

    return false;
}

function game(ng, ngm) {
    var nums = [];
    var numInseriti = [];
    var numDaInserire = [];
    var v;
    var punti = 0;

    //assegnazione valori random e verifica di ripetizione.
    for (i = 0; i < ngm; i++) {

        do {
            nums[i] = Math.floor(Math.random() * ng) + 1;
            v = 0;

            for (ii = 0; ii < i; ii++) {

                if (nums[i] == nums[ii]) {
                    v = 1;
                }

            }

        } while (v == 1);

    }

    console.log(nums);

    for (j = 0; j < ng - ngm; j++) {
        console.log(j);
        //seconda verifica inserimento valori corretti e ripetizione piu' alert con info su valori da inserire rimanenti.
        do {
            numInseriti[j] = prompt('Inserire un numero da 1 a ' + ng + '.') * 1;
            v = 0;

            for (jj = 0; jj < j; jj++) {
                
                if (numInseriti[j] == numInseriti[jj]) {
                    alert("Hai gia' inserito questo valore numerico!");
                    var numDaInserire = [];

                    for (jjj = 1; jjj <= ng; jjj++) {
                        v = 0;

                        for (jjjj = 0; jjjj <= numInseriti.length; jjjj++) {

                            if (jjj == numInseriti[jjjj]) {
                                v = 1;
                            }

                        }

                        if (v == 0) {
                            numDaInserire.push(jjj);
                        }

                    }

                    alert("Puoi inserire i valori numerici: " + numDaInserire + ".");
                    v = 1;
                } 
    
            }
        
            if ((numInseriti[j] < 1) || (numInseriti[j] > ng) || (isNaN(numInseriti[j]))) {
                alert("Il valore numerico inserito e' incorretto! Deve essere un valore numerico tra 1 e " + ng + "!");
                v = 1;
            }
        
        } while (v == 1);
        
        if (verifyN(numInseriti[j], nums)) {
            alert('Hai perso.');
            console.log(numInseriti);
            return punti;
        } 
        
         punti += 1;
    }
    
    alert('Hai vinto!');
    console.log(numInseriti);
    return punti;
}


//inizio
var numGame, numGameMine;

var lv = prompt("Inserire il livello di gioco desiderato, da 0 a 2. Inserire 999 per personalizzare il livello di gioco. Nel caso venisse digitato un valore numerico diverso, il livello assegnato di default e' 0.") * 1;

switch (lv) {
     case 0:
        numGame = 100;
        numGameMine = 16;
        break;

    case 1:
        numGame = 80;
        numGameMine = 16;
        break;

    case 2:
        numGame = 50;
        numGameMine = 16;
        break;

    case 999:

        do {
            numGame = prompt("Digita il numero di valori numerici che vuoi inserire. Per non compromettere l'esperienza di gioco, il valore da digitare non deve essere minore di 10 e maggiore di 500. Piu' e' grande il valore che digiti, piu' punti potresti fare!") * 1;
        } while ((numGame < 10) || (numGame > 500));

        do {
            numGameMine = prompt("Digita il numero di mine che vuoi piantare nel gioco. Ricorda che il numero di mine deve essere minore di " + numGame + ".") * 1;
        } while (numGameMine > numGame - 1);

        break;

    default:
        numGame = 100;
        numGameMine = 16;
}

alert('Punti: ' + game(numGame, numGameMine) + '.');