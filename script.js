setTimeout(function(){
    'use strict';
    if (window.top === window) {
        var player_api = document.getElementById("player-api");
        var video = document.getElementsByTagName("video");
        if (video.length == 1 && player_api) {
            video = video[0];
            video.parentElement.removeChild(video);
            player_api.removeChild(player_api.childNodes[0]);
            player_api.appendChild(video);
            video.setAttribute("controls", "");
            video.onclick = function(){
                video.setAttribute("controls", "");
            };
        }
    }
}, 1000);