const crypto=require('crypto')

const findHashPrefix=(prefix)=>{
        let input=0;
        while(true){
            let inputstr='100xdevs'+input.toString();
            let hash=crypto.createHash("sha256").update(inputstr).digest('hex')
            if(hash.startsWith(prefix)){
                return {input:inputstr,hash:hash}
            }
            input++
        }
}




const result=findHashPrefix('0000')
console.log(`Input ${result.input}`)
console.log(`Input ${result.hash}`)