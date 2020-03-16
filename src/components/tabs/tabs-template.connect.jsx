import TabsTemplate from './tabs-template';
import {connect} from "react-redux";
import {getComments} from '../../reducer/state/selectors';

const mapStateToProps = (state) => {
  return {
    comments: getComments(state)
  };
};

export default connect(mapStateToProps)(TabsTemplate);
