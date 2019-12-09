/**
 * https://elmahdim.com/react-add-on-components-ck3orad63000dtfs1zvrmr6bp
 *
 * Usage:
 * <If condition={flag} otherwise="render that">
 *   render this...
 * </If>
 */

import Proptypes from 'prop-types';

function If(props) {
  return props.condition ? props.children : props.otherwise;
}

If.propsTypes = {
  condition: Proptypes.bool,
  otherwise: Proptypes.oneOfType([
    Proptypes.arrayOf(Proptypes.node),
    Proptypes.node,
  ]),
  children: Proptypes.oneOfType([
    Proptypes.arrayOf(Proptypes.node),
    Proptypes.node,
  ]),
};

If.defaultProps = {
  otherwise: null,
};

export default If;
