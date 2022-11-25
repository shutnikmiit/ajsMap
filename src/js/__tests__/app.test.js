import { error } from '../app';

test('код ошибки существует', () => {
  expect(error.translate(404)).toBe('Not Found');
});

test('неизвестный код ошибки', () => {
  expect(error.translate(601)).toBe('Unknown Error');
});
