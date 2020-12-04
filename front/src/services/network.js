import axios from "axios";
const burl = "http://localhost:3001";

export default {
    getCountUsers: () => {
        //Appel API
        return axios.get(`${burl}/api/users/count`);

        //Structure à utiliser avant de finir de coder le back
        // return 3
    },
    getUsers: () => {
        //Appel API
        return axios.get(`${burl}/api/users/`);

        //Structure à utiliser avant de finir de coder le back
        // return [
        //     {
        //         "_id": "5fca3fe9dc93324b7f8af904",
        //         "firstName": "Leandro"
        //     },
        //     {
        //         "_id": "5fca3fe9dc93324b7f8af905",
        //         "firstName": "Nina"
        //     },
        //     {
        //         "_id": "5fca3fe9dc93324b7f8af906",
        //         "firstName": "Marc"
        //     }
        // ]
    },
    getUser: (id) => {
        //Appel API
        return axios.get(`${burl}/api/users/${id}`);

        //Structure à utiliser avant de finir de coder le back
        // return {
        //     _id: "5fca3fe9dc93324b7f8af905",
        //     firstName: "Nina",
        //     surname: "Gautreau",
        //     age: 27,
        //     city: "Bordeaux",
        //     country: "France",
        //     hasCar: true,
        // }
    },
}