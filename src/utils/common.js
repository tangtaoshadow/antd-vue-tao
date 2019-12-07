/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Filename:
 * @Archive:
 * @Statement:
 * @Date: 2019-12-06 00:30:18
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2019-12-07 23:34:03
 */

// import moment from "moment";

let tao = {};

/***
 * 计算字符串存储长度
 */
tao.strlen = function (str) {
    let len = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        // 单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len++;
        } else {
            len += 2;
        }
    }
    return len;
};

// 截取字符串指定的不超出的存储长度
tao.substr = function (str, num) {
    let str1 = "";
    let len = 0;
    let j = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            // 单字节加1
            j = 1;
        } else {
            // 双字节
            j = 2;
        }

        //   当且仅当 加上这个字符的长度小于指定的长度 才会添加
        if (len + j <= num) {
            str1 += str[i];
            len += j;
        } else {
            break;
        }
    }
    return str1;
};

// 一般情况下使用
tao.consolelog = function () {
    let len = arguments.length;
    for (let i = 0; i < len; i++) {
        console.log(arguments[i]);
    }
};

tao.my_console = function (type, ...all_arg) {
    if ("log" == type) {
        window.console.log(...all_arg);
    } else if ("warn" == type) {
        window.console.warn(...all_arg);
    } else if ("error" == type) {
        window.console.error(...all_arg);
    } else {
        // 输出所有参数
        window.console.log(...all_arg);
    }
};

// 开发模式 这个函数 与 consolelog 不一样
// 主要用在开发模式 方便后续发布屏蔽 tangtao 2019-10-6 02:46:13
tao.dev_consolelog = function () {
    let len = arguments.length;
    for (let i = 0; i < len; i++) {
        console.log(arguments[i]);
    }
};

/***
 * @Author              TangTao  https://www.promiselee.cn/tao
 * @Email               tangtao2099@outlook.com
 * @Copyright           西湖大学 propro Tangtao
 * @GitHub              https://github.com/tangtaoshadow
 * @Zhihu               https://www.zhihu.com/people/tang-tao-24-36/activities
 * @CreateTime          2019-8-15 23:58:31
 * @UpdateTime          2019-8-16 00:04:27
 * @Archive             时间戳(13位) 转换为 指定的自定义日期格式 比如 (timestamp,'Y-M-D h:m:s')
 */

tao.format_time = function (timestamp = 0, date_format = "Y-M-D h:m:s") {
    let formate_arr = ["Y", "M", "D", "h", "m", "s"];
    let result_arr = [];
    let date = new Date(timestamp);

    result_arr.push(date.getFullYear());
    result_arr.push(tao.format_number(date.getMonth() + 1));
    result_arr.push(tao.format_number(date.getDate()));
    result_arr.push(tao.format_number(date.getHours()));
    result_arr.push(tao.format_number(date.getMinutes()));
    result_arr.push(tao.format_number(date.getSeconds()));

    // 这是一种遍历速度很慢的方式 可以考虑优化
    for (let i in result_arr) {
        date_format = date_format.replace(formate_arr[i], result_arr[i]);
    }

    return date_format;
};

//数据转化
tao.format_number = function (n) {
    n = n.toString();
    return n[1] ? n : "0" + n;
};

/***
 * @Author              TangTao https://www.promiselee.cn/tao
 * @Email               tangtao2099@outlook.com
 * @Copyright           西湖大学 propro Tangtao
 * @GitHub              https://github.com/tangtaoshadow
 * @CreateTime          2019-9-11 13:43:41
 * @UpdateTime          2019-9-11 13:45:03
 * @Archive             输出格式化好的当前时间
 */
tao.current_format_time = function () {
    let current_date = new Date();
    let date =
        current_date.getFullYear() +
        "-" +
        sup(current_date.getMonth() + 1) +
        "-" +
        sup(current_date.getDate());
    let time =
        sup(current_date.getHours()) +
        ":" +
        sup(current_date.getMinutes()) +
        ":" +
        sup(current_date.getSeconds());
    function sup(n) {
        return n < 10 ? "0" + n : n;
    }
    let format_time = date + " " + time;
    return format_time;
};

/*
 * @Author: TangTao https://www.promiselee.cn/tao
 * @Date: 2019-11-15 15:10:37
 * @Last Modified by:   TangTao tangtao2099@outlook.com
 * @Last Modified time: 2019-11-15 15:10:37
 * @archive 兼容性 bolb 切片
 */
// 文件切片方法
tao.slice_file = (blob, start_byte, end_byte) => {
    //
    if (blob.slice) {
        return blob.slice(start_byte, end_byte);
    }
    // 兼容firefox
    if (blob.mozSlice) {
        return blob.mozSlice(start_byte, end_byte);
    }
    // 兼容webkit
    if (blob.webkitSlice) {
        return blob.webkitSlice(start_byte, end_byte);
    }
    tao.my_console(
        "error",
        "tangtao：你的浏览器不支持分片操作,请更新或者更换浏览器"
    );
    return null;
};

export default tao;
