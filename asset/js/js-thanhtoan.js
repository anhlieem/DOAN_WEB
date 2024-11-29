function getPathImage(path) {
    const pathParts = path.split('\\');
    const pathName = pathParts.pop();
    return "./asset/image/" + pathName;
} 
const cart = JSON.parse(localStorage.getItem("cart")) || [] ;
let tongTien =0;
function renderCart(){
    let htmlResult = "";
    cart.forEach(element => {
        htmlResult += `<li>
                        
                        <div><img class="img-sp" src="${getPathImage(element.image)}"></div>
                        <div class="name-sp">Tên sản phẩm: ${element.name}</div>
                        <div><p class="price-sp">Giá: ${element.price}</p></div>
                        <div><p class="quantity-sp">Số lượng: ${element.quantity}</p></div>
                        <div><input type="text" class="voucher-code" placeholder="Nhập mã voucher">
                            <button class="apply-voucher-btn" onclick="applyVoucher()">Áp dụng</button></div>
                        
                    </li>`;
    });
    document.querySelector(".cartContainer").innerHTML = htmlResult;
}
renderCart();
cart.forEach(e =>{
    tongTien += e.price * e.quantity;
});
document.querySelector(".total-sp").innerHTML = `<h1>Tổng tiền: ${tongTien}VND</h1>`;
// Hàm để áp dụng voucher
function applyVoucher() {
    const voucherCode = document.querySelector('.voucher-code').value;
    
    if (voucherCode) {
        alert(`Voucher "${voucherCode}" đã được áp dụng!`);
        toggleVoucherPopup(); // Đóng popup sau khi áp dụng voucher
    } else {
        alert('Vui lòng nhập mã voucher.');
    }
}

document.querySelector('.material-icons').addEventListener('click', e => {
    e.preventDefault();
    window.location.href = "./index.html";
});