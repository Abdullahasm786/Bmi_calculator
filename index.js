const btnEl = document.getElementById("btn")
const bmiInputEl = document.getElementById("BMI-RESULT")
const weighConditionEl = document.getElementById("Weight-Condition")


function CalculateBMI()
{
    const heightvalue = document.getElementById("height").value / 100
    const weightvalue = document.getElementById("weight").value
    const bmivalue = weightvalue / (heightvalue * heightvalue)
    bmiInputEl.value = bmivalue;
    if(bmivalue < 18.5){
        weighConditionEl.innerText = "UnderWeight"
    }else if(bmivalue >= 18.5 && bmivalue <= 24.9){
    weighConditionEl.innerText = "normalWeight"
}else if(bmivalue >= 25 && bmivalue <= 29.9){
    weighConditionEl.innerText = "OverWeight"
}else if(bmivalue >=30){
    weighConditionEl.innerText = "Obesity" 
}
}
btnEl.addEventListener("click", CalculateBMI)
