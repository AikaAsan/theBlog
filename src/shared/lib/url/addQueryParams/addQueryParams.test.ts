import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', function () {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });
    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            secondTest: '2',
        });
        expect(params).toBe('?test=value&secondTest=2');
    });
    test('test with one undefined param', () => {
        const params = getQueryParams({
            test: 'value',
            secondTest: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
