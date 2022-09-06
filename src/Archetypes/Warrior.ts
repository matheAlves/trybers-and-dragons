import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _instances = 0;
  private _energyType = 'stamina';

  constructor(name: string) {
    super(name);
    
    Warrior.addInstance();
  }

  static addInstance() {
    this._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType as EnergyType;
  }

  static createdArchetypeInstances(): number {
    return this._instances;
  }
}