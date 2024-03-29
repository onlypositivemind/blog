import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { DateTimeFormatOptions, I18nNamespace } from '@/shared/consts';
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components';
import { useAppDispatch, useAppEffect, useLanguage } from '@/shared/lib/hooks';
import { dateTimeFormat, exhaustiveCheck } from '@/shared/lib/utils';
import { AppIcon, Avatar, HStack, VStack } from '@/shared/ui';
import { getArticle } from '../../api/getArticle';
import {
    selectArticleData,
    selectArticleErrorMessage,
    selectArticleIsLoading,
} from '../../model/selectors';
import { articleReducer } from '../../model/slice';
import type { ArticleBlock } from '../../model/types/articleBlock';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { ArticleSkeleton } from './ArticleSkeleton';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import s from './Article.module.scss';

interface ArticleProps {
    id: string;
    className?: string;
}

const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case 'code':
            return <ArticleCodeBlock key={block.id} block={block} />;

        case 'image':
            return <ArticleImageBlock key={block.id} block={block} />;

        case 'text':
            return <ArticleTextBlock key={block.id} block={block} />;

        default:
            exhaustiveCheck(block);
    }
};

const ArticleComponent = ({ id, className }: ArticleProps) => {
    const { t } = useTranslation(I18nNamespace.ARTICLE);
    const { currentLanguage } = useLanguage();
    const dispatch = useAppDispatch();
    const article = useSelector(selectArticleData);
    const isLoading = useSelector(selectArticleIsLoading);
    const errorMessage = useSelector(selectArticleErrorMessage);

    useAppEffect(() => {
        dispatch(getArticle(id));
    }, [id]);

    if (errorMessage) {
        return <p className={s.errorMessage}>{t(errorMessage)}</p>;
    }

    return (
        <VStack as='article' className={className}>
            {isLoading || !article ? (
                <ArticleSkeleton />
            ) : (
                <>
                    <HStack align='center' justify='center' gap={16} className='mb-6'>
                        <Avatar
                            src={article.image}
                            size={160}
                            alt={`Image of an article about ${article.title}`}
                        />
                        <VStack>
                            <VStack gap={4} className={s.title}>
                                <h1>{article.title}</h1>
                                <p>{article.subtitle}</p>
                            </VStack>
                            <VStack gap={4}>
                                <HStack align='center' gap={4}>
                                    <AppIcon Icon={CalendarIcon} />
                                    <time dateTime={article.createdAt}>
                                        {dateTimeFormat({
                                            date: article.createdAt,
                                            lang: currentLanguage,
                                            options: DateTimeFormatOptions.FULL_LONG,
                                        })}
                                    </time>
                                </HStack>
                                <HStack align='center' gap={4}>
                                    <AppIcon Icon={EyeIcon} />
                                    <span>{article.views}</span>
                                </HStack>
                            </VStack>
                        </VStack>
                    </HStack>
                    <VStack gap={32}>{article.blocks.map(renderBlock)}</VStack>
                </>
            )}
        </VStack>
    );
};

const reducers: ReducersList = { article: articleReducer };

export const Article = (props: ArticleProps) => (
    <DynamicModuleLoader reducers={reducers}>
        <ArticleComponent {...props} />
    </DynamicModuleLoader>
);
