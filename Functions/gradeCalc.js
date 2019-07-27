let gradeCalc = function (score, total) {
    let studentScore =  score / total * 100;
    if(studentScore >= 90) {
        return `You received a A (${studentScore})%!!`
    }else if (studentScore >= 80){
        return `You received a B (${studentScore})%!`
    }else if (studentScore >= 70){
        return `You received a C (${studentScore})%!`
    }else if (studentScore >= 60){
        return `You received a D (${studentScore})%!`
    }else {
        return `You received a F (${studentScore})%!`
    }
}
let result = gradeCalc(76,100);
console.log(result);