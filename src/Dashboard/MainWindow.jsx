import React from "react";
import './dashboard.css';

const Dashboard = () => {

  const storedUsername = localStorage.getItem('username');
  const WelcomeUser = storedUsername.split(' ')[0];  // Extract the first word
  console.log(WelcomeUser); 

  return(
    <div className="divbox">
      <div className="welcomebox">
        <h2 className="weluser">Welcome, {WelcomeUser}! Let's make today productive and fun.. </h2>
      </div>

      <div className="dashboardcontent">
        <section className="dashimages">
          <img src="/img/dashboarddata1.png" alt="" srcset="" className="dashcontent"/>
        </section>

        <section className="dashimages">
          <img src="/img/dashboarddata2.png" alt="" srcset="" className="dashcontent"/>
        </section>

        {/* <section className="dashimages">

        </section> */}
      </div>
    </div>
  );
};

export default Dashboard;
