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

export interface Attacker {
  attack(enemy: Fighter): void,
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
  LP, STR, DEF, Attacker, SpAttacker, LvlUp, ReceiveDmg {
  energy: Energy
}