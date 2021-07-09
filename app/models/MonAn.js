export class MonAn { //Lớp đối tượng (Kiễu dữ liệu mình tự xây dựng)
    maMon = '';
    tenMon = '';
    loaiMon = '';
    giaMon = 0;
    khuyenMai = 0;
    tinhTrang = false;
    hinhAnh = '';
    moTa = '';

    constructor () {

    }

    tinhGiaKhuyenMai = () => {
                                        // 300 - (300 * 10/100)
        let giaKhuyenMai = this.giaMon - (this.giaMon * this.khuyenMai/100);

        return giaKhuyenMai;
    }
    hienThiThongTin = () => {

    }
}

let mon = new MonAn () ; //Instance (Đối tượng) (Biến cụ thể có kiểu dữ liệu của lớp đối tượng)