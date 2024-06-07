
const Footer = () => {
  return (
  <div className="w-full px-20 bg-secondary flex justify-between items-center" id="footer">
    <span className="text-text">© 2024 Copyright: L1. 6</span>
    <ul className="flex space-x-5 cursor-pointer">
    <li>
        <img src="FB_icon.png" alt="fb_icon"></img>
        </li>
        <li className="">
            <img src="Twitter_icon.png" alt="twitter_icon"></img>
        </li>
        <li>
            <img src="IG_icon.png" alt="ig_icon"></img>
        </li>
        <li>
            <img src="YT_icon.png" alt="yt_icon"></img>
        </li>
        <li>
            <img src="LinkedIn_icon.png" alt="linkedin_icon"></img>
        </li>
      </ul>
  </div>
  );
};

export default Footer;
