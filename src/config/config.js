import Env from './env';

const downloadUrl = 'uploadfile/downLocal?fileId=', uploadUrl = 'uploadfile/file', flag = 'development';

let config = {
    env: Env,
    cookieExpires: 1,
    pageSize: 10,
    menu: {},
    uploadUrl: Env === flag ? 'api/' + uploadUrl : uploadUrl,
    downloadUrl: Env === flag ? 'api/' + downloadUrl : downloadUrl,
    millseconds: 86400000,
    ERROR: '服务器错误'
};
export default config;