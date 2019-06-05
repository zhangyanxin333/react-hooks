import React, {useState} from 'react';
import {globalPropsContext} from '../App';

// export const CountContext = React.createContext({data: 6});
function Counte() {
    const [count, setCount] = useState(100);
    // function handleAlertClick() {
    //     setTimeout(() => {
    //         alert('You clicked on: ' + count);
    //     }, 3000);
    // }
    // const value = useContext(CountContext);
    return (
        // <CountContext.Consumer>
        //     {/* <h2>123</h2> */}
        //     {value => <h1>The answer is {value}.</h1>}
        // </CountContext.Consumer>
        <globalPropsContext.Provider value={count}>
            <button>{count => setCount(count + 200)}</button>
        </globalPropsContext.Provider>
        // <div>
        //     <h1>
        //         The answer is {value}
        //     </h1>
        //     <h2>嗯哼哼?</h2>
        // </div>
    );
}

export default Counte;