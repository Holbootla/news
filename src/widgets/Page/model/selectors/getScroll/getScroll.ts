import { StateSchema } from '@/app/providers/StoreProvider';

export const getScroll = (state:StateSchema) => state.page?.scroll;
