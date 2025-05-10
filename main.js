/**
 * Bài 1: Quản lý tuyển sinh 
 
 - Đầu vào:
 + Điểm Chuẩn
 + Khu vực
 + Đối tượng
 + Điểm môn thứ 1
 + Điểm môn thứ 2
 + Điểm môn thứ 3

 - Xử lý:
 + Tính điểm tổng 3 môn
 + Tính điểm chuẩn hội đồng 
 + So sánh điểm

 - Đầu ra:
 + Đậu hoặc Rớt

 */

function tongDiem(){
    let diemMon1 = document.getElementById("diem_1").value*1;
    let diemMon2 = document.getElementById("diem_2").value*1
    let diemMon3 = document.getElementById("diem_3").value*1

    let tong = "";

    if(diemMon1 == 0  || diemMon2 == 0 || diemMon3 == 0){
        tong = 0;
    }else{
        tong = diemMon1 + diemMon2 + diemMon3
    };

    return tong;
};


function tinhDiem() {
    let diemKhuVuc = document.getElementById("khuVuc").value*1;
    let diemDoiTuong = document.getElementById("doiTuong").value*1;
    let tongDiemMon = tongDiem();
    let diemChuan = "";

    if(tongDiemMon == 0){
        diemChuan = "Do có điểm nhỏ hơn bằng 0"
    } else{
        if ( diemKhuVuc == 1){
            if (diemDoiTuong == 1){
                diemChuan = tongDiemMon + 2 + 2.5;
            } else if (diemDoiTuong == 2){
                diemChuan = tongDiemMon + 2 + 1.5;
            } else if (diemDoiTuong == 3) {
                diemChuan = tongDiemMon + 2 + 1;
            } else{
                diemChuan = tongDiem + 2;
            }
        } else if ( diemKhuVuc == 2){
            if (diemDoiTuong == 1){
                diemChuan = tongDiemMon + 1 + 2.5;
            } else if (diemDoiTuong == 2){
                diemChuan = tongDiem + 1 + 1.5;
            } else if (diemDoiTuong == 1){
                diemChuan = tongDiemMon + 1 + 1;
            } else{
                diemChuan = tongDiemMon + 1;
            }
        } else if (diemKhuVuc == 3){
            if(diemDoiTuong == 1){
                diemChuan = tongDiemMon + 0.5 + 2.5;
            } else if (diemDoiTuong == 2){
                diemChuan = tongDiemMon + 0.5 + 1.5;
            } else if (diemDoiTuong == 1){
                diemChuan = tongDiemMon + 0.5 + 1;
            } else{
                diemChuan = tongDiemMon + 0.5;
            }
        } else {
            if (diemDoiTuong == 1) {
                diemChuan = tongDiemMon + 2.5;
            } else if (diemDoiTuong == 2) {
                diemChuan = tongDiemMon + 1.5;
            } else if (diemDoiTuong == 3) {
                diemChuan = tongDiemMon + 1 + 1;
            } else {
                diemChuan = tongDiemMon;
            };
        };
    };


    return diemChuan;
};

function soSanhDiem() {
    let dc = document.getElementById("diemChuan").value * 1;
    let td = tinhDiem();
    let kq;
    if (td >= dc) {
        kq = "Bạn đã đậu. "
    } else {
        kq = "Bạn đã rớt. "
    };

    return kq;
};


document.getElementById("ketQua").onclick = function(){
    let td = tinhDiem();
    let ss = soSanhDiem();
    console.log(td, ss);
    document.getElementById("show_1").innerHTML = `${ss} Tổng điểm: ${td}`;
};




/**
 * Bài 2: Tính tiền điện
 
 - Đầu vào:
 + Số điện

 - Xử lý:
 + Tính tiền điện

 - Đầu ra:
 + Số tiền điện

 */

 function tinhTienDien() {
    let soDien = document.getElementById("soKW").value;
    let tong = "";

    if( soDien > 0 && soDien <= 50){
        tong = soDien * 500;
    } else if (soDien > 50 && soDien <= 100){
        tong = (soDien - 50) * 650 + (50 * 500);
    } else if (soDien > 100 && soDien <= 200){
        tong = (soDien - 100) * 850 + (50 * 650) + (50 * 500);
    } else if (soDien > 200 && soDien <= 350){
        tong = (soDien - 200) * 1100 + (100 * 850) + (50 * 650) + (50 * 500);
    } else{
        tong = (soDien - 350) * 1300 + (150 * 1100) + (100 * 850) + (50 * 650) + (50 * 500)
    }

    return tong;
};

document.getElementById("tienDien").onclick = function(){
    let currentFormat = new Intl.NumberFormat("vn-VN");
    let name = document.getElementById("hoTen").value;
    let tongTien = tinhTienDien();

    document.getElementById("show_2").innerHTML = `Họ tên: ${name}; Tiền điện: ${currentFormat.format(tongTien)}`;
}


/**
 * Bài 3: tính thuế
 
 - Đầu vào:
 + Thu nhập cá nhân
 + Số người phụ thuộc

 - Xử lý:
 + Tính tiền thuế

 - Đầu ra:
 + Số tiền thuế

 */

 function thuNhapChieuThue() {
    let pt = document.getElementById("phuThuoc").value * 1;
    let tn1n = document.getElementById("thuNhap").value * 1;
    let tnct = "";

    tnct = tn1n - 4e+6 - (pt * 1.6e+6);

    return tnct;
}

function tongThuNhap() {
    let tn = thuNhapChieuThue();
    let tttn = 0;

    if (tn <= 60e+6) {
        tttn = tn * 0.05;
    } else if (tn <= 120e+6) {
        tttn = (tn - 60e+6) * 0.1 + 60e+6 * 0.05;
    } else if (tn <= 210e+6) {
        tttn = (tn - 120e+6) * 0.15 + 60e+6 * 0.1 + 60e+6 * 0.05;
    } else if (tn <= 384e+6) {
        tttn = (tn - 210e+6) * 0.2 + 90e+6 * 0.15 + 60e+6 * 0.1 + 60e+6 * 0.05;
    } else if (tn <= 624e+6) {
        tttn = (tn - 384e+6) * 0.25 + 174e+6 * 0.2 + 90e+6 * 0.15 + 60e+6 * 0.1 + 60e+6 * 0.05;
    } else if (tn <= 960e+6) {
        tttn = (tn - 624e+6) * 0.3 + 240e+6 * 0.25 + 174e+6 * 0.2 + 90e+6 * 0.15 + 60e+6 * 0.1 + 60e+6 * 0.05;
    } else {
        tttn = (tn - 960e+6) * 0.35 + 336e+6 * 0.3 + 240e+6 * 0.25 + 174e+6 * 0.2 + 90e+6 * 0.15 + 60e+6 * 0.1 + 60e+6 * 0.05;
    }

    return tttn;
}

document.getElementById("tienThue").onclick = function () {
    let name = document.getElementById("hoTen").value;
    let tongTN = tongThuNhap();
    let currentFormat = new Intl.NumberFormat("vi-VN");

    document.getElementById("show_3").innerHTML = `Họ tên: ${name}; Tiền thuế thu nhập cá nhân: ${currentFormat.format(tongTN)} VNĐ`;
}


/**
 * Bài 4: Tính tiền cap
 
 - Đầu vào:
 + Doanh Nghiệp / nhà dân
 + Mã khách hàng 
 + Số kết nối
 + Số kênh cao cấp 

 - Xử lý:
 + Nếu chọn loại khách hàng là nhà dân thì ô nhập kết nối sẽ ẩn đi hoặc disabled
 + Tính hóa đơn khách hàng

 - Đầu ra:
 + Số tiền cap

 */

 function phiXuLy() {
    let loaiKhach = document.getElementById("khachHang").value;
    let thueKenh = document.getElementById("soKenh").value;
    let sokn = document.getElementById("soKetNoi").value;
    let tong = "";

    if (loaiKhach == 1) {
        tong = thueKenh * 7.5 + 4.5 + 20.5;
    } else {
        if (sokn > 0 && sokn <= 10) {
            tong = thueKenh * 50 + 75 + 15;
        } else {
            tong = thueKenh * 50 + 75 + 15 + (sokn - 10) * 5;
        };
    };

    return tong;
};

document.getElementById("tienCap").onclick = function () {
    let maKhach = document.getElementById("maKhach").value;
    let pxl = phiXuLy();
    let enFormat = new Intl.NumberFormat("en-IN");

    document.getElementById("show_4").innerHTML = `Mã khách hàng: ${maKhach} Tiền cáp: $ ${enFormat.format(pxl)}`
};