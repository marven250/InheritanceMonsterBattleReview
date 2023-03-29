/* Write your Move class here! */


class Move{
    constructor(name, power, accuracy){
        this.name = name;
        this.power = power;
        this.accuracy = accuracy;
    }

    didHit(){
        return this.accuracy < Math.random()
    }
}

///////////////////////////////////////

/* Write your Move subclasses here! */


class Fireball extends Move{
    constructor(name){
        super("Fireball", 120, 0.75)
    }
}

class Confusion extends Move{
    constructor(){
        super("Confusion", 80, 1)
    }
}



let fireballAttack = new Fireball()


let confusionAttack = new Confusion()


function example(){
    return 5
}


const a = example()


console.log(a)