// const {Worker}=require('worker_threads')

// console.time()
// new Worker('./a')
// new Worker('./b')
// new Worker('./c')
// console.timeEnd() 
const a=0


    setInterval(()=>{
        const {exec}=require('child_process')

    exec('ls -la', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Command stderr: ${stderr}`);
        }
        console.log(`Command output:\n${stdout}`);
    });
    },1000)