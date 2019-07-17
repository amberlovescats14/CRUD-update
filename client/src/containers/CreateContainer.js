import Create from '../components/Create'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  music: state.music
})
export default connect(mapStateToProps)(Create)