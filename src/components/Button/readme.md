# Button

Uses font awesome icons: https://fontawesome.com/how-to-use/on-the-web/using-with/react

Add the library:

```sh
$ yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

Add this to your application (see `stories/index.js`)

```js
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faCheck,
  faCheckCircle,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

// library of Font Awesome Icons
library.add(faSpinner, faCheck, faCheckCircle, faExclamationTriangle);
```

### Font Awesome

- https://fontawesome.com/icons?d=gallery
- https://github.com/FortAwesome/react-fontawesome
- https://fontawesome.com/how-to-use/on-the-web/using-with/react
