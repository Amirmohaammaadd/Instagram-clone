import "./HomePage.css";
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeLine/Timeline";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
};

export default Homepage;