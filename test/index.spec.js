const mock = require('mock-require');
const assert = require('chai').assert;

const { init } = require('../index');

mock('googleapis', {
  google: {
    calendar: () => ({
      calendarList: {
        list: () => {
          return Promise.resolve({
            data: {
              foo: 'bar'
            }
          });
        }
      }
    })
  }
});

describe('test', () => {
  it('should call the api and console the output', async () => {
    const result = await init();
    assert.isTrue(result.foo === 'bar');
  });
});