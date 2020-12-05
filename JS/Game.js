class Game{
    constructor(){

    }

    play(){

        food = new Foodd();

        if(keyDown(UP_ARROW)){
            Food -= 1;
        }

        form = new Form();
        form.display();

    }
}