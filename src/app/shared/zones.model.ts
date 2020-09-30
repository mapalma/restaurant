export class Zone {
  id_zone: number;
  id_map: number;
  name: string;
  floor: number;

  constructor(
    id_zone: number | string,
    id_map: number | string,
    name: string,
    floor: number | string
  ) {
    this.id_zone = +id_zone;
    this.id_map = +id_map;
    this.name = name;
    this.floor = +floor;
  }
}
