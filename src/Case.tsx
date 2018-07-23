import React, { StatelessComponent } from 'react';

interface Props {
    children: any;
}
const Case:StatelessComponent<Props> = ( { children }) => children;

export default Case;
