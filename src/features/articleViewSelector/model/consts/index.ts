import { ArticleView } from '@/entities/Article';
import TiledIconDeprecated from '@/shared/assets/icons/tiled.svg';
import ListIconDeprecated from '@/shared/assets/icons/list.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';
import { toggleFeatures } from '@/shared/lib/features';

export const VIEW_TYPES = [
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TiledIcon,
            off: () => TiledIconDeprecated,
        }),
    },
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
];
