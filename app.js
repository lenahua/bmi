const btnE1 = document.getElementById("btn");
const bmiInputE1 = document.getElementById("bmi-result");
const weightConditionE1 = document.getElementById("weight-condition");

function calculateBMI(){
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;

    const bmiValue = weightValue / (heightValue * heightValue)
    
    bmiInputE1.value = bmiValue

    if (bmiValue < 18.5){
        weightConditionE1.innerText = "體重過輕";
    } else if (bmiValue >= 18.5 && bmiValue <24){
        weightConditionE1.innerText = "正常範圍"
    } else if(bmiValue >= 24 && bmiValue < 27){
        weightConditionE1.innerText = "體重過重"
    } else if(bmiValue >= 27){
        weightConditionE1.innerText = "肥胖，需要注意囉！"
    }
}

btnE1.addEventListener("click", calculateBMI); 