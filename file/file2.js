let fs = require("fs")
let os = require("os");
// console.log(os.cpus().length)


// console.log(fs.readFileSync("concats.txt","utf-8"))

fs.writeFile("hello.txt", "hello from hello page" , (err) => {
    if(err)  console.log(err)
})


// fs.copyFile("hello.txt" , "hello2.txt" , (err) => {
//     if(err) console.log(err)
// })
// REMANE A FILE 

fs.rename("hello2.txt" , "cpfile.txt", (err) => {
    if(err) console.log(err)
})

