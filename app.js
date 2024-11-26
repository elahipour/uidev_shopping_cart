
var btn_adidass_dec = document.getElementById("dec-adidass");
var btn_adidass_inc = document.getElementById("inc-adidass");
var adidass_quantity = document.getElementById("adidass_quantity");
var remove_adidass = document.querySelectorAll(".btn")[0];
var adidass_total = document.querySelectorAll("#spans")[0];
var adidass_price = document.getElementById("adidass_price");


var btn_nike_dec = document.getElementById("dec-nike");
var btn_nike_inc = document.getElementById("inc-nike");
var nike_quantity = document.querySelector("#nike_quantity");
var remove_nike = document.querySelectorAll(".btn")[1];
var nike_total = document.querySelectorAll("#spans")[1];
var nike_price = document.querySelector("#nike_price");

var btn_ASE_dec = document.getElementById("dec-ASE");
var btn_ASE_inc = document.getElementById("inc-ASE");
var AES_quantity = document.querySelector("#AES_quantity");
var remove_AES = document.querySelectorAll(".btn")[2];
var AES_total = document.querySelectorAll("#spans")[2];
var AES_price = document.querySelector("#AES_price");

var subtotal = document.getElementById("total_sub");
var tax = document.getElementById("total_tax");
var total_before_tax = document.getElementById("total_before_tax");
var shipping = document.getElementById("total_var");
var total = document.getElementById("total_cost");


btn_adidass_inc.addEventListener("click", function (event) {
  adidass_quantity.textContent++;

  totalPrice();
});
//adidass
btn_adidass_dec.addEventListener("click", function (event) {
  if (adidass_quantity.innerHTML > 0) {
    adidass_quantity.textContent--;
  }
  totalPrice();
});

remove_adidass.addEventListener("click", function (event) {
  var buttonClicked = event.target;
  adidass_quantity.innerText = 0;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  totalPrice();
});

//nike

btn_nike_inc.addEventListener("click", function (event) {
  nike_quantity.textContent++;
  totalPrice();
});

btn_nike_dec.addEventListener("click", function (event) {
  if (nike_quantity.innerHTML > 0) {
    nike_quantity.textContent--;
  }
  totalPrice();
});
remove_nike.addEventListener("click", function (event) {
  var buttonClicked = event.target;
  nike_quantity.innerText = 0;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  totalPrice();
});

//AES

btn_ASE_inc.addEventListener("click", function (event) {
  AES_quantity.textContent++;
  totalPrice();
});

btn_ASE_dec.addEventListener("click", function (event) {
  if (AES_quantity.innerHTML > 0) {
    AES_quantity.textContent--;
  }

  totalPrice();
});

remove_AES.addEventListener("click", function (event) {
  var buttonClicked = event.target;
  AES_quantity.innerText = 0;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  totalPrice();
});

function totalPrice() {
  var sPrice = parseFloat(nike_price.innerText.replace("$", ""));
  var sQuantity = nike_quantity.innerText;
  var bPrice = parseFloat(adidass_price.innerText.replace("$", ""));
  var bQuantity = adidass_quantity.innerText;
  var cPrice = parseFloat(AES_price.innerText.replace("$", ""));
  var cQuantity = AES_quantity.innerText;
  var totals = 0;

  Math.round(bPrice * bQuantity * 100) / 100;
  adidass_total.innerText = Math.round(bPrice * bQuantity * 100) / 100;
  nike_total.innerText = Math.round(sPrice * sQuantity * 100) / 100;
  AES_total.innerText = Math.round(cPrice * cQuantity * 100) / 100;
  totals =
    totals + sPrice * sQuantity + bPrice * bQuantity + cPrice * cQuantity;
  tax.innerText = (totals * 0.09).toFixed(2)  + "$ ";
  subtotal.innerText = Math.round(totals * 100) / 100+"$ "  ;


  if (sQuantity > 0 || cQuantity > 0 || bQuantity > 0) {
    shipping.innerText = "رایگان"  ;
    // var ship = parseFloat(shipping.innerText.replace("$", ""));
    total_before_tax.innerText = Math.round((totals) * 100) / 100+"$";
    total.innerText = ((totals)+(totals * 0.09)).toFixed(2)+"$";
    
  } else {
    total.innerText =  0+"$" ;
    total_before_tax.innerText = 0+"$";

  }
}
