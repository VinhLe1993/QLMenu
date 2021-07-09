import { MonAn } from "../models/MonAn.js";

//Định nghĩa sự kiện cho btnThemMon
document.querySelector("#btnThemMon").onclick = () => {
  //Tạo đối tượng chứa thông tin người dùng nhập vào
  let monAn = new MonAn();

  //Truy xuất đến tất cả các input, select, textarea để lấy thông tin người dùng nhập từ giao diện
  let arrTagInput = document.querySelectorAll(
    "form input, form select, form textarea"
  );

  for (let input of arrTagInput) {
    //Mội lần duyệt 1 tagInput lấy ra name và value
    let { name, value } = input;
    //Gán giá trị value dựa vào name (thuộc tính) cho object MonAn
    monAn[name] = value;
  }

  console.log("arrTabInput", arrTagInput);
  console.log("monAn", monAn);

  var arrTagOutPut = document.querySelectorAll(
    ".list-group-item span, .list-group-item p"
  );

  for (let tag of arrTagOutPut) {
    /**Đối với một số thẻ không có thuộc tính dom mà ta thêm vào
     * để lấy giá tri trên thẻ, ta dùng phương thức getAttribute
     */
    let name = tag.getAttribute("name");
    if (name === "giaSauKhuyenMai") {
      tag.innerHTML = monAn.tinhGiaKhuyenMai();
    } else if (name === "loaiMon") {
      tag.innerHTML = monAn[name] === "loai1" ? "Chay" : "Mặn";
      // if (monAn[name] === 'loai1') {
      //     tag.innerHTML = 'Chay';
      // } else {
      //     tag.innerHTML = 'Mặn';
      // }
    } else if (name === "tinhTrang") {
      tag.innerHTML = monAn[name] == "0" ? "Hết" : "Còn";
    } else {
      tag.innerHTML = monAn[name];
    }
  }
  document.querySelector ('#imgMonAn').src = monAn['hinhAnh'];
};

//các cách gán giá trị cho thuộc tính của object
// let sinhVien = {ma:1, ten:'A'};
//dùng khi gán một giá trị đơn giản cho object
// sinhVien.ten = 'B'; (set cứng)
// sinhVien['ten'] = 'B'; (động )
//dùng gán giá trị động cho từng thuộc tính thông qua vòng lặp for
// sinhVien = {...sinhVien, ten: 'B'} (set cứng)
// sinhVien = {...sinhVien, ['ten']:'B'} (động)
