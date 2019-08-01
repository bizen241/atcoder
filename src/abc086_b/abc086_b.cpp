/**
 * keywords: 平方数
 * url: https://atcoder.jp/contests/abc086/tasks/abc086_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int a, b;
  cin >> a >> b;

  int target = a * pow(10, floor(log10(b)) + 1) + b;
  string result = pow(floor(sqrt(target)), 2) == target ? "Yes" : "No";

  cout << result << endl;
}
