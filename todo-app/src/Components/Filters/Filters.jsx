import { ButtonContainer, ButtonFilter, FilterContainer, Items } from "./Filter.components.jsx";

const Filters = ({
    total,
    handleClearComplete,
    activeFilter,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos
}) => {
    return (
        <div>
            <FilterContainer>
                <Items total={total}/>
                <ButtonContainer>
                    <ButtonFilter action={() => showAllTodos()} active={activeFilter} filter="All"/>
                    <ButtonFilter action={() => showActiveTodos()} active={activeFilter} filter="Active"/>
                    <ButtonFilter action={() => showCompletedTodos()} active={activeFilter} filter="Completed"/>
                </ButtonContainer>

                <button onClick={() => handleClearComplete()} className="text-slate-400 hover:text-violet-600 cursor-pointer transition-all duration-300 ease-in">
                    Clear Completed
                </button>
            </FilterContainer>
        </div>
    )
};

export { Filters };