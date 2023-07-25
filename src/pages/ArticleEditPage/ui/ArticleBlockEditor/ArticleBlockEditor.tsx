import React, { FC, Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import AddIcon from '@/shared/assets/icons/create.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import DeleteIcon from '@/shared/assets/icons/delete.svg';

interface ArticleBlockEditorProps {
    index: number;
    block: any;
    updateBlock: (index: number, block: any) => void;
    onDeleteBlock: (index: number) => void;
}

export const ArticleBlockEditor: FC<ArticleBlockEditorProps> = ({
    index,
    block,
    updateBlock,
    onDeleteBlock,
}) => {
    const { t } = useTranslation();
    const [paragraphs, setParagraphs] = useState<string[]>(
        block.paragraphs || [],
    );

    const handleTitleChange = (v: string) => {
        updateBlock(index, { ...block, title: v });
    };

    const handleParagraphChange = (paragraphIndex: number, v: string) => {
        const updatedParagraphs = [...paragraphs];
        updatedParagraphs[paragraphIndex] = v;
        setParagraphs(updatedParagraphs);
        updateBlock(index, { ...block, paragraphs: updatedParagraphs });
    };

    const handleImageChange = (v: string) => {
        updateBlock(index, { ...block, src: v });
    };

    const handleNameChange = (v: string) => {
        updateBlock(index, { ...block, title: v });
    };

    const handleCodeChange = (v: string) => {
        updateBlock(index, { ...block, code: v });
    };

    const onAddParagraph = () => {
        setParagraphs((prevState) => [...prevState, '']);
    };

    return (
        <VStack
            gap="16"
            max
        >
            {block.type === 'TEXT' && (
                <>
                    <HStack justify="between" max>
                        <Text title={t('Блок тексту')} />
                        <Icon
                            svg={DeleteIcon}
                            clickable
                            onClick={() => onDeleteBlock(index)}
                        />
                    </HStack>
                    <Input
                        value={block.title || ''}
                        onChange={handleTitleChange}
                        placeholder={t('Заголовок')}
                    />
                    {paragraphs.map((paragraph, paragraphIndex) => (
                        <Input
                            key={paragraphIndex}
                            value={paragraph}
                            onChange={(v) =>
                                handleParagraphChange(paragraphIndex, v)
                            }
                            placeholder={t('Параграф')}
                        />
                    ))}
                    <HStack gap="8">
                        <Icon
                            svg={AddIcon}
                            width={24}
                            height={24}
                            clickable
                            onClick={onAddParagraph}
                        />
                        <Text text={t('Додати параграф')} />
                    </HStack>
                </>
            )}
            {block.type === 'IMAGE' && (
                <>
                    <HStack justify="between" max>
                        <Text title={t('Блок зображення')} />
                        <Icon
                            svg={DeleteIcon}
                            clickable
                            onClick={() => onDeleteBlock(index)}
                        />
                    </HStack>
                    <Input
                        type="text"
                        value={block.title || ''}
                        onChange={handleNameChange}
                        placeholder={t('Заголовок')}
                    />
                    <Input
                        type="text"
                        value={block.src || ''}
                        onChange={handleImageChange}
                        placeholder={t('Посилання на зображення')}
                    />
                </>
            )}
            {block.type === 'CODE' && (
                <>
                    <HStack justify="between" max>
                        <Text title={t('Блок коду')} />
                        <Icon
                            svg={DeleteIcon}
                            clickable
                            onClick={() => onDeleteBlock(index)}
                        />
                    </HStack>
                    <Input
                        value={block.code || ''}
                        onChange={handleCodeChange}
                        placeholder={t('Код')}
                    />
                </>
            )}
        </VStack>
    );
};
