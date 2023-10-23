/*const array_program=() =>{
    //taking array size
    const readline= require('readline');
     const r1 =readline .createInterface({
        input: process.stdin,
        output: process.stdout
     });
    const arr1=[];
    r1.question("enter the size of the array", (n)=>{
        const size = parseInt(n);
        console.log("array size: ",size)
            do{r1.question("enter the element ",(element)=>{
                const q =parseInt(element);
                console.log(element);
                arr1.push(element);
                i++;
            });
            }while(i<size)
        r1.close();
    })
     console.log(arr1);
}
array_program();*/
var readlineSync = require('readline-sync');
let array_list=[];
// Wait for user's response.
var size = readlineSync.question('what is the size of the array ? ');
console.log('Size of array'+ size+ '!');
for(i=0;i<size;i++){
    var array_element=readlineSync.question("enter the "+ i +"th array element----");
    array_list.push(array_element);
}
console.log("original array list"+array_list);
output_array=[];
for(i=0;i<size;i++){
    const element_multiple_9=array_list[i]*9;
    output_array.push(element_multiple_9);
}
console.log("output array for array elements when multiplied by 9");
console.log(output_array);











