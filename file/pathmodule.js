// The path module provides various methods for parsing, formatting, joining, and normalizing file paths, making it easier to work with them in a consistent way.

let path = require("path");

console.log(__filename);

let filepath = path.resolve("./pathmodule.js")
console.log(filepath)

console.log(path.dirname(filepath))

console.log(path.basename(filepath))

console.log(path.extname(filepath))

console.log(path.parse(filepath))

// console.log(path.format(filepath))   // if file is not in object structure it gives error

// console.log(path.resolve("/node" , "file" ,"file.js"))
console.log(path.join("/file" , "pathmodule.js"))

console.log(path.delimiter)     //  ':' on POSIX, ';' on Windows

console.log(path.sep)   //  '/' on POSIX (macOS, Linux), '\' on Windows



//  Normalizes a path by resolving .. and . segments and removing redundant slashes.
console.log(path.normalize("/path/to/../file.txt"))     // \path\file.txt


// console.log("isAbsolute  " , path.isAbsolute("filepath"));

let f = "/file/pathmodule.js";
let g = "/file/file.js";
console.log(path.relative(f, g));