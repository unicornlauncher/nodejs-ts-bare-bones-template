import { greetings } from '.';

describe('greetings', () => {
  it('should greet a given name', () => {
    expect(greetings('Kaio')).toEqual('Hello, Kaio');
  });
});
