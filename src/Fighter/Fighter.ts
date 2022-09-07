import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

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

export interface Attack {
  attack(enemy: SimpleFighter): void
}

export default interface Fighter extends SimpleFighter, DEF, LvlUp {
  special?(enemy: Fighter): void,
  energy?: Energy
}