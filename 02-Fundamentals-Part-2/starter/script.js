"use strict";

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


