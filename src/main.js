'use strict';

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");



function opentab(tabname)
{
    for (var _i = 0; _i < tablinks.length; _i++) {
        tablinks[_i].classList.remove("active-link");
    }
    for (var _i2 = 0; _i2 < tabcontents.length; _i2++) {
        tabcontents[_i2].classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



var side_Menu = document.getElementById("sideMenu");

function openMenu()
{
    side_Menu.style.right = "0";
}

function closeMenu()
{
    side_Menu.style.right = "-200px";
}



var sides_Menu = document.getElementById("side_Menu");


function open_Menu()
{
    console.log("hi");
    sides_Menu.style.right = "0";
}

function close_Menu()
{
    sides_Menu.style.right = "-200px";
}