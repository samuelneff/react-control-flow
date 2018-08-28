import * as React from 'react';
import { StatelessComponent } from 'react';

interface Props
{
    [key: string]: any;
    items: any[];
    as?: string;
    spread?: boolean;
    keyGen?: string | ((item: any, index: number) => string);
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
        const {
          items,
          as = 'item',
          spread = false,
          keyGen = undefined,
          component,
          ...childProps} = props;

        if (items == null) {
            return null;
        }

        if (!Array.isArray(items))
        {
            console.error('Attempt to iterate of non-array: ', items, new Error().stack);
            return null;
        }

        const keyGenImpl = typeof keyGen === 'string'
          ? (item: any, index: number) => item[keyGen]
          : typeof keyGen === 'function'
            ? keyGen
            : (item: any, index: number) => index;

        return items.map(
            (item, index) =>
                React.createElement(
                    component,
                    {
                        key: keyGenImpl(item, index),
                        index,
                        ...(spread ? item : {[as]: item}),
                        ...childProps
                    })
        ) as any;
    };

export default ForEach;
