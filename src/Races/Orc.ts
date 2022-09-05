import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static addInstance() {
    this._instances += 1;
  }

  static createdRacesInstances(): number {
    return this._instances;
  }
}