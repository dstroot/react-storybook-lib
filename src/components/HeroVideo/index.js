// import React from "react";

// // from https://www.gitprime.com/

// const HeroVideo = () => {
//   const style = {
//     background: "transparent",
//     height: "45vh",
//     width: "100vw",
//     url:
//       "(//images.ctfassets.net/uw229zq1tzc4/6mhWavUAFUGrfKwkylCPqM/c2dcbb66c2959c1fe8164cf779d3302b/home-hero-poster-image.jpg) no-repeat 0 0"
//   };

//   const videoStyle = {
//     height: "auto",
//     width: "100vw"
//   };

//   const opacity = {
//     opacity: "1",
//     transform: "translate3d(0px, 0%, 0px)"
//   };

//   const divHero = {
//     /* Image with a color wash */
//     // backgroundImage: `linear-gradient(to top, rgba(0, 142, 215, 0.9), rgba(0, 142, 215, 0.4)), url(${bgimage})`,

//     /* Set height relative to width */
//     height: "40vw",
//     minHeight: "225px",

//     /* Position and center the image to scale nicely on all screens */
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     position: "relative"
//   };

//   // place the text on the hero image - center text, viewport wide, at the bottom
//   const heroText = {
//     textAlign: "center",
//     position: "absolute",
//     bottom: "5vw",
//     width: "100vw",
//     color: "white"
//   };

//   // const example = {
//   //   position: "absolute",
//   //   top: "50%",
//   //   transform: `translate(0px, -50%)`
//   // };

//   return (
//     <div className="bg-dark" style={style}>
//       <video
//         className="bg-dark"
//         loop
//         autoPlay
//         async
//         muted
//         poster="data:image/gif,AAAA"
//         style={videoStyle}
//       >
//         <source
//           src="//videos.ctfassets.net/uw229zq1tzc4/3CYVQZf6e4EyACIEEKOaio/867dda9b5beb1b7d8f1c34261029b02a/HiRes_CC_Text_Removed.mp4"
//           type="video/mp4"
//         />
//       </video>
//       <div style={heroText}>
//         <div className="Container w-100 white">
//           <h1 className="white">
//             <div>
//               <div className="">
//                 <div style={opacity}>Engineers</div>
//               </div>
//             </div>
//             <div>
//               <div className="">
//                 <div style={opacity}>build business.</div>
//               </div>
//             </div>
//           </h1>
//           <div className="">
//             <div style={opacity}>
//               <p className="">
//                 Accelerate velocity and release products faster with visibility
//                 into your software engineering team.
//               </p>
//             </div>
//           </div>
//           <div className="">
//             <div style={opacity}>
//               <div className="inline-flex flex-column items-start flex-row-ns items-center-ns">
//                 <a
//                   className="btn btn-lg btn-outline-primary"
//                   theme="outline-white"
//                   href="/signup/"
//                 >
//                   Get Started
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroVideo;

import React from "react";
// import poster from "../img/video-placeholder.png";

// https://www.sample-videos.com/
// https://developers.google.com/web/fundamentals/media/video

const videoStyle = {
  position: "relative",
  zIndex: "0",
  width: "100vw",
  height: "auto"
};

// place the text on the hero image - center text, viewport wide, at the bottom
const heroText = {
  textAlign: "center",
  position: "relative",
  bottom: "20vw",
  width: "100vw",
  color: "white",
  opacity: "1",
  transform: "translate3d(0px, 0%, 0px)"
};

const wrapper = {
  position: "relative",
  width: "100vw",
  height: "20vh"
};

const HeroVideo = ({ videoURL, poster }) => (
  <div id="wrapper" className="bg-dark" style={wrapper}>
    <video
      style={videoStyle}
      preload="auto"
      poster={poster}
      loop
      autoPlay
      muted
    >
      {/* List formats in order of preference. */}
      <source src={videoURL} type="video/mp4" />

      {/* older browser */}
      <p>This browser does not support the video element.</p>
    </video>
    <div style={heroText}>
      <h1>Engineers build business.</h1>
      <p>
        Accelerate velocity and release products faster with visibility into
        your software engineering team.
      </p>

      <div>
        <a className="btn btn-lg btn-outline-primary" href="/signup/">
          Get Started
        </a>
      </div>
    </div>
  </div>
);

export default HeroVideo;

// <Video videoURL="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" />
