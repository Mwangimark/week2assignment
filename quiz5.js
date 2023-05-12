// 5. We have the following arrays : 



// Write a JavaScript program to display the colors in the following way :

// "1st choice is Blue ."

// "2nd choice is Green."

// "3rd choice is Red."

const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

 o = ["th","st","nd","rd"]
let i =0

while(i<3){
    const number = i+1
    const choice = number + o[number]+" choice"
    console.log("The "+choice+ " is " +color[i] )
    i++
}



