'use strict';

var assert = require('assert');

var TimSort = require('../index.js');
var ArrayGenerator = require('./array-generator.js');

var lengths = [10, 100, 1000, 10000];
var repetitions = 10;

function numberCompare(a, b) {
  return a - b;
}

describe('Sort a Random Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.randomInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort a Descending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.descendingInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort an Ascending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.ascendingInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort an Ascending Array with 3 Random Exchanges', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.ascending3RandomExchangesInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort an Ascending Array with 10 Random Elements at Last', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.ascending10RandomEndInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort an Array of all Equal Elements', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.allEqualInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort an Array with Many Duplicates', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.manyDuplicateInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort an Array with Some Duplicates', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.someDuplicateInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1, numberCompare);
        arr2.sort(numberCompare);

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Sort Subrange of a Random Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.randomInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, numberCompare, lo, hi);
        arr2.sort(numberCompare);

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe('Sort Subrange of a Descending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.descendingInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, numberCompare, lo, hi);
        arr2.sort(numberCompare);

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe('Sort Subrange of an Ascending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.ascendingInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, numberCompare, lo, hi);
        arr2.sort(numberCompare);

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe(
  'Sort Subrange of an Ascending Array with 3 Random Exchanges',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var lo = parseInt(length / 4);
          var hi = length - lo;
          var arr1 = ArrayGenerator.ascending3RandomExchangesInt(length);
          var arr2 = arr1.slice(lo, hi);

          TimSort.sort(arr1, numberCompare, lo, hi);
          arr2.sort(numberCompare);

          var j = 0;
          while (lo + j < hi) {
            assert.equal(arr1[lo + j], arr2[j]);
            j++;
          }
        }
      });

    });
  });

describe(
  'Sort Subrange of an Ascending Array with 10 Random Elements at Last',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var lo = parseInt(length / 4);
          var hi = length - lo;
          var arr1 = ArrayGenerator.ascending10RandomEndInt(length);
          var arr2 = arr1.slice(lo, hi);

          TimSort.sort(arr1, numberCompare, lo, hi);
          arr2.sort(numberCompare);

          var j = 0;
          while (lo + j < hi) {
            assert.equal(arr1[lo + j], arr2[j]);
            j++;
          }
        }
      });

    });
  });

describe('Sort Subrange of an Array of all Equal Elements', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.allEqualInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, numberCompare, lo, hi);
        arr2.sort(numberCompare);

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe('Sort Subrange of an Array with Many Duplicates', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.manyDuplicateInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, numberCompare, lo, hi);
        arr2.sort(numberCompare);

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe('Sort Subrange of an Array with Some Duplicates', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.someDuplicateInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, numberCompare, lo, hi);
        arr2.sort(numberCompare);

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe('Lexicographically Sort a Random Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.randomInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1);
        arr2.sort();

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Lexicographically Sort a Descending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.descendingInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1);
        arr2.sort();

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Lexicographically Sort an Ascending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.ascendingInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1);
        arr2.sort();

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe(
  'Lexicographically Sort an Ascending Array with 3 Random Exchanges',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var arr1 = ArrayGenerator.ascending3RandomExchangesInt(length);
          var arr2 = arr1.slice();

          TimSort.sort(arr1);
          arr2.sort();

          assert.deepEqual(arr1, arr2);
        }
      });

    });
  });

describe(
  'Lexicographically Sort an Ascending Array with 10 Random Elements at Last',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var arr1 = ArrayGenerator.ascending10RandomEndInt(length);
          var arr2 = arr1.slice();

          TimSort.sort(arr1);
          arr2.sort();

          assert.deepEqual(arr1, arr2);
        }
      });

    });
  });

describe('Lexicographically Sort an Array of all Equal Elements', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.allEqualInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1);
        arr2.sort();

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Lexicographically Sort an Array with Many Duplicates', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.manyDuplicateInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1);
        arr2.sort();

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Lexicographically Sort an Array with Some Duplicates', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var arr1 = ArrayGenerator.someDuplicateInt(length);
        var arr2 = arr1.slice();

        TimSort.sort(arr1);
        arr2.sort();

        assert.deepEqual(arr1, arr2);
      }
    });

  });
});

describe('Lexicographically Sort Subrange of a Random Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.randomInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, lo, hi);
        arr2.sort();

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe('Lexicographically Sort Subrange of a Descending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.descendingInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, lo, hi);
        arr2.sort();

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe('Lexicographically Sort Subrange of an Ascending Array', function () {
  lengths.forEach(function (length) {

    it('Should sort a size ' + length + ' array', function () {
      for (var i = 0; i < repetitions; i++) {
        var lo = parseInt(length / 4);
        var hi = length - lo;
        var arr1 = ArrayGenerator.ascendingInt(length);
        var arr2 = arr1.slice(lo, hi);

        TimSort.sort(arr1, lo, hi);
        arr2.sort();

        var j = 0;
        while (lo + j < hi) {
          assert.equal(arr1[lo + j], arr2[j]);
          j++;
        }
      }
    });

  });
});

describe(
  'Lexicographically Sort Subrange of an Ascending ' +
  'Array with 3 Random Exchanges',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var lo = parseInt(length / 4);
          var hi = length - lo;
          var arr1 = ArrayGenerator.ascending3RandomExchangesInt(length);
          var arr2 = arr1.slice(lo, hi);

          TimSort.sort(arr1, lo, hi);
          arr2.sort();

          var j = 0;
          while (lo + j < hi) {
            assert.equal(arr1[lo + j], arr2[j]);
            j++;
          }
        }
      });

    });
  });

describe(
  'Lexicographically Sort Subrange of an Ascending Array ' +
  'with 10 Random Elements at Last',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var lo = parseInt(length / 4);
          var hi = length - lo;
          var arr1 = ArrayGenerator.ascending10RandomEndInt(length);
          var arr2 = arr1.slice(lo, hi);

          TimSort.sort(arr1, lo, hi);
          arr2.sort();

          var j = 0;
          while (lo + j < hi) {
            assert.equal(arr1[lo + j], arr2[j]);
            j++;
          }
        }
      });

    });
  });

describe(
  'Lexicographically Sort Subrange of an Array of all Equal Elements',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var lo = parseInt(length / 4);
          var hi = length - lo;
          var arr1 = ArrayGenerator.allEqualInt(length);
          var arr2 = arr1.slice(lo, hi);

          TimSort.sort(arr1, lo, hi);
          arr2.sort();

          var j = 0;
          while (lo + j < hi) {
            assert.equal(arr1[lo + j], arr2[j]);
            j++;
          }
        }
      });

    });
  });

describe(
  'Lexicographically Sort Subrange of an Array with Many Duplicates',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var lo = parseInt(length / 4);
          var hi = length - lo;
          var arr1 = ArrayGenerator.manyDuplicateInt(length);
          var arr2 = arr1.slice(lo, hi);

          TimSort.sort(arr1, lo, hi);
          arr2.sort();

          var j = 0;
          while (lo + j < hi) {
            assert.equal(arr1[lo + j], arr2[j]);
            j++;
          }
        }
      });

    });
  });

describe(
  'Lexicographically Sort Subrange of an Array with Some Duplicates',
  function () {
    lengths.forEach(function (length) {

      it('Should sort a size ' + length + ' array', function () {
        for (var i = 0; i < repetitions; i++) {
          var lo = parseInt(length / 4);
          var hi = length - lo;
          var arr1 = ArrayGenerator.someDuplicateInt(length);
          var arr2 = arr1.slice(lo, hi);

          TimSort.sort(arr1, lo, hi);
          arr2.sort();

          var j = 0;
          while (lo + j < hi) {
            assert.equal(arr1[lo + j], arr2[j]);
            j++;
          }
        }
      });

    });
  });
