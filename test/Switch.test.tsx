import * as React from 'react';
import { testHtml } from './test-util';
import { Case, Switch } from '../src';
import { describe } from '@jest/globals';

// for testing, we need a reference that allows us to violate the Props contract
const CaseAny: any = Case;
const SwitchAny: any = Switch;

describe('<Switch />', () => {

  testHtml(
    'Empty switch',
    (
      <SwitchAny />
    ),
    '');

  testHtml(
    'Empty case',
    (
      <CaseAny />
    ),
    '');

  testHtml(
    'Empty switch/case',
    (
      <SwitchAny>
        <CaseAny />
        <CaseAny />
      </SwitchAny>
    ),
    '');

  testHtml(
    'Strings tests, string value',
    (
      <Switch test={'1'}>
        <Case value={'1'}>
          One
        </Case>
        <Case value={'2'}>
          Two
        </Case>
      </Switch>
    ),
    'One');

  testHtml(
    'Numeric tests, string value',
    (
      <Switch test={1}>
        <Case value={1}>
          One
        </Case>
        <Case value={2}>
          Two
        </Case>
      </Switch>
    ),
    'One');

  testHtml(
    'Numeric tests, second string value',
    (
      <Switch test={2}>
        <Case value={1}>
          One
        </Case>
        <Case value={2}>
          Two
        </Case>
      </Switch>
    ),
    'Two');

  testHtml(
    'Numeric tests, no matching case',
    (
      <Switch test={0}>
        <Case value={1}>
          One
        </Case>
        <Case value={2}>
          Two
        </Case>
      </Switch>
    ),
    '');

  testHtml(
    'Numeric tests, multiple matching case',
    (
      <Switch test={1}>
        <Case value={1}>
          One
        </Case>
        <Case value={1}>
          Two
        </Case>
      </Switch>
    ),
    'One');

  testHtml(
    'Complex children',
    (
      <Switch test={3}>
        <Case value={1}>
          <div>
            <span>One</span>
          </div>
        </Case>
        <Case value={2}>
          <div>
            <span>Two</span>
          </div>
        </Case>
        <Case value={3}>
          <div>
            <span>Three</span>
          </div>
        </Case>
      </Switch>
    ),
    '<div><span>Three</span></div>');
});
