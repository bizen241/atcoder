/**
 * keywords:
 * url: https://atcoder.jp/contests/abc088/tasks/abc088_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N;
  cin >> N;

  vector<int> A(N);
  for (int i = 0; i < N; i++) {
    cin >> A[i];
  }

  sort(A.rbegin(), A.rend());

  int alice = 0;
  int bob = 0;
  for (int i = 0; i < N; i++) {
    if (i % 2 == 0) {
      alice += A[i];
    } else {
      bob += A[i];
    }
  }

  int answer = alice - bob;

  cout << answer << endl;
}
