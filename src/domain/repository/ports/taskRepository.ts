import { Task } from "@domain/entities/task";

export interface TaskRepository {
  save(task: Task): Promise<Task>
  update(task: Task): Promise<Task>
  get(id: string): Promise<Task>
  get(): Promise<Task[]>
  delete(id: string): void
}
