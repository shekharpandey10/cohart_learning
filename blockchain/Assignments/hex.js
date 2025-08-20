function arrTohex(byteArr){
    let hexstr=""
    for(let i=0;i<byteArr.length;i++){
        hexstr+=byteArr[i].toString(16).padStart(2,'0')  //if two value not get add 0 before it
    }
    return hexstr
}


const byteArr=new Uint8Array([72,101,108,108,111])
const hexString=arrTohex(byteArr)
console.log(hexString)