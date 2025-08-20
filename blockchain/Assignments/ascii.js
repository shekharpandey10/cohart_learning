let str='helloZ'//ascii
const binaryrep=new TextEncoder().encode(str)
console.log(binaryrep)  //Uint8Array(5) [ 104, 101, 108, 108, 111 ]

//Uint8Array to string
const finalstr=new TextDecoder().decode(binaryrep)
console.log(finalstr) //helloZ


