import { FC, SVGProps } from 'react';
import { classNames } from '@/shared/lib';
import classes from './SelectArticlesView.module.scss';
import GridIcon from '@/shared/assets/icons/grid-icon.svg';
import ListIcon from '@/shared/assets/icons/list-icon.svg';
import { ArticleListView } from '@/entities/Article';
import { AppButton, AppButtonVariants, Icon } from '@/shared/ui';

const viewTypes: {type: ArticleListView, icon: FC<SVGProps<SVGSVGElement>>}[] = [
    { type: 'list', icon: ListIcon },
    { type: 'grid', icon: GridIcon },
];

interface SelectArticlesViewProps {
    className?:string;
    view: ArticleListView;
    onChange?(view:ArticleListView):void;
}

export const SelectArticlesView = ({ className, view, onChange }:SelectArticlesViewProps) => (
    <div
        data-testid="SelectArticlesView"
        className={classNames(classes.SelectArticlesView, {}, [className])}
    >
        {viewTypes.map((viewType) => (
            <AppButton
                onClick={() => onChange(viewType.type)}
                variant={AppButtonVariants.SECONDARY}
                key={viewType.type}
                className={classNames(classes.btn, { [classes.selected]: view === viewType.type }, [])}
            >
                <Icon
                    Svg={viewType.icon}
                    size="s"
                />
            </AppButton>
        ))}
    </div>
);
