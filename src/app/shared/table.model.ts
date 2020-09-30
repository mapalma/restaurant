export class Table {
  id: number;
  name: string;
  id_zone: number;
  x: number;
  y: number;

  constructor(
    id: number | string,
    name: string,
    id_zone: number | string,
    x: number | string,
    y: number | string
  ) {
    this.id = +id;
    this.name = name;
    this.id_zone = +id_zone;
    this.x = +x;
    this.y = +y;
  }
}
