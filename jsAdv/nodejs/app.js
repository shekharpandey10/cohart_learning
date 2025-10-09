const {Worker}=require('worker_threads')

console.time()
new Worker('./a')
new Worker('./b')
new Worker('./c')
console.timeEnd()