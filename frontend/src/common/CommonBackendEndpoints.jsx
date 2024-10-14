// const backendDomain = "https://fin-news-backend.vercel.app"; // This is the deployed backend domain
const backendDomain = "http://localhost:2071"; // This is the local backend domain

const commonendpoint = {
    latestFinancialNews : {
        url: `${backendDomain}/api/latest-financial-news`,
        method: 'GET'
    },
    dailyNewsetter : {
        url: `${backendDomain}/api/fetch-dailyNews`,
        method: 'GET'
    },
    signup: {
        url: `${backendDomain}/users/signup`,
        method: 'POST'
    },
    login: {
        url: `${backendDomain}/users/signin`,
        method: 'POST'
    },
    getUserInfo: {
        url: `${backendDomain}/users/me`,
        method: 'GET'
    }
}

export default commonendpoint;