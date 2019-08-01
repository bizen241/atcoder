/**
 * keywords:
 * url: https://atcoder.jp/contests/abc082/tasks/abc082_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  string s, t;
  cin >> s >> t;

  sort(s.begin(), s.end());
  sort(t.rbegin(), t.rend());

  string answer = s < t ? "Yes" : "No";

  cout << answer << endl;
}
