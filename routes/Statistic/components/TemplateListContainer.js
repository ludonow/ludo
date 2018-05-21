// @flow
import { connect } from 'react-redux';
import TemplateList from './TemplateList';
import {
  fetchTemplateListRequest,
  getTemplateList,
} from '../modules/templateList';

const mapStateToProps = state => ({
  templateList: getTemplateList(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTemplateListRequestAction: () => {
    dispatch(fetchTemplateListRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);
