/**
 * keywords: 倍数
 * url: https://atcoder.jp/contests/abc086/tasks/abc086_a
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int a, b;
  cin >> a >> b;

  string answer = (a % 2 == 0) || (b % 2 == 0) ? "Even" : "Odd";

  cout << answer << endl;
}
