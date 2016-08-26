//business logic
function Pizza(size, toppings) {
  this.pizzaSize = size;
  this.toppings = toppings;
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

  price += (0.5 * this.toppings);

  return price;
}

var pizzaOne = new Pizza("small", 2);

console.log(pizzaOne.returnPrice());

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    var inputSize = $("#size").val();
    var topOne = $("input:checkbox[value=pep]:checked").val();

    console.log(topOne);

    event.preventDefault();
  });
});
