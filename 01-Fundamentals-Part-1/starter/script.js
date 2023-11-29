/*
Coding Challange #1
*/
function codingChallange1() {
    function calculateBMI(mass, height) {
        const BMI = mass / height ** 2;
        return BMI;
    }
    const johnHeight = 1.76;
    const johnMass = 85;
    const markHeight = 1.88;
    const markMass = 95;

    const johnBMI = calculateBMI(johnMass, johnHeight);
    const markBMI = calculateBMI(markMass, markHeight);

    let markHigherBMI = markBMI < johnBMI;
    console.log(markHigherBMI, `Mark's BMI is ${markBMI} and John's BMI is ${johnBMI}`);
}
codingChallange1();

//################//

/*
Coding Challnege 3
*/
function codingChallenge3() {
    const dolphinsScore1 = 96;
    const dolphinsScore2 = 108;
    const dolphinsScore3 = 89;

    const koalasScore1 = 88;
    const koalasScore2 = 91;
    const koalasScore3 = 110;

    const scoreDolphins = (dolphinsScore3 + dolphinsScore2 + dolphinsScore1) / 3;
    const scoreKoalas = (koalasScore3 + koalasScore2 + koalasScore1) / 2;

    if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
        console.log("Dolphins win the trophy")
    } else if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
        console.log("Koalas win the trophy");
    } else if (scoreKoalas === scoreDolphins && scoreKoalas >= 100 && scoreDolphins >= 100) {
        console.log("Both win the trophy");
    }

}


//################//

/*
Coding Challnege 4
*/
const bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value to pay is ${bill + tip}`);
//################//