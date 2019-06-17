import React from 'react';
import './styles.scss';

function Filter(props) {
    const { handleInputName, inputName } = props;
    return (
        <form className="main__filters">
            <label htmlFor="filter-name">Filter by name</label>
            <input type="text" id="filter-name" onChange={handleInputName} value={inputName}/>
        </form>
    )
}

export default Filter;