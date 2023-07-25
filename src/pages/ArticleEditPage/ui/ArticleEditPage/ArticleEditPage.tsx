import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { CreateArticle } from '../CreateArticle/CreateArticle';
import { EditArticle } from '../EditArticle/EditArticle';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = (
    props: ArticleEditPageProps,
) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit ? <EditArticle /> : <CreateArticle />}
        </Page>
    );
};

export default memo(ArticleEditPage);
