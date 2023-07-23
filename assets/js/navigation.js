document.onkeyup = KeyCheck;       

var pages = ["test/index", "test/frame2", "test/frame3", "test/frame4"];

function leftarrowpressed() {
    let current_page = location.href.replace("http://127.0.0.1:4000/", "");
    if (current_page.includes('.html')) {
        current_page = current_page.replace(".html", "");
    }
    let index = pages.indexOf(current_page);
    let new_index = (index == 0 ? (pages).length - 1 : index - 1);
    location.href = "/" + pages[new_index];
}

function rightarrowpressed() {
    let current_page = location.href.replace("http://127.0.0.1:4000/", "")
    if (current_page.includes('.html')) {
        current_page = current_page.replace(".html", "")  
    }
    let index = pages.indexOf(current_page)
    let new_index = (index ==  (pages).length - 1 ? 0 : index + 1)
    location.href = "/" + pages[new_index]
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
