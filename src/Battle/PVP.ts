import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player1: Fighter, private _opponent: Fighter) {
    super(player1);
  }

  fight(): number {
    while (this.player.lifePoints > -1 && this._opponent.lifePoints > -1) {
      this.player.attack(this._opponent);
      this._opponent.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}