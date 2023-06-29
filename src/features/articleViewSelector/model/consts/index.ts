import { ArticleView } from '@/entities/Article';
import TiledIcon from '@/shared/assets/icons/tiled.svg';
import ListIcon from '@/shared/assets/icons/list.svg';

export const VIEW_TYPES = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];
