import config from './config.js'

const DEV_URL = '/api';
const PRO_URL = '/';

export default config.env === 'development' ? DEV_URL : PRO_URL
