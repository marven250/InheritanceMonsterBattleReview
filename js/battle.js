/* Write your Battle class here! */


class Battle{
    constructor(player, opponent, battleOver){
        this.player = player;
        this.opponent = opponent;
        this.battleOver = battleOver;
    }

        checkWin() {
            if (this.player.hp <= 0 && this.opponent.hp <= 0) {
                return "Both players lose";
            } else if (this.player.hp <= 0) {
                return `${this.opponent.name} wins!`;
            } else if (this.opponent.hp <= 0) {
                return `${this.player.name} wins!`;
            } else {
                return null;
            }
        }

        fight(){
            const playerAttack = this.player.attack(this.opponent)
            const opponentAttack = this.opponentAttack.attack(this.player)
    
            const winning = this.checkWin()
            if(winning){
                this.battleOver = true
                return `${playerAttack} , ${opponentAttack}, ${winning}`
            }
            if(!this.battleOver){
                return `${playerAttack} , ${opponentAttack}`
            }
    
        }

        render(){
            const renderedOpponent = this.opponent.render();
            const renderedPlayer = this.player.render();
            const playerSection = document.querySelector("section.player");
            const opponentSection = document.querySelector("section.opponent");
            console.log("this is renderedPlayer", renderedPlayer)
            playerSection.replaceChildren(renderedPlayer);
            opponentSection.replaceChildren(renderedOpponent);
        }
    
}