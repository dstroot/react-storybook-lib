import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// https://gist.github.com/kjintroverted/d67c7f12f68288f6ccf07cbd06fa66a8

const IGBackground = ({ username, quality, filterOpts = [] }) => {
  const [imageResources, setImages] = useState(null);
  const [imageDims, setImageDims] = useState(0);

  // CALCULATE HOW WIDE THE TILES SHOULD BE
  function getImageDims() {
    if (!imageResources || !imageResources.length) setImageDims(0);
    else
      setImageDims(
        Math.sqrt(
          (window.innerHeight * window.innerWidth) / imageResources.length
        )
      );
  }

  useEffect(() => {
    // LOADS POSTS WHEN USERNAME UPDATES
    async function getMedia() {
      if (!username) return;
      const resp = await fetch(`https://www.instagram.com/${username}/?__a=1`);
      const { graphql } = await resp.json();
      setImages(
        graphql.user.edge_owner_to_timeline_media.edges.map(
          ({ node }) => node.thumbnail_resources
        )
      );
    }

    getMedia();
  }, [username]);

  // UPDATES TILE DIMENSIONS WHEN IG IMAGES LOAD
  useEffect(getImageDims, [imageResources]);
  // UPDATES TILE DIMENSIONS WHEN WINDOW RESIZES
  window.addEventListener('resize', getImageDims);

  // PARENT TILE FOR IMAGES
  const Tile = styled.div`
    width: ${imageDims}px;
    height: ${imageDims}px;
    flex-grow: 1;
  `;

  // CREATES A FILTER OVER TOP
  const Filter = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: ${filterOpts}; /* USED IF ONE COLOR PASSED */
    background-image: linear-gradient(
      ${filterOpts.join()}
    ); /* USED IF GRADIENT OPTS PASSED */
    opacity: 0.7;
  `;

  return (
    <Container>
      {imageResources &&
        imageResources.map(res => (
          <Tile key={res[0].src}>
            <Post src={res[quality || 1].src} alt="recent post" />
          </Tile>
        ))}
      <Filter />
    </Container>
  );
};

export default IGBackground;

IGBackground.propTypes = {
  username: PropTypes.string.isRequired,
  quality: PropTypes.number,
  filterOpts: PropTypes.arrayOf(PropTypes.string),
};

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

const Post = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
