import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://lifecamp-server.vercel.app/'
})
const useAxiosSecure = () => {
    const { Logout } = useAuth()
    const navigate = useNavigate()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access_token')
        config.headers.authorization = `bearer ${token}`
        return config
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
        return response;
    },
        async (error) => {
            const status = error.response.status;
            console.log('error in interceptor', status);
            if (status === 401 || status === 403) {
                await Logout();
                navigate('/login')
            }
            return Promise.reject(error);
        }
    )
    return axiosSecure;
};

export default useAxiosSecure;