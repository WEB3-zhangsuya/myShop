var i = 0;

function chgtt(d1) {
    //设当前显示层
    var NowFrame;
    if (Number(d1)) {
        NowFrame = d1;
    } else {
        NowFrame = 1;
    }
    for (var i = 1; i <= 5; i++) {
        if (i == NowFrame) {
            document.getElementById("book" + NowFrame).style.display = "block"; //当前层
            document.getElementById("bg" + NowFrame).className = "bg";
          document.getElementById("bg" + NowFrame).style.color = "#ff5777";
          document.getElementById("bg" + NowFrame).style.borderBottom = "2px solid #ff5777";
        
        } else {
            document.getElementById("book" + i).style.display = "none"; //隐藏其他层
            document.getElementById("bg" + i).className = "nobg";
            document.getElementById("bg" + i).style.color="";
            document.getElementById("bg" + i).style.borderBottom = "none";
        }
    }

}
