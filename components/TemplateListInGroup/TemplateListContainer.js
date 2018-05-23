// @flow
import { connect } from 'react-redux';
import TemplateList from './TemplateList';
import { getTemplateList } from '../../routes/Group/modules/myTemplateList';
import { fetchSingleTemplateRequest } from '../../routes/Statistic/modules/singleTemplate';

const mapStateToProps = state => ({
  templateList: getTemplateList(state),
});

const mapDispatchToProps = dispatch => ({
  fetchSingleTemplateRequestAction: (templateId) => {
    dispatch(fetchSingleTemplateRequest(templateId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList);
