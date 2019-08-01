/**
 * keywords:
 * url: https://atcoder.jp/contests/abc113/tasks/abc113_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N, T, A;
  cin >> N >> T >> A;

  int answer = 1;
  int diff = 1 << 30;
  for (int i = 1; i <= N; i++) {
    int H;
    cin >> H;

    int diffH = abs(A * 1000 - (T * 1000 - H * 6));

    if (diffH < diff) {
      answer = i;
      diff = diffH;
    }
  }

  cout << answer << endl;
}
