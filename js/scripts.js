//business logic
function Pizza(size, pepperoni, ham, green) {
  this.pizzaSize = size;
  this.hasPepperoni = pepperoni;
  this.hasHam = ham;
  this.hasGreen = green;
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

  return price;
}

Pizza.prototype.returnToppings = function()
{
  var totalToppings = []

  if(this.hasPepperoni)
  {
    totalToppings.push("pepperoni")
  }
  if(this.hasHam)
  {
    totalToppings.push("ham")
  }
  if(this.hasGreen)
  {
    totalToppings.push("green peppers")
  }

  if(totalToppings.length > 1)
  {
    totalToppings.splice(totalToppings.length -1,0," and ")
  }

  return totalToppings;
}

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputSize = $("#size").val();
    var topOne = $("input:checkbox[name=top1]:checked").val();
    var topTwo = $("input:checkbox[name=top2]:checked").val();
    var topThree = $("input:checkbox[name=top3]:checked").val();

    console.log(topOne);

    var pizzaOne = new Pizza(inputSize,topOne,topTwo,topThree);

    $("#output").append("<li>" + "You ordered a " + inputSize + " pizza with " + pizzaOne.returnToppings());
    $("#output").append("<li>" + "The price is " + pizzaOne.returnPrice())

    console.log(pizzaOne.returnPrice());

  });
});
