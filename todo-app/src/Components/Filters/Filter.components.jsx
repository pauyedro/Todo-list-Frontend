
const FilterContainer = ({ children }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-slate-50 border-b border-solid border-stone-950">
            { children }
        </div>
    )
};

const Items = ({ total= 0 }) => {
    return (
        <p className="text-slate-400 text-sm">
            {total} items left
        </p>
    )
};

const ButtonContainer = ({ children }) => {
    return (
        <div className="flex items-center space-x-2">
            { children }
        </div>
    )
};

const ButtonFilter = ({ action, active, filter}) => {
    return (
        <button onClick={action}
                className={`hover:text-violet-600 cursor-pointer transition-all duration-300 ease-in-out` + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-violet-600' : 'text-slate-400')}>
            { filter }
        </button>
    )
}

export { FilterContainer, Items, ButtonContainer, ButtonFilter };