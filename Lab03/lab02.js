console.log('Shahid Hameed, 21 years Old, PFHS Islamabad, Software Engineering')
var name='Shahid Hameed';
var age=21;
var address='PFHS';
var degreeProgram='Software Engineering';

const biography = {
    name:"Shahid Hameed",
    age:21,
    address:"PFHS",
    degreeProgram:"Software Engineering",
    
}

console.log(biography.name+" "+biography.age+" " +biography.address+" "+biography.degreeProgram);
var num=10;
isPrime=true;
while(true){
    num++;
    
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
           
            break;
        }
    }
    if(isPrime){
        console.log('Prime: '+num)
        break;
    }

}

function createPhoneNumber(numbers) {
    if(!numbers.length==9){
        return null;
    }
    let num="("+numbers[0]+numbers[1]+numbers[2]+") "+numbers[3]+numbers[4]+numbers[5]+"-"+numbers[6]+numbers[7]+numbers[8];
    console.log(num);
    return num;
    // Write your code here
    }

var phone=createPhoneNumber(([1,2,3,4,5,6,7,8,9]));


function round(){
    console.log(arguments);
    var arr=[];
    for(let i=0;i<arguments.length;i++){
        arr.push(Math.round(arguments[i]));
    }
    console.log(arr);
    return arr;
}
round(10.5,16.8)
round (10.5)
round(10.5,10.2,11.6)

function abso(){
    console.log(arguments);
    var arr=[];
    for(let i=0;i<arguments.length;i++){
        arr.push(Math.abs(arguments[i]));
    }
    console.log(arr);
    return arr;
}

abso(10.5,16.8)

function floor(){
    console.log(arguments);
    var arr=[];
    for(let i=0;i<arguments.length;i++){
        arr.push(Math.floor(arguments[i]));
    }
    console.log(arr);
    return arr;
}
floor(10.5,16.8)
function ceil(){
    console.log(arguments);
    var arr=[];
    for(let i=0;i<arguments.length;i++){
        arr.push(Math.ceil(arguments[i]));
    }
    console.log(arr);
    return arr;
}
ceil(10.5,16.8)

let round1=(a,b) => {
    
    var arr=[];
    arr.push(Math.round(a));
    arr.push(Math.round(b));
    console.log(arr);
    return arr;
}
round1(10.5,16.8)


let ceil1=(a,b) => {
    
    var arr=[];
    arr.push(Math.ceil(a));
    arr.push(Math.ceil(b));
    console.log(arr);
    return arr;
}
ceil1(10.5,16.8)

let floor1=(a,b) => {
    
    var arr=[];
    arr.push(Math.floor(a));
    arr.push(Math.floor(b));
    console.log(arr);
    return arr;
}
floor1(10.5,16.8)

let abs1=(a,b) => {
    
    var arr=[];
    arr.push(Math.abs(a));
    arr.push(Math.abs(b));
    console.log(arr);
    return arr;
}
abs1(10.5,16.8)




function insertionSort(inputArr) {
    let n = inputArr.length;
        for (let i = 1; i < n; i++) {
            let current = inputArr[i];
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                j--;
            }
            inputArr[j+1] = current;
        }
    return inputArr;
}

let inputArr = [5,6,2,3,8,99];
console.log(insertionSort(inputArr));

const median = arr => {
    const mid = Math.floor(arr.length / 2)
    if( arr.length % 2 !== 0 )
    { return arr[mid]}
    else{ return (arr[mid - 1] + arr[mid]) / 2;}
  }

var array=insertionSort(inputArr);
console.log(median(array));


function multi(x,y,z){
    let sum=0;
    for(let i=0;i<z;i++){
        if(i%x==0||i%y==0){
            sum+=i;
        }

    }
    return sum;

}

console.log(multi(3,5,10))


