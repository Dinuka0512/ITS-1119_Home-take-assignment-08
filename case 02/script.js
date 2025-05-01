let color = ['red', 'blue', 'green', 'yellow', 'Orange', 'black'];

setInterval(arrayMake, 1000);

function arrayMake(){
    //HERE REMOVED THE LAST INDEX
    let last = color.pop();

    //ADD LAST VALUE TO FIRST
    color.unshift(last);

    //HERE PRINT THE ARRAY
    // console.log(color);

    // SET THE COLOR TO THE ELEMENT
    let domarray = document.getElementsByClassName("div");


    for(let i = 0; i < domarray.length; i++){
        domarray[i].style.backgroundColor = color[i % color.length];
    }
}