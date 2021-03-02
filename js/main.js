function verifyN(num, numss) {
    for (i = 0; i < numss.length; i++) {

        if (num == numss[i]) {
            return true;
        }

    }

    return false;
}

function schermo(n, ni, g, ig) {
    var sdg = [];
    var dsg = [];

    for (q = 1; q <= g; q++) {
        sdg[q] = q;
    }

    for (z = 1; z <= g; z++) {
        
        for (zzz = 0; zzz < ni.length; zzz++) {

            if (ig == 0) {

                for (zz = 0; zz < n.length; zz++) {

                    if (sdg[z] == n[zz]) {
                        sdg[z] = "☻";
                    }
            
                }
        
            }
            
            if (sdg[z] == ni[zzz]) {
                dsg.push(z);

                if (ig == 1) {
                    
                    for (y = 0; y < dsg.length; y++) {
                        var vi = dsg[y];
                        var vii = dsg[y + 1];
                        var vf = 0;

                        for (x = dsg[y] - 1; x > 0; x--) {
                            for (xx = 0; xx < n.length; xx++) {

                                if (sdg[x] == n[xx]) {
                                    vf += 1;
                                }
                        
                            }
    
                        }

                        if ((dsg[y]) - 1 == vf) {

                            for (yy = dsg[y] - 1; yy > 0; yy--){
                                  
                                sdg[yy] = "☻";

                            }

                        }

                        vf = 0;

                        for (yy = vi + 1; yy < vii; yy++){
                            
                            for (yyy = 0; yyy < n.length; yyy++) {

                                if (sdg[yy] == n[yyy]) {
                                    vf += 1;
                                }

                            }

                        }

                        if ((vii - vi) - 1 == vf) {

                            for (yy = vi + 1; yy < vii; yy++){
                                  
                                sdg[yy] = "☻";

                            }

                        }

                        for (x = dsg[y] + 1; x <= g; x++) {

                            for (xx = 0; xx < n.length; xx++) {

                                if (x == n[xx]) {
                                    vf += 1;
                                }
                        
                            }
    
                        }

                        if ((g - dsg[y]) == vf) {

                            for (yy = dsg[y] + 1; yy <= g; yy++){
                                sdg[yy] = "☻";
                            }

                        }

                    }

                }
                
                sdg[z] = "[" + z + "]";
            } 
            
        }
        
    }
    
    return sdg;
}

function game(ng, ngm) {
        var nums = [];
        var numInseriti = [];
        var v;
        var inGame = 1;
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
            //seconda verifica inserimento valori corretti e ripetizione piu' alert con info su valori da inserire rimanenti.
            do {
                var endGame = [];
                var vff = 0;
                endGame = schermo(nums, numInseriti, ng, inGame);
                console.log(endGame);

                for (k = 1; k <= ng; k++) {

                        if (endGame[k] == "☻") {
                            vff += 1;
                        }

                }

                if (vff == ngm) {
                    alert('Hai vinto!');
                    console.log(numInseriti);
                    inGame = 0;
                    alert(schermo(nums, numInseriti, ng, inGame));
                    return punti;            
                }

                numInseriti[j] = prompt(schermo(nums, numInseriti, ng, inGame)) * 1;
                v = 0;

                for (jj = 0; jj < j; jj++) {
                    
                    if (numInseriti[j] == numInseriti[jj]) {
                        alert("Hai gia' inserito questo valore numerico!");
                        v = 1;
                    } 

                }
            
                if ((numInseriti[j] < 1) || (numInseriti[j] > ng) || (isNaN(numInseriti[j]))) {
                    alert("Il valore numerico inserito e' incorretto! Deve essere un valore numerico tra 1 e " + ng + "!");
                    v = 1;
                }
            
            } while (v == 1);
            
            if (verifyN(numInseriti[j], nums)) {
                alert('Ouch! Hai perso.');
                console.log(numInseriti);
                inGame = 0;
                alert(schermo(nums, numInseriti, ng, inGame));
                return punti;
            } 
            
                punti += 1;
        }

        alert('Hai vinto!');
        console.log(numInseriti);
        inGame = 0;
        alert(schermo(nums, numInseriti, ng, inGame));
        return punti;
}


//inizio
var numGame, numGameMine;
var rematch = 0;

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

while (rematch == 0) {
    alert('Punti: ' + game(numGame, numGameMine) + '.');
    rematch = prompt("Premi INVIO o inserisci 0 per giocare ancora, oppure inserisci qualsiasi altro tasto per abbandonare.") * 1;
}