import * as React from 'react';
import { testHtml } from './test-util';
import { If } from '../src';

// for testing, we need a reference that allows us to violate the Props contract
const IfAny:any = If;

describe('<If />', () => {

    testHtml(
        'empty',

        (
            <IfAny />
        ),

        '');


    testHtml(

        'empty positive',

        (
            <IfAny test={ true } />
        ),

        '');


    testHtml(

        'empty negative',

        (
            <IfAny test={ false } />
        ),

        '');


    testHtml(

        'string positive',

        (
            <If test={true}>
                This is some text
            </If>
        ),

        'This is some text');


    testHtml(

        'string negative',

        (
            <If test={false}>
                This is some text
            </If>
        ),

        '');


    testHtml(

        'number positive',

        (
            <If test={true}>
                10
            </If>
        ),

        '10');


    testHtml(

        'html positive',

        (
            <If test={true}>
                <span>This is some html</span>
            </If>
        ),

        '<span>This is some html</span>');


    testHtml(

        'html in and out positive',

        (
            <div>
                <If test={true}>
                    <span>This is some html</span>
                </If>
            </div>
        ),

        '<div><span>This is some html</span></div>');


    testHtml(

        'html in and out negative',

        (
            <div>
                <If test={ false }>
                    <span>This is some html</span>
                </If>
            </div>
        ),

        '<div></div>');


    testHtml(

        'multiple nodes positive',

        (
            <If test={true}>
                <span>This is one</span>
                <span>This is two</span>
            </If>
        ),

        '<span>This is one</span><span>This is two</span>');


    testHtml(

        'array positive',

        (
            <If test={true}>
                {
                    [
                        <span key="1">This is one</span>,
                        <span key="2">This is two</span>
                    ]
                }
            </If>
        ),

        '<span>This is one</span><span>This is two</span>');


    testHtml(

        'fragment positive',

        (
            <If test={true}>
                <>
                        <span>This is a</span>
                        <span>This is b</span>
                </>
            </If>
        ),

        '<span>This is a</span><span>This is b</span>');
});
