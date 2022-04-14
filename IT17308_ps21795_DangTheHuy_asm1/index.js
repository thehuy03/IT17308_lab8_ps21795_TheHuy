function RD(){
    var ax = Math.floor(Math.random() * (10 + 10)) + -10;
    var bx = Math.floor(Math.random() * (10 + 10)) + -10;
    var cx = Math.floor(Math.random() * (10 + 10)) + -10;
    document.getElementById("a", "a1").value= ax;
    document.getElementById("b","b1").value= bx;
    document.getElementById("c","c1").value= cx;
    var choice = document.getElementById("giai");
    choice.disabled = false;
    ganbien(ax,bx,cx);
}
function giaipt(){
    var a =document.getElementById("a").value;
    var b =document.getElementById("b").value;
    var c = document.getElementById("c").value;
    // trường hợp a =0
    if(a==0){
        var x = (-c)/b;
        document.getElementById("kq").innerHTML="<p>Phương trình bậc 1</p>x="+x.toFixed(2);
    }else{
        // trường hợp a!=0;
        var delta = Math.pow(b,2) - 4*a*c;
        if(delta <0){
            document.getElementById("kq").innerHTML="<p>Phương trình vô nghiệm</p>";
        }else if(delta == 0){
            var x = -b/(2*a);
            document.getElementById("kq").innerHTML="<p>Phương trình có nghiệm kép!</p>"+"x="+x;
        }else{
            var x1 = (-b + Math.sqrt(delta))/(2*a);
            var x2 = (-b - Math.sqrt(delta))/(2*a);
            document.getElementById("kq").innerHTML="<p>Phương trình có 2 nghiệm phân biệt</p>"+"x<sub>1</sub>="+x1.toFixed(2)+"<br>"+"x<sub>2</sub>="+x2.toFixed(2);
        }
    }
    var choice = document.getElementById("giai");
    choice.disabled = true;
    solangiai();
}
function refesh(){
    document.getElementById("a").value= "";
    document.getElementById("b").value= "";
    document.getElementById("c").value= "";
    // document.getElementById("a1").innerHTML=" a";
    // document.getElementById("b1").innerHTML=" b";
    // document.getElementById("c1").innerHTML=" c";
}
var time = null;
function solangiai(){
    var slx =localStorage.getItem('solangiai');
    slx++;
    localStorage.setItem('solangiai',slx);
    document.getElementById("slg").innerHTML=slx;
    
}
function thoigian(){
    var time = new Date();
    var ngay = time.getDate();
    var thang = time.getMonth();
    var nam = time.getFullYear();
    var gio = time.getHours();
    var phut = time.getMinutes();
    var giay = time.getSeconds();
    
    document.getElementById("time").innerHTML=ngay+"/"+thang+"/"+nam+" "+gio+":"+phut+":"+giay;
}
function ganbien( ax, bx, cx ){
    // var a =document.getElementById("a").value= "";
    // var b =document.getElementById("b").value= "";
    // var c =document.getElementById("c").value= "";
    if(ax == ""&& bx == "" &&cx == ""){
        document.getElementById("a1").innerHTML="a";
        document.getElementById("b1").innerHTML="b";
        document.getElementById("c1").innerHTML="c";
    }else{
        document.getElementById("a1").innerHTML=ax;
        document.getElementById("b1").innerHTML=bx+"x";
        document.getElementById("c1").innerHTML=cx;
    }
    if(ax==0){
        document.getElementById("a1").innerHTML="";
    }else{
        document.getElementById("a1").innerHTML=ax+"x<sup>2</sup>";
    }
    if(bx>0){
        document.getElementById("b1").innerHTML="+"+bx+"x";
    }else if(bx==0){
        document.getElementById("b1").innerHTML="";
    }
    if(cx>0){
        document.getElementById("c1").innerHTML="+"+cx;
    }else if(cx==0){
        document.getElementById("c1").innerHTML="";
    }
}
    
    