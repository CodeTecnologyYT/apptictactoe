import React from 'react';

export const VerticalList = ({children}) => {
    return(
        <li className='list'>
            {
                children.map((item,key)=> (
                    <ol className="list-item" key={key}>
                        {item}
                    </ol>
                ))
            }
        </li>
    );
}