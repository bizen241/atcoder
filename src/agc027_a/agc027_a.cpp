/**
 * keywords:
 * url: https://atcoder.jp/contests/agc027/tasks/agc027_a
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N, x;
  cin >> N >> x;

  int A[N];
  for (int i = 0; i < N; i++) {
    cin >> A[i];
  }

  sort(A, A + N);

  int remaining = x;
  int answer = 0;
  for (int i = 0; i < N; i++) {
    if (remaining < 0) {
      break;
    }

    int a = A[i];

    if (a <= remaining) {
      answer += 1;
    };

    remaining -= a;
  }

  if (remaining > 0) {
    answer -= 1;
  }

  cout << answer << endl;
}
