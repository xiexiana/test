// 获取弹窗
var modal = document.getElementsByClassName("as-search-hidden")[0];

var btn = document.getElementsByClassName("as-search-form-input")[0];

// 点击按钮打开弹窗
btn.onclick = function() {
    modal.style.display = "block";
}


// 在用户点击其他地方时，关闭弹窗
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

