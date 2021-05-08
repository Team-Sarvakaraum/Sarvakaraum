// utilities
var get = function (selector, scope) {
    scope = scope ? scope : document;
    return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
    scope = scope ? scope : document;
    return scope.querySelectorAll(selector);
};

// setup typewriter effect in the terminal demo
if (document.getElementsByClassName('demo').length > 0) {
    var i = 0;
    var txt = `#शामिल <स्टडीओ.ह >
            शून्य swap(पूर्णांक , पूर्णांक );
            पूर्णांक मुख्य ()
            {
                ` + Array(5).fill('\xa0').join('') + `पूर्णांक  x, y;
                ` + Array(5).fill('\xa0').join('') + `प्रिंटफ("Enter the value of x and y");
                ` + Array(5).fill('\xa0').join('') + `स्कैनफ("%d%d",&x,&y);
                ` + Array(5).fill('\xa0').join('') + `प्रिंटफ("Before Swapping x = %d and y = %d ", x, y);
                ` + Array(5).fill('\xa0').join('') + `swap(& x, & y);
                ` + Array(5).fill('\xa0').join('') + `प्रिंटफ("After Swapping x = %d and y = %d ", x, y);
                ` + Array(5).fill('\xa0').join('') + `वापसी 0;
            }
            शून्य swap (पूर्णांक *a, पूर्णांक *b)
            {
                ` + Array(5).fill('\xa0').join('') + `पूर्णांक  temp;
                ` + Array(5).fill('\xa0').join('') + `temp = *b;
                ` + Array(5).fill('\xa0').join('') + `*b = *a;
                ` + Array(5).fill('\xa0').join('') + `*a = temp;
            }`;
    var speed = 1;

    function typeItOut() {
        if (i < txt.length) {
            document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeItOut, speed);
        }
    }

    setTimeout(typeItOut, 1800);
}

// toggle tabs on codeblock
window.addEventListener("load", function () {
    // get all tab_containers in the document
    var tabContainers = getAll(".tab__container");

    // bind click event to each tab container
    for (var i = 0; i < tabContainers.length; i++) {
        get('.tab__menu', tabContainers[i]).addEventListener("click", tabClick);
    }

    // each click event is scoped to the tab_container
    function tabClick(event) {
        var scope = event.currentTarget.parentNode;
        var clickedTab = event.target;
        var tabs = getAll('.tab', scope);
        var panes = getAll('.tab__pane', scope);
        var activePane = get(`.${clickedTab.getAttribute('data-tab')}`, scope);

        // remove all active tab classes
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
        }

        // remove all active pane classes
        for (var i = 0; i < panes.length; i++) {
            panes[i].classList.remove('active');
        }

        // apply active classes on desired tab and pane
        clickedTab.classList.add('active');
        activePane.classList.add('active');
    }
});

//in page scrolling for documentaiton page
var btns = getAll('.js-btn');
var sections = getAll('.js-section');

function setActiveLink(event) {
    // remove all active tab classes
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove('selected');
    }

    event.target.classList.add('selected');
}

function smoothScrollTo(i, event) {
    var element = sections[i];
    setActiveLink(event);

    window.scrollTo({
        'behavior': 'smooth',
        'top': element.offsetTop - 20,
        'left': 0
    });
}

if (btns.length && sections.length > 0) {
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', smoothScrollTo.bind(this, i));
    }
}

// fix menu to page-top once user starts scrolling
window.addEventListener('scroll', function () {
    var docNav = get('.doc__nav > ul');

    if (docNav) {
        if (window.pageYOffset > 63) {
            docNav.classList.add('fixed');
        } else {
            docNav.classList.remove('fixed');
        }
    }
});

// responsive navigation
var topNav = get('.menu');
var icon = get('.toggle');

window.addEventListener('load', function () {
    function showNav() {
        if (topNav.className === 'menu') {
            topNav.className += ' responsive';
            icon.className += ' open';
        } else {
            topNav.className = 'menu';
            icon.classList.remove('open');
        }
    }

    icon.addEventListener('click', showNav);
});

