// Function to create twinkling stars
function createStarEffect(x, y) {
    const container = document.body; // Use the entire page as the container

    for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Set random position around the click point
        const size = Math.random() * 8 + 4; // Random size between 4px and 12px
        const offsetX = Math.random() * 100 - 50; // Random x offset (-50px to +50px)
        const offsetY = Math.random() * 100 - 50; // Random y offset (-50px to +50px)

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x + offsetX}px`; // Position relative to the viewport
        star.style.top = `${y + offsetY}px`; // Position relative to the viewport

        container.appendChild(star);

        // Remove the star after the animation ends
        star.addEventListener('animationend', () => {
            star.remove();
        });
    }
}

// Attach the star effect to the "Contact Me" link
const contactLink = document.querySelector('#links a');

// Add stars on mouseover
contactLink.addEventListener('mousemove', (e) => {
    const x = e.clientX; // X-coordinate of the mouse pointer relative to the viewport
    const y = e.clientY; // Y-coordinate of the mouse pointer relative to the viewport

    createStarEffect(x, y); // Trigger the star effect at the mouse pointer position
});
 
// display sections on clicking on the link
function displaySection(link,section) {
    let lnk = document.querySelector(`#${link}`);
    let sec = document.querySelector(`#${section}`);
    
    // when you click on one of the links
    lnk.onclick = (event) => {
        
        // mobile js
        const mq = window.matchMedia("(max-width: 500px)");
        if(mq.matches) {
            // show the go-back button when a link is clicked in responsive mode 
            let goBackButton = document.querySelector("#go-back-button");
            goBackButton.style.display = "block";

            // when the go-back button is clicked , it disappears with the main and the menu should reapear
            goBackButton.addEventListener("click",() => {
                // hide the mainSection
                sec.style.display = "none";       
                let menu = document.querySelector("#menu");
                menu.style.display = "flex";
                goBackButton.style.display = "none";
                lnk.classList.remove("active");
         
            });

            lnk.parentElement.style.display = "none"; 

            if(section == "skills-section") {
                let div = document.querySelector(`#${section} > article`);
                div.style.display = "flex";
                div.style.flexDirection = "column";
                let subElement = document.querySelectorAll(`#${section} li`);
                for (se of subElement){
                    se.style.fontFamily = "roboto mono";
                }
                
            } else if (section == "projects-section") {
                let s = document.querySelector("#projects-wrapper");
                s.style.display = "flex";
                s.style.flexDirection = "column";

            } else if (section == "resume-section") {
                let s = document.querySelector("#resume-wrapper");
                s.style.display = "flex";
                s.style.flexDirection = "column";

            } else if (section == "links-section") {
                let linkWrapper = document.querySelector(`#${section} div`);
                linkWrapper.style.display = "flex";
                linkWrapper.style.flexDirection = "column";

            }
            sec.classList.remove("section");
            sec.style.display = "block";
            sec.style.animationName = "section-mobile";
            sec.style.animationDuration = "1.2s";
        } else {
            
            // remove the section from sight
            for(elem of sec.parentElement.children){
                elem.style.display = "none";
            }
            // remove the about-me-intro
            let aboutMeIntroSection = document.querySelector("#about-me-intro-section");
            aboutMeIntroSection.style.display = "None";

            sec.classList.remove("section");
            sec.style.display = "block";
            sec.style.animationName = "section";
            sec.style.animationDuration = "0.6s";
            sec.style.animationFillMode = "forwards";
            

            let menu = document.querySelector("#menu");
            menu.style.marginTop = "0px";
            menu.style.display = "flex";
            menu.style.position = "fixed";
            menu.style.top = "1vw"; 
            menu.style.transition = "All 1s";
            menu.style.right= "15vw";

            event.preventDefault() ;
            lnk.classList.add("active");
        }
        
        let jiran = lnk.parentElement.children;
        for(j of jiran){
            j.classList.remove("active");
        }

            event.preventDefault() ; 
            lnk.classList.add("active");

    };
}

displaySection("about-me","about-me-section");
displaySection("resume","resume-section");
displaySection("skills","skills-section");
displaySection("projects","projects-section");
displaySection("links","links-section");
