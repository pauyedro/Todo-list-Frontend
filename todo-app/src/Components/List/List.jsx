import { Filters } from "../Filters/Filters"
import { Todo } from "../Todo/Todo";

const List = ({ 
    todos, 
    handleSetComplete, 
    handleDelete,
    handleClearComplete,
    activeFilter,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos
}) => {
    return (
        <div className="flex flex-col nt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => {
                return(
                    <Todo key={todo.id} 
                          todo={todo} 
                          handleSetComplete={handleSetComplete}
                          handleDelete={handleDelete}
                    />
                )
            })}
            <Filters
                activeFilter={activeFilter}
                total={todos.length}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                handleClearComplete={handleClearComplete}
            />
        </div>
    )
};

export { List }