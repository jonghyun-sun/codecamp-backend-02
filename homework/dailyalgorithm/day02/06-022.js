function calculator(num1, num2, operator){
	if (operator === "+") {
		console.log(`${num1} + ${num2} = ${num1+num2}`)

	} else if(operator ==="-") {
		console.log(`${num1} - ${num2} = ${num1-num2}`)

	} else if(operator ==="*") {
		console.log(`${num1} * ${num2} = ${num1*num2}`)
    } else if(operator ==="/") {
		console.log(`${num1} / ${num2} = ${Math.floor(num1/num2)}`)
    }


}


calculator(3,2,"/")