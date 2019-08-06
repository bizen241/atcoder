/**
 * keywords:
 * url: https://atcoder.jp/contests/abc091/tasks/abc091_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N, M;
  map<string, int> cash;

  cin >> N;
  for (int i = 0; i < N; i++) {
    string s;
    cin >> s;

    cash[s] += 1;
  }

  cin >> M;
  for (int i = 0; i < M; i++) {
    string t;
    cin >> t;

    cash[t] -= 1;
  }

  int maximum = 0;
  for (auto iterator = cash.begin(); iterator != cash.end(); iterator++) {
    maximum = max(maximum, iterator->second);
  }

  int answer = maximum < 0 ? 0 : maximum;

  cout << answer << endl;
}
