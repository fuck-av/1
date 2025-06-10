const crypto = require('crypto');

// 机场的地址url
var wangzhangurl = "https://www.xn--nos792g.com";
// 登录页面背景图
var loginBackgroundImageUrl = 'https://pub-3769a057c6fb47cbb25f68a25ea28f20.r2.dev/%E5%9C%96%E7%89%87/%E8%83%8C%E6%99%AF/black-background.jpg';
// 登录后的背景图
var headBackgroundImageUrl = 'https://pub-3769a057c6fb47cbb25f68a25ea28f20.r2.dev/%E5%9C%96%E7%89%87/%E8%83%8C%E6%99%AF/client-background.png';
// 存储网站授权码  不懂勿动
var license_key;

// SHA1哈希函数
function sha1(data) {
    return crypto.createHash('sha1').update(data).digest('hex');
}

// 计算License并更新变量
function calculateLicense() {
    const firstHash = sha1(wangzhangurl);
    const combined = firstHash + "1145141919";
    license_key = sha1(combined); // 直接更新license_key变量
    console.log('License:', license_key);
}

calculateLicense();

function updateBackgroundImage(elementClass, imageUrl) {
    var elements = document.querySelectorAll(elementClass);
    elements.forEach(function(elem) {
        elem.style.backgroundImage = 'url("' + imageUrl + '")';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // 初始设置背景图像
    updateBackgroundImage('.head___1MReR', headBackgroundImageUrl);
    updateBackgroundImage('.login___SuG13', loginBackgroundImageUrl);

    // 每隔5秒更新背景图像
    setInterval(function() {
        updateBackgroundImage('.head___1MReR', headBackgroundImageUrl);
        updateBackgroundImage('.login___SuG13', loginBackgroundImageUrl);
    }, 200); // 5000毫秒 = 5秒
});