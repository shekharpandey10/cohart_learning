const crypto =require('crypto')

const findHash=(str)=>{
    let i=0;
    while(1){
        let inputStr="100xdevs"+i.toString();
        let hash=crypto.createHash('sha256').update(inputStr).digest('hex')
        if(hash.startsWith(str)){
            return {input:inputStr,hash:hash}
        }
        i++
    }
}
const res=findHash('00000')
console.log(`input is : ${res.input}`)
console.log(`input is : ${res.hash}`)