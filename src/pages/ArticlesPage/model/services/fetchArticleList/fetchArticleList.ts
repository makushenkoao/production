import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

interface fetchArticleListProps {
    page?: number
}

export const fetchArticleList = createAsyncThunk<Article[], fetchArticleListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (props, ThunkApi) => {
        const { page = 1 } = props;
        const { rejectWithValue, extra, getState } = ThunkApi;
        const limit = getArticlesPageLimit(getState());
        try {
            const { data } = await extra.api.get<Article[]>('articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });

            if (!data) {
                throw new Error();
            }

            return data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
