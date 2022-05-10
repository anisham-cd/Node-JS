const fs=require('fs')
function add(path,data){
    let val=JSON.stringify(data,null,2);
    console.log(val);
    return fs.writeFile(path,val,'utf8',(err)=>{
        if(err)
        console.log(err);
        else{
            return val
        }
    })
}
module.exports={
    add
}