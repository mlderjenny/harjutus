console.log('app.ts');

/* Muutujad */
// tere
const mT6ene: boolean = true;
let mV22r: boolean = false;
//mT6ene = false;
mV22r = true;

{
    // text
}
const mNumber: number = -15.5;
const mNumber1: number = 0xFFD2;
const mS6ne: string = "Tere Maailm";
const mS6ne1: string = 'Tere Maailm';
const mS6ne2: string = `Tere Maailm`;

const mMassiiv: number[] = [1, 2, 3, 5, 321]; // 0, 1, 2, 3, 4
mMassiiv[1] = 26;
const mMassiiv1: Array<number> = [1, 2, 3, 5, 321];
const mMassiiv2: ReadonlyArray<number> = [1, 2, 3, 5, 321];
// mMassiiv2[1] = 26;

/* V2ljendused */
const vNumber = (4 + 2) * mNumber / 2 ** 3;
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
} else if (vNumber < 25 || !vBool) {
    console.log(`Suurem väärtus on kindlasti ${vNumber1}`);
} else {
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
let tMassiiv = [ 2, 7, 4, 74, 63, 4];
for (let index = 0; index < tMassiiv.length; ++index) {
    console.log(tMassiiv[index]);
}

/* Funktsioonid */
const funk = (parameeter: number) => parameeter + 12;
const funk2 = (parameeter: number): number => { 
    // ....
    return parameeter + 12;
};
function funk3(parameeter: number) {
    // ...
    return parameeter + 12;
}
funk2(12);
funk2(12);
console.log(funk2(12));

/* Klassid */
class KKoer {
    private readonly nimi: string;
    private vanus: number;

    constructor(nimi: string, vanus: number) {
        this.nimi = nimi;
        this.vanus = vanus;
    }
    public peaSynnip2eva = () => {
        this.vanus++;
    }
    public kysiNimi = () => {
        console.log(this.nimi);

        return this.nimi;
    }
    public kysiVanus = () => {
        console.log(this.vanus);

        return this.vanus;
    }
}

const koer1 = new KKoer(`Jaks`, 2);
koer1.kysiNimi();
const koer2 = new KKoer(`Rex`, 3);
koer2.kysiNimi();
koer2.peaSynnip2eva();
koer2.kysiVanus();