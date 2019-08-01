/**
 * keywords:
 * url: https://atcoder.jp/contests/abc095/tasks/abc095_a
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  string S;
  cin >> S;

  int y = 700;

  if (S[0] == 'o') {
    y += 100;
  }
  if (S[1] == 'o') {
    y += 100;
  }
  if (S[2] == 'o') {
    y += 100;
  }

  cout << y << endl;
}
