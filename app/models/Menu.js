export class Menu {
  arrMonAn = []; // [{mon:1, tenMon:'ten mon', gia:''},{mon:2, tenMon:'ten mon2', gia:''}]
  constructor() {}
  addToMenu = (monAn) => {
    this.arrMonAn.push(monAn);
  };

  deleteDishes = (maMon) => {
    // maMon:1 hoặc 2
    // Muốn xóa một phần tử phải tìm ra index của phần tử đó 
    //arr.splice(index,1);
    //findIndex là hàm tìm vị trí của phần tử mảng thỏa điều kiện arrowfunction (tìm thấy trả về vị trí, không tìm thấy trả về -1)
    let index = this.arrMonAn.findIndex((monAn)=>{
      return monAn.maMon === maMon
    });
    //Nếu tìm thấy thì trả về vị trí, ngược lại nếu không tìm thấy thì trả về -1
    if(index !== -1) {
      this.arrMonAn.splice(index,1);
    }
  };

  chinhSuaMon = (ma, monAnCapNhat) => {};

  createMenu = () => {
    //map: là hàm dùng để tạo ra một mảng mới từ mảng ban đầu
    let arrResult = this.arrMonAn.map((monAn, index) => {
      return `
                <tr>
                    <td>${monAn.maMon}</td>
                    <td>${monAn.tenMon}</td>
                    <td>${monAn.loaiMon}</td>
                    <td>${monAn.giaMon}</td>
                    <td>${monAn.khuyenMai}</td>
                    <td>${monAn.tinhTrang ? "Còn" : "Hết"}</td>
                    <td>
                        <button onclick="deleteDishes('${monAn.maMon}')">Xóa</button>
                        <button>Chỉnh sửa</button>
                    </td>
                </tr>
            `;
    });
    return arrResult;
  };

  renderMenu = (idTable) => {
    let arrHtmlMenu = this.createMenu();
    /**Foreach (callback): forEach nhận vào 1 callback có 2 tham số
     * (phần tử của mảng, vị trí phần tử đó ) hàm này sẽ chạy n lần
     * dựa vào n phần tử của mảng
     */
    let content = '';
    arrHtmlMenu.forEach((htmlTrMonAn, index) => {
      content += htmlTrMonAn;
    });
    document.getElementById(idTable).innerHTML = content;
  };
  saveStorage = () => {
      //Biến dữ liệu arrMenu thành chuỗi 
      let stringMenu = JSON.stringify(this.arrMonAn);
      //Lưu chuỗi vào localStorage
      localStorage.setItem('danhSachMonAn', stringMenu);
  }
  loadStorage = () => {
      /**Kiểm tra trong localstorage có dữ liệu thì lấy 
       * dữ liệu từ localStorage ra gán cho thuộc tính menu
       */
      if (localStorage.getItem('danhSachMonAn')) {
          let stringMenu = localStorage.getItem('danhSachMonAn');
          this.arrMonAn =JSON.parse(stringMenu);
      }
  }
}
