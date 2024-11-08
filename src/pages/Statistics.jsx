import { Helmet } from "react-helmet-async";
import Charts from "../components/Charts";


const Statistics = () => {
    return (
        <div>
          <Helmet>
            <title>statistics</title>
          </Helmet>
            <div className="hero bg-purple-600  rounded-2xl">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-3xl font-bold text-[rgb(255,255,255)]">Statistics Details</h1>
      <p className="py-6 text-[rgb(255,255,255)]">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
    </div>
  </div>
</div>

<div>
  <h2 className="text-2xl">Statistics</h2>
  <Charts></Charts>
</div>
 </div>
    );
};

export default Statistics;