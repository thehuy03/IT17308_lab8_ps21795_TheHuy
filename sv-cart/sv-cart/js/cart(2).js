document.getElementById("showcart").style.display="none";
function themvaogiohang(x){
    var arrGH = new Array();
    // Doc gio hang tu sessionStorage
    var gh_tr = sessionStorage.getItem("ssgiohang");
    if(gh_tr != null){
        arrGH = JSON.parse(gh_tr);
    }
    // doc tongsosp trong gio hang tu sessionStorge
    var countsp = sessionStorage.getItem("countsp");
    if(countsp == null){
        countsp=0;
    }
    // lay thong tin san pham dang chon them vao gio hang
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].children[0].src;
    var gia = boxsp[1].children[0].innerText;
    var tensp = boxsp[2].innerText;
    var soluong = parseInt(boxsp[3].value);
    var sp = new Array(hinh,tensp,gia,soluong);
    
    //kiem tra sp co trong giohang chua

    var ktra =0;
    for (var i=0;i<arrGH.length;i++){
        if(arrGH[i][1]==tensp){
            var sl = Number(arrGH[i][3]);
            sl += Number(soluong);
            arrGH[i][3]=sl;
            ktra =1;
            break;
        }
    }
    // Neu chua oc thi them 1 dong vao cuoi arrGH
    if(ktra ==0){
        arrGH.push(sp);
        countsp++;
    }
    //luu gio hang len sessionStorage 
    sessionStorage.setItem("ssgiohang",JSON.stringify(arrGH));
    sessionStorage.setItem("countsp",countsp);
    showcountsp();
}
function laydon(){
    var gh_str = sessionStorage.getItem("ssgiohang");
    var giohang =JSON.parse(gh_str);
    var ttgh = "";
    var tong =0;
    for(var i=0;i<giohang.length;i++){
        var tt =Number(giohang[i][2]) * Number(giohang[i][3]);
        tong += tt;
        ttgh+= 
        `<tr>
            <td>${i+1}</td>
            <td><img src="${giohang[i][0]}"></td>
            <td>${giohang[i][1]}</td>
            <td>${giohang[i][2]}</td>
            <td><input type="number" min="0" max="10" value="${giohang[i][3]}"
                                            onchange="tinhlaidon(this);"></td>
            <td>${tt}</td>
        </tr>`
    }
    ttgh += `
    <tr>
        <th colspan="5">Tổng đơn hàng</th>
        <th id="tongtien">${tong}</th>
    </tr>
    `
    document.getElementById("mycart").innerHTML = ttgh;
}
function showcountsp(){
    var countsp = sessionStorage.getItem("countsp");
    if(countsp == null) {countsp =0;}
    document.getElementById("countsp").innerHTML = countsp;
}
function tinhlaidon(x){
    var gh_str =sessionStorage.getItem("ssgiohang");
    var giohang = JSON.parse(gh_str);

    var tr = x.parentElement.parentElement;
    var dg = parseInt(tr.children[3].innerHTML);
    var sl=x.value;
    var tt = parseInt(tr.children[5].innerHTML);
    var tongdon = document.getElementById("tongtien").innerText;
    tongdon -= tt;

    var tensp = tr.children[2].innerText;
    if(sl==0){
        dongy = confirm("Số lượng = 0 thì sẽ xóa sản phẩm khỏi giỏ hàng ok?");
        // xóa tren giao dien
        if(dongy==true){
            document.getElementById("tongtien").innerHTML = tongdon;
            tr.remove();
            for(var i =0;i<giohang.length;i++){
                if(giohang[i][1] == tensp){
                    giohang.splice(i,1);
                    sessionStorage.setItem("ssgiohang",JSON.stringify(giohang));
                }
            }
            var countsp = parseInt(sessionStorage.getItem("countsp") - 1);
            sessionStorage.setItem("countsp",countsp);
            showcountsp();
        }
        // xoa sp khoi mang
        
        

    }else{
        for(let i =0;i<giohang.length;i++){
            if(giohang[i][1]==tensp){
                giohang[i][3] = sl;
            }
        }
        tt = dg * sl ;
        tr.children[5].innerHTML=tt;
        tongdon += tt;
    }
    document.getElementById("tongtien").innerHTML = tongdon;
    sessionStorage.setItem("ssgiohang",JSON.stringify(giohang));
}
function showcart(){
    var x = document.getElementById("showcart");
    if (x.style.display=="none"){
        x.style.display="";
        addcart();
    }else{
        x.style.display ="none";
    }
    
}
function addcart(){
    var gh_str = sessionStorage.getItem("ssgiohang");
    var giohang =JSON.parse(gh_str); 
    var ttgh="";
    var tongtt =0;
    for(var i=0;i<giohang.length;i++){
        var tt =Number(giohang[i][2]) * Number(giohang[i][3]);
        tongtt += Number(tt);
        ttgh+= 
        `<tr>
            <td>${i+1}</td>
            <td><img src="${giohang[i][0]}"></td>
            <td>${giohang[i][1]}</td>
            <td>${giohang[i][2]}</td>
            <td>${giohang[i][3]}</td>
            <td>${tt}</td>
        </tr>`
    }

    ttgh+=
    `<tr>
            <td colspan="5"> Tổng đơn hàng: </td>
            <td> ${tongtt}</td>
    </tr>
    `
    document.getElementById("mycart").innerHTML=ttgh;
}
var image  = [];
var index = 0;
var sl = 10;
for(var i=0 ; i<sl ; i++){
    image[i] = new Image();
    image[i].src = "sv-cart/sv-cart/images/"+i+".jpg";
}
function choice(button){
    var x = button.parentElement;
    var anh;
    if(button == x.children[0]){
        index--;
        if(index < 0){
            index = image.length - 1;
        }   
        anh = document.getElementById("Anh");
        anh.src =image[index].src;
    }else{
        index++;
        console.log(index);
        if(index >= image.length-1){
            index = 0;
        }
        anh = document.getElementById("Anh");
        anh.src = image[index].src;
    }
}
