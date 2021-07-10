let arrMonAn = [];
//lấy dữ liệu từ localStorage ra arrMonAn
let getDataStorage = () => {
    if (localStorage.getItem('danhSachMonAn')) {
        arrMonAn = JSON.parse(localStorage.getItem('danhSachMonAn'))
    }
}

getDataStorage();

console.log ('arr', arrMonAn);