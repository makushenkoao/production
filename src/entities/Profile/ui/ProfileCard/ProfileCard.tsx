import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { Profile } from '../../model/types/profile';
import { ToggleFeatures } from '@/shared/lib/features';
import { ProfileCardDeprecated } from '../ProfileCardDeprecated';
import { ProfileCardRedesigned } from '../ProfileCardRedesigned';

type onChangeInput = (v?: string) => void;

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    onChangeFirstname?: onChangeInput;
    onChangeLastname?: onChangeInput;
    onChangeCity?: onChangeInput;
    onChangeAge?: onChangeInput;
    onChangeUsername?: onChangeInput;
    onChangeAvatar?: onChangeInput;
    onChangeCurrency?: (v: Currency) => void;
    onChangeCountry?: (v: Country) => void;
    readonly?: boolean;
}

export const ProfileCard = (props: ProfileCardProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ProfileCardRedesigned {...props} />}
            off={<ProfileCardDeprecated {...props} />}
        />
    );
};
