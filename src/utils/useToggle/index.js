import { useCallback, useState } from 'react';

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState(state => !state), []);

  return [state, toggle];
}

export default useToggle;

// How to use
// =============

// import React from 'react';
// import useToggle from 'react-use-toggle';

// function Example() {
//   const [checked, toggle] = useToggle(false);

//   return (
//     <label>
//       <input
//         checked={checked}
//         onChange={toggle}
//         type={'checkbox'}
//       />

//       Are you hooked?
//     </label>
//   );
// }
