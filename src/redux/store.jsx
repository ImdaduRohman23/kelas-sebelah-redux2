import { createStore } from "redux";

const dataState = {
    data: {
        nama: 'imdadu',
        avatar: 'https://reqres.in/img/faces/12-image.jpg'
    }
}


const dataReduce = (state = dataState) => {
    return state
} 

const store = createStore(dataReduce);
export default store