/**
 * keywords: 倍数, 端数処理
 * url: https://atcoder.jp/contests/abc082/tasks/abc082_a
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int a, b;
  cin >> a >> b;

  int answer = (a + b + 1) / 2;

  cout << answer << endl;
}
