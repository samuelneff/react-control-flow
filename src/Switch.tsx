import { Children } from 'react';

interface Props {
  test: any;
  children: any;
}

export default function Switch({ test, children }: Props) {
  const matches = Children
    .toArray(children)
    .filter((child: any) => child.props.value == test);

  if (matches.length === 0) {
    return null;
  }

  if (matches.length > 1) {
    console.error(`<Switch /> statement matched multiple children: ${ test }`);
  }

  return matches[ 0 ];
};
