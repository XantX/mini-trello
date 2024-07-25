import { Column } from "@domain/entities/column";

export class Board {
  constructor(
    private _id: string,
    private _title: string,
    private _columns: Column[]
  ) { }
  public get columns(): Column[] {
    return this._columns;
  }
  public set columns(value: Column[]) {
    this._columns = value;
  }
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
}
