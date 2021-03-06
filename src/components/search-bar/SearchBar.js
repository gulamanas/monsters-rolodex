// import React, { Component } from 'react'
import React from 'react'

const SearchBar = ({ className, placeholder, onChangeHandler }) => {

    return (
        <div className='flex justify-center'>
            <input
                type="search"
                className={`p-4 mb-7 outline-0 border-cyan-900 ${className}`}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </div>
    )
}

/* class SearchBar extends Component {
    render() {
        const { className, placeholder, onChangeHandler } = this.props

        return (
            <div className='flex justify-center'>
                <input
                    type="search"
                    className={`p-4 mb-7 outline-0 border-cyan-900 ${className}`}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
            </div>
        )
    }
}
*/
export default SearchBar