import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player: Fighter, 
    private _opponents: SimpleFighter[],
  ) {
    super(player);
  }

  fight(): number {
    for (let i = 0; i < this._opponents.length; i += 1) {
      while (this.player.lifePoints > -1 
        && this._opponents[i].lifePoints > -1) {
        this.player.attack(this._opponents[i]);
        this._opponents[i].attack(this.player);
      }
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}