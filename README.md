# Node-TimSort: Fast Sorting for Node.js

An adaptive and **stable** sort algorithm based on merging that requires fewer than nlog(n) 
comparisons when run on partially sorted arrays. The algorithm uses O(n) memory and still runs in O(nlogn) 
(worst case) on random arrays.  
This implementation is based on the original 
[TimSort](http://svn.python.org/projects/python/trunk/Objects/listsort.txt) developed 
by Tim Peters for Python's lists (code [here](http://svn.python.org/projects/python/trunk/Objects/listobject.c)).
TimSort has been also adopted in Java starting from version 7.

## Usage

Install the package:
```
npm install --save timsort
```
And use it:
```javascript
var TimSort = require('timsort');

var arr = [...];
TimSort.sort(arr);
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
  <td rowspan="4">Random</td>
  <td>10</td><td>2374</td><td>4256</td><td>1.79</td>
</tr>
<tr>
  <td>100</td><td>12709</td><td>45903</td><td>3.61</td>
</tr>
<tr>
  <td>1000</td><td>134876</td><td>479581</td><td>3.56</td>
</tr>
<tr>
  <td>10000</td><td>1724563</td><td>6485514</td><td>3.76</td>
</tr>
<tr>
  <td rowspan="4">Descending</td>
  <td>10</td><td>1637</td><td>2869</td><td>1.75</td>
</tr>
<tr>
  <td>100</td><td>2631</td><td>21267</td><td>8.08</td>
</tr>
<tr>
  <td>1000</td><td>9330</td><td>352918</td><td>37.83</td>
</tr>
<tr>
  <td>10000</td><td>74009</td><td>5114658</td><td>69.11</td>
</tr>
<tr>
  <td rowspan="4">Ascending</td>
  <td>10</td><td>1654</td><td>1751</td><td>1.06</td>
</tr>
<tr>
  <td>100</td><td>2596</td><td>20159</td><td>7.77</td>
</tr>
<tr>
  <td>1000</td><td>8253</td><td>340309</td><td>41.23</td>
</tr>
<tr>
  <td>10000</td><td>60613</td><td>5045549</td><td>83.24</td>
</tr>
<tr>
  <td rowspan="4">Ascending + 3 Rand Exc</td>
  <td>10</td><td>1815</td><td>1981</td><td>1.09</td>
</tr>
<tr>
  <td>100</td><td>4126</td><td>20564</td><td>4.98</td>
</tr>
<tr>
  <td>1000</td><td>11490</td><td>342398</td><td>29.80</td>
</tr>
<tr>
  <td>10000</td><td>85632</td><td>5062110</td><td>59.11</td>
</tr>
<tr>
  <td rowspan="4">Ascending + 10 Rand End</td>
  <td>10</td><td>2001</td><td>2410</td><td>1.20</td>
</tr>
<tr>
  <td>100</td><td>6106</td><td>23537</td><td>3.85</td>
</tr>
<tr>
  <td>1000</td><td>17195</td><td>337073</td><td>19.60</td>
</tr>
<tr>
  <td>10000</td><td>99977</td><td>4868866</td><td>48.70</td>
</tr>
<tr>
  <td rowspan="4">Equal Elements</td>
  <td>10</td><td>1581</td><td>1710</td><td>1.08</td>
</tr>
<tr>
  <td>100</td><td>2492</td><td>4562</td><td>1.83</td>
</tr>
<tr>
  <td>1000</td><td>7337</td><td>31360</td><td>4.27</td>
</tr>
<tr>
  <td>10000</td><td>50090</td><td>311882</td><td>6.23</td>
</tr>
<tr>
  <td rowspan="4">Many Repetitions</td>
  <td>10</td><td>1966</td><td>2415</td><td>1.23</td>
</tr>
<tr>
  <td>100</td><td>15115</td><td>25965</td><td>1.72</td>
</tr>
<tr>
  <td>1000</td><td>182287</td><td>372412</td><td>2.04</td>
</tr>
<tr>
  <td>10000</td><td>2382618</td><td>5317724</td><td>2.23</td>
</tr>
<tr>
  <td rowspan="4">Some Repetitions</td>
  <td>10</td><td>1994</td><td>2549</td><td>1.28</td>
</tr>
<tr>
  <td>100</td><td>14432</td><td>25101</td><td>1.74</td>
</tr>
<tr>
  <td>1000</td><td>181708</td><td>364835</td><td>2</td>
</tr>
<tr>
  <td>10000</td><td>2351346</td><td>5149683</td><td>2.19</td>
</tr>
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