function helpfn(){
    console.log(`
    list of all the command:
            node s.js tree "directoryPath"
            node s.js organize "directoryPath"
            node s.js help
    `);
}

module.exports={
    helpKey:helpfn
}