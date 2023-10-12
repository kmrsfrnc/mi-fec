export const Paths = {
  HOME: '/',
  UPDATE_VIDEO: '/edit/:id',
  CREATE_VIDEO: '/new',
};

export type UpdateVideoPathParams = {
  id: string;
};

export const generateUpdateVideoPath = (id: number) => {
  return Paths.UPDATE_VIDEO.replace(':id', `${id}`);
};
