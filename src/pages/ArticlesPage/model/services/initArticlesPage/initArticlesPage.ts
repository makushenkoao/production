import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import {
    fetchArticleList,
} from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList';
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, ThunkApi) => {
        const { getState, dispatch } = ThunkApi;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticleList({
                page: 1,
            }));
        }
    },
);
