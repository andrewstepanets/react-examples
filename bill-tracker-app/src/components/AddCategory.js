import React, { useState } from 'react';

const AddCategory = () => {
    const [category, setCategory] = useState();

    const handleChange = e => {
        setCategory(e.target.value)
    } 

    const handleSubmit = e => {
        e.preventDefault();
        if(!category) {
            alert('Please eneter a category')
            return
        }
        props.onSubmit(category);
    }
    return(
        <form>
            <h1>Enter a category of bills</h1>
            <p>E.g. 'Electricity' or 'Gas' or 'Internet'</p>
            <input type="text" 
                placegolder="Add Category" 
                value={category} 
                onChange={handleChange}/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Add</button>
        </form>
    )
}

export default AddCategory;