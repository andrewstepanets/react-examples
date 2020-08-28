import React from 'react';

const NavBar = (props) => {
    const triggerShowAddCategory = () => {
        props.showAddCategory()
    }
    const liStyle = 'p-4 inline bg-grey-lighter hover:bg-grey-light uppercase font-black cursor-pointer';
    return(
        <div>
            <ul className="list-reset inline flex justify-center border-b-4 mb-0">
                {props.categories ? props.categories.map((value, index) => {
                    return (
                        <li 
                            key={index}
                            className={liStyle}>
                            {value}
                        </li>
                        )
                })
                    : '<li>No categories</li>'}
            </ul>
            <button 
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                onClick={triggerShowAddCategory}>
                +
            </button>
        </div>
        
    )
}

export default NavBar;