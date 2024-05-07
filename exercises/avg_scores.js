let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
  let sum = 0;
  for (let index = 0; index < scores.length; index++) {
    sum += scores[index];
  }
  return sum / scores.length;
}
let myAverage = getAverage(myScores);
console.log("my average score " +  myAverage);

/*function average() {
    let sum = 0
    for(let index = 0; index < yourScores.length; index++) {
        sum += yourScores[index]
        
    }
    return sum / yourScores.length;
}*/
let yourAverage = getAverage(yourScores)
console.log("your average score " + yourAverage);