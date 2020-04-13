/**Addin an element to the cart**/

let btnAdd = document.getElementsByClassName('add-to-cart')
let cart = document.getElementById('mylist')

let price = 0;
let x = 0;
for (let j = 0; j < btnAdd.length; j++) {
  btnAdd[j].addEventListener('click', () => {
        let li=document.createElement('li')
        let txt=document.createTextNode(btnAdd[j].dataset.name) //jibli menha ken el nom 
        li.appendChild(txt) //w 7otheli lina 
        cart.appendChild(li) //jeb hetheka el li eli fou9 w7atheli fel carta mte3iiii f my list 
      

        price += Number(btnAdd[j].dataset.price); //jibna el soum 
        document.getElementById('total').innerHTML = price; //bech kol marra yaffichi la derniere valeur 
        document.getElementById('qtity').innerHTML = ++x; //incrémentation mtaa el qté 
       
    })

}
/*clear cart*/
let clear =document.getElementById('clear-cart')
clear.onclick= function(){
   price=0;
document.getElementById('total').innerHTML=price;
x=0;
document.getElementById('qtity').innerHTML = "";

}