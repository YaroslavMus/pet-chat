/** @format */
import React from 'react'
import './chartList.css'

const ChartList = () => {
    const [addMode, setAddMode] = React.useState(false)

    return (
        <div className='chartlist'>
            <div className='search'>
                <div className='searchBar'>
                    <img src='./search.png' alt='' />
                    <input type='text' placeholder='Search' />
                </div>
                <img
                    src={addMode ? './minus.png' : './plus.png'}
                    alt=''
                    className='add'
                    onClick={() => setAddMode(prev => !prev)}
                />
            </div>
            <div className='item'>
                <img src='./avatar.png' alt='' />
                <div className='texts'>
                    <span>Jane Doe</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='item'>
                <img src='./avatar.png' alt='' />
                <div className='texts'>
                    <span>Jane Doe</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='item'>
                <img src='./avatar.png' alt='' />
                <div className='texts'>
                    <span>Jane Doe</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className='item'>
                <img src='./avatar.png' alt='' />
                <div className='texts'>
                    <span>Jane Doe</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}
export default ChartList
