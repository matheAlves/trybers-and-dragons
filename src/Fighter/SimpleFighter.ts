import { LP, STR, ReceiveDmg } from './Fighter';

export default interface SimpleFighter extends LP, STR, ReceiveDmg { 
  attack(enemy: SimpleFighter): void
}