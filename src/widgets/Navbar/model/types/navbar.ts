import React from 'react';

export interface NavbarItemType {
    path: string;
    title: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}
