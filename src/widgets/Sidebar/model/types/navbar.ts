import { FC, SVGProps } from 'react';
import { AppRoutesProps } from '@/shared/types/router';

export interface NavbarItemType extends Pick<AppRoutesProps, 'authOnly'> {
    path: string;
    title: string;
    Icon: FC<SVGProps<SVGSVGElement>>;
}
