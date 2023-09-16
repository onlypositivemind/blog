import { FC, SVGProps } from 'react';

export interface NavbarItemType {
    path: string;
    title: string;
    Icon: FC<SVGProps<SVGSVGElement>>;
}
