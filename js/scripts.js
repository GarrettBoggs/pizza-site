//business logic
function Pizza(size, pepperoni, ham, green, pineapple, anchovies)
{
  this.pizzaSize = size;
  this.hasPepperoni = pepperoni;
  this.hasHam = ham;
  this.hasGreen = green;
  this.hasPineapple = pineapple;
  this.hasAnchovies = anchovies;
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
  if(this.hasAnchovies)
  {
    price += 1;
  }

  return price;
}

Pizza.prototype.returnToppings = function()
{
  var totalToppings = [];

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
  if(this.hasAnchovies)
  {
    totalToppings.push("anchovies");
  }

  if(totalToppings.length > 2)
  {
    totalToppings[totalToppings.length - 1 ] = " and " + totalToppings[totalToppings.length - 1 ];

    return " with " + totalToppings.join(", ");
  }
  else if(totalToppings.length == 2)
  {
    totalToppings[1] = " and " + totalToppings[1];

    return " with " + totalToppings.join(" ");
  }
  else if(totalToppings.length == 1)
  {
    return " with " + totalToppings;
  }
  else
  {
    return "";
  }
}

//user interface logic
$(document).ready(function()
{
  var totalPrice = 0;
  var height = 0;
  var width = 0;
  $("form").submit(function(event)
  {
    event.preventDefault();
    $("#space").empty();
    var inputSize = $("#size").val();
    var topOne = $("input:checkbox[name=top1]:checked").val();
    var topTwo = $("input:checkbox[name=top2]:checked").val();
    var topThree = $("input:checkbox[name=top3]:checked").val();
    var topFour = $("input:checkbox[name=top4]:checked").val();
    var topFive = $("input:checkbox[name=top5]:checked").val();

    var pizzaOne = new Pizza(inputSize,topOne,topTwo,topThree,topFour,topFive);

    totalPrice += pizzaOne.returnPrice();

    if(inputSize === "small")
    {
      height = 200;
      width = 200;
    }
    else if(inputSize === "medium")
    {
      height = 350;
      width = 350;
    }
    else
    {
      height = 500;
      width = 500;
    }

    $("#space").append("<li><img class='pizzaImage' src='./img/pizza.png'> </li>");

    if(pizzaOne.hasPepperoni)
    {
      $("#space").append("<p><img class='pizzaImage' id='layer2' src='./img/pepperoni.png'> </p>");
    }
    if(pizzaOne.hasHam)
    {
      $("#space").append("<p><img class='pizzaImage' id='layer3' src='./img/ham.png'> </p>");
    }
    if(pizzaOne.hasGreen)
    {
      $("#space").append("<p><img class='pizzaImage' id='layer4' src='./img/greenpepper.png'> </p>");
    }
    if(pizzaOne.hasPineapple)
    {
      $("#space").append("<p><img class='pizzaImage' id='layer5' src='./img/pineapple.png'> </p>");
    }
    if(pizzaOne.hasAnchovies)
    {
      $("#space").append("<p><img class='pizzaImage' id='layer5' src='./img/anchovy.png'> </p>");
    }

    $("#space").append("<li><img class='pizzaImage' src='./img/pizza.png'> </li>");

    $(".pizzaImage").attr("height", height);
    $(".pizzaImage").attr("width", width);

    $("#output").append("<li>" + "You ordered a " + inputSize + " pizza " +  pizzaOne.returnToppings() + "." + "</li>");
    $("#output").append("<li>" + "That pizza costs " + pizzaOne.returnPrice() + "$"+"</li>");
    $("#output").append("<li>" + "The total is now " + totalPrice + "$" + "</li>");
  });

  $("#reset").click(function(event)
  {
    $("#output").empty();
    totalPrice = 0;
  });
});
