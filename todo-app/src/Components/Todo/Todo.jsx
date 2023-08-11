const Todo = ({ todo, handleSetComplete, handleDelete }) => {

    const { id, title, completed } = todo;

    return (
        <div className="flex items-center justify-between p-4 bg-slate-50 border-b border-solid border-stone-950">
            <div className="flex items-center">
                {
                    completed ? (
                        <div onClick={() => handleSetComplete(id)} className="bg-green-700 p-1 rounded-full cursor-pointer">
                            <img className="h-5 w-5" src="../img/icon-check.svg" alt="Check Icon"/>
                        </div>
                    ) : (
                        <span onClick={() => handleSetComplete(id)} className="border border-solid  border-stone-950 rounded-full p-3 cursor-pointer"></span>
                    )
                }
                <p className={"pl-3 text-black" + (completed && "line-through")}>
                    {title}
                </p>
            </div> 
            <img onClick={() => handleDelete(id)} className="h-7 w-7 cursor-pointer transition-all duration-300 ease-in" src="../img/icon-close.svg" alt="Close Icon"></img>
        </div>
    )
};

export { Todo };