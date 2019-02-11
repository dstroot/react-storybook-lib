import React from "react";

// from https://www.gitprime.com/

const HeroVideo = () => {
  const style = {
    background: "transparent",
    height: "100vh",
    width: "100vw",
    url:
      "(//images.ctfassets.net/uw229zq1tzc4/6mhWavUAFUGrfKwkylCPqM/c2dcbb66c2959c1fe8164cf779d3302b/home-hero-poster-image.jpg) no-repeat 0 0"
  };

  const opacity = {
    opacity: "1",
    transform: "translate3d(0px, 0%, 0px)"
  };

  const divHero = {
    /* Image with a color wash */
    // backgroundImage: `linear-gradient(to top, rgba(0, 142, 215, 0.9), rgba(0, 142, 215, 0.4)), url(${bgimage})`,

    /* Set height relative to width */
    height: "40vw",
    minHeight: "225px",

    /* Position and center the image to scale nicely on all screens */
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative"
  };

  // place the text on the hero image - center text, viewport wide, at the bottom
  const heroText = {
    textAlign: "center",
    position: "absolute",
    bottom: "5vw",
    width: "100vw",
    color: "white"
  };

  const example = {
    position: "absolute",
    top: "50%",
    transform: `translate(0px, -50%)`
  };

  return (
    <div style={divHero}>
      <video
        className="bg-black"
        loop=""
        autoPlay=""
        async=""
        muted=""
        poster="data:image/gif,AAAA"
        style={style}
      >
        <source
          src="//videos.ctfassets.net/uw229zq1tzc4/3CYVQZf6e4EyACIEEKOaio/867dda9b5beb1b7d8f1c34261029b02a/HiRes_CC_Text_Removed.mp4"
          type="video/mp4"
        />
      </video>
      <div style={heroText}>
        <div className="Container w-100 white">
          <h1 className="white">
            <div>
              <div className="">
                <div style={opacity}>Engineers</div>
              </div>
            </div>
            <div>
              <div className="">
                <div style={opacity}>build business.</div>
              </div>
            </div>
          </h1>
          <div className="">
            <div style={opacity}>
              <p className="">
                Accelerate velocity and release products faster with visibility
                into your software engineering team.
              </p>
            </div>
          </div>
          <div className="">
            <div style={opacity}>
              <div className="inline-flex flex-column items-start flex-row-ns items-center-ns">
                <a
                  className="calibre-semi-bold items-center justify-center Button__OutlineButton-sc-1idqtbc-1 kapTDN"
                  theme="outline-white"
                  href="/signup/"
                >
                  Get Started
                </a>
                <a
                  className="calibre-semi-bold flex align-center pointer link HomepageHero__StyledLink-nd7a3l-4 ehOZoT white Link__StyledLinkWithHover-ja2hfi-3 lepUtB"
                  theme="white"
                  href="/platform/code/"
                >
                  <div className="Link__ArrowWrapper-ja2hfi-0 fWkNVq">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="12"
                      viewBox="0 0 8 11"
                    >
                      <path
                        fill="none"
                        fillRule="evenodd"
                        stroke="#FFF"
                        strokeWidth="2"
                        d="M1 1l5 4.5L1 10"
                        style={{ transition: "stroke 350ms ease" }}
                      />
                    </svg>
                  </div>
                  <div className="">Explore the platform</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;

/**
 *  Other Patterns I find useful...
 */

// class ParentComponent extends Component {
//     render() {
//         // My basic render function structure:
//
//         // 1) Extract values from props and state
//         const {a, b, someBoolean, someList} = this.props;
//
//         // 2) Render any dependent items into temporary variables, such as conditional components or lists
//         const conditionalComponent = someBoolean ? <SomeComponent /> : null;
//         const listItems = someList.map(item => <ListItem item={item} />);
//
//         // 3) Use a single JSX structure, with the temporary variables in the correct spots.
//         // Note that I avoid logic inline in my JSX.  That's perfectly legal, but I prefer to
//         // make the use of that logic as clear as possible by keeping it outside the JSX.
//         return (
//             <div>
//                 <div>A: {a}, B: {b}</div>
//                 {conditionalComponent}
//                 {listItems}
//             </div>
//         );
//     }
// }
//
//
//  class ParentComponent extends Component {
//      renderListItem(item){
//          return (
//              <ListItem item={item} />
//          )
//      }
//
//      // some other methods...
//      render () {
//          // ...extract values from props, state and so
//
//          // ...conditional components,
//
//          // here the map is done without re-defining the
//          // function each time we render.
//          const listItems = someList.map(this.renderListItem);
//
//          // continue with the usual
//      }
//  }
