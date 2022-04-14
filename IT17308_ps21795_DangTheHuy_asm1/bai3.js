function tinhtien(x){
    var tr = x.parentElement.parentElement;
    var dg = tr.children[2].innerText;
    var sl = x.value;
    tr.children[4].innerHTML = Number(dg)* Number(sl);
    tinhTong();
}
function thaydoiTT(x){
    var tr = x.parentElement.parentElement;
    var bt = tr.children[3].children[0];
    bt.disabled = !x.checked;
    tinhTong();
}
function tinhTong(){
    var tong = 0;
    var tr = document.getElementsByTagName("tr");
    for(var i =1;i<tr.length-2;i++){
        tong += Number(tr[i].children[4].innerHTML);
    }
    document.getElementById("tong").innerHTML=tong;
}