#!/usr/bin/env node

let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let helpobj = require("./commands/help");
let treeobj = require("./commands/tree");
let organizeobj = require("./commands/organize");
// console.log(inputArr);
// node s.js tree "directoryPath"
// node s.js organize "directoryPath"
// node s.js help

let command = inputArr[0];
let types ={
    media:["mp4","mkv"],
    archives: ['zip','xz','jpg'],
    document: ['docx','doc','txt','html','js'],
    app: ['exe','pkg','deb','css']
}

switch(command){
    case "tree":
      treeobj.treeKey(inputArr[1]);
        break;
    case "organize":
     organizeobj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpobj.helpKey();
        break;
    default:
        console.log("please input right command");
        break;
}




