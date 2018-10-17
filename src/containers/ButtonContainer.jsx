import Buttons from '../components/buttons';
import {connect} from 'react-redux';
import generateColor from '../actions/generateColor';
import generateQuote from '../actions/generateQuote';


const mapStateToProps = (state) => ({
    color: state.color
});
const mapActionsToProps = (dispatch) => { return {
    generateNew : () => {
        generateQuote(dispatch);
        generateColor(dispatch);
    }
}; }
export default connect(mapStateToProps, mapActionsToProps)(Buttons);
