import instance from 'services/api';

export const uploadAttachments = (body) => instance.post('/upload', body).then(({ data: { data } }) => data);
export const unlinkImage = (image) => instance.post('/upload/unlink/', image);
