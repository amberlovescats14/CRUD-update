import Home from '../components/Home'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  home: state.home
})

export default connect(mapStateToProps)(Home)