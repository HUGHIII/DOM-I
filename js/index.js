const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navBar = document.querySelectorAll("a");
navBar.forEach((element,index) => element.text = siteContent["nav"][`nav-item-${index+1}`]);

const headerOne = document.querySelector("h1");
headerOne.textContent = siteContent['cta']['h1'];

const headerBttn = document.querySelector('button');
headerBttn.textContent = siteContent['cta']['button'];

const headerImg = document.querySelector('#cta-img')
headerImg.src = siteContent['cta']['img-src'];





const header41 = document.getElementsByTagName('h4');
header41[0].textContent = siteContent['main-content']['features-h4'];

const header42 = document.getElementsByTagName('h4');
header42[1].textContent = siteContent['main-content']['about-h4'];

const pgrph1 = document.getElementsByTagName('p');
pgrph1[0].textContent = siteContent['main-content']["features-content"];

const pgrph2 = document.getElementsByTagName('p');
pgrph1[1].textContent = siteContent['main-content']["about-content"];



const centerImg = document.querySelector('#middle-img');
centerImg.src = siteContent['main-content']['middle-img-src'];



const header43 = document.getElementsByTagName('h4');
header43[2].textContent = siteContent['main-content']['services-h4'];

const header44 = document.getElementsByTagName('h4');
header44[3].textContent = siteContent['main-content']['product-h4'];

const header45 = document.getElementsByTagName('h4');
header45[4].textContent = siteContent['main-content']['vision-h4'];

const pgrph3 = document.getElementsByTagName('p');
pgrph3[2].textContent = siteContent['main-content']["services-content"];

const pgrph4 = document.getElementsByTagName('p');
pgrph4[3].textContent = siteContent['main-content']["product-content"];

const pgrph5 = document.getElementsByTagName('p');
pgrph5[4].textContent = siteContent['main-content']["vision-content"];


const header46 = document.getElementsByTagName('h4');
header46[5].textContent = siteContent['contact']["contact-h4"];

const pgrph6Address = document.getElementsByTagName('p');
pgrph6Address[5].textContent = siteContent['contact']["address"];

const pgrph7Phone = document.getElementsByTagName('p');
pgrph7Phone[6].textContent = siteContent['contact']["phone"];

const pgrph8Email = document.getElementsByTagName('p');
pgrph8Email[7].textContent = siteContent['contact']["email"];

const pgrph9copyr = document.getElementsByTagName('p');
pgrph9copyr[8].textContent = siteContent['footer']["copyright"];



const navColor = document.querySelectorAll('a');
navColor.style.color = 'green';







// {/* <section class="contact">

// <h4></h4>

// <p></p>

// <p></p>

// <p></p>

// </section>

// <footer>
// <p></p>
// </footer>

// </div><!-- container -->
// </body>
// </html> */}






