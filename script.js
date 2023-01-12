var count=0;
function startUse(){
    count++;      
    alert("You Clicked "+count+"time");

}
function changeStyle(element){
    element.style.backgroundColor = "#7b46c7";
    element.style.color = "white";
}
function returnStyle(element){
    element.style.backgroundColor = "";
    element.style.color = "";
}