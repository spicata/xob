document.onkeyup = KeyCheck;

function leftarrowpressed() {
    let current_url = location.href.substring(0, location.href.length - 1); // can you even do that?
    console.log(current_url);
    let current_num = location.href.substring(location.href.length - 1);
    console.log(current_num);
    current_num = parseInt(current_num)
    location.href = current_url + (current_num - 1)
}

function rightarrowpressed() {
    let current_url = location.href.substring(0, location.href.length - 1); // can you even do that?
    console.log(current_url);
    let current_num = location.href.substring(location.href.length - 1);
    console.log(current_num);
    current_num = parseInt(current_num)
    location.href = current_url + (current_num + 1)
} 

function KeyCheck(e) {
    var KeyID = (window.event) ? event.keyCode : e.keyCode;

    switch(KeyID) {
        case 188: // left
            leftarrowpressed()
            break;
        case 190: // right
            rightarrowpressed()
            break;
    }
}
