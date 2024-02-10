import { useSelector } from 'react-redux';
import type { ReducersList } from '@/shared/lib/components';
import { DynamicModuleLoader } from '@/shared/lib/components';
import { useAppDispatch, useAppEffect } from '@/shared/lib/hooks';
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

const reducers: ReducersList = { article: articleReducer };

interface ArticleProps {
    id: string;
    className?: string;
}

const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
        case 'CODE':
            return <ArticleCodeBlock key={block.id} block={block} />;

        case 'IMAGE':
            return <ArticleImageBlock key={block.id} block={block} />;

        case 'TEXT':
            return <ArticleTextBlock key={block.id} block={block} />;
    }
};

export const Article = ({ id, className }: ArticleProps) => {
    const dispatch = useAppDispatch();
    const article = useSelector(selectArticleData);
    const isLoading = useSelector(selectArticleIsLoading);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errorMessage = useSelector(selectArticleErrorMessage);

    useAppEffect(() => {
        dispatch(getArticle(id));
    }, [id]);

    if (isLoading) {
        return (
            <DynamicModuleLoader reducers={reducers}>
                <ArticleSkeleton />
            </DynamicModuleLoader>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack as='article' className={className}>
                <HStack align='center' justify='center' gap={16} className='mb-6'>
                    <Avatar src={article?.image} size={160} />
                    <VStack>
                        <HStack align='center' gap={4} className={s.title}>
                            <h1>{article?.title}</h1>
                            <span>{article?.subtitle}</span>
                        </HStack>
                        <HStack align='center' gap={12}>
                            <HStack align='center' gap={4}>
                                <AppIcon Icon={CalendarIcon} />
                                <span>{article?.createdAt}</span>
                            </HStack>
                            <HStack align='center' gap={4}>
                                <AppIcon Icon={EyeIcon} />
                                <span>{article?.views}</span>
                            </HStack>
                        </HStack>
                    </VStack>
                </HStack>
                <VStack gap={32}>{article?.blocks.map(renderBlock)}</VStack>
            </VStack>
        </DynamicModuleLoader>
    );
};
