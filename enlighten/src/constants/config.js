//API SERVICE CALL
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data being loaded'

    },
    success: {
        title: 'success',
        message: 'data successfully loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'Error while loading'
    },
    requestFailure: {
        title: 'Error',
        message: 'Error while parsing'
    },
    networkError: {
        title: 'Error',
        message: 'unable to connect'
    }
}

export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST'},
    userLogin: { url: '/login', method: 'POST'}
}