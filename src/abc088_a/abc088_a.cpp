/**
 * keywords: 倍数
 * url: https://atcoder.jp/contests/abc088/tasks/abc088_a
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N, A;
  cin >> N >> A;

  string answer = N % 500 <= A ? "Yes" : "No";

  cout << answer << endl;
}
