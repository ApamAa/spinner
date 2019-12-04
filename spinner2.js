const signs = "|/-|\\ |";
delayTime = 0;
for (const sign of signs){
    delayTime++ ;
    setTimeout(()=>{
        process.stdout.write('\r'+ sign);
    }, 200*delayTime)
}
setTimeout(()=>{
    process.stdout.write('\n');
}, 200*(signs.length))