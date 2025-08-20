const crypto=require('crypto')

function findHash(prefix){
    let input=0
    while(1){
        let inputstr="harkirat => raman"+input.toString()
     let hash= crypto.createHash('sha256').update(inputstr).digest('hex')

        if(hash.startsWith(prefix)){
            return {input:inputstr,hash:hash}
        }
        input++
    }
}

findHash('')
