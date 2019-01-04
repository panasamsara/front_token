import Cookies from 'js-cookie'
import config from '../config/config.js'

export const TOKEN_KEY = 'token';

export const setToken = (token) => {
    Cookies.set(TOKEN_KEY, token, {expires: config.cookieExpires || 1})
};

export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY);
    if (token) return token;
    else return false
};

export const removeToken = () => {
    Cookies.remove(TOKEN_KEY);
};

// 格式化金额
export const formatMoney = (num, digit) => {
    if(num || num===0) {
        num = Number(num) || 0;
        digit = Number(digit) || 2;
        var num_prefix = num.toLocaleString().split('.')[0];
        var num_suffix = num.toFixed(digit).split('.')[1] || null;
        return num_prefix + (!num_suffix ? '' : `.${num_suffix}`);
    }
    return '-'
};

export const getTreeData = (node, list) => {
    node.children = [];
    node.title = node.deptName;
    node.expand = true;
    node.selected = false;
    list.forEach((value) => {
        if (value.parentId === node.id) {
            getTreeData(value, list);
            node.children.push(value);
        }
    })
};

export const getSysMenuTreeData = (node, list) => {
    node.children = [];
    node.title = node.menuName;
    node.expand = true;
    node.selected = node.isSelect == '1';
    list.forEach((value) => {
        if (value.parentId === node.id) {
            getSysMenuTreeData(value, list);
            node.children.push(value);
        }
    })
};

export const initTreeData = (node, param) => {
    node.title = node[param[0]];
    node.children = node[param[1]] ? node[param[1]] : [];
    node.expand = true;
    node.selected = false;
    node.children.forEach((value) => {
        initTreeData(value, param);
    })
};

export const setChildrenNode = (node, bool) => {
    node.children.forEach((value) => {
        setChildrenNode(value, bool);
        value.selected = bool;
    });
    node.selected = bool;
};

export const setParentNode = (root, node, bool) => {
    let parent = root.find((item) => {
        return item.node.id == node.parentId
    });
    if (parent) {
        if (bool) {
            setParentNode(root, parent.node, bool);
            parent.node.selected = bool;
        } else {
            if (!parent.node.children.some((item) => {
                return item.selected
            }))
                parent.node.selected = bool;
            setParentNode(root, parent.node, bool);
        }
    } else {
        if (!node.children.some((item) => {
            return item.selected
        }))
            node.selected = false
        else
            node.selected = true
    }
};

export const setSelectedNode = (list, id) => {
    list.forEach((value) => {
        value.selected = value.id === id;
        setSelectedNode(value.children, id)
    });
};

export const clearObject = (obj) => {
    for (let pro in obj) {
        obj[pro] = null;
    }
};

export const timeUtil = {
    formatDateTime: (inputTime) => {
        var date = new Date(inputTime);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    },
    getIntDateTime: (date) => {
        if (date instanceof Date) {
            let year = String(date.getFullYear());
            let month = String(date.getMonth() + 1);
            let day = String(date.getDate());
            let hour = String(date.getHours());
            let minute = String(date.getMinutes());
            let second = String(date.getSeconds());
            month = month > 9 ? month : '0' + month;
            day = day > 9 ? day : '0' + day;
            hour = hour > 9 ? hour : '0' + hour;
            minute = minute > 9 ? minute : '0' + minute;
            second = second > 9 ? second : '0' + second;
            return year + month + day + hour + minute + second;
        }
        return null;
    },
    getDateTime: (date) => {
        if (date instanceof Date) {
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();
            month = month > 9 ? month : '0' + month;
            day = day > 9 ? day : '0' + day;
            hour = hour > 9 ? hour : '0' + hour;
            minute = minute > 9 ? minute : '0' + minute;
            second = second > 9 ? second : '0' + second;
            return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
        }
        return null;
    },
    getCurrentDate: (date) => {
        if (date instanceof Date) {
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            month = month > 9 ? month : '0' + month;
            day = day > 9 ? day : '0' + day;
            return year + '-' + month + '-' + day;
        }
        return date ? date : null;
    },
    addMonth: (sDate, num) => {
        num = parseInt(num);

        let sYear = sDate.getFullYear();
        let sMonth = sDate.getMonth() + 1;

        let eYear = sYear;
        let eMonth = sMonth + num;
        if (eMonth > 0) {
            while (eMonth > 12) {
                eYear++;
                eMonth -= 12;
            }
        }
        if (eMonth < 0) {
            while (eMonth < -12) {
                eYear--;
                eMonth += 12;
            }
            if (eMonth < 0) {
                eYear--;
                eMonth += 12;
            }
        }
        eMonth = eMonth > 9 ? eMonth : '0' + eMonth;
        return eYear + "" + eMonth;
    },
    getCurrentMonth: (date) => {
        if (date instanceof Date) {
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            month = month > 9 ? month : '0' + month;
            return year + "" + month;
        }
        return null;
    },
    intDateChangToStr: (intDate) => {
        let timeStr = '' + intDate;
        timeStr = timeStr.substring(0, 4) + '-' + timeStr.substring(4, 6) + '-' + timeStr.substring(6, 8);
        return timeStr;
    },
    intTimeChangToStr: (time) => {
        let timeStr = '' + time;
        let zero = '';
        for (let i = 1; i < 6; i++) {
            if (timeStr.length == i) {
                for (let j = 0; j < 6 - i; j++) {
                    zero = '0' + zero;
                }
                timeStr = zero + timeStr;
                break;
            }
        }
        timeStr = timeStr.substring(0, 2) + ':' + timeStr.substring(2, 4) + ':' + timeStr.substring(4, 6);
        return timeStr;
    },
    composeDateAndTime: (intDate, intTime) => {
        let dateStr = timeUtil.intDateChangToStr(intDate);
        let timeStr = timeUtil.intTimeChangToStr(intTime);
        return dateStr + ' ' + timeStr;
    },
    convertDateFromString: (dateString) => {
        if (dateString) {
            let date = new Date(dateString.replace(/-/, "/"));
            return date;
        }
        return null;
    },
    getTotalMonth: (year, month) => {
        return parseInt(year) * 12 + parseInt(month);
    }
};

export const Print = (dom, options) => {
    print.options = print.extend({
        noPrint: '.no-print'
    }, options);
    if ((typeof dom) === "string") {
        print.dom = document.querySelector(dom);
    } else {
        print.dom = dom;
    }
    print.init();
};
const print = {
    init: function () {
        let content = this.getStyle() + this.getHtml();
        this.writeIframe(content);
    },
    extend: function (obj, obj2) {
        for (let k in obj2) {
            obj[k] = obj2[k];
        }
        return obj;
    },

    getStyle: function () {
        let str = "",
            styles = document.querySelectorAll('style,link');
        for (let i = 0; i < styles.length; i++) {
            str += styles[i].outerHTML;
        }
        str += "<style>" + (this.options.noPrint ? this.options.noPrint : '.no-print') + "{display:none;}</style>";

        return str;
    },

    getHtml: function () {
        let inputs = document.querySelectorAll('input');
        let textareas = document.querySelectorAll('textarea');
        let selects = document.querySelectorAll('select');

        for (let k in inputs) {
            if (inputs[k].type == "checkbox" || inputs[k].type == "radio") {
                if (inputs[k].checked == true) {
                    inputs[k].setAttribute('checked', "checked")
                } else {
                    inputs[k].removeAttribute('checked')
                }
            } else if (inputs[k].type == "text") {
                inputs[k].setAttribute('value', inputs[k].value)
            }
        }

        for (let k2 in textareas) {
            if (textareas[k2].type == 'textarea') {
                textareas[k2].innerHTML = textareas[k2].value
            }
        }

        for (let k3 in selects) {
            if (selects[k3].type == 'select-one') {
                let child = selects[k3].children;
                for (let i in child) {
                    if (child[i].tagName == 'OPTION') {
                        if (child[i].selected == true) {
                            child[i].setAttribute('selected', "selected")
                        } else {
                            child[i].removeAttribute('selected')
                        }
                    }
                }
            }
        }

        return this.dom.outerHTML;
    },

    writeIframe: function (content) {
        let w, doc, iframe = document.createElement('iframe'),
            f = document.body.appendChild(iframe);
        iframe.id = "myIframe";
        iframe.style = "position:absolute;width:0;height:0;top:-10px;left:-10px;";

        w = f.contentWindow || f.contentDocument;
        doc = f.contentDocument || f.contentWindow.document;
        doc.open();
        doc.write(content);
        doc.close();
        this.toPrint(w);

        setTimeout(function () {
            document.body.removeChild(iframe)
        }, 5000)
    },

    toPrint: function (frameWindow) {
        try {
            setTimeout(function () {
                frameWindow.focus();
                try {
                    if (!frameWindow.document.execCommand('print', false, null)) {
                        frameWindow.print();
                    }
                } catch (e) {
                    frameWindow.print();
                }
                frameWindow.close();
            }, 1000);
        } catch (err) {
            console.log('err', err);
        }
    }
};

export const validation = {
    testNumber: (value) => {
        const pattern = /^[0-9]+([.]{1}[0-9]{1,2})?$/;
        if (!pattern.test(value))
            return null;
        return value;
    },
    testPhone: (value) => {
        const pattern = /^(\d{10,11}|\d{3,4}-\d{7,8}(-\d{3,4})?|\(\d{3}\)\d{7,8})$/;
        if (!pattern.test(value))
            return null;
        return value;
    }
};

const canvasDataURL = (path, obj, callback) => {
    let img = new Image();
    img.src = path;
    img.onload = function () {
        let that = this;
        let w = that.width,
            h = that.height,
            scale = w / h;
        w = obj.width || w;
        h = obj.height || (w / scale);
        let quality = 0.7;
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        let anw = document.createAttribute("width");
        anw.nodeValue = w;
        let anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
            quality = obj.quality;
        }
        let base64 = canvas.toDataURL('image/jpeg', quality);
        callback(base64);
    }
};

export const localResizeIMG = {
    photoCompres: (file, w, callback) => {
        let ready = new FileReader();
        ready.readAsDataURL(file);
        ready.onload = function () {
            let re = this.result;
            canvasDataURL(re, w, callback);
        }
    }
};