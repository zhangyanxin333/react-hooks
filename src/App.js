import React from 'react';
function App() {
    return (
        <div>
        </div>
    );
}
// 顶级context
export const globalAutoProps = {
    data: {
        itemID: 'ID0001',
        itemMsg: 'Context共享参数'
    }
};
export const globalPropsContext = React.createContext(
    globalAutoProps.data // 默认值
);
export default App;
