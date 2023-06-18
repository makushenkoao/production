import { rtkApi } from 'shared/api/rtkApi';

export const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const {
    useGetArticleRecommendationsListQuery,
} = articleRecommendationsApi;
