import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getUserAuthData } from '@/entities/User';
import { Article, ArticleBlock, ArticleType } from '@/entities/Article';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleBlockEditor } from '../ArticleBlockEditor/ArticleBlockEditor';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Button } from '@/shared/ui/redesigned/Button';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { createArticle } from '../../model/services/createArticle';
import AddIcon from '@/shared/assets/icons/create.svg';
import { getRouteArticleDetails } from '@/shared/const/router';

const articleTypes = [
    { content: ArticleType.COOKIE, value: ArticleType.COOKIE },
    { content: ArticleType.ECONOMICS, value: ArticleType.ECONOMICS },
    { content: ArticleType.SCIENCE, value: ArticleType.SCIENCE },
    { content: ArticleType.IT, value: ArticleType.IT },
];

export const CreateArticle = () => {
    const [type, setType] = useState<ArticleType>();
    const authData = useSelector(getUserAuthData);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [article, setArticle] = useState<Article>({
        id: Date.now().toString(),
        title: '',
        // TODO - delete ignore
        // @ts-ignore
        userId: authData.id,
        subtitle: '',
        img: '',
        type: [],
        createdAt: Date.now(),
        views: 0,
        blocks: [],
    });

    const addBlock = (type: any) => {
        let newBlock: ArticleBlock;
        if (type === 'IMAGE') {
            newBlock = {
                type,
                id: Date.now().toString(),
                src: '',
                title: '',
            };
        } else if (type === 'CODE') {
            newBlock = {
                type,
                id: Date.now().toString(),
                code: '',
            };
        } else if (type === 'TEXT') {
            newBlock = {
                type,
                id: Date.now().toString(),
                title: '',
                paragraphs: [],
            };
        } else return null;

        setArticle((prevArticle) => ({
            ...prevArticle,
            blocks: [...prevArticle.blocks, newBlock],
        }));
    };

    const updateBlock = (index: number, updatedBlock: ArticleBlock) => {
        setArticle((prevArticle) => {
            const updatedBlocks = [...prevArticle.blocks];
            updatedBlocks[index] = updatedBlock;
            return { ...prevArticle, blocks: updatedBlocks };
        });
    };

    const onChangeTitle = useCallback((v: string) => {
        setArticle((prevArticle) => ({ ...prevArticle, title: v }));
    }, []);

    const onChangeSubtitle = useCallback((v: string) => {
        setArticle((prevArticle) => ({ ...prevArticle, subtitle: v }));
    }, []);

    const onChangeImage = useCallback((v: string) => {
        setArticle((prevArticle) => ({ ...prevArticle, img: v }));
    }, []);

    const handleArticleTypeChange = useCallback(
        (selectedTypes: ArticleType) => {
            setType(selectedTypes);
            setArticle((prevArticle) => {
                if (prevArticle.type.includes(selectedTypes)) {
                    return prevArticle;
                }
                return {
                    ...prevArticle,
                    type: [...prevArticle.type, selectedTypes],
                };
            });
        },
        [],
    );

    const onDeleteBlock = useCallback((index: number) => {
        setArticle((prevArticle) => {
            const updatedBlocks = [...prevArticle.blocks];
            updatedBlocks.splice(index, 1); // Удаляем блок с указанным индексом
            return { ...prevArticle, blocks: updatedBlocks };
        });
    }, []);

    const onPostArticle = () => {
        dispatch(createArticle(article)).then(() => {
            navigate(getRouteArticleDetails(article.id));
        });
    };

    return (
        <VStack
            max
            gap="32"
        >
            <VStack
                gap="16"
                max
            >
                <Text title={t('Основна інформація')} />
                <Input
                    placeholder={t('Заголовок')}
                    onChange={onChangeTitle}
                />
                <Input
                    placeholder={t('Підзаголовок')}
                    onChange={onChangeSubtitle}
                />
                <Input
                    placeholder={t('Посилання на зображення')}
                    onChange={onChangeImage}
                />
                <HStack max>
                    <ListBox
                        defaultValue={t('Вкажіть тип статті')}
                        label={t('Вкажіть один або кілька типів статті')}
                        items={articleTypes}
                        value={type}
                        onChange={handleArticleTypeChange}
                    />
                    <Text text={article.type.join(' ')} />
                </HStack>
            </VStack>
            <VStack
                gap="16"
                max
            >
                {article.blocks.map((block, index) => (
                    <ArticleBlockEditor
                        key={block.id}
                        index={index}
                        block={block}
                        updateBlock={updateBlock}
                        onDeleteBlock={onDeleteBlock}
                    />
                ))}
            </VStack>
            <VStack
                gap="16"
                max
            >
                <Text title={t('Блоки детальної інформації')} />
                <VStack
                    gap="16"
                    max
                >
                    <HStack gap="8">
                        <Icon
                            svg={AddIcon}
                            width={24}
                            height={24}
                            clickable
                            onClick={() => addBlock('TEXT')}
                        />
                        <Text text={t('Додати блок тексту')} />
                    </HStack>
                    <HStack gap="8">
                        <Icon
                            svg={AddIcon}
                            width={24}
                            height={24}
                            clickable
                            onClick={() => addBlock('CODE')}
                        />
                        <Text text={t('Додати блок коду')} />
                    </HStack>
                    <HStack gap="8">
                        <Icon
                            svg={AddIcon}
                            width={24}
                            height={24}
                            clickable
                            onClick={() => addBlock('IMAGE')}
                        />
                        <Text text={t('Додати блок зображення')} />
                    </HStack>
                </VStack>
            </VStack>
            <HStack
                justify="end"
                max
            >
                <Button onClick={onPostArticle}>{t('Створити статтю')}</Button>
            </HStack>
        </VStack>
    );
};
