import * as React from 'react';
import { StatelessComponent } from 'react';

interface Props {
    value: any;
    children: any;
}
const Case:StatelessComponent<Props> = ( { children }) => children === undefined ? null : children;

export default Case;
