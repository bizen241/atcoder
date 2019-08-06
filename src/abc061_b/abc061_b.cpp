/**
 * keywords:
 * url: https://atcoder.jp/contests/abc061/tasks/abc061_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N, M;
  cin >> N >> M;

  int answer[N];
  fill(answer, answer + N, 0);

  for (int i = 0; i < M; i++) {
    int a, b;
    cin >> a >> b;

    answer[a - 1] += 1;
    answer[b - 1] += 1;
  }

  for (int i = 0; i < N; i++) {
    cout << answer[i] << endl;
  }
}
