import * as React from 'react';
import { StatelessComponent } from 'react';

interface Props {
    children: any;
}
const Case:StatelessComponent<Props> = ( { children }) => children;

export default Case;
