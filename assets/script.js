$(document).ready(function () {
    var icons1 = {
        header: "ui-icon-circle-arrow-e",
        activeHeader: "ui-icon-circle-arrow-s"
    };

    $("#accordion").accordion({
        collapsible: true,
        icons: icons1
    });

    $("#toggle1").button().on("click", function () {
        if ($("#accordion").accordion("option", "icons")) {
            $("#accordion").accordion("option", "icons", null);
        } else {
            $("#accordion").accordion("option", "icons", icons1);
        }
    });

    var icons2 = {
        header: "ui-icon-circle-arrow-e2",
        activeHeader: "ui-icon-circle-arrow-s2"
    };

    $("#accordion2").accordion({
        collapsible: true,
        icons: icons2
    });

    $("#toggle2").button().on("click", function () {
        if ($("#accordion2").accordion("option", "icons")) {
            $("#accordion2").accordion("option", "icons", null);
        } else {
            $("#accordion2").accordion("option", "icons", icons2);
        }
    });
});


function toggleMenu() {
    var menu = document.querySelector('.menu');
    var verticalMenu = document.getElementById('verticalMenu');

    menu.classList.toggle('menu-opened');

    if (menu.classList.contains('menu-opened')) {
        verticalMenu.style.left = '0';
    }
}

document.addEventListener('DOMContentLoaded', function () {

    var closeMenuBtn = document.getElementById('closeMenuBtn');
    closeMenuBtn.addEventListener('click', closeMenu);
});

function closeMenu() {
    var verticalMenu = document.getElementById('verticalMenu');
    verticalMenu.classList.remove('menu-opened');

    verticalMenu.style.left = '-100%';
}