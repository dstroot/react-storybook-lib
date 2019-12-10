// yarn add react-photo-gallery react-images

// import React from 'react';
// import Gallery from 'react-photo-gallery';
// import Lightbox from 'react-images';

// class LightboxExample extends React.PureComponent {
//   constructor() {
//     super();
//     this.state = { currentImage: 0 };
//     this.closeLightbox = this.closeLightbox.bind(this);
//     this.openLightbox = this.openLightbox.bind(this);
//     this.gotoNext = this.gotoNext.bind(this);
//     this.gotoPrevious = this.gotoPrevious.bind(this);
//   }
//   openLightbox(event, obj) {
//     this.setState({
//       currentImage: obj.index,
//       lightboxIsOpen: true,
//     });
//   }
//   closeLightbox() {
//     this.setState({
//       currentImage: 0,
//       lightboxIsOpen: false,
//     });
//   }
//   gotoPrevious() {
//     this.setState({
//       currentImage: this.state.currentImage - 1,
//     });
//   }
//   gotoNext() {
//     this.setState({
//       currentImage: this.state.currentImage + 1,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h2>Using with a Lightbox component</h2>
//         <Gallery photos={this.props.photos} onClick={this.openLightbox} />
//         <Lightbox
//           theme={{ container: { background: 'rgba(0, 0, 0, 0.85)' } }}
//           images={this.props.photos.map(x => ({
//             ...x,
//             srcset: x.srcSet,
//             caption: x.title,
//           }))}
//           backdropClosesModal={true}
//           onClose={this.closeLightbox}
//           onClickPrev={this.gotoPrevious}
//           onClickNext={this.gotoNext}
//           currentImage={this.state.currentImage}
//           isOpen={this.state.lightboxIsOpen}
//           width={1600}
//         />
//       </div>
//     );
//   }
// }

// export default LightboxExample;

import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

const LightboxExample = ({ photos }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default LightboxExample;
