function idNum(id){
    const num=id.slice(0,8).padEnd(14,"*")
    return num
    

}

const id="981028-1234567"

console.log(idNum(id))
