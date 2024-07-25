import { Task } from "@domain/entities/task";

export class Column {
  constructor(
    private _id: string,
    private _title: string,
    private _limit: string,
    private _tasks: Task[],
    private _boardId: string,
  ) {
  }
  public get boardId(): string {
    return this._boardId;
  }
  public set boardId(value: string) {
    this._boardId = value;
  }
  public get tasks(): Task[] {
    return this._tasks;
  }
  public set tasks(value: Task[]) {
    this._tasks = value;
  }
  public get limit(): string {
    return this._limit;
  }
  public set limit(value: string) {
    this._limit = value;
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
