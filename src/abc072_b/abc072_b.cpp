/**
 * keywords:
 * url: https://atcoder.jp/contests/abc072/tasks/abc072_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  string s;
  cin >> s;

  string answer;
  for (unsigned i = 0; i < s.size(); i += 2) {
    answer.push_back(s[i]);
  }

  cout << answer << endl;
}
