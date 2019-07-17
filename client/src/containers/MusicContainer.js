import Music from '../components/Music'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
 music: state.music
})
export default connect(mapStateToProps)(Music)