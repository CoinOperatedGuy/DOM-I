const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "nav-item-7": "TEST 1",
        "nav-item-8": "TEST 2",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let links = document.getElementsByTagName("a");
let nav = document.querySelectorAll('a');
nav.forEach(link => link.style.color = 'green')

links[0].innerHTML = siteContent["nav"]["nav-item-1"]
links[1].innerHTML = siteContent["nav"]["nav-item-2"]
links[2].innerHTML = siteContent["nav"]["nav-item-3"]
links[3].innerHTML = siteContent["nav"]["nav-item-4"]
links[4].innerHTML = siteContent["nav"]["nav-item-5"]
links[5].innerHTML = siteContent["nav"]["nav-item-6"]

let awesome = document.querySelector('h1');
awesome.innerHTML = siteContent["cta"]["h1"]
let btn = document.querySelector('button');
btn.innerHTML = siteContent["cta"]["button"]

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let titles = document.getElementsByTagName("h4");

titles[0].innerHTML = siteContent["main-content"]["features-h4"]
titles[1].innerHTML = siteContent["main-content"]["about-h4"]
titles[2].innerHTML = siteContent["main-content"]["services-h4"]
titles[3].innerHTML = siteContent["main-content"]["product-h4"]
titles[4].innerHTML = siteContent["main-content"]["vision-h4"]
titles[5].innerHTML = siteContent["contact"]["contact-h4"]

let content = document.getElementsByTagName("p");

content[0].innerHTML = siteContent["main-content"]["features-content"]
content[1].innerHTML = siteContent["main-content"]["about-content"]
content[2].innerHTML = siteContent["main-content"]["services-content"]
content[3].innerHTML = siteContent["main-content"]["product-content"]
content[4].innerHTML = siteContent["main-content"]["vision-content"]
content[5].innerHTML = siteContent["contact"]["address"]
content[6].innerHTML = siteContent["contact"]["phone"]
content[7].innerHTML = siteContent["contact"]["email"]
content[8].innerHTML = siteContent["footer"]["copyright"]

let midImg = document.querySelector('#middle-img');
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const newLink = document.createElement('a');
const newLink1 = document.createElement('a');
let navBar = document.querySelector("nav");
navBar.appendChild(newLink);
links[6].innerHTML = siteContent["nav"]["nav-item-7"]
navBar.appendChild(newLink1);
links[7].innerHTML = siteContent["nav"]["nav-item-8"]