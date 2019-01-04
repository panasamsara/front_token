import Axios from 'axios'
import baseURL from '../config/url.js'
import Cookies from 'js-cookie'
import {TOKEN_KEY} from './util.js'
import Config from '../config/config.js'

class httpRequest {
    constructor() {
        this.options = {
            method: 'POST',
            url: ''
        };
        this.queue = {};
    }

    destroy(url) {
        delete this.queue[url];
        const queue = Object.keys(this.queue);
        return queue.length;
    }

    interceptors(instance, url) {
        instance.interceptors.request.use((config) => {
            if (config.url.lastIndexOf('read') >= 0)
                this.options.data.menuId = Config.menu.id;
            return config;
        });
        instance.interceptors.response.use((res) => {
            let {data} = res;
            this.destroy(url);
            if (data.httpCode === 401 || data.httpCode === 405) {
                Cookies.remove(TOKEN_KEY);
                window.location.href = '/';
                return;
            }
            return data;
        }, (error) => {
            return Promise.reject(error);
        });
    }

    create(flag) {
        let conf = flag ? {
            baseURL: baseURL,
            timeout: 30000,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        } : {
            baseURL: baseURL,
            timeout: 30000,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                'X-URL-PATH': location.pathname
            },
            transformRequest: [function (data, headers) {
                function param(obj) {
                    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
                    for (name in obj) {
                        value = obj[name];
                        if (value instanceof Array) {
                            for (i = 0; i < value.length; ++i) {
                                subValue = value[i];
                                fullSubName = name + '[]';
                                innerObj = {};
                                innerObj[fullSubName] = subValue;
                                query += param(innerObj) + '&';
                            }
                        }
                        else if (value instanceof Object) {
                            for (subName in value) {
                                subValue = value[subName];
                                fullSubName = name + '[' + subName + ']';
                                innerObj = {};
                                innerObj[fullSubName] = subValue;
                                query += param(innerObj) + '&';
                            }
                        }
                        else if (value !== undefined && value !== null)
                            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                    }
                    return query.length ? query.substr(0, query.length - 1) : query;
                }

                // 可以对data做任何操作
                return typeof data == 'object' && String(data) !== '[object File]' ? param(data) : data;
            }]
        };
        return Axios.create(conf);
    }

    mergeReqest(instances = []) {

    }

    request(options, json) {
        let instance = json ? this.create(json) : this.create();
        this.interceptors(instance, this.options.url);
        if (options)
            Object.assign(this.options, options);
        this.queue[this.options.url] = instance;
        return instance(this.options);
    }
}

export default httpRequest;
