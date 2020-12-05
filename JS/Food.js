class Foodd{
    constructor(){

    }

    readFood(){
        var foodRef = database.ref("Food");
        foodRef.on("value", function(){
            Food = data.val();
        });
    }

    writeFood(x){
         
        if(x <= 0){
            x = 0;
        }
        else if(x >= 20){
            x = 20;
        }

        database.ref('/').update({
            Food : x
        });
    }
}