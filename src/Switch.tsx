import * as React from 'react';
import { StatelessComponent } from 'react';

interface Props {
    test: any;
    children: any;
}

const Switch:StatelessComponent<Props> = ( { test, children }) => {
    const matches = React.Children
                         .toArray(children)
                         .filter((child:any) => child.props.value == test);
    if (matches.length === 0) {
        return null;
    }

    if (matches.length > 1) {
        console.error(`<Switch /> statement matched multiple children: ${test}`);
    }

    return matches[0] as any;
};

export default Switch;
