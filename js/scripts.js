//business logic
function Pizza(size, toppings)
{
  this.pizzaSize = size;
  this.totalToppings = toppings;
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

  price += this.totalToppings.length * 0.5;

  return price;
}

Pizza.prototype.returnToppings = function()
{
  if(this.totalToppings.length > 2)
  {
    this.totalToppings[this.totalToppings.length - 1 ] = " and " + this.totalToppings[this.totalToppings.length - 1 ];

    return " with " + this.totalToppings.join(", ");
  }
  else if(this.totalToppings.length == 2)
  {
    this.totalToppings[1] = " and " + this.totalToppings[1];

    return " with " + this.totalToppings.join(" ");
  }
  else if(this.totalToppings.length == 1)
  {
    return " with " + this.totalToppings;
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
    $("#createspace").empty();
    var inputSize = $("#size").val();
    var topOne = $("input:checkbox[name=top1]:checked").val();
    var topTwo = $("input:checkbox[name=top2]:checked").val();
    var topThree = $("input:checkbox[name=top3]:checked").val();
    var topFour = $("input:checkbox[name=top4]:checked").val();
    var topFive = $("input:checkbox[name=top5]:checked").val();

    var allToppings = [topOne,topTwo,topThree,topFour,topFive];
    var realToppings = [];

    for(var i = 0; i < allToppings.length; i ++)
    {
      if(allToppings[i] != undefined)
      {
        realToppings.push(allToppings[i]);
      }
    }

    var pizzaOne = new Pizza(inputSize, realToppings);

    totalPrice += pizzaOne.returnPrice();

    if(inputSize === "small")
    {
      height = 200;
      width = 200;
    }
    else if(inputSize === "medium")
    {
      height = 300;
      width = 300;
    }
    else
    {
      height = 400;
      width = 400;
    }

    $("#createspace").append("<li><img class='pizzaImage' src='./img/pizza.png'></li>");

    for(var i = 0; i < pizzaOne.totalToppings.length; i++)
    {
      if(pizzaOne.totalToppings[i] === "pepperoni")
      {
        $("#createspace").append("<p><img class='pizzaImage' id='layer2' src='./img/pepperoni.png'> </p>");
      }
      if(pizzaOne.totalToppings[i] === "ham")
      {
        $("#createspace").append("<p><img class='pizzaImage' id='layer3' src='./img/ham.png'> </p>");
      }
      if(pizzaOne.totalToppings[i] === "peppers")
      {
        $("#createspace").append("<p><img class='pizzaImage' id='layer4' src='./img/greenpepper.png'> </p>");
      }
      if(pizzaOne.totalToppings[i] === "pineapple")
      {
        $("#createspace").append("<p><img class='pizzaImage' id='layer5' src='./img/pineapple.png'> </p>");
      }
      if(pizzaOne.totalToppings[i] === "anchovies")
      {
        $("#createspace").append("<p><img class='pizzaImage' id='layer5' src='./img/anchovy.png'> </p>");
      }
    }

    $(".pizzaImage").attr("height", height);
    $(".pizzaImage").attr("width", width);

    $("#output").append("<li>" + "You ordered a " + inputSize + " pizza " +  pizzaOne.returnToppings() + "." + "</li>");
    $("#output").append("<li>" + "That pizza costs " + pizzaOne.returnPrice() + "$"+"</li>");
    $("#output").append("<li>" + "The total is now " + totalPrice + "$" + "</li>");
  });

  $("#reset").click(function(event)
  {
    $("#output").empty();
    $("#createspace").empty();
    totalPrice = 0;
  });
});
