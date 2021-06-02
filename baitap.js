/**
 * Đầu vào:Tên ,số lượng ,đơn giá 
 * xử lí:
 * tạo biến ten 
 * tạo biến soLuong 
 * tạo biến donGia
 * tạo biến soTien
 * nếu soLuong nhỏ hơn 50 => soTien = soLuong*donGia
 * nếu 50<= soLuong   <=100 thì => soTien = 49*donGia + (soLuong-49)*donGia*0.92
 * nếu soLuong >100 thì soTien =49*donGia +51*donGia*0.92+(soLuong-100)*donGia*0.88
 * đầu ra: Xuất soTien
 */
document.getElementById("ThanhToan").onclick=function(event){
    event.preventDefault();
    var hangHoa = document.getElementById("TenHangHoa").value;
    var  soLuong =document.getElementById("SoLuong").value;
    var donGia = document.getElementById("DonGia").value;
    var soTien="";
    
    if(soLuong<50 && soLuong>=1){
        soTien =soLuong*donGia;
    }else if(soLuong <=100 &&  50<= soLuong ){
        soTien =  49*donGia + (soLuong-49)*donGia*0.92;
    }else if(soLuong >100){
        soTien = 49*donGia +51*donGia*0.92+(soLuong-100)*donGia*0.88;
    }else{
        soTien="Số Lượng không hợp lệ"
    }
    document.getElementById("Xuat").innerHTML=hangHoa +"("+soLuong+")"+": " +soTien;
}