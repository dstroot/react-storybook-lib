import { useEffect } from "react";

const usePageTitle = title => {
  useEffect(() => {
    document.title = title;
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, [title]);
};

export default usePageTitle;
