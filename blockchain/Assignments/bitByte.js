function asciiToByte(asciiString){
    const arr=[]
    for(let i=0;i<asciiString.length;i++){
        arr.push(asciiString.charCodeAt(i))
    }
    return new Uint8Array(arr)
}

const ascii="Hello"
const byteArray=asciiToByte(ascii)
console.log(byteArray)