"use strict";
console.log('app.ts');
/* Muutujad */
// tere
const mT6ene = true;
let mV22r = false;
//mT6ene = false;
mV22r = true;
{
    // text
}
const mNumber = -15.5;
const mNumber1 = 0xFFD2;
const mS6ne = "Tere Maailm";
const mS6ne1 = 'Tere Maailm';
const mS6ne2 = `Tere Maailm`;
const mMassiiv = [1, 2, 3, 5, 321]; // 0, 1, 2, 3, 4
mMassiiv[1] = 26;
const mMassiiv1 = [1, 2, 3, 5, 321];
const mMassiiv2 = [1, 2, 3, 5, 321];
// mMassiiv2[1] = 26;
/* V2ljendused */
const vNumber = (4 + 2) * mNumber / Math.pow(2, 3);
console.log(vNumber);
const vMod = 19 % 5;
console.log(vMod);
const vRand = Math.random() * 10;
const vS6ne = `Tere Maailm` + ` Maailm`;
const vS6ne2 = `Tere Maailm ${vS6ne} ${vNumber}`;
const vS6ne3 = 'Tere \n Maailm';
const vS6ne4 = `Tere
Maailm`;
// tingimus operaator
// === !== > < >= <=
const vBool = vNumber > 25 ? true : false;
const vNumber1 = vNumber > 25 ? vNumber : 25;
/* Tingimuslaused */
// && || !(x===y)
if (vNumber > 25) {
    console.log(`Suurem väärtus on ${vNumber1}`);
}
else if (vNumber < 25 || !vBool) {
    console.log(`Suurem väärtus on kindlasti ${vNumber1}`);
}
else {
    console.log(`Suurem väärtus on järelikult ${vNumber1}`);
}
/* Tsükklid */
let tTingimus = 0;
while (tTingimus < 10) {
    //tTingimus = tTingimus + 2;
    // += -= *= /=
    tTingimus += 2;
    if (tTingimus > 4 && tTingimus < 8) {
        console.log(`Tingimus on suurem kui 4`);
        continue; // break;
    }
    //tTingimus = tTingimus + 1;
    // ++ --
    tTingimus--;
}
let tMassiiv = [2, 7, 4, 74, 63, 4];
for (let index = 0; index < tMassiiv.length; ++index) {
    console.log(tMassiiv[index]);
}
/* Funktsioonid */
const funk = (parameeter) => parameeter + 12;
const funk2 = (parameeter) => {
    // ....
    return parameeter + 12;
};
function funk3(parameeter) {
    // ...
    return parameeter + 12;
}
funk2(12);
funk2(12);
console.log(funk2(12));
/* Klassid */
class KKoer {
    constructor(nimi, vanus) {
        this.peaSynnip2eva = () => {
            this.vanus++;
        };
        this.kysiNimi = () => {
            console.log(this.nimi);
            return this.nimi;
        };
        this.kysiVanus = () => {
            console.log(this.vanus);
            return this.vanus;
        };
        this.nimi = nimi;
        this.vanus = vanus;
    }
}
const koer1 = new KKoer(`Jaks`, 2);
koer1.kysiNimi();
const koer2 = new KKoer(`Rex`, 3);
koer2.kysiNimi();
koer2.peaSynnip2eva();
koer2.kysiVanus();
//# sourceMappingURL=app.js.map