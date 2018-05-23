import axios from '../axios-config';

export const getWithQuery = query => (
  axios.get(query)
);

export const postWithParams = ({
  apiParam,
  postBody,
}) => (
  axios.post(apiParam, postBody)
);
