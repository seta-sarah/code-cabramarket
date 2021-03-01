import axios from 'axios';
const auth = {
    username: 'ck_268e71ba01ccc0c108b456c870d250552127ac2f',
    password: 'cs_683375830e6fe5234d48d8c8b20d61641f1b2283'
}
type apiRes = {
    data?: any,
    error?: any;
    
}
const baseUrl = 'https://product.cabramarket.com/wp-json/wc/v3';
export async function get(url):Promise<apiRes> {
    return axios.get(baseUrl + url, {
        auth
    }).then(res => {
        const { status, data } = res
        if (status === 200) {
            return { data }
        } else {
            throw new Error()
        }
    }).catch(error => ({error}));
}