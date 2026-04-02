function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log("Start");
    
    await sleep(1000);
    
    console.log("End after 1 second");
}

run();