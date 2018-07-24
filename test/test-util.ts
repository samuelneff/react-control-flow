import { renderToStaticMarkup } from 'react-dom/server';

/**
 * Given a React component, renders it and checks it against expected html output
 * @param message
 * @param component
 * @param expected
 */
export function testHtml(message:string, component:any, expected:string) {
    test(
        message,
        () =>
            {
                const actual = renderToStaticMarkup(component);
                expect(actual).toEqual(expected);
            });
}
