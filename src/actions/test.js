import instance from 'services/api';

export const getTest = () => (dispatch) => {
  return instance.get('/').then(({ data: { data } }) => {
    dispatch({ type: 'TEST', payload: data });
  });
};
