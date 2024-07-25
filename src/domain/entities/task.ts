export class Task {
  constructor(
    private _id: string,
    private _title: string,
    private _description: string,
    private _columnId: string,
    private _boardId: string
  ) { }
  public get boardId(): string {
    return this._boardId;
  }
  public set boardId(value: string) {
    this._boardId = value;
  }
  public get columnId(): string {
    return this._columnId;
  }
  public set columnId(value: string) {
    this._columnId = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
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
