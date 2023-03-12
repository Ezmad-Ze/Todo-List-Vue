export interface Todo {
  id: number
  todo: String
  value: 'Active' | 'Completed'
}

export const initialTodos: Todo[] = [
  {
    id: 0,
    todo: '',
    value: 'Active'
  }
]
