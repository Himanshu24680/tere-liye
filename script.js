/*====================================
            LOADER
====================================*/

document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {

        loader.style.opacity = "0";

        setTimeout(function () {

            loader.style.display = "none";

        }, 500);

    }, 2500);

});const password = "07/02/2008";

const btn = document.getElementById("unlockBtn");
/*====================================
      ENTER KEY SUPPORT
====================================*/

document.getElementById("password")
.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        btn.click();

    }

});

btn.addEventListener("click", function () {

    const value = document.getElementById("password").value;

    if (value === password) {

        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("website").style.display = "block";

    } else {

        document.getElementById("error").innerHTML =
            "Ye website sirf meri Ishu ke liye hai ❤️";

    }

});

// Temporary Text
/* ===========================
   Typewriter
=========================== */

const messages = [

"Ishu...",

"Main tujhe kuch kehna chahta hu...",

"Tu world ki sabse best GF hai ❤️",

"Isliye meri World's Best GF ko...",

"Happy Girlfriend Day ❤️",

"Maine tere liye kuch dil se likha hai..."

];

const typing = document.getElementById("typing");

const nextBtn = document.getElementById("nextBtn");

let messageIndex = 0;

let charIndex = 0;

typing.innerHTML="";

function typeWriter(){

    if(messageIndex >= messages.length){

nextBtn.style.display="inline-block";

setTimeout(()=>{

nextBtn.style.opacity="1";

nextBtn.style.transform="translateY(0px)";

},200);
        return;

    }

    if(charIndex < messages[messageIndex].length){

        typing.innerHTML += messages[messageIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter,70);

    }

    else{

        typing.innerHTML += "\n";

        messageIndex++;

        charIndex=0;

        setTimeout(typeWriter,700);

    }

}

typeWriter();


// ⭐⭐⭐⭐⭐ YAHAN SE STEP 5 KA CODE PASTE KARO ⭐⭐⭐⭐⭐

const stars = document.getElementById("stars");

for (let i = 0; i < 120; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDuration = (2 + Math.random() * 4) + "s";
    star.style.animationDelay = Math.random() * 5 + "s";

    stars.appendChild(star);

}
/* ===========================
   Floating Hearts
=========================== */

const heartContainer = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize =
(18 + Math.random()*28) + "px";
    heart.style.animationDuration =
(6 + Math.random()*6) + "s";

heart.style.transform =
`rotate(${Math.random()*360}deg)`;

    heartContainer.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },10000);

}

setInterval(createHeart,220);
/* ===========================
   Rose Petals
=========================== */

const petalContainer = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random()*100 + "%";

   petal.style.fontSize =
(20 + Math.random()*24) + "px";

petal.style.animationDuration =
(7 + Math.random()*5) + "s";

petal.style.transform =
`rotate(${Math.random()*360}deg)`;    petalContainer.appendChild(petal);

    setTimeout(function(){

        petal.remove();

    },13000);

}

setInterval(createPetal,350);
/* ===========================
   Sparkles
=========================== */

const sparkleContainer = document.getElementById("sparkles");

function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random()*100 + "%";
    sparkle.style.top = Math.random()*100 + "%";

    sparkle.style.animationDuration =
        (1 + Math.random()*2) + "s";

    sparkleContainer.appendChild(sparkle);

    setTimeout(function(){

        sparkle.remove();

    },3000);

}

setInterval(createSparkle,180);
/* ===========================
   Next Button
=========================== */

nextBtn.addEventListener("click", function () {

    const page1 = document.getElementById("page1");

    const page2 = document.getElementById("page2");

    page1.classList.add("pageFadeOut");

    setTimeout(function(){

        page1.style.display="none";

        page2.style.display="flex";

        page2.classList.add("pageFadeIn");

    },600);

});
/*=========================
     PAGE CHANGE
==========================*/

/*====================================
      Envelope Open 
====================================*/
const envelope = document.getElementById("envelope");

const loveLetter = document.getElementById("loveLetter");

envelope.addEventListener("click",function(){

    envelope.classList.add("open");

    setTimeout(function(){

        document.querySelector(".envelope-container").style.display="none";

        loveLetter.style.display="block";
 startLetterTyping();

    },1500);

});
/*====================================
      Ribbon Open
====================================*/

const dreamBox = document.querySelector(".dream-box");

if(dreamBox){

    dreamBox.addEventListener("click",function(){

        dreamBox.classList.add("open");

    });

}
/*====================================
      LETTER TYPEWRITER
====================================*/

const letterMessage = `

Tu meri jaan hai.
Tu meri bahut respect karti hai.
Tu meri mummy ki bhi respect karti hai.
Tu hamesha mere dreams ke liye motivate karti hai.
Achhe aur bure waqt me mere saath rehti hai.
Jab bhi main tujhe dekhta hu na,
meri saari tension khatam ho jaati hai.
Aur jab tu mujhe hug karti hai,
us pal lagta hai ki meri saari pareshaniyan khatam ho gayi.

I Love You Forever ❤️
`;

const letterBox = document.getElementById("letterText");

const page3Btn = document.getElementById("page3Btn");

function startLetterTyping(){

    let i = 0;

    letterBox.innerHTML = "";

    function typing(){

        if(i < letterMessage.length){

            letterBox.innerHTML += letterMessage.charAt(i);

            i++;

            setTimeout(typing,35);

        }

        else{

            page3Btn.style.display = "block";

        }

    }

    typing();

}
/*====================================
      DREAMS TYPEWRITER
====================================*/

const dreamsMessage = `

Sabse pehle main ek achhi job secure karna chahta hu.

Fir tere ghar walon ko manana chahta hu.

Fir tere saath shaadi karna chahta hu.

Tere saath ek pyara sa ghar banana chahta hu.

Tere saath poori duniya ghoomna chahta hu.

Tere saath hasna chahta hu.

Tere har dukh ko apna banana chahta hu.

Bas hamesha tera khayal rakhna chahta hu.

❤️

`;

const dreamText = document.getElementById("dreamText");

const finalBtn = document.getElementById("finalBtn");
const finalPage = document.getElementById("finalPage");

function startDreamTyping(){

    let i = 0;

    dreamText.innerHTML = "";

    function typing(){

        if(i < dreamsMessage.length){

            dreamText.innerHTML += dreamsMessage.charAt(i);

            i++;

            setTimeout(typing,35);

        }

        else{

            finalBtn.style.display = "inline-block";

        }

    }

    typing();

}
/*====================================
      PAGE 3 TRANSITION
====================================*/

const page2 = document.getElementById("page2");

const page3 = document.getElementById("page3");

page3Btn.addEventListener("click",function(){

    page2.classList.add("pageFadeOut");

    setTimeout(function(){

        page2.style.display="none";

        page3.style.display="flex";

        page3.classList.add("pageFadeIn");

        document.querySelector(".dream-box")
            .classList.add("open");

        startDreamTyping();

    },600);

});
/*====================================
      FINAL FIREWORK PREVIEW
====================================*/

const fireworks = document.getElementById("fireworks");

function createFirework(){

    if(!fireworks) return;

    const dot = document.createElement("div");

    dot.className = "firework";
const colors = [

"#ffffff",

"#ff4fd8",

"#ff6ec7",

"#c084fc",

"#ffd700"

];

dot.style.color =
colors[Math.floor(Math.random()*colors.length)];

dot.style.background = "currentColor";

    dot.style.left = Math.random()*100+"%";

    dot.style.top = Math.random()*100+"%";
dot.style.animationDuration =
(0.8 + Math.random()*0.8) + "s";

    fireworks.appendChild(dot);

    setTimeout(function(){

        dot.remove();

    },1000);

}

setInterval(createFirework,350);
/*====================================
      FINAL PAGE TYPEWRITER
====================================*/

const finalMessages = [

"I Love You Forever Ishu ❤️",

"Thank You For Coming Into My Life ❤️",

"Forever Yours ❤️"

];

const finalTyping = document.getElementById("finalTyping");

let finalMessageIndex = 0;

let finalCharIndex = 0;

function startFinalTyping(){

    finalTyping.innerHTML = "";

    finalMessageIndex = 0;

    finalCharIndex = 0;

    typeFinal();

}

function typeFinal(){

  if(finalMessageIndex >= finalMessages.length){

    document.getElementById("finalPage")
        .classList.add("cinematic");

    document.getElementById("finalTyping")
        .classList.add("finish");

   setTimeout(function(){

    document.getElementById("signature")
        .classList.add("show");

},2500);
setTimeout(() => {

    document.querySelector(".memory-button-section").style.display = "block";

}, 2000);
    return;

}   

    if(finalCharIndex < finalMessages[finalMessageIndex].length){

        finalTyping.innerHTML += finalMessages[finalMessageIndex].charAt(finalCharIndex);

        finalCharIndex++;

        setTimeout(typeFinal,70);

    }

    else{

        finalTyping.innerHTML += "<br><br>";

        finalMessageIndex++;

        finalCharIndex = 0;

        setTimeout(typeFinal,1000);

    }

}
/*====================================
      FINAL PAGE OPEN
====================================*/

finalBtn.addEventListener("click", function(){

    page3.classList.add("pageFadeOut");

    setTimeout(function(){

        page3.style.display="none";

        finalPage.style.display="flex";

        finalPage.classList.add("pageFadeIn");

        startFinalTyping();

    },600);

});/*====================================
      BETTER FIREWORKS
====================================*/

setInterval(function(){

    createFirework();

    setTimeout(createFirework,250);

    setTimeout(createFirework,500);

},1800);


const memoriesBtn = document.getElementById("showMemoriesBtn");

if (memoriesBtn) {

    memoriesBtn.addEventListener("click", () => {

        // Final page hide
        document.getElementById("finalPage").style.display = "none";

        // Memory page show
        document.getElementById("memoryGallery").style.display = "block";
document.getElementById("memoryGallery").style.visibility = "visible";

        // Memory page ke top par le jao
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
// Lightbox

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";
        lightboxImg.src=img.src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});
const endBtn = document.getElementById("endBtn");

if(endBtn){

    endBtn.addEventListener("click", () => {

        // Page ko start se reload karega
        window.location.reload();

    });

}