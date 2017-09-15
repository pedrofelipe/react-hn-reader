import getDomain from './getDomain';

it('properly extract a URL', () => {
  expect(getDomain('https://news.ycombinator.com/news')).toEqual('ycombinator.com');
  expect(getDomain('https://example.com.br')).toEqual('example.com.br');
});
