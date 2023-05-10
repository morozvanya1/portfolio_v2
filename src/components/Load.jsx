import React from 'react';
import "../css/Load.css";

function Load() {
    var i = 0;

    function onLoad() {
        i++;
        if (i === 1) {
            document.getElementsByClassName("loader")[0].innerHTML = "Загрузка .";
        } else if (i === 2) {
            document.getElementsByClassName("loader")[0].innerHTML = "Загрузка ..";
        } else {
            document.getElementsByClassName("loader")[0].innerHTML = "Загрузка ...";
            i = 0;
        }
    }

    setInterval(onLoad, 2000);


    return (
        <div className="loader"></div>
    )
}

export default Load