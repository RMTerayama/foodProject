const counter1= document.querySelector('#counterValue1');
const buttonDecrement1= document.querySelector('#buttonDecrement1');
const buttonIncrement1= document.querySelector('#buttonIncrement1');
const total= document.querySelector('#totalValue');

let valueTotal=total.value;
let value=counter1.value;
var preco;
valueTotal=parseFloat(valueTotal)
 buttonIncrement1.addEventListener('click',()=>{
    value=++value;
    counter1.value=value;
    preco=parseFloat(27.00);
    valueTotal=valueTotal+preco;
    total.value=valueTotal.toFixed(2);
 })
buttonDecrement1.addEventListener('click',()=>{
    if(value!=0){
        value =--value;
        counter1.value=value;
        preco=parseFloat(27.00);
        valueTotal=valueTotal-preco;
        total.value=valueTotal.toFixed(2);

       }
       
})

const counter2= document.querySelector('#counterValue2');
const buttonDecrement2= document.querySelector('#buttonDecrement2');
const buttonIncrement2= document.querySelector('#buttonIncrement2');

let value2=counter2.value;

 buttonIncrement2.addEventListener('click',()=>{
    value2=++value2;
    counter2.value=value2;
    preco=parseFloat(32.00);
    valueTotal=(valueTotal+preco);
    total.value=valueTotal.toFixed(2);
 })
buttonDecrement2.addEventListener('click',()=>{
    if(value2!=0){
        value2 =--value2;
        counter2.value=value2;
        preco=parseFloat(32.00);
        valueTotal=valueTotal-preco;
        total.value=valueTotal.toFixed(2);
       }
       
})

const counter3= document.querySelector('#counterValue3');
const buttonDecrement3= document.querySelector('#buttonDecrement3');
const buttonIncrement3= document.querySelector('#buttonIncrement3');

let value3=counter3.value;

 buttonIncrement3.addEventListener('click',()=>{
    value3=++value3;
    counter3.value=value3;
    preco=parseFloat(35.00);
    valueTotal=valueTotal+preco;
    total.value=valueTotal.toFixed(2);
 })
buttonDecrement3.addEventListener('click',()=>{
    if(value3!=0){
     value3 =--value3;
     counter3.value=value3;
     preco=parseFloat(35.00);
        valueTotal=valueTotal-preco;
        total.value=valueTotal.toFixed(2);
    }
    
})


const counter4= document.querySelector('#counterValue4');
const buttonDecrement4= document.querySelector('#buttonDecrement4');
const buttonIncrement4= document.querySelector('#buttonIncrement4');

let value4=counter4.value;

 buttonIncrement4.addEventListener('click',()=>{
    value4=++value4;
    counter4.value=value4;
    preco=parseFloat(24.00);
    valueTotal=valueTotal+preco;
    total.value=valueTotal.toFixed(2);
 })
buttonDecrement4.addEventListener('click',()=>{
    if(value4!=0){
     value4 =--value4;
     counter4.value=value4;
     preco=parseFloat(24.00);
        valueTotal=valueTotal-preco;
        total.value=valueTotal.toFixed(2);
    }
    
})

const counter5= document.querySelector('#counterValue5');
const buttonDecrement5= document.querySelector('#buttonDecrement5');
const buttonIncrement5= document.querySelector('#buttonIncrement5');

let value5=counter5.value;

 buttonIncrement5.addEventListener('click',()=>{
    value5=++value5;
    counter5.value=value5;
    preco=parseFloat(31.00);
    valueTotal=valueTotal+preco;
    total.value=valueTotal.toFixed(2);
 })
buttonDecrement5.addEventListener('click',()=>{
    if(value5!=0){
     value5 =--value5;
     counter5.value=value5;
     preco=parseFloat(31.00);
        valueTotal=valueTotal-preco;
        total.value=valueTotal.toFixed(2);
    }
    
})

