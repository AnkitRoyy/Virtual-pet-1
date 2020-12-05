class Form{
    constructor(){

    }

    display(){
        

        var foodValue = createInput("NO. of food");
        foodValue.position(370,350);

        var button =  createButton("Submit");
        button.position(385,350);

        button.mousePressed(()=>{
            input.hide();
            button.hide();

            food.x = foodValue.value();

            food.writeFood();

            var text = createElement("h6");
            text.html("Note: Press Up Arrow key to feed Drago Milk!!!");
            text.position(300,30);

            var foodRemaining = createElement("h2");
            foodRemaining.html("Food Remaining: " + x);
        })
    }
}