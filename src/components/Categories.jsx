import React from 'react';

export const Categories = ({ value, onClickCategory }) => {

    // const [activeIndex, setActiveIndex] = React.useState(0);

    let categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']

    // const onClickCategory = (index) => {
    //     setActiveIndex(index);
    // }
    return (
        <div class="categories">
            <ul>
                {categories.map((categoryName, index) => (
                   <li key={index} onClick={() => onClickCategory(index)} className={value === index ? 'active' : ''}>{categoryName}</li>
                ))}
                
               
            </ul>
        </div>
    )
}   