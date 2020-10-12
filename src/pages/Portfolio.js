/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Portfolio () {
    return (
        <div class="container">
            <div class="row">
                <section class="portfolio col-md-6 col-sm-12">
                    <h3>Portfolio</h3>
                    <hr></hr>
                    <div class="container">
                            <div class="row justify-content-between">

                            <div class="card col-md-5 col-sm-5 col-xs-12">
                                <img src="https://raw.githubusercontent.com/tmylesc/react-portfolio/main/src/assets/images/bcard.jpg" class="card-img-top" alt="Screenshot of BCard Generator App"></img>
                                <div class="card-body">
                                    <h6 class="h6-centered">B-Card Generator</h6>
                                    <a href="https://tmylesc.github.io/bcard/" target="_blank">Deployed App</a>
                                    <br></br>
                                    <a href="https://github.com/tmylesc/bcard" target="_blank">GitHub Repository</a>
                                </div>
                            </div>

                            <div class="card col-md-5 col-sm-5 col-xs-12">
                                <img src="https://raw.githubusercontent.com/tmylesc/react-portfolio/main/src/assets/images/weatherdashboard.png" class="card-img-top" alt="Screenshot of Weather Dashboard App"></img>
                                <div class="card-body">
                                    <h6 class="h6-centered">Weather Dashboard</h6>
                                    <a href="https://tmylesc.github.io/homework6/" target="_blank">Deployed App</a>
                                    <br></br>
                                    <a href="https://github.com/tmylesc/homework6" target="_blank">GitHub Repository</a>
                                </div>
                            </div>

                            <div class="card col-md-5 col-sm-5 col-xs-12">
                                <img src="https://raw.githubusercontent.com/tmylesc/react-portfolio/main/src/assets/images/workday.png" class="card-img-top" alt="Screenshot of Workday Scheduler App"></img>
                                <div class="card-body">
                                    <h6 class="h6-centered">Workday Scheduler</h6>
                                    <a href="https://tmylesc.github.io/homework5/" target="_blank">Deployed App</a>
                                    <br></br>
                                    <a href="https://github.com/tmylesc/homework5" target="_blank">GitHub Repository</a>
                                </div>
                            </div>

                            <div class="card col-md-5 col-sm-5 col-xs-12">
                                <img src="https://raw.githubusercontent.com/tmylesc/Habit-Tracker/master/demoscreenshot.png" class="card-img-top" alt="Screenshot of Habit Tracker"></img>
                                <div class="card-body">
                                    <h6 class="h6-centered">Habit Tracker</h6>
                                    <a href="https://thomas-abby-dada-jessica.herokuapp.com/" target="_blank">Deployed App</a>
                                    <br></br>
                                    <a href="https://github.com/tmylesc/Habit-Tracker" target="_blank">GitHub Repository</a>
                                </div>
                            </div>
                    </div>       
            </div>
        </section>
      </div>
    </div>
    );
};

export default Portfolio;