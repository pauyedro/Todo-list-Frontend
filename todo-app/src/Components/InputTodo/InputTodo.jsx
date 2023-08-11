import { useState } from "react";

const InputTodo = ({ addTodo }) => {
    const[ title, setTitle ] = useState('');

    const handleTodo = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            addTodo(title)
            setTitle('')
        }
    };

    return (
        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
                <span className="border border-stone-950 border-solid p-3 rounded-full"></span>
            </div>
            <input
                type="text"
                className="focus:shadow-lg font-quicksand focus:shadow-neutral-50 pl-12 w-full py-4 bg-slate-50 rounded-xl outline-none transition-all duration-300 ease-out"
                placeholder="Next task.."
                value={title}
                onChange={ e => setTitle(e.target.value)}
                onKeyDown={ e => handleTodo(e)}
            ></input>
        </div>
    )
};

export { InputTodo };