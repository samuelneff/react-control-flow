import * as React from 'react';
import { StatelessComponent } from 'react';

interface Props {
    test: boolean;
    children: any;
}

const If:StatelessComponent<Props> = ({ test, children }) =>
    test && children != undefined
        ? children
        : null;

export default If;
