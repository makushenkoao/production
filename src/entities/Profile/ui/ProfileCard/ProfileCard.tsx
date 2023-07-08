import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/deprecated/Text';
import { Input } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { CountrySelect, Country } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

type onChangeInput = (v?: string) => void;

interface ProfileCardProps {
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
    const {
        className,
        data,
        isLoading,
        error,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
        readonly,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <HStack
                max
                justify="center"
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack
                max
                justify="center"
                className={classNames(cls.ProfileCard, {}, [
                    className,
                    cls.error,
                ])}
            >
                <Text
                    title={t(
                        'Сталася якась помилка під час завантаження сторінки',
                    )}
                    theme={TextTheme.ERROR}
                    text={t('Спробуйте оновити сторінку')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            gap="16"
            align="normal"
            max
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <Avatar
                    src={data?.avatar}
                    alt={t('Ваша фотографія')}
                    rounded
                />
            )}
            <Input
                value={data?.firstname}
                placeholder={t("Ваше ім'я")}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваше прізвище')}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш вік')}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('Ваше місто')}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t("Ваше ім'я користувача")}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Ваше посилання на аватар')}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
