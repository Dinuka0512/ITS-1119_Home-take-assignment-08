let array = [];
let last;

// Set to the array
array.push(document.getElementById("a").innerHTML);
array.push(document.getElementById("b").innerHTML);
array.push(document.getElementById("c").innerHTML);
array.push(document.getElementById("d").innerHTML);
array.push(document.getElementById("e").innerHTML);
array.push(document.getElementById("f").innerHTML);

//HERE PRINT THE ARRAYLIST WE HAVE CREATED
// console.log(array);

setInterval(removeLastIndex, 2000);


function removeLastIndex(){
    //HERE SAVE THE LAST INDEX VALUE
    last = array[array.length-1];
    array.pop();

    // HERE CALL TO THE ADD VALuE TO FRIST INDEX FUNTION
    addvalueToFristIndex();
}


function addvalueToFristIndex(){
    array.unshift(last);

    // HERE CALL TO THE SET ELEMENTS FUNTIOIN
    setElements();
}

function setElements() {
    document.getElementById("a").innerHTML = array[0];
    document.getElementById("b").innerHTML = array[1];
    document.getElementById("c").innerHTML = array[2];
    document.getElementById("d").innerHTML = array[3];
    document.getElementById("e").innerHTML = array[4];
    document.getElementById("f").innerHTML = array[5];
}