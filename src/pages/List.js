/* eslint-disable */
import React, { useState, useEffect, Fragment } from 'react';
import styles from './list.less';
import { Form, Button, DatePicker, Cascader, Input, message } from 'antd';
import moment from 'moment';
import serve from '../utils/axios';
const List = (props) => {
    const [startDate] = useState(moment().startOf('day').subtract(6, 'days'));
    const [endDate] = useState(moment().startOf('day'));
    // axios 请求数据
    const [initData, setData] = useState([]);
    const { Item: FormItem } = Form;
    const { RangePicker } = DatePicker;
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 2 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const { getFieldDecorator } = props.form;
    const [temp, setTemp] = React.useState(5);
    const [initSearch, setSearch] = useState({ belong: 'sort,human,place' });
    const log = () => {
        setTimeout(() => {
            console.log('3 秒前 temp = 5，现在 temp =', temp);
        }, 10000);
    };
    // const [count, setCount] = React.useState(0);

    const [initInput, setInput] = useState({ belong: 'sort,human,place' });
    const [count1, setCount1] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            // setCount1(c => c+ 1);
        }, 1000);
        return () => clearInterval(id);
    }, [ ]); //[count1]
    // 请求地名只需要请求一次
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const db = await serve.getAllLocation();
            if (db.code === 200 || db.code === '200') {
                let list_1 = [];
                let data = db && db.data[0].children ? db.data[0].children : [];
                data.map(item => {
                    return [];
                });
                setData(list_1);
            }
        }
        fetchData();
    }),[initInput];
    // 搜索条件
    useEffect(() => {
        async function postSearch() {
            const db = await serve.postSearch(initSearch);
            return db
            // db.map(val => {
            //     return [val];
            // });
            // console.log(db);
        }
        postSearch();
    }, [initSearch]);
    // 输入框 这里获取的是失焦事件
    useEffect(() => {
        async function postSearch() {
            // const db = await serve.postSearch(initInput);
            // db.map(val => {
            //     return [val];
            // });
        }
        postSearch();
    }, [initInput]);
    /**
     * 更新选择时间
     */
    const updateTime = (filter) => {
        if (filter.time[0] === '') {
            filter.time = [];
        }
        if (filter.days === '' || filter.time.length === 0) {
            filter.startTime = filter['time'] && filter['time'].length !== 0 ? filter['time'][0].format('YYYY-MM-DD') : '';
            filter.endTime = filter['time'] && filter['time'].length !== 0 ? filter['time'][1].format('YYYY-MM-DD') : '';
        } else {
            filter.startTime = filter['time'][0].format('YYYY-MM-DD');
            filter.endTime = filter['time'][1].format('YYYY-MM-DD');
        }
        delete filter['time'];
        return filter;
    };
    const searchBtn = () => {
        props.form.validateFields((err, filter) => {
            if (!err) {
                setSearch(initSearch => updateTime(filter));
            }
        });
    };
    const inputOnBlur = () => {
        props.form.validateFields((err, filter) => {
            if (!err) {
                let newConditon = updateTime(filter);
                newConditon = Object.assign({ belong: 'sort,human,place' }, newConditon);
                setInput(initInput => newConditon);
            }
            setSearch(initInput => updateTime(filter));
            // console.log(initInput);
            // setSearch(initSearch => updateTime(filter));
            // setSearch(initSearch => updateTime(filter));
        });
    };
    /**
     * 日历组件更新值
     */
    const RangePickerChange = (e) => {
        const totalDays = 365 * 24 * 60 * 60 * 1000; // 一年
        const startTime = e[0];
        const endTime = e[1];
        const totalSelectDays = endTime - startTime;
        if (totalSelectDays > totalDays) {
            message.info('仅支持查询时间周期为1年的数据');
            const startDate = moment().subtract(365, 'days');
            const endDate = moment().endOf('day');
            e[0] = startDate;
            e[1] = endDate;
        }
    };

    const [count, setCount] = useState(0);

    function handleAlertClick() {
        setTimeout(() => {
            alert('You clicked on: ' + count);
        }, 3000);
    }
    const [initNum,setInitNum] = useState(0)
    const currentNum = () => {
        setInitNum(initNum + 1)
        console.log(initNum)
    }
    useEffect(() => {
        console.log(initNum)
    })
    return (
        <Fragment>
            <Form>
                <FormItem label='时间范围' {...formItemLayout} className='timeRange'>
                    {getFieldDecorator('time', {
                        initialValue: [startDate, endDate]
                    })(
                        <RangePicker
                            format='YYYY-MM-DD'
                            onChange={RangePickerChange}
                            placeholder={['开始时间', '结束时间']}
                            allowClear={false}
                        />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label='涉及地点' className='shortMedia timeQuickSel'>
                    {getFieldDecorator('placeName')(
                        <Cascader
                            options={initData}
                            allowClear={false}
                            placeholder='请选择地点'
                            expandTrigger='hover'
                            // onChange={fetchLocation}
                            changeOnSelect
                        />
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label='发布者' className='shortMedia timeRange inputWidth'>
                    {getFieldDecorator('author', {
                        initialValue: '',
                        rules: [
                            {
                                max: 50, message: '发布者长度不得大于50位!'
                            }
                        ],
                    })(
                        <Input placeholder='查找发布者' onBlur={inputOnBlur} />
                    )}
                </FormItem>
                <div>呵呵呵呵呵🙃</div>
                <Button type='primary' onClick={searchBtn} className={styles.btn1}>搜索</Button>
                <br />
                {/* <Button type='primary' onClick={}>搜索</Button> */}
                <div onClick={() => { log(); setTemp(3); }}>xyz {temp}</div>
                {/* <div onClick={() => setCount(count => count + 1)}>useeffect</div> */}
                <input />
                <div>哈哈哈哈哈😀1234</div>
                <div>哈哈哈哈哈😀1234</div>
            </Form>
            <h1>{count1}</h1>
            <p>You clicked {initNum} times</p>
            <button onClick={ () => { currentNum() ;  }}>
                Click me
            </button>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={handleAlertClick}>
                Show alert
            </button>

            <h1>
                useState的用法:
            </h1>
            <h2>
                const [value,setValue] = useState(false)  //value相当于类组件里的初始化的state，setValue相当于this.setState() setValue(true)
            </h2>
            <h2>
                同步异步的概念：类组件里
            </h2>
            <h4>
                在 log 函数执行的那个 Render 过程里，temp 的值可以看作常量 5，执行 setTemp(3) 时会交由一个全新的 Render 渲染，所以不会执行 log 函数。而 3 秒后执行的内容是由 temp 为 5 的那个 Render 发出的，所以结果自然为 5。
                原因就是 temp、log 都拥有 Capture Value 特性。
            </h4>
            <br />
            <h4>在函数式组件里没有了this指向的问题在类组件里的this.state.a 可以直接使用a来代替</h4>
            <br />
            <h1>
                useEffect获取数据的用法
            </h1>
            <h2>
                因为useEffect是用在了函数式组件里所以没有了生命周期的概念（同步），要想理解useEffect的用法必须忘记掉生命周期(五个问题)

                🤔 如何用useEffect模拟componentDidMount生命周期？
                🤔 如何正确地在useEffect里请求数据？[]又是什么？
                🤔 我应该把函数当做effect的依赖吗？
                🤔 为什么有时候会出现无限重复请求的问题？
                🤔 为什么有时候在effect里拿到的是旧的state或prop？
            </h2>
            <h3>
                第二个和第四个问题 入门(https://www.robinwieruch.de/react-hooks-fetch-data/)
                另外三个问题 https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/
                空数组作为效果钩子的第二个参数，这个参数代表的意思是如果其中一个变量发生变化，则钩子再次运行。如果包含变量的数组为空，则在更新组件时挂钩不会运行，因为它不必监视任何变量。
                请求数据分为以下几种情况:
                1>.页面初始化需要请求数据(只请求一次，组件更新时不需要再次请求，这时候就可以传入一个空数组，如果不传则说明没有监听的对象就会一直请求接口)
                2>.form表单需要将所有条件获取到统一请求接口这时候数组里可以传入一个最终搜索的结果，hook会监听数组里的值只要该依赖发生了变化就去请求接口，数组里的依赖一定要真实，要把所有依赖的条件都传入到数组
                3>.输入框只要我一输入就去请求接口，就可以捕获输入框的事件使用usestate去更新这个值
                4>.与usereducer的结合使用
                5>.事件的异常捕获
                
            </h3>
                第五个问题   React只会在浏览器绘制后运行effects
                    1>.该 Hook 接收一个包含命令式、且可能有副作用代码的函数，通常，组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源。要实现这一点，useEffect 函数需返回一个清除函数
                    2>.错误的心智模型(忘记生命周期)
                    假设第一次渲染的时候props是  id: 10，第二次渲染的时候是   id: 20。你可能会认为发生了下面的这些事：
                    React 清除了  id: 10  的effect。
                    React 渲染   id: 20   的UI。
                    React 运行   id: 20   的effec
                    正常渲染顺序
                    React 渲染 id: 20 的UI。
                    浏览器绘制。我们在屏幕上看到 id: 20 的UI。
                    React 清除 id: 10 的effect。
                    React 运行 id: 20 的effect。





            <h1>useReducer的用法</h1>
            <h3>
                当你想要更新一个状态并且这个状态依赖于另一个状态的值时，你可能需要用到usereducer
            </h3>
        </Fragment>


    );
};

export default (Form.create()(List));
