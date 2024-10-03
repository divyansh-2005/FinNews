const dotenv = require("dotenv");
dotenv.config(); 
const backendDomain = process.env.BACKEND_DOMAIN || 'http://localhost:5000';

const commonendpoint = {
    latestFinancialNews : {
        url: `${backendDomain}/api/latest-financial-news`,
        method: 'GET'
    },
    dailyNewsetter : {
        url: `${backendDomain}/api/fetch-dailyNews`,
        method: 'GET'
    }
}

export default commonendpoint;