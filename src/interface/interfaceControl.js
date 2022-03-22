// function setupColorEvents() {
//     let bgColorSelector = document.getElementById("bgColor");
//
//     bgColorSelector.addEventListener("change", (e) => {
//         changeTextColor(e);
//     })
// }


function setupObjectInfoDivEvents() {
    // document.getElementById("objectInfoX")
    //     .addEventListener("change", (e) => {
    //         changeItemAttributes();
    //     })
    //
    // document
    let objInfo = document.getElementById("objectInfo").children;

    for (let i = 0; i < objInfo.length; i++) {
        if (objInfo[i].className === "objectInfoInput") {
            objInfo[i].addEventListener("change", (e) => {
                changeItemAttributes(e);
            });
        }
    }
}

//
// function changeTextColor(evt) {
//     let bgColor = getBgColor();
//
//     // TODO: Add change
//     // TODO: document.queryselectionAll resolve pra encontrar as coisas; Precisa mudar div objectInfo tbm
// }

function changeObjectInfoValues(item) {
    let [x, y] = item.getPosition();
    let [speedX, speedY] = item.getSpeed();
    let color = item.getColor()
    selectedItem = item;

    document.getElementById("objectInfoX").value = x;
    document.getElementById("objectInfoY").value = y;
    document.getElementById("objectSpeedInfoX").value = speedX;
    document.getElementById("objectSpeedInfoY").value = speedY;
    document.getElementById("objectColorInfo").value = color;
}

let selectedItem = null

function showObjectInfo() {
    document.getElementById("objectInfo").style.visibility = "visible";
}

function hideObjectInfo() {
    document.getElementById("objectInfo").style.visibility = "hidden";
}

function changeItemAttributes(evt) {
    if (selectedItem === null) {
        return;
    }

    let eventId = evt.target.id;

    switch (eventId) {
        case "objectInfoX":
            _updateItemPositionX();
            break;
        case "objectInfoY":
            _updateItemPositionY();
            break;
        case "objectSpeedInfoX":
            _updateItemSpeedX();
            break;
        case "objectSpeedInfoY":
            _updateItemSpeedY();
            break;
        case "objectColorInfo":
            _updateItemColor();
            break;
    }
}

function _updateItemPositionX() {
    let elem = document.getElementById("objectInfoX");
    if (elem.value === "") elem.value = "0";

    selectedItem.setPosition(parseInt(elem.value),
        selectedItem.getPosition()[1]);
}

function _updateItemPositionY() {
    let elem = document.getElementById("objectInfoY");
    if (elem.value === "") elem.value = "0";

    selectedItem.setPosition(selectedItem.getPosition()[0],
        parseInt(elem.value));
}

function _updateItemSpeedX() {
    let elem = document.getElementById("objectSpeedInfoX");
    if (elem.value === "") elem.value = "0";

    selectedItem.setSpeed([parseInt(elem.value),
        selectedItem.getSpeed()[1]]);
}

function _updateItemSpeedY() {
    let elem = document.getElementById("objectSpeedInfoY");
    if (elem.value === "") elem.value = "0";

    selectedItem.setSpeed([selectedItem.getSpeed()[0],
        parseInt(elem.value)]);
}

function _updateItemColor() {
    selectedItem.setColor(document.getElementById("objectColorInfo").value);
}

function updateSelectedItemInterface() {
    if (selectedItem === null) {
        return;
    }


}