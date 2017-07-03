export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', enemies: [] },
      { id: 12, name: 'Narco', enemies: [] },
      { id: 13, name: 'Bombasto', enemies: [] },
      { id: 14, name: 'Celeritas', enemies: [] },
      { id: 15, name: 'Magneta', enemies: [] },
      { id: 16, name: 'RubberMan', enemies: [] },
      { id: 17, name: 'Dynama', enemies: [] },
      { id: 18, name: 'Dr IQ', enemies: [] },
      { id: 19, name: 'Magma', enemies: [] },
      { id: 20, name: 'Tornado', enemies: [] }
    ];
    return { heroes };
  }
}
