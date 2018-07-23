import React, { StatelessComponent } from 'react';

interface Props {
    test: boolean;
    children: any;
}

const If:StatelessComponent<Props> = ({ test, children }) =>
    test
        ? children
        : null;

export default If;
