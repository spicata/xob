// activates when there is a key press (specifically when one is lifted)
window.onload = load;
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
    if (current_num - 1 != document.querySelectorAll('img.xobdyn').length) {
        document.getElementById('right_button').setAttribute('class', 'button_right button');
    }
    if (current_num - 1 == 1) {
        document.getElementById('left_button').setAttribute('class', document.getElementById('left_button').getAttribute('class') + ' gray');
    }
}

function next_slide() {
    let [current_url, current_num] = url_grabber();
    if (current_num + 1 <= document.querySelectorAll('img.xobdyn').length) {
        location.href = current_url + '#' + (current_num + 1);
    }
    if (current_num + 1 == document.querySelectorAll('img.xobdyn').length) {
        document.getElementById('right_button').setAttribute('class', document.getElementById('right_button').getAttribute('class') + ' gray');
    } else if (current_num + 1 != 1) {
        document.getElementById('left_button').setAttribute('class', 'button_left button');
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

// making sure you don't get into the backrooms
function load() {
    let [current_url, current_num] = url_grabber();
    if (current_num == document.querySelectorAll('img.xobdyn').length) {
        document.getElementById('right_button').setAttribute('class', document.getElementById('right_button').getAttribute('class') + ' gray');
    } 
    if (current_num == 1) {
        document.getElementById('left_button').setAttribute('class', document.getElementById('left_button').getAttribute('class') + ' gray');
    }
    // ---
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
    } else if (location.href.split('#')[1] < 1) {
        location.href = location.href.split('#')[0] + '#1';
        location.reload();
    } else if (location.href.split('#')[1] > document.querySelectorAll('img.xobdyn').length) {
        location.href = location.href.split('#')[0] + '#' + document.querySelectorAll('img.xobdyn').length;
        location.reload();
    }
}