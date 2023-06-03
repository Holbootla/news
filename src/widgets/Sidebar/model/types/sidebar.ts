import { FC, SVGProps } from 'react';

export interface ISidebarItem {
    path:string;
    text?:string;
    Icon?:FC<SVGProps<SVGSVGElement>>;
    authOnly?:boolean;
}
