export interface Pokemon {
  abilities: Array<{
    ability: {
      name: string;
      url: string;
    };
  }>;
  name: string;
  sprite: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  attacks?: string;
}
