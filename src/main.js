// ==UserScript==
// @name         Bangumi Hide Users with Default Avatar
// @version      0.1
// @description  Bangumi Hide Users with Default Avatar
// @author       Komeiji⚓
// @include     /^https?://((bangumi|bgm)\.tv|chii\.in)
// ==/UserScript==

const re_default_avatar = /\/\/lain.bgm.tv\/pic\/user\/[sml]\/icon.jpg/g;

// subject
const re_subject = /^https?:\/\/((bangumi|bgm)\.tv|chii\.in)\/subject\//g;
function subject() {
    // review blog
    (function () {
        var elems = document.querySelectorAll("#entry_list div[class='item clearit']");
        for (var i = 0; i < elems.length; ++i) {
            var e = elems[i];
            var a = e.querySelector("img");
            if (a && a.src && a.src.match(re_default_avatar)) {
                e.remove();
            }
        }
    }());

    // comment box
    (function () {
        var elems = document.querySelectorAll("#comment_box div[class='item clearit']");
        for (var i = 0; i < elems.length; ++i) {
            var e = elems[i];
            var a = e.querySelector(".avatar span");
            if (a && a.style.backgroundImage && a.style.backgroundImage.match(re_default_avatar)) {
                e.remove();
            }
        }
    }());
}

// post
const re_post = /^https?:\/\/((bangumi|bgm)\.tv|chii\.in)\/((subject|group|rakuen)\/topic|blog|ep|person|character)\//g;
function post() {
    var elems = document.querySelectorAll("div[id^='post_']");
    for (var i = 0; i < elems.length; ++i) {
        var e = elems[i];
        var a = e.querySelector(".avatar span");
        if (a && a.style.backgroundImage && a.style.backgroundImage.match(re_default_avatar)) {
            e.remove();
        }
    }
}

// group
const re_group = /^https?:\/\/((bangumi|bgm)\.tv|chii\.in)\/group/g;
function group() {
    var elems = document.querySelectorAll("table.topic_list tr");
    for (var i = 0; i < elems.length; ++i) {
        var e = elems[i];
        var a = e.querySelector("img");
        if (a && a.src && a.src.match(re_default_avatar)) {
            e.remove();
        }
    }
}

// rakuen
const re_rakuen = /^https?:\/\/((bangumi|bgm)\.tv|chii\.in)\/rakuen\/topiclist/g;
function rakuen() {
    var elems = document.querySelectorAll("li[id^='item_']");
    for (var i = 0; i < elems.length; ++i) {
        var e = elems[i];
        var a = e.querySelector("span[class^='avatarNeue']");
        if (a && a.style.backgroundImage && a.style.backgroundImage.match(re_default_avatar)) {
            e.remove();
        }
    }
}

// home
const re_home = /^https?:\/\/((bangumi|bgm)\.tv|chii\.in)\/?$/g
function home() {
    var elems = document.querySelectorAll(".sideTpcList li");
    for (var i = 0; i < elems.length; ++i) {
        var e = elems[i];
        var a = e.querySelector("img");
        if (a && a.src && a.src.match(re_default_avatar)) {
            e.remove();
        }
    }
}

(function () {
    'use strict';
    var url = window.location.href;
    if (url.match(re_post)) post();
    else if (url.match(re_subject)) subject();
    else if (url.match(re_rakuen)) rakuen();
    else if (url.match(re_group)) group();
    else if (url.match(re_home)) home();
})();
