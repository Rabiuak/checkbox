const inputs = document.querySelectorAll(".check");
const priceTag = document.querySelector(".total");
var price = 0;
inputs.forEach(input=>{
input.addEventListener("change", function(){
    const siblings = input.previousSibling.lastElementChild;
  if (this.checked){
       price =price + Number(siblings.innerHTML);
  priceTag.innerHTML = "Total price : " + price + " !";
    } else {
       price =price - Number(siblings.innerHTML);
       priceTag.innerHTML = "Total price : " + price + " !";
    }
})
});
