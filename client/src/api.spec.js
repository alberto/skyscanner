/* eslint-env jest */
import { search } from './api';

describe('api.search', () => {

  beforeEach(function() {
    const mockJson = jest.fn().mockReturnValueOnce({itineraries: []});
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({ ok: true, json: mockJson })
    });
  });

  it('calls search endpoint with stringified query params', () => {
    search({foo: 'foo', bar: 'bar'});
    expect(global.fetch).toHaveBeenCalledWith("http://localhost:4000/api/search?foo=foo&bar=bar");
  });

  it('returns response as json', () => {
    expect.assertions(1);
    return expect(search({foo: 'foo', bar: 'bar'}))
      .resolves.toEqual({itineraries: []});
  });

  it('rejects on failed responses', () => {
    expect.assertions(1);
    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({ ok: false, statusText: "NOT OK" })
    });
    return expect(search({foo: 'foo', bar: 'bar'}))
      .rejects.toEqual(new Error("NOT OK"));
  });
});
