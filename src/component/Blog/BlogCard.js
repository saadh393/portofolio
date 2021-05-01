/*  
💥 Title : PortfolioCard
📃 Description : Card of Portfolio
✍ Author : Saad Hasan
⌚ Date : 01/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import image from "../../image/portfolio/moviewall.png";
import github from "../../image/svg/primary/github.svg";
import playstore from "../../image/svg/primary/playstore.svg";

const BlogCard = () => {
  return (
    <>
      <div className="Blog-card">
        <img src={image} />
        <div className="Blog-content">
          <h3>Movie Wall</h3>
          <p>
            MovieWall as a Wallpaper App, where users are able to see lots of Recent Movie Wallpapers. They can vote and
            bookmark their favorite wallpaper, share with friends as well as set the wallpapers on their mobile screen.
          </p>
          <div className="Blog-links">
            <img src={github} />
            <img src={playstore} />
          </div>
          <ul className="Blog-technologies">
            <li>Kotlin</li>
            <li>Retrofit</li>
            <li>Room Persistance Library</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
