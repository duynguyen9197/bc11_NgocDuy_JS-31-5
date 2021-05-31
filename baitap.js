/**
 * Đầu vào:Tên ,số lượng ,đơn giá 
 * xử lí:
 * tạo biến ten 
 * tạo biến soLuong 
 * tạo biến donGia
 * tạo biến soTien
 * nếu soLuong nhỏ hơn 50 => soTien = soLuong*donGia
 * nếu soLuong   <=100 thì => soTien = (soLuong*donGia)*92/100
 * nếu soLuong >100 thì soTien =  (soLuong*donGia)*88/100
 * đầu ra: Xuất soTien
 */
document.getElementById("ThanhToan").onclick=function(event){
    event.preventDefault();
    var hangHoa = document.getElementById("TenHangHoa").value;
    var  soLuong =document.getElementById("SoLuong").value;
    var donGia = document.getElementById("DonGia").value;
    var soTien=0;
    if(soLuong<50){
        soTien =soLuong*donGia;
    }else if(soLuong <=100){
        soTien = (soLuong*donGia)*92/100;
    }else{
        soTien =  (soLuong*donGia)*88/100;
    }
    document.getElementById("Xuat").innerHTML=hangHoa +"("+soLuong+")"+": " +soTien;
}