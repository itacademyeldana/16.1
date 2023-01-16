function calc() {
    const num1 = Number(document.getElementById("num1").value)
    const operator = document.getElementById("operator").value
    const num2 = Number(document.getElementById("num2").value)

    let result

    switch (operator) {
        case "-":
            result = num2 - num1
            break;
        case "+":
            result = num2 + num1
            break;
        case "*":
            result = num2 * num1
            break;
        case "/":
            result = num2 / num1
            break;
        default:
            result ="Такого оператора не существует"
    }

    document.getElementById("res").textContent = result
}

document.getElementById("btn").addEventListener('click',calc)
