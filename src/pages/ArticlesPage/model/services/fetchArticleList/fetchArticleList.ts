import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticleList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesPage/fetchArticleList',
    async (_, ThunkApi) => {
        const { rejectWithValue, extra } = ThunkApi;

        try {
            const { data } = await extra.api.get<Article[]>('articles', {
                params: {
                    _expand: 'user',
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
