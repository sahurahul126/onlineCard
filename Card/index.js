document.querySelector("#city").addEventListener("click", function() {
    location.href="Detail/city.html";
});
document.querySelector("#money").addEventListener("click", function() {
    location.href="Detail/money.html";
});
document.querySelector("#challang").addEventListener("click", function() {
    location.href="Detail/challang.html";
});
document.querySelector("#hostages").addEventListener("click", function() {
    location.href="Detail/hostages.html";
});
document.querySelector("#tanhaji").addEventListener("click", function() {
    location.href="Detail/tanhaji.html";
});
document.querySelector("#criminal").addEventListener("click", function() {
    location.href="Detail/criminal.html";
});
document.querySelector("#listmovie").addEventListener("click", function() {
    location.href="Detail/listmovie.html";
});
document.querySelector("#webseries").addEventListener("click", function() {
    location.href="Detail/webseries.html";
});
var numberOfTitle=document.querySelectorAll(".card-title").length;
console.log(numberOfTitle)
var value=[];
for(let i=0;i<numberOfTitle;i++){

value.push(document.querySelectorAll(".card-title")[i].innerHTML);
}
console.log(value)
document.querySelector(".search").addEventListener("click",function () {
    let newItem=document.querySelector(".inputValue").value;
    
});
value.map(newItem=>console.log("true"))
