// var arrsp = new Array;
function themvaogiohang(x){
    // var ttsp = x.parentElement.children;
    // var hinh = ttsp[0].children[0].src;
    // var giasp = ttsp[1].children[0].innerText;
    // var tensp = ttsp[2].innerText;
    // var sl = ttsp[3].value;
    // var sp = [hinh,tensp,giasp,sl];
    // // kiem tra sp co trong gio hang chua
    // var ktra = 0;
    // for(var i=0;i<arrsp.length;i++){
    //     if(arrsp[i][1]==tensp){
    //         var soluong = Number(arrsp[i][3]);
    //         soluong += Number(sl);
    //         arrsp[i][3]=soluong;
    //         ktra=1; 
    //         break;
    //     }     
    // }
    // if(ktra==0) arrsp.push(sp);
    // // console.log(sp);
    // // console.log(ttsp);
    // countsp();
    // addcart();
    // // lưu biến vào sessionStorage
    // sessionStorage.setItem("ssgiohang",JSON.stringify(arrsp));

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
        if(arrGH[i]==tensp){
            var sl = Number(arrGH[i][3]);
            sl += Number(soluong);
            arrGH[i][3]=sl;
            ktra =1;
            break;
        }
    }                                                       
    // Neu chua co thi them 1 dong vao cuoi arrGH

    if(ktra ==0){
        arrGH.push(sp);
        countsp++;
    }
    //luu gio hang len sessionStorage 
    sessionStorage.setItem("ssgiohang"),JSON.stringify(arrGH);
    sessionStorage.setItem("countsp",countsp);
    showcountsp();
}
// function countsp(){
//     var count = arrGH.length;
//     var ttsp = document.getElementById("countsp").innerText=count;
// }
function showcart(){
    var x = document.getElementById("showcart");
    if (x.style.display=="none"){
        x.style.display="block";
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
        tongtt += tt;
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
function laydon(){
    // var gh_str = sessionStorage.getItem("ssgiohang");
    // var arrsp = JSON.parse(gh_str);
    // var ttgh="";
    // var tongtt =0;
    // for(var i=0;i<arrsp.length;i++){
    //     var tt =Number(arrsp[i][2]) * Number(arrsp[i][3]);
    //     tongtt += tt;
    //     ttgh+= 
    //     `<tr>
    //         <td>${i+1}</td>
    //         <td><img src="${arrsp[i][0]}"></td>
    //         <td>${arrsp[i][1]}</td>
    //         <td>${arrsp[i][2]}</td>
    //         <td>${arrsp[i][3]}</td>
    //         <td>${tt}</td>
    //     </tr>`
    // }

    // ttgh+=
    // `<tr>
    //         <td colspan="5"> Tổng đơn hàng: </td>
    //         <td> ${tongtt}</td>
    // </tr>
    // `
    // document.getElementById("mycart").innerHTML=ttgh;

    var gh_str = sessionStorage.getItem("ssgiohang");
    var giohang =JSON.parse(gh_str);
    var ttgh = "";
    var tong =0;
    for(var i=0;i<arrGH.length;i++){
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
    if(countsp == null) countsp =0;
    document.getElementById("countsp").innerHTML = countsp;
    console.log(countsp);
    
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
        var dongy = confirm("Số lượng = 0 thì sẽ xóa sản phẩm khỏi giỏ hàng ok?");
        // xóa tren giao dien
        if(dongy==true){
            tr.remove();
        }
        // xoa sp khoi mang
        for(var i =0;i<arrGH.length;i++){
            if(giohang[i][1] == tensp){
                giohang.splice(i,1);
            }
        }
        var countsp = parseInt(sessionStorage.getItem("countsp") - 1)
        sessionStorage.setItem("countsp",countsp);
        showcountsp();
    }else{
        for(let i =0;i<arrGH.length;i++){
            if(arrGH[i][1]==tensp){
                arrGH[i][3] = sl;
            }
        }
        tt=dg * sl;
        tr.children[5].innerHTML = tt;
        tongdon +=tt;
    }
    document.getElementById("tongtien").innerHTML = tongdon;
    sessionStorage.setItem("ssgiohang",JSON.stringify(giohang));
}
