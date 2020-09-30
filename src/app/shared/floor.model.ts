export class Floor {
  id_floor: number;
  id_map: number;
  name: string;

  constructor(
    id_floor: number | string,
    name: string,
    id_map: number | string
  ) {
    this.id_floor = +id_floor;
    this.id_map = +id_map;
    this.name = name;
  }
}
