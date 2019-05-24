import axios from 'axios';
import {message} from 'antd';
import cookie from 'react-cookies';
function getUserSession() {
    // var ss = sessionStorage.getItem('jwtToken')
    let ss = cookie.load('jwtToken');
    // console.log(ss)
    if (ss) {
        // var h = JSON.parse(ss)
        // console.log(h)
        return {
            'Univer-Code': ss.code,
            'Univer-token': ss.accessToken
        };
    } else {
        return {};
    }
}
function myAxios(ax) {
    return new Promise(function (resolve, reject) {
        axios(ax)
            .then((response) => {
                if (response.status === 200) {
                    resolve(response.data);
                } else {
                    reject({status: response.status});
                }
            })
            .catch((err) => {
                let _err = {err};
                reject({err});
                if (_err.err.response && (_err.err.response.data.code === '1010006' || _err.err.response.data.code === '1010009')) {
                    message.info(_err.err.response.data.msg);
                    sessionStorage.clear();
                    cookie.remove('jwtToken', {path: '/'});
                    window.location.href = '/login';
                } else if (_err.err.response && _err.err.response.data.code === '401') {
                    message.info('您不具备当前接口权限');
                } else {
                    message.info('网络繁忙');
                }
            });
    });
}

export default {
    getAllLocation(filter) {
        return myAxios({
            url: '/service/data/tag/list',
            headers: getUserSession(),
            method: 'get',
            params: {
                belong: 'place'
            }
        });
    },
    postSearch(filter) {
        return myAxios({
            url: '/service/data/txt/post/list',
            method: 'post',
            headers: getUserSession(),
            data: filter
        });
    }
};