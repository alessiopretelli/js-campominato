function verifyN(num, numss) {
    console.log(num);
    for (i = 0; i < numss.length; i++) {

        if (num == numss[i]) {
            return true;
        }

    }

    return false;
}

function game(nums, ng) {
    var numInseriti = [];
    var numDaInserire = [];
    var punti = 0;

    for (j = 0; j < ng - 16; j++) {
        console.log(j);
        //seconda verifica inserimento valori corretti e ripetizione piu' alert con info su valori da inserire rimanenti.
        do {
                numInseriti[j] = prompt('Inserire un numero da 1 a ' + ng + '.') * 1;
                var v = 0;
                console.log(numInseriti.length);

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
        
                if ((numInseriti[j] < 1) || (numInseriti[j] > ng)) {
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
         console.log(punti);
    }
    
    alert('Hai vinto!');
    return punti;
}

var nums = [];
var v, numGame;

var lvv = prompt("Inserire il livello di gioco desiderato, da 0 a 2. Nel caso venisse digitato un valore numerico diverso, il livello assegnato di default e' 0.") * 1;

switch (lvv) {
     case 0:
        numGame = 100;
        break;

    case 1:
        numGame = 80;
        break;

    case 2:
        numGame = 50;
        break;

    default:
        numGame = 100;
}

//assegnazione valori e verifica di non ripetizione di valori random.
for (i = 0; i < 16; i++) {

    do {
        nums[i] = Math.floor(Math.random() * numGame) + 1;
        v = 0;

        for (ii = 0; ii < i; ii++) {

            if (nums[i] == nums[ii]) {
                v = 1;
            }

        }

    } while (v == 1);

}

console.log(nums);

alert('Punti: ' + game(nums, numGame) + '.');
