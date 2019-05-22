import React, {useState} from 'react';
import {Button} from 'antd';
import styles from './list.less';

const List = () => {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true)
    return (
        <div>
            <Button onClick={() => { setCount(count+1) }} className={styles.btn1}>点击</Button>
            <p>你点击了{count}次</p>

            {
                show ? 
                <Button onClick={() => { setShow(false) }} className={styles.btn2}>点击</Button> : 
                null
            }
            <div>ds</div>
        </div>
    )
}

export default List
