const fs=require('fs');
const readFiles=(path)=>{
    fs.readFile(path,'utf-8',(err,data)=>{
        if(err)
        console.log(err);
        else
        console.log(data);
    
    })
}
module.exports={
    readFiles
}