export interface LP {
  lifePoints: number;
}

export interface STR {
  strength: number;
}

export interface ReceiveDmg {
  receiveDamage(attackPoints: number): number, 
}

export interface Attack {
  attack(enemy: SimpleFighter): void
}

export default interface SimpleFighter extends LP, STR, ReceiveDmg, Attack { }