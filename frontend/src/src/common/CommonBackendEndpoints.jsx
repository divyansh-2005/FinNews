const backendDomain = "https://fin-news-backend.vercel.app";

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