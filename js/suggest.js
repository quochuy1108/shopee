const suggestText = document.querySelector('.suggest-header .content')
const discountDay = document.querySelector('.suggest-header .img')
const suggestLine = document.querySelector('.suggest-header .line')
const suggest_list = document.querySelector('.suggest-list ')

suggestLine.style.width = suggestText.offsetWidth + 'px'
suggestLine.style.left = suggestText.offsetLeft



suggestText.addEventListener('click', (e) => {
    e.preventDefault()
    suggestLine.style.width = suggestText.offsetWidth + 'px'
    suggestLine.style.left = suggestText.offsetLeft
    delete window.setTime;
    setTime2()

})


discountDay.addEventListener('click', (e) => {
    e.preventDefault()
    suggestLine.style.width = discountDay.offsetWidth + 'px'
    suggestLine.style.left = 209 + 'px';
    setTime()
})

function renderDiscountDay() {
    const suggest_list_item = `
    <li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/7.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">30%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Áo sweater form rộng Unisex cô gái khói siêu xinh PT5, Áo hoodie nỉ không mũ phong cách oversize streetwear</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div>
    <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/12.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">30%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Nồi Hấp 2 tầng WMF</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div>
    <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/8.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">43%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Tai nghe dây Jack 3.5mm cho Điện thoại, máy tính bảng</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/3.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">13%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Áo sweater nam nữ form rộng nỉ đôi bạn, áo sweater đôi bạn siêu xinh S47</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/6.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">23%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/flashSale/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Giày thể thao nam nữ cổ cao Jordan 1 Retro OG Hyper Royal, Giày Jordan 1 Hyper Royal Xanh Loang Full Box Bill</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/1.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">50%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">[ Ảnh thật ở cuối ] QUẦN JOGGER KHÔNG CÓ TAG BÒ SỮA 5 MÀU</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/4.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">15%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/flashSale/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Skinceuticals A.G.E Eye Complex dưỡng ẩm giúp làm giảm nếp nhăn 15ml</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/7.jfif" alt="">
        <div class="suggest-discount">
        <div class="number">23%</div>
        <div class="text">GIẢM</div>
    </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Áo thun tay dài 194SHOP vải coton dày dặn, mềm mịn, co dãn - form rộng oversize - TD TRƠN</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/12.jfif" alt="">
        <div class="suggest-discount">
        <div class="number">50%</div>
        <div class="text">GIẢM</div>
    </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Dây chuyền vt ( thanh lý)</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/10.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">40%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/flashSale/card2.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Áo thun nam nữ unisex tay lỡ AD67 PHG PT5, áo phông tay lỡ unisex form rộng oversize streetwear</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/11.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">20%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/flashSale/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Quần Jogger Nữ Cạp Chun Bo Gấu Vải Nỉ Thun Da Cá Loại 1 Mã 903</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/3.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">32%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Áo khoác nam nữ,Áo sweater hoodie in mặt cười kiểu dáng trẻ trung from rộng unisex HOT K42</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/2.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">25%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Tay sen Hansgrohe Crometta Vario (26330400)</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/3.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">30%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Nồi Hấp 2 tầng WMF</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/3.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">30%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Tay sen Hansgrohe Croma 100 + dây cấp 160cm (27575000)</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/2.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">30%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Áo thun nam tay dài TOMKAKA Giữ nhiệt thể thao nam co giãn, giữ ấm, màu sắc trẻ trung và năng động AT 03</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/4.jfif" alt="">
       
        <div class="suggest-card"><img src="./images/flashSale/card2.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Nồi Hấp 2 tầng WMF</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/10.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">30%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Áo thun tay dài 194SHOP vải coton dày dặn, mềm mịn, co dãn - form rộng oversize - TD TRƠN</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
    `
    return suggest_list_item
}
function renderToday() {

    const suggest_list_item = `
    <li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/1.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">30%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Áo sweater form rộng Unisex cô gái khói siêu xinh PT5, Áo hoodie nỉ không mũ phong cách oversize streetwear</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div>
    <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/2.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">30%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Nồi Hấp 2 tầng WMF</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div>
    <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/3.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">43%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Tai nghe dây Jack 3.5mm cho Điện thoại, máy tính bảng</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/4.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">13%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Áo sweater nam nữ form rộng nỉ đôi bạn, áo sweater đôi bạn siêu xinh S47</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/5.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">23%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/flashSale/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Giày thể thao nam nữ cổ cao Jordan 1 Retro OG Hyper Royal, Giày Jordan 1 Hyper Royal Xanh Loang Full Box Bill</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/6.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">50%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">[ Ảnh thật ở cuối ] QUẦN JOGGER KHÔNG CÓ TAG BÒ SỮA 5 MÀU</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/7.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">15%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/flashSale/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Skinceuticals A.G.E Eye Complex dưỡng ẩm giúp làm giảm nếp nhăn 15ml</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/8.jfif" alt="">
       
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Áo thun tay dài 194SHOP vải coton dày dặn, mềm mịn, co dãn - form rộng oversize - TD TRƠN</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/9.jfif" alt="">
      
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Dây chuyền vt ( thanh lý)</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/10.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">40%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/flashSale/card2.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Áo thun nam nữ unisex tay lỡ AD67 PHG PT5, áo phông tay lỡ unisex form rộng oversize streetwear</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/11.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">20%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/flashSale/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Quần Jogger Nữ Cạp Chun Bo Gấu Vải Nỉ Thun Da Cá Loại 1 Mã 903</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/12.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">32%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Áo khoác nam nữ,Áo sweater hoodie in mặt cười kiểu dáng trẻ trung from rộng unisex HOT K42</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/5.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">25%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Tay sen Hansgrohe Crometta Vario (26330400)</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/3.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">30%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Nồi Hấp 2 tầng WMF</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/1.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">30%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Tay sen Hansgrohe Croma 100 + dây cấp 160cm (27575000)</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/7.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">30%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Áo thun nam tay dài TOMKAKA Giữ nhiệt thể thao nam co giãn, giữ ấm, màu sắc trẻ trung và năng động AT 03</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/4.jfif" alt="">
       
        <div class="suggest-card"><img src="./images/flashSale/card2.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Nồi Hấp 2 tầng WMF</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
<li class="suggest-item">
    <div class="suggest-img">
        <img src="./images/suggest/9.jfif" alt="">
        <div class="suggest-discount">
            <div class="number">30%</div>
            <div class="text">GIẢM</div>
        </div>
        <div class="suggest-card"><img src="./images/suggest/card.png" alt=""></div>
    </div>
    <div class="suggest-item-content">
        <div class="desc">Áo thun tay dài 194SHOP vải coton dày dặn, mềm mịn, co dãn - form rộng oversize - TD TRƠN</div>
        <div class="suggest-item-cost">
            <div class="money">
                <span class="d">đ</span>
                <span class="numb">11.000</span>
            </div>
            <div class="sold">
                <span class="text">Đã bán</span>
                <span class="numb">7,6k</span>
            </div>
        </div>
    </div> <div class="similarProduct">
        Sản phẩm tương tự
    </div>
</li>
<!-- het item  -->
    `
    return suggest_list_item
}

const setTime = () => {
    setTimeout(() => suggest_list.innerHTML = renderDiscountDay(), 300)
}
const setTime2 = () => {
    setTimeout(() => suggest_list.innerHTML = renderToday(), 300)
}

