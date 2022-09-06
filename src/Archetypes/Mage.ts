import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _instances = 0;
  private _energyType = 'mana';

  constructor(name: string) {
    super(name);
    
    Mage.addInstance();
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