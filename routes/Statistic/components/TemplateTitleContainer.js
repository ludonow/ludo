import { connect } from 'react-redux';
import TemplateTitle from './TemplateTitle';
import {
  fetchSingleTemplateRequest,
  getTemplateId,
  getTemplateInfo,
} from '../modules/singleTemplate';

const mapStateToProps = state => ({
  templateId: getTemplateId(state),
  templateInfo: getTemplateInfo(state),
});

const mapDispatchToProps = dispatch => ({
  fetchSingleTemplateRequestAction: (id) => {
    dispatch(fetchSingleTemplateRequest(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateTitle);
