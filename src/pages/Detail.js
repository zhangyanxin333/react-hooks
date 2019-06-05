/* eslint-disable */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {globalPropsContext} from '../App';

function Detail(props) {
    console.log(props)
    const [query, setQuery] = useState('react');
    useEffect(() => {
        function getFetchUrl() {
            return 'http://hn.algolia.com/api/v1/search?query=' + query;
        }
        async function fetchData() {
            const result = await axios(getFetchUrl());
            setQuery(result.data);
        }
        fetchData();
    }, []);
    return (
        <globalPropsContext.Consumer>
            {(itemID, itemMsg) => {itemID}}
        </globalPropsContext.Consumer>
    );
}

export default Detail;