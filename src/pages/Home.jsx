import React from 'react';
import axios from 'axios';
import qs from 'qs';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import { Categories } from '../components/Categories';
import { Sort, sortList } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { Pagination } from '../components/Pagination/Pagination';
import { SearchContext } from '../App';


export const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const categoryId = useSelector(state => state.filterSlice.categoryId);
    const sortProperty = useSelector(state => state.filterSlice.sort.sortProperty);
    const currentPage = useSelector(state => state.filterSlice.currentPage);


    const onClickCategoryId = (id) => {
        dispatch(setCategoryId(id))
    };

    const { searchText } = React.useContext(SearchContext);

    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    

    const pizzas = items.map((pizza) => <PizzaBlock key={pizza.id} title={pizza.title} price={pizza.price} img={pizza.imageUrl} size={pizza.sizes} types={pizza.types} />);


    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);


    const onClickChangePage = (number) => {
        dispatch(setCurrentPage(number))
    }

    React.useEffect(() => {
        if(window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            

            const sort = sortList.find(obj => obj.sortProperty === params.sortProperty)

            dispatch(
                setFilters({
                    ...params,
                    sort
                    })
            );
        }
    }, []);

    React.useEffect(() => {
        setIsLoading(true);

        const order = sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = sortProperty.replace('-', '');
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchText ? `search=${searchText}` : '';

        axios.get(`https://629df0863dda090f3c0f9d43.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortBy}&order=${order}`
        ).then((res) =>
            setItems(res.data),
            setIsLoading(false)
        )
        window.scrollTo(0, 0);
    }, [categoryId, sortProperty, searchText, currentPage]);

    React.useEffect(() => {
        const queryString = qs.stringify({
            sortProperty: sortProperty,
            categoryId,
            currentPage
        })

        navigate(`?${queryString}`)
    }, [categoryId, sortProperty, currentPage]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategoryId} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? skeletons
                        : pizzas
                }

            </div>
            <Pagination currentPage={currentPage} onChangePage={onClickChangePage} />
        </div>
    )

}