/**
 * keywords:
 * url: https://atcoder.jp/contests/agc012/tasks/agc012_a
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N;
  cin >> N;

  int A[N * 3];
  for (int i = 0; i < N * 3; i++) {
    cin >> A[i];
  }

  sort(A, A + N * 3, greater<int>());

  long answer = 0;
  for (int i = 0; i < N * 2; i++) {
    if (i % 2 != 0) {
      answer += A[i];
    }
  }

  cout << answer << endl;
}
