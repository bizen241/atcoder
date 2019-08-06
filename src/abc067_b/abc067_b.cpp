/**
 * keywords:
 * url: https://atcoder.jp/contests/abc067/tasks/abc067_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N, K;
  cin >> N >> K;

  int L[N];
  for (int i = 0; i < N; i++) {
    cin >> L[i];
  }

  sort(L, L + N, greater<int>());

  int answer = 0;
  for (int i = 0; i < K; i++) {
    answer += L[i];
  }

  cout << answer << endl;
}
