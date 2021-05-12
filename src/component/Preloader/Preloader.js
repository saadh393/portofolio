/*  
💥 Title : Preloader
📃 Description : 
✍ Author : Saad Hasan
⌚ Date : 04/ May/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import "./Preloader.css";

const Preloader = () => {
  return (
    <>
      <section className="flex alignCenter justifyCenter preloader">
        <svg id="preloader" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 955.3 841.15">
          <title>fabicon</title>
          <path
            id="background"
            d="M286.92,905.58a36.62,36.62,0,0,1-31.62-18.26L42.22,518.25a36.6,36.6,0,0,1,0-36.5L255.3,112.68a36.62,36.62,0,0,1,31.62-18.26H713.08a36.62,36.62,0,0,1,31.62,18.26L957.78,481.75a36.6,36.6,0,0,1,0,36.5L744.7,887.32a36.62,36.62,0,0,1-31.62,18.26Z"
            transform="translate(-22.35 -79.42)"
            style={{ fill: "#233554" }}
          />
          {/* <path
            id="stroke"
            d="M713.08,109.42a21.5,21.5,0,0,1,18.63,10.76L944.79,489.25a21.5,21.5,0,0,1,0,21.5L731.71,879.82a21.5,21.5,0,0,1-18.63,10.76H286.92a21.5,21.5,0,0,1-18.63-10.76L55.21,510.75a21.5,21.5,0,0,1,0-21.5L268.29,120.18a21.5,21.5,0,0,1,18.63-10.76H713.08m0-30H286.92a51.64,51.64,0,0,0-44.61,25.76L29.23,474.25a51.64,51.64,0,0,0,0,51.5L242.31,894.82a51.64,51.64,0,0,0,44.61,25.76H713.08a51.64,51.64,0,0,0,44.61-25.76L970.77,525.75a51.64,51.64,0,0,0,0-51.5L757.69,105.18a51.64,51.64,0,0,0-44.61-25.76Z"
            transform="translate(-22.35 -79.42)"
          /> */}
          <path
            id="text"
            d="M638.87,585.7q0,71-74,121.68Q500,752.14,407,764.37c-2.31.23-4.19.35-5.62.35-6.64,0,17.65-10.38-5.12-43.13s-34.17-52.73-34.17-60c0-2.56,2.16-4.2,6.49-4.9q62.7-11.54,83-19.58,45-18.18,45-53.85,0-22.72-29.41-50.7-51-47.55-55.36-52.8Q382,443.44,382,399.38q0-64,73.1-106.3,59.69-34.95,146.63-45.45,4.75-.34,7.35-.35,6.49,0,10.38,8.39c7.49,17-14.06,41.79,13.34,86.31a7.17,7.17,0,0,1,1.29,3.5q0,5.94-7.78,5.94a106.08,106.08,0,0,1-11.68-1.05,107.18,107.18,0,0,0-12.54-1.05q-31.14,0-54.5,11.54-28.12,13.29-28.12,37.07,0,21.33,31.15,52.45,36,36.67,49.53,50.51a149.43,149.43,0,0,1,23,30.18Q638.88,558.48,638.87,585.7Z"
            transform="translate(-22.35 -79.42)"
          />
        </svg>
        <h3 className="loading">Loading...</h3>
      </section>
    </>
  );
};

export default Preloader;