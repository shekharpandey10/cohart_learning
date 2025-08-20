const crypto=require('crypto')

function findHashWithPrefix(prefix){
    let i=0;
    while(true){
        let inputStr=i.toString();
        let hash=crypto.createHash('sha256').update(inputStr).digest('hex')

        if(hash.startsWith(prefix)){
            return {input:inputStr,hash:hash}
        }
        i++;
    }
}

const result=findHashWithPrefix('0000');

console.log(`input: ${result.input}`)
console.log(`hash: ${result.hash}`)
