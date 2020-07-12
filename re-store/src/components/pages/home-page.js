import React from 'react';
import BookList from '../book-list';
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {
    const books = [];
    return(
        <div>
            <BookList />
            <ShoppingCartTable />
        </div>
    );
};

export default HomePage;