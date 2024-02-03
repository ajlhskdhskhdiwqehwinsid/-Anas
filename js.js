let myName = "هيا نتعرف المزيد عن التنمية المستدامة"

let index = 1;

function writeText() {
    document.querySelector("p").textContent = myName.slice(0,index);
    index++

    if(index > myName.length) {
        index = 1;
    }
}


setInterval(function(){
    
    writeText();

}, 100)