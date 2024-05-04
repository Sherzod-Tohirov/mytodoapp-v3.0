import { Dispatch } from "redux";
import { reorderTodo } from "../../../../store/todo/todoSlice";
import { todo } from "../../../../utils/types";
export function sortTodoByTitle(todos: todo[]) {
  const sortedTodos = todos.sort((a: todo, b: todo): number => {
    const item1 = a.title.toLowerCase();
    const item2 = b.title.toLowerCase();
    if (item1 < item2) {
      return -1;
    } else if (item1 > item2) {
      return 1;
    } else {
      return 0;
    }
  });

  return sortedTodos;
}

export function sortTodoByTitleReverse(todos: todo[]) {
  const sortedTodos = todos.sort((a: todo, b: todo): number => {
    const item1 = a.title.toLowerCase();
    const item2 = b.title.toLowerCase();
    if (item1 > item2) {
      return -1;
    } else if (item1 < item2) {
      return 1;
    } else {
      return 0;
    }
  });

  return sortedTodos;
}

export function alphaOrderController(
  dispatch: Dispatch,
  alphaOrder: (boolean | undefined),
  todos: todo[]
) {

  if (alphaOrder) {
    const filteredTodos = sortTodoByTitle(todos);
    dispatch(reorderTodo([...filteredTodos]));
  } else {
    const filteredTodos = sortTodoByTitleReverse(todos);
    dispatch(reorderTodo([...filteredTodos]));
  }
}

export function sortTodoByStarred(todos: todo[]) {
    const sortedTodos = todos.sort((a: todo, b: todo): number => {
        if (a.isStarred > b.isStarred) {
          return -1;
        } else if (a.isStarred < b.isStarred) {
          return 1;
        } else {
          return 0;
        }
      });
      return sortedTodos;
}

export function sortTodoByUnstarred(todos: todo[]) {
    const sortedTodos = todos.sort((a: todo, b: todo): number => {
        if (a.isStarred < b.isStarred) {
          return -1;
        } else if (a.isStarred > b.isStarred) {
          return 1;
        } else {
          return 0;
        }
      });
      return sortedTodos;
}

export function starredOrderController(
    dispatch: Dispatch,
    starredOrder: (boolean | undefined),
    todos: todo[]
  ) {
    if (starredOrder) {
      const filteredTodos = sortTodoByStarred(todos);
      dispatch(reorderTodo([...filteredTodos]));
    } else {
      const filteredTodos = sortTodoByUnstarred(todos);
      dispatch(reorderTodo([...filteredTodos]));
    }
  }

  
export function sortTodoByCompleted(todos: todo[]) {
    const sortedTodos = todos.sort((a: todo, b: todo): number => {
        if (a.isCompleted > b.isCompleted) {
          return -1;
        } else if (a.isCompleted < b.isCompleted) {
          return 1;
        } else {
          return 0;
        }
      });
      return sortedTodos;
}


export function sortTodoByUncompleted(todos: todo[]) {
    const sortedTodos = todos.sort((a: todo, b: todo): number => {
        if (a.isCompleted < b.isCompleted) {
          return -1;
        } else if (a.isCompleted > b.isCompleted) {
          return 1;
        } else {
          return 0;
        }
      });
      return sortedTodos;
}
  

  export function completedOrderController(
    dispatch: Dispatch,
    doneOrder: (boolean | undefined),
    todos: todo[]
  ) {
    if (doneOrder) {
      const filteredTodos = sortTodoByCompleted(todos);
      dispatch(reorderTodo([...filteredTodos]));
    } else {
      const filteredTodos = sortTodoByUncompleted(todos);
      dispatch(reorderTodo([...filteredTodos]));
    }
  }
  

  export function sortTodoByRecent(todos: todo[]) {
    const sortedTodos = todos.sort((a: todo, b: todo): number => {
        if (a.timestamp > b.timestamp) {
          return -1;
        } else if (a.timestamp < b.timestamp) {
          return 1;
        } else {
          return 0;
        }
      });
      return sortedTodos;
}

export function sortTodoByUnrecent(todos: todo[]) {
    const sortedTodos = todos.sort((a: todo, b: todo): number => {
        if (a.timestamp < b.timestamp) {
          return -1;
        } else if (a.timestamp > b.timestamp) {
          return 1;
        } else {
          return 0;
        }
      });
      return sortedTodos;
}
  export function recentOrderController(
    dispatch: Dispatch,
    recentOrder: (boolean | undefined),
    todos: todo[]
  ) {
    if (recentOrder) {
      const filteredTodos = sortTodoByRecent(todos);
      dispatch(reorderTodo([...filteredTodos]));
    } else {
      const filteredTodos = sortTodoByUnrecent(todos);
      dispatch(reorderTodo([...filteredTodos]));
    }
  }
  