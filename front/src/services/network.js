import axios from "axios";
const burl = "http://localhost:3001";

export default {
    getCountUsers: () => {
        return axios.get(`${burl}/users/count`);
    },
    getUsers: () => {
        return axios.get(`${burl}/users/`);
    },
    getUser: (id) => {
        return axios.get(`${burl}/users/${id}`);
    },
}