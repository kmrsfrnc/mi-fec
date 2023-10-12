import { VideoFormModel } from '../common/interfaces';

export const validateVideoForm = (item: Partial<VideoFormModel>): item is VideoFormModel => {
  return !!item.name?.length && !!item.authorId && !!item?.categoryIds?.length;
};
