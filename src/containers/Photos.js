import { connect } from 'react-redux'

import Photos from '../components/Photos'
import * as actionCreators from '../redux/modules/photos'

const createActionDispatchers = actionCreators => dispatch =>
  Object.keys(actionCreators).reduce((actionDispatchers, name) => {
    var actionCreator = actionCreators[name]
    if (typeof actionCreator == 'function') {
      actionDispatchers[name] = (...args) => dispatch(actionCreator(...args))
    }
    return actionDispatchers
  }, {})

const mapStateToProps = state => ({
  photoState: state.photos, 
})
const mapDispatchToProps = createActionDispatchers(actionCreators)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos)
