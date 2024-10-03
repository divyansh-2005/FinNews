const backendDomain = 'http://localhost:5000';

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