/**
 * keywords: 倍数
 * url: https://atcoder.jp/contests/abc064/tasks/abc064_a
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int r, g, b;
  cin >> r >> g >> b;

  int gb = g * 10 + b;

  string answer = gb % 4 == 0 ? "YES" : "NO";

  cout << answer << endl;
}
