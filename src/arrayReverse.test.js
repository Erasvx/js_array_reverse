'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {});

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse(['Mate', 'Academy'])).toEqual(['ymed', 'acAetaM']);
  });

  it(`should work with symbols and numbers`, () => {
    expect(arrayReverse(['I', '@m', 'here', 'to', 'ch€ck'])).toEqual([
      'k',
      'c€',
      'hcote',
      're',
      'eh@mI',
    ]);
  });

  it(`should respect the amount of letters in words`, () => {
    expect(arrayReverse(['Good', 'sentence', 'to', 'reverse'])).toEqual([
      'esre',
      'verotecn',
      'et',
      'nesdoog',
    ]);
  });
});
