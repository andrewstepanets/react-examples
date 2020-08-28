import React from 'react';

const NavBar = (props) => {
    const triggerShowAddCategory = () => {
        props.showAddCategory()
    }
    return(
        <div>
            <ul>
                {props.categories ? props.categories.map((value, index) => {
                    return <li key={index}>{value}</li>
                })
                    : '<li>No categories</li>'}
            </ul>
            <button 
                className="flex-no-shrink p-2 border-2 rounded bg-teal-400 text-white border-teal hover:text-white hover:bg-teal"
                onClick={triggerShowAddCategory}>
                +
            </button>
        </div>
        
    )
}

export default NavBar;