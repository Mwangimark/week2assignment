
function grade(num){
let gradevalue;

    if(num<100 && num>=90){
        gradevalue = "Grade A"
    }
    else if(num<90 && num>=80){
        gradevalue ="Grade B"
    }
    else if(num<80 && num>=70){
        gradevalue ="Grade C"
    }
    else if(num<70 && num>=60){
        gradevalue ="Grade D"
    }
    else if(num<60 && num0){
        gradevalue ="Grade F"
    }
    else{
        gradevalue = "invalid output"
    }
    return gradevalue;

}

console.log("David  :"+ grade(80))
console.log("Vinoth  :"+ grade(77))
console.log("Divya  :"+ grade(88))
console.log("Ishitha  :"+ grade(95))
console.log("Thomas  :"+ grade(68))