import zoo_img from "./images/ZL_img.png"
import dmb_img from "./images/dmb_img.png"
import calc_img from "./images/calc_img.png"
import firstday_img from "./images/firstday.png"
import yumtea_img from "./images/yumtea.png"
export const projects=
[
    {
        title: "Yum Tea",
        // web: "https://dmbperformanceparts.com/",
        // tech_stack: "",
        github: {
            frontend:"https://github.com/villysiu/zoo-logic-v3/tree/master",
            backend: "https://github.com/villysiu/yum_tea_sb"
        },
        image: yumtea_img,
        youtube: "https://youtu.be/Wc-5hyKkA9M",
        desc: "Developed a full-stack, responsive e-commerce tea shop web app using Java Spring Boot, ReactJS, and MySQL, with secure authentication (Spring Security, Bcrypt, JWT), scalable REST APIs, dynamic routing (React Router), and state management via Redux. Ensured reliability through JUnit5, Mockito, and API testing with Insomnia."

    },
    {
        title: "DMB Performance Parts",
        web: "https://dmbperformanceparts.com/",
        // tech_stack: "",
        image: dmb_img,
        desc: "Designed and developed responsive multi-page websites using ReactJS, JavaScript, CSS, and HTML. Collaborated with clients to translate ideas into functional web interfaces, ensured cross-browser compatibility, optimized performance, conducted thorough testing and debugging, and supported ongoing maintenance and updates."
        
    },
    {
        title: "Zoo Logic",
        web: "https://villysiu.github.io/zoo-logic-v3/",
        tech_stack: "https://villysiu.github.io/zoo-logic-v3/#/tech-stack",
        github: {
            frontend:"https://github.com/villysiu/zoo-logic-v3/tree/master",
        },
        youtube: "https://youtu.be/1akT9nWzub4",
        image: zoo_img,
        desc: "Developed Zoo Logic, an interactive logic-based game where players place animal tokens to meet specific board conditions. Built a responsive front-end using React.js, HTML5, CSS3, and React Bootstrap. Leveraged Object-Oriented Programming to create reusable UI components and implemented game logic with JavaScript (ES6). Utilized React Hooks (useState, useEffect, useReducer) for efficient state and game board management. Applied performance optimizations to reduce load time and prevent unnecessary re-renders. Version-controlled with Git, deployed via GitHub Pages, and used Hash Router to sync the UI with the URL.",
        
    },
    // {
    //     title: "Villy's Instagram",
    //     web: "https://villysiu.github.io/instagram-copycat-v2/",
    //     github: {
    //         frontend: "https://github.com/villysiu/instagram-copycat-v2/tree/master",
    //         api: "https://github.com/villysiu/render-api"
    //     },
    //     youtube: "https://youtu.be/XIzEtyo8b0Y",
    //     image: ins,
    // },
    {
        title: 'Calculator',
        tech_stack: "https://villysiu.github.io/react-calculator/#/tech-stack",
        web: "https://villysiu.github.io/react-calculator/",
        github: {
            frontend: 'https://github.com/villysiu/react-calculator'
        },
        image: calc_img

    },
    {
        title: 'First Day',
        tech_stack: "",
        web: "https://villysiu.github.io/first-day/",
        github: {
            frontend: 'https://github.com/villysiu/first-day/'
        },
        image: firstday_img,
        desc: "Designed and developed a responsive “First Day of School” display board website using ReactJS, JavaScript, CSS, and HTML. Created engaging and functional web interfaces optimized for performance and cross-browser compatibility. Conducted thorough testing and debugging to ensure reliability. The site offers a fun, personalized experience that grows with children from preschool through grade school, allowing families to create memorable photos and timeless gifts for each school year. ",

    },
   
]

