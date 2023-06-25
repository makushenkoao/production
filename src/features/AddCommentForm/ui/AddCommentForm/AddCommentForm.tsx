import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './AddCommentForm.module.scss';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import {
    getAddCommentFormText,
    getAddCommentFormError,
    getAddCommentFormIsLoading,
} from '../../model/selectors/addCommentsFormSelectors';

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    // TODO - loading and error
    const error = useSelector(getAddCommentFormError);
    const isLoading = useSelector(getAddCommentFormIsLoading);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((v: string) => {
        dispatch(addCommentFormActions.setText(v));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div
                className={classNames(cls.AddCommentForm, {}, [className])}
            >
                <Input
                    className={cls.input}
                    value={text}
                    onChange={onCommentTextChange}
                    placeholder={t('Введіть коментар')}
                />
                <Button onClick={onSendHandler}>{t('Відправити')}</Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
