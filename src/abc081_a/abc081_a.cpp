/**
 * keywords:
 * url: https://atcoder.jp/contests/abc081/tasks/abc081_a
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int s, s1, s2, s3;
  cin >> s;

  s1 = ceil(s / 100);
  s2 = ceil((s - s1 * 100) / 10);
  s3 = ceil((s - s1 * 100 - s2 * 10));

  int answer = s1 + s2 + s3;

  cout << answer << endl;
}
