import type { FC, SVGProps } from 'react';
import type { AppRoutesProps } from '@/shared/types';

export interface NavbarItem extends Pick<AppRoutesProps, 'authOnly'> {
    path: string;
    title: string;
    Icon: FC<SVGProps<SVGSVGElement>>;
}
