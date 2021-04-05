let num = 1
let result = 0
let generateNewCol = function () {
    let div = document.createElement("div")
    div.className = "row"
    div.id = "row" + num;
    let wtf = document.createTextNode("")
    div.appendChild(wtf)
    document.getElementById("rowsDiv").appendChild(div)

    let innerDiv = document.createElement("div")
    innerDiv.className = "realRow"
    innerDiv.id = "realRow" + num
    innerDiv.appendChild(wtf)
    document.getElementById("row" + num).appendChild(innerDiv);

    let inputName = document.createElement("a")
    let ftw = document.createTextNode("Input your grade and weight:")
    inputName.appendChild(ftw)
    document.getElementById("realRow" + num).appendChild(inputName)

    let gradeInput = document.createElement("input")
    gradeInput.type = "number"
    gradeInput.className = "inputNumber"
    gradeInput.id = "grade" + num
    gradeInput.placeholder = "Grade"
    gradeInput.appendChild(wtf)
    document.getElementById("realRow" + num).appendChild(gradeInput)

    let weightInput = document.createElement("input")
    weightInput.type = "number"
    weightInput.className = "inputNumber"
    weightInput.id = "weight" + num
    weightInput.placeholder = "Weight"
    weightInput.appendChild(wtf)
    document.getElementById("realRow" + num).appendChild(weightInput)
    num++
}

let calculateGrade = function () {
    let inputGrade
    let inputWeight
    for (let i = 0; i < num + 1; i++) {
            inputGrade = document.getElementById("grade"+num).value
            inputWeight= document.getElementById("weight"+num).value


        result += (inputGrade * inputWeight)

    }
    console.log(result)
}

