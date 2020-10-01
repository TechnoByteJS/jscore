// JScore beta
function newApp(name, width, height, source) {
    var jsapp = window.open('', '', "width=492,height=600");
    jsapp.document.write("<style>header{background-color: #353535; text-align:center; padding:10px; margin-bottom:10px; box-shadow: 0 2px 3px #111;}body{margin:0; background-color: #1B1B1B; user-select:none; color:white; font-family: 'Inter', Arial;}e{display:block; border-left:2px solid #80808000; padding:0.7em; font-size: 0.9em}e:hover{border-left: 2px solid #848484; background-color:#353535;}r{float: right; color: gray}p2{font-size:25px; margin-left:10px}p1{font-size:36px}f{position:fixed; bottom:0; text-align: center; width: 100%; font-size: 14px; color: #555; margin-bottom:5px}</style>");
    jsapp.document.write("<!DOCTYPE HTML><html><title>" + name + "</title></html>" + source);
    jsapp.resizeTo(width, height);
}