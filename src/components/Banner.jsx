import BannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='-mt-28'>
    <div className="hero bg-purple-600 pt-32 pb-64 rounded-2xl">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-2xl font-bold text-[rgb(255,255,255)]">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6 text-[rgb(255,255,255)]">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn btn-primary">Shop Now</button>
    </div>
  </div>
</div>
<div className='-mt-60'>
    <img src={BannerImg} alt="" className='w-6/12 mx-auto rounded-xl' />
</div>
            
</div>
    );
};

export default Banner;