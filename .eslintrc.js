module.exports = {
    extends: [
        'eslint-config-alloy/react',
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        React: false,
        ReactDOM: false
    },
    plugins: [
        "react-hooks"
    ],
    rules: {
        // 禁止对函数的参数重新赋值, 关闭
        'no-param-reassign': 'off',
        // 禁止将 undefined 作为标识符, 关闭
        'no-undefined': 'off',
        // @fixable 对象字面量只有一行时，大括号内的首尾没有空格
        'object-curly-spacing': [
            'error',
            'never',
            {
                arraysInObjects: true,
                objectsInObjects: false
            }
        ],
        // 函数的循环复杂度, 关闭
        'complexity': 'warn',
        // Promise 的 reject 中必须传入 Error 对象，而不是字面量, 关闭
        'prefer-promise-reject-errors': 'off',
        // 禁止修改原生对象, 关闭
        'no-extend-native': 'off',
        // 禁止使用 eval, 关闭
        'no-eval': 'off',
        // a标签 href="javascript:;"
        'no-script-url': 'off',
        // 不允许在 case 子句中使用词法声明
        'no-case-declarations': 'off',
        //
        'no-cond-assign': 'off',
        // 消除魔幻数字
        'no-magic-numbers': 'off',
        // 'no-magic-numbers': [
        //     "off",
        //     {
        //         "ignore": [-2, 0, 2, 3, 4, 5, 6, 7, 10, 12, 24, 29, 60, 100, 404, 1000, 2000, 3000],
        //         "ignoreArrayIndexes": true,
        //         "detectObjects": false,
        //     }
        // ],
        // @fixable jsx 的开始和闭合处禁止有空格
        'react/jsx-tag-spacing': [
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'never',
                afterOpening: 'never'
            }
        ],
        // @fixable jsx 的 props 缩进必须为四个空格, 关闭
        'react/jsx-indent-props': 'off',
        // 多个空行错误提示
        'no-multiple-empty-lines': 'error',
        'no-console': 2,
        //react-hooks 查询接口依赖的数组
        "react-hooks/rules-of-hooks": 'error',
        "react-hooks/exhaustive-deps": 'warn' // <--- THIS IS THE NEW RULE
    }
};