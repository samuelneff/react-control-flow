import * as React from 'react';
import { StatelessComponent } from 'react';

interface Props
{
    [key: string]: any;
    items: any[];
    as?: string;
    component:
        keyof React.ReactHTML |
        keyof React.ReactSVG |
        string |
        React.SFC<any> |
        React.ClassType<any, React.ClassicComponent<any, React.ComponentState>, React.ClassicComponentClass<any>> |
        React.ClassType<any, any, any> |
        React.ComponentClass<any>;
}

const ForEach: StatelessComponent<Props & any> =
    (props:Props) =>
    {
        const {items, as = 'item', component, ...childProps} = props;

        if (items == null) {
            return null;
        }

        if (!Array.isArray(items))
        {
            console.error('Attempt to iterate of non-array: ', items, new Error().stack);
            return null;
        }

        return items.map(
            (item, index) =>
                React.createElement(
                    component,
                    {
                        key: (item && item.key) || index,
                        index,
                        [as]: item,
                        ...childProps
                    })
        ) as any;
    };

export default ForEach;
