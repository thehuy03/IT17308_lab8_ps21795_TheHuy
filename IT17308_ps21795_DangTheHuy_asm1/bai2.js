var image  = [];
var index = 0;
var sl = 8;
for(var i=0 ; i<sl ; i++){
    image[i] = new Image();
    image[i].src = "img/"+i+".jpg";
}
function choice(button){
    var x = button.parentElement;
    var anh;
    if(button == x.children[0]){
        
        index=0;
        document.getElementById("pre").disabled=true;
        document.getElementById("nex").disabled=false; 
        anh = document.getElementById("anh");
        anh.src =image[index].src;
    }else if(button == x.children[1]){
        
        index--;
        if(index < 0){
            index = image.length - 1;
        }
        if(index ==0){
            document.getElementById("pre").disabled=true;
        }
        document.getElementById("nex").disabled=false;
        anh = document.getElementById("anh");
        anh.src =image[index].src;
    }else if(button == x.children[2]){
        
        index++;
        console.log(index);
        if(index >= image.length-1){
            index = 0;
        }
        if(index == image.length-1){
            document.getElementById("nex").disabled=true;
        }
        document.getElementById("pre").disabled=false;
        console.log(index);
        anh = document.getElementById("anh");
        anh.src = image[index].src;
    }else{
        index = image.length - 1;
        document.getElementById("pre").disabled=false;
        document.getElementById("nex").disabled=true;
        anh =document.getElementById("anh");
        anh.src = image[index].src;
    }
  
}