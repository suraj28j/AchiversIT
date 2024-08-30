const fs = require('fs')

// ------- Write File ------- //

// [ file write synchronously ]
// fs.writeFileSync('about.txt','Welcome EveryOne');
// console.log("File Write Successfully");

// [ file write asynchronously ]
// fs.writeFile('about.txt','Welcome EveryOne',(err)=>{
//     if(err){
//         console.log(err,'Error Occured');
//     }else{
//         console.log("File Write Successfully")
//     }
// });
// console.log("File Write...");



// ------- Read File ------- //

// [ file read synchronously ]
// const data  = fs.readFileSync('about.txt');
// console.log(data.toString());

// [ file read asynchronously ]
// fs.readFile('about.txt', (err, data) => {
//     if (err) {
//         console.log(err, 'Error Occured');
//         return ;
//     } 
//     console.log("Content of file is :", data.toString()); 
// })
// console.log("After File Read");



// ------- Delete File ------- //

// [ file delete synchronously ]
// fs.unlinkSync('about.txt')

// [ file delete asynchronously ]
// fs.unlink('about.txt',(err)=>{
//     if(err){
//         console.log(err, 'Error Occured');
//         return ;
//     }else{
//         console.log('file deleted successfully');
//     }
// })
// console.log("After File Deleted");



// ------- Create Directory ------- //

// [ folder create synchronously ]
// fs.mkdirSync('SK');
// console.log("directory created");

// ( ...with try, catch and existsSync )
// try {
//     if (!fs.existsSync('SK')) {
//         fs.mkdirSync('SK');
//         console.log("directory created");
//     } else {
//         console.log("directory already exits");
//     }
// } catch (err) {
//     console.log("ERROR ", err);
// }

// [ folder create asynchronously ]
// fs.mkdir('suraj', (err) => {
//     if (err) {
//         console.log(err, 'Error Occured');
//     } else {
//         console.log('folder created successfully');
//     }
// })
// console.log("After folder created");



// ------- Delete Directory ------- //

// [ folder delete synchronously ]
// fs.rmdirSync('SK');
// console.log("directory deleted");

// ( ...with try, catch and existsSync )
// try {
//     if (fs.existsSync('SK')) {
//         fs.rmdirSync('SK');
//         console.log("directory delted");
//     } else {
//         console.log("directory not exits");
//     }
// } catch (err) {
//     console.log("ERROR ", err);
// }

// [ folder deleted asynchronously ]
// fs.rmdir('suraj', (err) => {
//     if (err) {
//         console.log(err, 'Error Occured');
//     } else {
//         console.log('folder deleted successfully');
//     }
// })
// console.log("After folder deleted");



// ------- Get Contents of Directory ------- //

// [ get folder contents synchronously ]
// const contents = fs.readdirSync(__dirname);
// console.log("directory Content ",contents);

// [ get folder contents asynchronously ]
// fs.readdir(__dirname,(err,data)=>{
//     if(err){
//         console.log(err, 'Error Occured');
//          return ;
//     }else{
//         console.log("Contents of directory : ",data);
//     }
// })



// ------- Rename of Directory or File ------- //

// [ rename folder synchronously ]
// fs.renameSync('SK','Suraj');
// console.log("rename directory successfully");

// [ rename folder asynchronously ]
// fs.rename('about.txt','suraj.txt',(err)=>{
//     if(err){
//         console.log(err, 'Error Occured');
//         return ;
//     }else{
//         console.log("rename directory successfully");
//     }
// })