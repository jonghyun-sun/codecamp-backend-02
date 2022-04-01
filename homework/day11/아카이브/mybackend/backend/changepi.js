
//personal 뒷자리 변경
export function changePI(personal){
    let a = personal.split("-")
    let b= a[1].split("").fill("*").join("")

    personal = a[0] + " - " + b
    return personal
}

