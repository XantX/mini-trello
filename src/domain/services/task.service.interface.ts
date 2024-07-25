import { Task } from "@domain/entities/task";

export interface TaskService {
  save(task: Task): Promise<Task>
  update(task: Task): Promise<Task>
  delete(id: string): void
  get(): Promise<Task[]>
}
