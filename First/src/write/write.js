const fs=require('fs');
const writeFiles=(path,content)=>{
    fs.writeFile(path,content,err=>{
        if(err)
        console.log(err)
         return 
    })
}
module.exports={
    writeFiles
}