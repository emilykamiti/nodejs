
// const hello = 'Hello world';
// console.log(hello);
//
 const fs = require('fs');
//
////synchronous way - blocking
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
//
// const textOut = 'This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}';
// fs.writeFileSync('./txt/output', textOut);
// console.log('file written!');

//Asynchronous way- non blocking
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            console.log(data3);

            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
            console.log('your file has been written');
            })
        });
    });

});



