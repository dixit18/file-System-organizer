let fs = require("fs");
let path = require("path");

function treefn(dirPath){
    // console.log("Tree command implemented for",dirPath);
    let destPath;
    if(dirPath==undefined){
        // console.log("kindly enter the Path");
        
        treehelper(process.cwd(),"");
        return;
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
         treehelper(dirPath,"");
           }
          

        else{
            console.log("kindly enter the correct Path");
            return;
        }
    }
}
function treehelper(dirPath,indent){
    // is file or folder
  let isFile =  fs.lstatSync(dirPath).isFile();
  if(isFile==true){
    let fileName =  path.basename(dirPath);
    console.log(indent+"|---"+fileName);

  }else{
      let dirName = path.basename(dirPath);
      console.log(indent+"+-----"+dirName);
    let childrens =  fs.readdirSync(dirPath);
    for(let i=0;i<childrens.length;i++){
       let childPath = path.join(dirPath,childrens[i]);
       treehelper(childPath,indent+"\t");
    }

  }
}

module.exports={
    treeKey:treefn
}
