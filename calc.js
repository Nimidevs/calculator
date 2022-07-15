let problem = document.querySelector('.problem')
let solution = document.querySelector('.solution')
let btn = document.querySelectorAll('.btn')
let actionBtn = document.querySelectorAll('.action')
let a = ''
let t;
let dotCount = 0
let dotBtn = document.querySelector('.dot')
dotBtn.addEventListener('click', function(){
    dotCount++
    if(dotCount = 1){
        this.disabled = true
    }
})
btn.forEach(button => {
    button.addEventListener('click', function(event){
        solution.innerText += event.target.value
    })
})
function clearScreen(){
    solution.innerText = ''
}
let operand = ''
let count = 0
actionBtn.forEach(actionButtons => {
    actionButtons.addEventListener('click', function(event){
        count++
        operand = event.target.value
        dotBtn.removeAttribute('disabled')
        if(count === 1){
            problem.innerText = solution.innerText + event.target.value
            clearScreen()
        } 
        else if (count > 1){
            problem.innerText = operate() + operand
            clearScreen()
        }
    })
})
let final
let count2 = 0
let operation = document.querySelector('.operate')
operation.addEventListener('click', function(){
    final = operate()

    actionBtn.forEach(actionButtons => {
        actionButtons.addEventListener('click', function(){
            count2++
            if(count2 === 1){
                problem.innerText = final + operand
                clearScreen()
            }
            operation.addEventListener('click', function(){
                actionBtn.forEach(actionButtons => {
                    actionButtons.addEventListener('click', function(){
                        problem.innerText = final + operand
                        clearScreen()
                    })
                })
            })
             if(count2 > 1){
                problem.innerText = operate() + operand
                clearScreen()
            }
        })
    })
})
function operate(){
    let c = problem.innerText
    let d = solution.innerText
    if(c.includes('-') === true || c.includes('x') === true || c.includes('÷') === true || c.includes('+') === true ){
        c = c.replace(/[- 'x' "÷" "+"]/g, '')
    }
    c = +c
    d = +d
    //console.log(c,d)
    if(problem.innerText.includes('x') === true){
        t = multiply(c, d)
        //console.log(t)
        solution.innerText = t;
    }else if(problem.innerText.includes('+') === true){
        t = add(c, d)
        //console.log(t)
        solution.innerText = t
    }else if(problem.innerText.includes('÷') === true){
        t = divide(c, d)
        solution.innerText = t
    }else if(problem.innerText.includes('-') === true){
        t = subtract(c, d)
        solution.innerText = t
    }
    problem.innerText = c + " " + operand + " " + d + " " + "="
    return t
}
function add(operand1, operand2){
    return (operand1 + operand2)
}
function multiply(operand1 , operand2){
    return (operand1 * operand2)
}
function divide(operand1 , operand2){
    if(operand2 === 0){
        return "math error"
    }
    return (operand1/operand2)
}
function subtract(operand1 , operand2){
    return (operand1 - operand2)
}
let clearBtn = document.querySelector('.c-btn')
clearBtn.addEventListener('click', function(){
   location.reload()
})
let deleteBtn  = document.querySelector('.d-btn')
deleteBtn.addEventListener('click', function(){
    console.log(solution.innerText)
    solution.innerText = solution.innerText.substring(0, (solution.innerText.length) - 1)
   
})