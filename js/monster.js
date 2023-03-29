/* Write your Monster class here! */

class Monster{
    constructor(name, hp, atk, def, move){
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.move = move
    }

    attack(other) {
        if (!this.move.didHit()) {
          return `${this.name} missed!`;
        }else{
            const damage = this.move.power * (this.atk / other.def);
            other.hp -= damage;
            return `${this.name} used ${this.move.name} to deal ${damage} damage to ${other.name}!`;

        }
    }

    render(imgSrc){
        const monsterWrapper = document.createElement("div");

        const title = document.createElement("h1");
        title.textContent = this.name;

        const hp = document.createElement("h2");
        hp.textContent = this.hp;
        
        const img = document.createElement("img");
        img.src = imgSrc;
        img.style.width = "40%"
        img.style.height = "40%"

        monsterWrapper.append(title, hp, img)

        return monsterWrapper;
    }
}

///////////////////////////////////////

/* Write your Monster subclasses here! */

class Dragon extends Monster{
    constructor(){
        super("Dragon", 200, 50, 20, fireballAttack)
    }

    render(){
       return super.render("https://img.freepik.com/premium-photo/magical-fairytale-red-dragons-with-fire-flying-out-your-mouth_124507-31301.jpg")
    }
}





class Moth extends Monster{
    constructor(){
        super("Moth", 300, 15, 60, confusionAttack)
    }

    render() {
        return super.render("https://static01.nyt.com/images/2020/08/23/realestate/12GARDEN-MOTHS-slide-TOKA/12GARDEN-MOTHS-slide-TOKA-mediumSquareAt3X.jpg");
      }
}

