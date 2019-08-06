/**
 * keywords:
 * url: https://atcoder.jp/contests/abc085/tasks/abc085_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N;
  cin >> N;

  int D[N];
  for (int i = 0; i < N; i++) {
    cin >> D[i];
  }

  sort(D, D + N, greater<int>());

  int answer = 0;
  int d = 1000;
  for (int i = 0; i < N; i++) {
    if (d != D[i]) {
      answer += 1;
      d = D[i];
    }
  }

  cout << answer << endl;
}
