const parent = document.getElementById("container");

let colors = ['lightblue','pink','lightgreen'];
let a = createRandArray(parent,70,colors);
let time = 50;

function generateRandomArray()
{
   a.forEach(el=>el.div.parentNode.removeChild(el.div))
   a = [];
   a = createRandArray(parent,70,colors);
}

async function bubble(){
    await bubbleSort(a,time,colors);
}

async function insertion(){
    await insertionSort(a,5,colors);
}

async function mergeho(){
    console.log("yes");
    await mergeSort(a,100,colors);
}

async function quick(){
    await quickSort(a,50,colors);
}

async function selection(){
    await selectionSort(a,time,colors);
}
