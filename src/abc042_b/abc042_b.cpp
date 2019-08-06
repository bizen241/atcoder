/**
 * keywords:
 * url: https://atcoder.jp/contests/abc042/tasks/abc042_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N, L;
  cin >> N >> L;

  string S[N];
  for (int i = 0; i < N; i++) {
    cin >> S[i];
  }

  sort(S, S + N);

  string answer = "";
  for (int i = 0; i < N; i++) {
    answer += S[i];
  }

  cout << answer << endl;
}
