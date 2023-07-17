import { rtkApi } from '@/shared/api/rtkApi';
import { Profile } from '@/entities/Profile';

interface GetProfileRatingArg {
    userId: string;
    profileId?: string;
}

interface RateProfileArg extends GetProfileRatingArg {
    rate: number;
    feedback?: string;
}

export const profileRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileRating: build.query<Profile[], GetProfileRatingArg>({
            query: ({ profileId, userId }) => ({
                url: '/profile-ratings',
                params: {
                    profileId,
                    userId,
                },
            }),
        }),
        rateProfile: build.mutation<void, RateProfileArg>({
            query: (arg) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const { useGetProfileRatingQuery, useRateProfileMutation } =
    profileRatingApi;
