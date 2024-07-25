import { Column } from "@domain/entities/column";

export interface ColumnService {
  save(column: Column): Promise<Column>
  update(column: Column): Promise<Column>
  delete(id: string): void
  get(): Promise<Column[]>
}
