/**
 * keywords:
 * url: https://atcoder.jp/contests/abc053/tasks/abc053_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  string s;
  cin >> s;

  int start, last;
  for (unsigned i = 0; i < s.size(); i++) {
    if (s[i] == 'A') {
      start = i;

      break;
    }
  }
  for (unsigned i = s.size(); i > 0; i--) {
    if (s[i] == 'Z') {
      last = i;

      break;
    }
  }

  int answer = last - start + 1;

  cout << answer << endl;
}
