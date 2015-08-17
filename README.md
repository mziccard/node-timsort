# Node-TimSort: Fast Sorting for Node.js

[![Build Status](https://travis-ci.org/mziccard/node-timsort.svg?branch=master)](https://travis-ci.org/mziccard/node-timsort)
[![npm version](https://badge.fury.io/js/timsort.svg)](https://www.npmjs.com/package/timsort)

An adaptive and **stable** sort algorithm based on merging that requires fewer than nlog(n) 
comparisons when run on partially sorted arrays. The algorithm uses O(n) memory and still runs in O(nlogn) 
(worst case) on random arrays.  
This implementation is based on the original 
[TimSort](http://svn.python.org/projects/python/trunk/Objects/listsort.txt) developed 
by Tim Peters for Python's lists (code [here](http://svn.python.org/projects/python/trunk/Objects/listobject.c)).
TimSort has been also adopted in Java starting from version 7.

## Usage

Install the package with npm:
```
npm install --save timsort
```
And use it:
```javascript
var TimSort = require('timsort');

var arr = [...];
TimSort.sort(arr);
```
Thanks to [@novacrazy](https://github.com/novacrazy) you can also install the package with bower by running:
```
bower install timsort
```
As `array.sort()` by default the `timsort` module sorts according to 
lexicographical order. 
You can also provide your own compare function (to sort any object) as:
```javascript
function numberCompare(a,b) {
    return a-b;
}

var arr = [...];
var TimSort = require('timsort');
TimSort.sort(arr, numberCompare);
```
You can also sort only a specific subrange of the array:
```javascript
TimSort.sort(arr, 5, 10);
TimSort.sort(arr, numberCompare, 5, 10);
```

## Performance

A benchmark is provided in `benchmark/index.js`. It compares the `timsort` module against 
the default `array.sort` method in the numerical sorting of different types of integer array 
(as described [here](http://svn.python.org/projects/python/trunk/Objects/listsort.txt)):

-  *Random array*
-  *Descending array*
-  *Ascending array*
-  *Ascending array with 3 random exchanges*
-  *Ascending array with 10 random numbers in the end*
-  *Array of equal elements*
-  *Random Array with many duplicates*
-  *Random Array with some duplicates*

For any of the array types the sorting is repeated several times and for 
different array sizes, average execution time is then printed. 
I run the benchmark on Node v0.12.7 (both pre-compiled and compiled from source, 
results are very similar), obtaining the following values:

<table>
  <tr>
    <th></th><th></th>
    <th colspan="2">Execution Time (ns)</th>
    <th rowspan="2">Speedup</th>
  </tr>
  <tr>
    <th>Array Type</th>
    <th>Length</th>
    <th>TimSort.sort</th>
    <th>array.sort</th>
  </tr>
<tbody>
 <tr>
  <td rowspan="4">Random</td><td>10</td><td>958</td><td>4195</td><td>4.38</td>
 </tr>
 <tr>
  <td>100</td><td>10969</td><td>49656</td><td>4.53</td>
 </tr>
 <tr>
  <td>1000</td><td>146410</td><td>540254</td><td>3.69</td>
 </tr>
 <tr>
  <td>10000</td><td>1754770</td><td>6143806</td><td>3.50</td>
 </tr>
 <tr>
  <td rowspan="4">Descending</td><td>10</td><td>642</td><td>2414</td><td>3.76</td>
 </tr>
 <tr>
  <td>100</td><td>1747</td><td>20710</td><td>11.85</td>
</tr>
 <tr>
  <td>1000</td><td>8053</td><td>351682</td><td>43.67</td>
 </tr>
 <tr>
  <td>10000</td><td>69162</td><td>5106434</td><td>73.83</td>
 </tr>
 <tr>
  <td rowspan="4">Ascending</td><td>10</td><td>706</td><td>1471</td><td>2.08</td>
 </tr>
 <tr>
  <td>100</td><td>1712</td><td>20289</td><td>11.85</td>
 </tr>
 <tr>
  <td>1000</td><td>8498</td><td>369125</td><td>43.43</td>
 </tr>
 <tr>
  <td>10000</td><td>59206</td><td>5333314</td><td>90.08</td>
 </tr>
 <tr>
  <td rowspan="4">Ascending + 3 Rand Exc</td> <td>10</td> <td>918</td> <td>1886</td> <td>2.05</td>
 </tr>
 <tr>
  <td>100</td> <td>3316</td> <td>21581</td> <td>6.51</td>
 </tr>
 <tr>
  <td>1000</td> <td>11432</td> <td>380742</td> <td>33.30</td>
 </tr>
 <tr>
  <td>10000</td> <td>83981</td> <td>5293251</td> <td>63.03</td>
 </tr>
 <tr>
  <td rowspan="4">Ascending + 10 Rand End</td><td>10</td><td>1037</td><td>2154</td><td>2.08</td>
 </tr>
 <tr>
  <td>100</td><td>4779</td><td>22658</td><td>4.74</td>
 </tr>
 <tr>
  <td>1000</td><td>16608</td><td>352633</td><td>21.23</td>
 </tr>
 <tr>
  <td>10000</td><td>102818</td><td>5225330</td><td>50.82</td>
 </tr>
 <tr>
  <td rowspan="4">Equal Elements</td><td>10</td><td>740</td><td>1473</td><td>1.99</td>
 </tr>
 <tr>
  <td>100</td><td>1768</td><td>4576</td><td>2.59</td>
 </tr>
 <tr>
  <td>1000</td><td>6934</td><td>33676</td><td>4.86</td>
 </tr>
 <tr>
  <td>10000</td><td>57586</td><td>338154</td><td>5.87</td>
 </tr>
 <tr>
  <td rowspan="4">Many Repetitions</td><td>10</td><td>1044</td><td>2110</td><td>2.02</td>
 </tr>
 <tr>
  <td>100</td><td>12506</td><td>23391</td><td>1.87</td>
 </tr>
 <tr>
  <td>1000</td><td>184184</td><td>386896</td><td>2.10</td>
 </tr>
 <tr>
  <td>10000</td><td>2647209</td><td>5798097</td><td>2.19</td>
 </tr>
 <tr>
  <td rowspan="4">Some Repetitions</td><td>10</td><td>1075</td><td>2183</td><td>2.03</td>
 </tr>
 <tr>
  <td>100</td><td>12787</td><td>23654</td><td>1.85</td>
 </tr>
 <tr>
  <td>1000</td><td>177727</td><td>362135</td><td>2.04</td>
 </tr>
 <tr>
  <td>10000</td><td>2332444</td><td>5059351</td><td>2.17</td>
 </tr>
</tbody>
</table>

`TimSort.sort` **is faster** than `array.sort` on any of the tested array types. 
In general, the more ordered the array is the better `TimSort.sort` performs with respect to `array.sort` (up to 80 times faster on already sorted arrays). 
And also, the bigger the array the more we benefit from using 
the `timsort` module.  

These data strongly depend on Node.js version and the machine on which the benchmark is run. I strongly encourage you to run the benchmark on your own setup with:
```
npm run benchmark
```
Please also notice that:

-  This benchmark is far from exhaustive. Several cases are not considered 
and the results must be taken as partial
-  *inlining* is surely playing an active role in `timsort` module's good performance
-  A more accurate comparison of the algorithms would require implementing `array.sort` in pure javascript 
and counting element comparisons
-  `array.sort` will probably still be faster at lexicographically sorting 
arrays of numbers. In this case, the `timsort` module inefficiently converts 
values to strings inside the compare function and then compares the strings. 
`array.sort`, instead, uses a smarter and faster lexicographic 
comparison of numbers (will try to do something similar soon).

## Stability

TimSort is *stable* which means that equal items maintain their relative order 
after sorting. Stability is a desirable property for a sorting algorithm. 
Consider the following array of items with an height and a weight.
```javascript
[ 
  { height: 100, weight: 80 },
  { height: 90, weight: 90 },
  { height: 70, weight: 95 },
  { height: 100, weight: 100 },
  { height: 80, weight: 110 },
  { height: 110, weight: 115 },
  { height: 100, weight: 120 },
  { height: 70, weight: 125 },
  { height: 70, weight: 130 },
  { height: 100, weight: 135 },
  { height: 75, weight: 140 },
  { height: 70, weight: 140 } 
]
```
Items are already sorted by `weight`. Sorting the array 
according to the item's `height` with the `timsort` module 
results in the following array:
```javascript
[ 
  { height: 70, weight: 95 },
  { height: 70, weight: 125 },
  { height: 70, weight: 130 },
  { height: 70, weight: 140 },
  { height: 75, weight: 140 },
  { height: 80, weight: 110 },
  { height: 90, weight: 90 },
  { height: 100, weight: 80 },
  { height: 100, weight: 100 },
  { height: 100, weight: 120 },
  { height: 100, weight: 135 },
  { height: 110, weight: 115 } 
]
```
Items with the same  `height` are still sorted by `weight` which means they preserved their relative order.

`array.sort`, instead, is not guarranteed to be *stable*. In Node v0.12.7 
sorting the previous array by `height` with `array.sort` results in:
```javascript
[ 
  { height: 70, weight: 140 },
  { height: 70, weight: 95 },
  { height: 70, weight: 125 },
  { height: 70, weight: 130 },
  { height: 75, weight: 140 },
  { height: 80, weight: 110 },
  { height: 90, weight: 90 },
  { height: 100, weight: 100 },
  { height: 100, weight: 80 },
  { height: 100, weight: 135 },
  { height: 100, weight: 120 },
  { height: 110, weight: 115 } 
]
```
As you can see the sorting did not preserve `weight` ordering for items with the 
same `height`.