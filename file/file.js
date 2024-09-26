// Core modules can be accessed using the require() function without specifying a path

let fs = require("fs");

// //write in file
fs.writeFileSync("file.txt","file created\n");

fs.writeFile("./fasynfile.txt" ,"async file created\n",(err) => {
  if(err) console.log(err);
})

//  delete a file unlink
fs.unlinkSync("file.txt");

fs.unlink("fasynfile.txt", (err) => {
    if(err) console.log(err)
});

// append file
fs.appendFileSync("./file.txt",new Date().toString());

fs.appendFile("./fasynfile.txt",new Date().getDay().toString(), (err) => {
    if(err) console.log(err)
});

fs.appendFile("./fasynfile.txt",new Date().getDate().toString(), (err) => {
    if(err) console.log(err)
});


// read file
console.log(fs.readFileSync("./file.txt","utf-8"));

fs.readFile("./fasynfile.txt","utf-8", (err,result) => {
    if(err) console.log(err)
    console.log(result)
})


// isFile()  it gives true if it is a file

// stat
console.log(fs.statSync("file.txt"));

fs.stat("./file.txt", (err,result) => {
    if(err) console.log(err)
    console.log(result.isFile())
});


fs.unlink("./fasynfile.txt",(err) => {
    if(err) throw err
    console.log("file deleted..")
})


// copy a file

// fs.copyFile does not copy the file content
// fs.cp method copy the content of file


fs.copyFile("./file.txt","./newfile.txt", (err) => {
    if(err) console.log(err)
})
console.log("copy")

fs.copyFileSync("./file.txt", "./file2.txt")

fs.cpSync("./file.txt", "./copy.txt")


// directory
fs.mkdir("fistdir", {recursive : true}, (err) => {
  if(err) console.log(err)
})

fs.rmdir("fistdir", {recursive : true}, (err) => {
  if(err) console.log(err)
})

fs.mkdir("firstdir/a/b/c" , {recursive : true}, (err) => {
  if(err) console.log(err)
})

fs.rmdir("./firstdir" , {recursive : true}, (err) => {
  if(err) console.log(err)
});




fs.open("copy.txt","r",(err)=>{
  if(err){
    console.log(err)
  }
})