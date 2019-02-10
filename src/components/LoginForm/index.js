import React, { Suspense, useState, useRef, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import Pwned from '../Pwned';
import zxcvbn from 'zxcvbn';

const LoginForm = ({ image }) => {
  // state
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(0.01);
  const [time, setTime] = useState('');

  // custom hook
  let { width, height } = useWindowSize();

  // canvas/image
  const canvas = useRef();
  const img = new Image();
  img.src = image;
  let imgRatio = 0;

  // When you call useEffect, you’re telling React to run your “effect”
  // function after flushing changes to the DOM. Effects are declared
  // inside the component so they have access to its props and state.
  // By default, React runs the effects after every render — including
  // the first render. If you want your effects to run less often,
  // you can provide a second argument – an array of values. Think
  // of them as the dependencies for that effect. If one of the
  // dependencies has changed since the last time, the effect will
  // run again. (It will also still run after the initial render)
  useEffect(
    () => {
      let ctx = canvas.current.getContext('2d');
      img.onload = () => {
        imgRatio = img.naturalWidth / img.naturalHeight;
        draw(ctx, width, height);
      };
    },
    [image, size, width, height]
  );

  // Calculate the strength of the password using zxcvbn and save
  // the result into our state.
  const computePassword = e => {
    setPassword(e.target.value);
    const result = zxcvbn(e.target.value);

    // We want to reveal the image as the password gets stronger. Since the
    // zxcvbn.score has only 5 different values (0-4) we will use the
    // zxcvbn.guesses_log10 output. The guesses_log10 will be >= 11 when
    // the password is considered strong, so we want to map a factor of 1
    // (all pixelated) to 100 (clear image) to a value of 0 to 11 of
    // guesses_log10. This result will be used in the render function.
    let scaleFactor =
      (99 / 11) * Math.min(11, Math.round(result.guesses_log10)) + 1;

    // Adjust the scaleFactor down so we mostly see pixels rather than
    // the clear image.
    if (scaleFactor > 1 && scaleFactor < 100) {
      scaleFactor = scaleFactor / 3;
    }

    // scaleFactor will depend on the current typed password.
    // values will be in the range [1,100].
    setSize(scaleFactor * 0.01);

    // create a message based on the score
    if (e !== '') {
      setTime(
        `That password will take ${
          result.crack_times_display.offline_slow_hashing_1e4_per_second
        } to crack.`
      );
    }
  };

  // draw the image on the canvas
  const draw = (ctx, width, height) => {
    ctx.canvas.width = width;
    ctx.canvas.height = height;

    // set dimensions
    let newWidth = width;
    let newHeight = height;
    let wrapperRatio = newWidth / newHeight;
    let newX = 0;
    let newY = 0;

    // fit image inside canvas
    if (wrapperRatio > imgRatio) {
      newHeight = width / imgRatio;
      newY = (height - newHeight) / 2;
    } else {
      newWidth = height * imgRatio;
      newX = (width - newWidth) / 2;
    }

    // draw original image to a smaller, scaled down size
    ctx.drawImage(img, 0, 0, width * size, height * size);

    // turn off image aliasing - this will give the pixelated effect
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    // then draw that smaller image back to fill canvas -
    // Since smoothing is off the result will be pixelated
    ctx.drawImage(
      canvas.current,
      0,
      0,
      width * size,
      height * size,
      newX,
      newY,
      newWidth + 0.05 * width,
      newHeight + 0.05 * height
    );
  };

  // render canvas
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 d-flex flex-column">
          <form className="mt-auto mb-5">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                onChange={computePassword}
              />
              <small className="form-text text-muted">{time}</small>
              <small className="form-text text-danger">
                <Suspense fallback={<div>Loading...</div>}>
                  <Pwned password={password} />
                </Suspense>
              </small>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <small className="mt-3 form-text">
              Need to{' '}
              <strong>
                <a href="/">sign up?</a>
              </strong>
            </small>
          </form>
        </div>
        <div className="col-md-8">
          <div className="canvas-wrap">
            <canvas ref={canvas} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
