"use strict";

//Coding Challange #1
function codingChallenge1() {
    const calcAverage = (score1, score2, score3) => {
        return (score1 + score2 + score3) / 3
    };
    const checkWinner = (avgDolphins, avgKoalas) => {
        if (avgDolphins > avgKoalas * 2) {
            console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
        } else if (avgKoalas > avgDolphins * 2) {
            console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
        } else {
            console.log("No team wins...");
        }
    };

    const avgDolphins1 = calcAverage(44, 23, 71);
    const avgDolphins2 = calcAverage(85, 54, 41);
    const avgKoalas1 = calcAverage(65, 54, 49);
    const avgKoalas2 = calcAverage(23, 34, 27);

    checkWinner(avgDolphins1, avgKoalas1);
    checkWinner(avgDolphins2, avgKoalas2);
}

codingChallenge1();
//################//


//Coding Challange #2
function codingChallenge2() {
    function calcTip(bill) {
        let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
        return tip;
    }
    const bills = [125, 555, 44];
    const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
    const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
}

codingChallenge2();
//################//

//Coding Cahllenge #3
function codingChallenge3() {
    const mark = {
        mass: 78,
        height: 1.69,
        fullName: "Mark Miller",
        calcBMI: function () {
            this.bmi = this.mass / (this.height * this.height);
            return this.bmi;
        }
    }

    const john = {
        mass: 92,
        height: 1.95,
        fullName: "John Smith",
        calcBMI: function () {
            this.bmi = this.mass / (this.height * this.height);
            return this.bmi;
        }
    }

    mark.calcBMI(); john.calcBMI();

    if (mark.bmi > john.bmi) {
        console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
    } else {
        console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
    }
}

codingChallenge3();
//################//

