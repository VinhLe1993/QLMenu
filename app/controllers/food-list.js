import { Menu } from "../models/Menu.js";

// let arrMonAn = [];

let menu = new Menu;
//lấy dữ liệu từ localStorage ra arrMonAn
// let getDataStorage = () => {
//     if (localStorage.getItem('danhSachMonAn')) {
//         menu.arrMonAn = JSON.parse(localStorage.getItem('danhSachMonAn'))
//     }
// }

// getDataStorage();
menu.loadStorage();
menu.renderMenu('tbodyFood'); 

window.deleteDishes = function (maMon) {

    menu.deleteDishes(maMon);
    menu.renderMenu('tbodyFood');
}



