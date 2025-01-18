const fs=require("fs");

// write
// Sync
// fs.writeFileSync("./test.txt","hellow world duniya");

// Async
// fs.writeFile("./test.txt","hellow world duniya Async",(err)=>{} )

    // read
    // sync
    const filePath = 'C:\\Users\\NAVEEN\\Desktop\\NodeJs\\file_handling.js\\contect.txt';
    // const content = fs.readFileSync(filePath, 'utf8');
    // console.log(content);

    // Async
    // fs.readFile(filePath, 'utf8',(err,result)=>{
    //     if(err){
    //         console.log("error",err);
    //     }else{
    //         console.log(result);
            
    //     }
    // });
    

    // Append file
    fs.appendFileSync(filePath,new Date().getDate().toLocaleString());


   