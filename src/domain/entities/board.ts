import { Column } from "@domain/entities/column";

export class Board {
  private id: string = "";
  constructor(
    private title: string,
    private columns: Column[]
  ) { }
  public getColumns(): Column[] {
    return this.columns;
  }
  public setColumns(value: Column[]) {
    this.columns = value;
  }
  public getTitle(): string {
    return this.title;
  }
  public setTitle(value: string) {
    this.title = value;
  }
  public getId(): string {
    return this.id;
  }
  public setId(value: string) {
    this.id = value;
  }
}
