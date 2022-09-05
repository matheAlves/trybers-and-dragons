export default abstract class Race {
  constructor(private _name: string, private _dexterity: number) {}

  // acessa valor via race.age (como um atributo)
  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}