import React from 'react';
import './collection-item.style.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className='collection-item'>
        <div 
            key={id}
            className='image'
            style={{backgroundImage: `url(${imageUrl})`}}
        ></div>
        <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>R$ {price}</span>
        </div>
    </div>
)

export default CollectionItem;