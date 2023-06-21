function openPopup1() {
    document.getElementById('test1').style.display = 'block';

    //netcore tracking user behavior
    var char1 = document.getElementById('char1').innerHTML;
    var categorychar1 = document.getElementById('categorychar1').innerHTML;
    smartech('dispatch', 'Product View', {
        'prid': 1,
        'name': char1,
        'category': categorychar1,
        'price': 6
    });
}

function closePopup1() {
    //close popup
    document.getElementById("test1").style.display = "none";

    //stop youtube embed video
    var ysrc = document.getElementById("iframe1").src;
    var newsrc = ysrc.replace("&autoplay=1", "");
    document.getElementById("iframe1").src = newsrc;
}

function openPopup2() {
    document.getElementById('test2').style.display = 'block';

    var char2 = document.getElementById('char2').innerHTML;
    var categorychar2 = document.getElementById('categorychar2').innerHTML;
    smartech('dispatch', 'Product View', {
        'prid': 1,
        'name': char2,
        'category': categorychar2,
        'price': 6
    });
}

function closePopup2() {
    document.getElementById("test2").style.display = "none";
    var ysrc = document.getElementById("iframe2").src;
    var newsrc = ysrc.replace("&autoplay=1", "");
    document.getElementById("iframe2").src = newsrc;
}

function openPopup4() {
    document.getElementById('test4').style.display = 'block';

    var char4 = document.getElementById('char4').innerHTML;
    var categorychar4 = document.getElementById('categorychar4').innerHTML;
    smartech('dispatch', 'Product View', {
        'prid': 1,
        'name': char4,
        'category': categorychar4,
        'price': 6
    });
}

function closePopup4() {
    document.getElementById("test4").style.display = "none";
    var ysrc = document.getElementById("iframe4").src;
    var newsrc = ysrc.replace("&autoplay=1", "");
    document.getElementById("iframe4").src = newsrc;
}

function openPopup5() {
    document.getElementById('test5').style.display = 'block';
}

function closePopup5() {
    document.getElementById("test5").style.display = "none";
    var ysrc = document.getElementById("iframe5").src;
    var newsrc = ysrc.replace("&autoplay=1", "");
    document.getElementById("iframe5").src = newsrc;
}

function openPopup6() {
    document.getElementById('test6').style.display = 'block';
}

function closePopup6() {
    document.getElementById("test6").style.display = "none";
    var ysrc = document.getElementById("iframe6").src;
    var newsrc = ysrc.replace("&autoplay=1", "");
    document.getElementById("iframe6").src = newsrc;
}