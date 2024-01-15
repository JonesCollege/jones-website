import { useEffect } from 'react';

export const insertLineBreak = (text) => {
    const textWithBreaks = text.replace(/\n/g, '<br />');

    // Render the result
    return <div dangerouslySetInnerHTML={{ __html: textWithBreaks }} />;
}

export const useScrollToTop = () => {
  useEffect(() => {
      window.scrollTo({
        top: 0,
      });
  }, []); 
};

export const useResizeWidth = (width, setResize) => {

  useEffect(() => {
    const findWidth = () => {
      if (window.innerWidth <= width) {
        setResize(true);
      } else {
        setResize(false);
      }
    };

    window.addEventListener('resize', findWidth);

    return () => {
      window.removeEventListener('resize', findWidth);
    };
  });
};