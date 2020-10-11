/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Home () {
    return (
        <div class="container">
            <div class="row">
            <section class="aboutMe col-md-6 col-sm-12 ">
                <h3>About Me</h3>
                <hr></hr>
                <img src="https://avatars2.githubusercontent.com/u/59925806?s=460&u=18d30944a4e07cd25e3832ee00e634c913d83b04&v=4" class="bioImage col-md-6 col-sm-6 col-xs-12 float-left" alt="Thomas Coradetti"></img>
                <p>
                        Hello. My name is Thomas Coradetti. I live in Baltimore, Maryland. I work in e-commerce as a product specialist. My company sells a lot of cool Maryland themed gear.
                </p>
                <p>
                        I'm training to become a full stack web developer and currently enrolled in Johns Hopkins Whiting School of Engineering's Coding Bootcamp. Skills I'm learning include HTML, CSS, Bootstrap + other frameworks, JavaScript, JQuery, React.JS, Node.JS, Express.JS, MySQL, and MongoDB.
                </p>
                <a href="https://drive.google.com/file/d/1iQ-ltmO0b-5N7FaWYz3PWL5gvq1BZYAF/view?usp=sharing" target="_blank">Download Resume</a>
                <br></br>
                <br></br>
                <p>
                        GitHub: <a href="https://github.com/tmylesc" target="_blank">https://github.com/tmylesc</a>
                        <br></br>
                        LinkedIn: <a href="https://www.linkedin.com/in/thomas-coradetti/" target="_blank">https://www.linkedin.com/in/thomas-coradetti/</a>
                        <br></br>
                        Email: <a href="mailto:tmcoradetti@gmail.com" target="_blank">tmcoradetti@gmail.com</a>
                        <br></br>
                        Phone: (304) 641-7462
                </p>
            </section>
            </div>
        </div>
    );
};

export default Home;