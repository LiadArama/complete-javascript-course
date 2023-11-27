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