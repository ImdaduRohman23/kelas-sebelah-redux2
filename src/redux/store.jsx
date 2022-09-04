import { createStore } from "redux";
import rooterReducer from "./reducer";

// const cardState = {
//     data: {
//         nama: 'imdadu',
//         avatar: 'https://reqres.in/img/faces/12-image.jpg'
//     }
// }

// //reducer => fungsi yang berfungsi unutk mereturn state
// const cardReducer = (state = cardState) => {
//     return state
// } 

// const navbarState = {
//     data: {
//         nama_comp: 'IMDADU COMPANY',
//         logo: 'INI LOGO'
//     }
// }

// const navbarReducer = (state = navbarState) => {
//     return state;
// }

const store = createStore(rooterReducer);
export default store