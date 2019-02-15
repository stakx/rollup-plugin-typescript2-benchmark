# stakx/rollup-plugin-typescript2-benchmark

Quick setup to measure the runtime performance of `ezolenko/rollup-plugin-typescript2`.

Run with `npm start`.

You might want to play with two knobs between runs:

 * The package version of `rollup-plugin-typescript2` in `package.json` (see [this line of code](https://github.com/stakx/rollup-plugin-typescript2-benchmark/blob/d1b99ebf20115a69b69a2146525312ed1c371960/package.json#L6))

 * The `clean` option passed to the plugin in `index.js` (see [this line of code](https://github.com/stakx/rollup-plugin-typescript2-benchmark/blob/d1b99ebf20115a69b69a2146525312ed1c371960/index.js#L8))

Here are some example measurements taken for various versions of the `rollup-plugin-typescript2` package for both `clean: true` and `clean: false` options (all other things being equal across all tests):

Package version | run | `clean: true` | `clean: false` | `clean: false` &div; `clean: true` (%)
---|:-:|--:|--:|--:
0.15.0 | 1 | 836 | 670 |
| | 2 | 840 | 638 |
| | 3 | 884 | 574 |
| | avg. | 853 | 627 | 74 %
0.16.0 | 1 | 841 | 576 |
| | 2 | 816 | 607 |
| | 3 | 834 | 581 |
| | avg. | 830 | 588 | 71 %
0.17.0 | 1 | 861 | 582
| | 2 | 839 | 603
| | 3 | 835 | 594
| | avg. | 845 | 593 | 70 %
0.18.0 | 1 | 1147 | 998
| | 2 | 1192 | 882
| | 3 | 1207 | 882
| | avg. | 1182 | 921 | 78 %
0.18.1 | 1 | 815 | 617
| | 2 | 837 | 590
| | 3 | 823 | 590
| | avg. | 825 | 599 | 73 %
0.19.0 | 1 | 828 | 896
| | 2 | 803 | 897
| | 3 | 836 | 901
| | avg. | 822 | 898 | 109 %
0.19.1 | 1 | 850 | 913
| | 2 | 825 | 888
| | 3 | 799 | 881
| | avg. | 825 | 894 | 108 %
0.19.2 | 1 | 1020 | 888
| | 2 | 816 | 902
| | 3 | 826 | 890
| | avg. | 887 | 893 | 101 %

Measurements aren't expected to be very precise, but it would seem permissible to make two observations:

 * Version 0.18.0 appears to have had a slight performance problem which was solved in 0.18.1.

 * Starting with 0.19.0, `clean: false` (i.e. the use of a bundling cache) appears to make performance worse instead of improving it.
