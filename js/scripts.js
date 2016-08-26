function Pizza(size, pepperoni, onions, ham, peppers) {
  this.pizzaSize = size;
  this.hasPepperoni = pepperoni;
  this.hasOnions = onions;
  this.hasHam = ham;
  this.hasPeppers = peppers;
}

Pizza.prototype.returnPrice = function()
{
  var price = 0;

  if(this.pizzaSize === "small")
  {
    price += 3;
  }
  else if(this.pizzaSize === "medium")
  {
    price += 5;
  }
  else
  {
    price += 7;
  }

  if(this.hasPepperoni)
  {
    price += 0.5;
  }

  if(this.hasOnions)
  {
    price += 0.5;
  }

  if(this.hasHam)
  {
    price += 0.5;
  }

  if(this.hasPeppers)
  {
    price += 0.5;
  }

  return price;
}

var pizzaOne = new Pizza("small", false, false, false, false);

console.log(pizzaOne.returnPrice());

$(document).ready(function() {
  $("form").submit(function(event) {

    event.preventDefault();
  });
});
