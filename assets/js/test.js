// activates when there is a key press (specifically when one is lifted)
window.onload = redirect;
document.onkeyup = KeyCheck;

// grabs the url from the... url
function url_grabber() {
    var current_url = location.href.split('#')[0];
    var current_num = location.href.split('#')[1];
    current_num = parseInt(current_num);
    return [current_url, current_num];
}

// adds or subtracts
function previous_slide() {
    let [current_url, current_num] = url_grabber();
    if (current_num - 1 != 0) { 
        location.href = current_url + '#' + (current_num - 1);
    }
}

function next_slide() {
    let [current_url, current_num] = url_grabber();
    if (current_num + 1 <= document.querySelectorAll('img.xobdyn').length) {
        location.href = current_url + '#' + (current_num + 1);
    }
} 

// checks what key is pressed
function KeyCheck(e) {
    var KeyID = (window.event) ? event.keyCode : e.keyCode;

    switch(KeyID) {
        case 188: // left
            previous_slide()
            break;
        case 190: // right
            next_slide()
            break;
    }
}

function redirect() {
    if (location.href.includes('#') == false) {
        location.href = location.href + '#1';
    } else if (Math.floor(location.href.split('#')[1]) != location.href.split('#')[1]) {
        location.href = location.href.split('#')[0] + '#1';
        location.reload();
    } else if (location.href.split('#')[1] == false) {
        location.href = location.href.split('#')[0] + '#1';
        location.reload();
    } else if (location.href.split('#')[1].includes('.') == true) {
        location.href = location.href.split('#')[0] + '#1';
        location.reload();
    } 
}
