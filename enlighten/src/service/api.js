import axios from 'axios';

import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/config';

const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
        baseURL: API_URL,
        timeout: 10000,
        headers: {
            "Content-Type": "application/json"
        }
})

axiosInstance.interceptors.request.use(
    function(config) {
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function(response) {
        return processResponse(response);
    },
    function(error) {
        return Promise.reject(processError(error))
    }
)

const processResponse = (response) => {
        if (response?.status === 200) {
            return { isSuccess: true, data: response.data }
        } else {
            return {
                isFailure: true,
                status: response?.status,
                msg: response?.msg,
                code: response?.code
            }
        }
}

const processError = (error) => {
    if (error.response) {
        console.log('ERROR IN RESPONSE:' , error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code: error.response.status
        }
    } else if (error.request) {
        console.log('ERROR IN REQUEST:' , error.toJSON());
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        }
    } else {
        console.log('SOMETHING IS WRONG');
        return{
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        }
    }
}

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
        API[key] = (body) => 
            axiosInstance({
                method: value.method,
                url: value.url, 
                data: body,
                responseType: value.responseType
            })
}

export { API };