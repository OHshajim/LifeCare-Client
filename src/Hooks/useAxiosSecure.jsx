import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {

    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access_token')
        config.headers.Authorization = `bearer ${token}`
        return config
    }
        , function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

    axios.interceptors.response.use(response => {
        return response;
    },
        async (error) => {
            const status = error.response.status;
            console.log('error in interceptor', status);

            return Promise.reject(error);
        }
    )
    return axiosSecure;

};

export default useAxiosSecure;