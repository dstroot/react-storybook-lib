import React, { useState } from "react";

// components
import NewsListDB from "../NewsList";
import ImageList from "../ImageList";
import data from "../ImageList/images.json";
import ContactPR from "../ContactPR";

// Each tab has a numeric index from zero. The active tab state is
// held in `activeTab`. When a tab is clicked we update our state
// using `setActiveTab`.

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <ul className="nav nav-tabs nav-fill mb-4">
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === 0 && "active"}`}
            onClick={() => setActiveTab(0)}
          >
            News Stories
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === 1 && "active"}`}
            onClick={() => setActiveTab(1)}
          >
            Images and Video
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === 2 && "active"}`}
            onClick={() => setActiveTab(2)}
          >
            Contact Us
          </div>
        </li>
      </ul>
      {/*<RenderTabContent index={activeTab} />*/}
      {
        {
          0: <NewsListDB />,
          1: <ImageList data={data} />,
          2: <ContactPR />
        }[activeTab]
      }
    </>
  );
};

// const RenderTabContent = ({ index }) => {
//   switch (index) {
//     case 0:
//       return <NewsListDB />;
//     case 1:
//       return <ImageList data={data} />;
//     case 2:
//       return <ContactPR />;
//     default:
//       return null;
//   }
// };

// {
//   {
//     0: <Tab1 />,
//     1: <Tab2 />,
//     2: <Tab3 />,
//   }[activeTab]
// }

// We pass the state to the component and it uses a switch statement to
// render the appropriate tab content.

// const RenderTabContent = ({ index }) => {
//   switch (index) {
//     case 0:
//       return <Tab1 />;
//     case 1:
//       return <Tab2 />;
//     case 2:
//       return <Tab3 />;
//     default:
//       return null;
//   }
// };

export default Tabs;
