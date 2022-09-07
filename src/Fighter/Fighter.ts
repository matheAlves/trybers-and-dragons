import Energy from '../Energy';

export interface LP {
  lifePoints: number;
}

export interface STR {
  strength: number;
}

export interface DEF {
  defense: number;
}

export interface SpAttacker {
  special?(enemy: Fighter): void,
}

export interface LvlUp {
  levelUp(): void,
}

export interface ReceiveDmg {
  receiveDamage(attackPoints: number): number, 
}

export default interface Fighter extends 
  LP, STR, DEF, LvlUp, ReceiveDmg {
  attack(enemy: Fighter): void,
  special?(enemy: Fighter): void,
  energy?: Energy
}