//business logic
var totalPrice = 0;

function Pizza(size, pepperoni, ham, green, pineapple) {
  this.pizzaSize = size;
  this.hasPepperoni = pepperoni;
  this.hasHam = ham;
  this.hasGreen = green;
  this.hasPineapple = pineapple;
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
  if(this.hasHam)
  {
    price += 0.5;
  }
  if(this.hasGreen)
  {
    price += 0.5;
  }
  if(this.hasPineapple)
  {
    price += 0.5;
  }

  return price;
}

Pizza.prototype.returnToppings = function()
{
  var totalToppings = []

  if(this.hasPepperoni)
  {
    totalToppings.push("pepperoni");
  }
  if(this.hasHam)
  {
    totalToppings.push("ham");
  }
  if(this.hasGreen)
  {
    totalToppings.push("green peppers");
  }
  if(this.hasPineapple)
  {
    totalToppings.push("pineapple");
  }

  if(totalToppings.length > 2)
  {
    totalToppings[totalToppings.length - 1 ] = " and " + totalToppings[totalToppings.length - 1 ];

    var output = totalToppings.join(", ");
  }
  else if(totalToppings.length == 2)
  {
    totalToppings[1] = " and " + totalToppings[1];

    var output = totalToppings.join(" ");
  }
  else
  {
    var output = totalToppings;
  }

  return output;
}

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputSize = $("#size").val();
    var topOne = $("input:checkbox[name=top1]:checked").val();
    var topTwo = $("input:checkbox[name=top2]:checked").val();
    var topThree = $("input:checkbox[name=top3]:checked").val();
    var topFour = $("input:checkbox[name=top4]:checked").val();

    var pizzaOne = new Pizza(inputSize,topOne,topTwo,topThree, topFour);

    totalPrice += pizzaOne.returnPrice();

    $("#output").append("<li>" + "You ordered a " + inputSize + " pizza with " + pizzaOne.returnToppings());
    $("#output").append("<li>" + "The total is now " + totalPrice)

    console.log(pizzaOne.returnPrice());

  });
});
