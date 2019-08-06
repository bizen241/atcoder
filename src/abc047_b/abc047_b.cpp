/**
 * keywords:
 * url: https://atcoder.jp/contests/abc047/tasks/abc047_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int W, H, N;
  cin >> W >> H >> N;

  int top = H;
  int right = W;
  int bottom = 0;
  int left = 0;
  for (int i = 0; i < N; i++) {
    int x, y, a;
    cin >> x >> y >> a;

    if (a == 1)
      left = max(left, x);
    if (a == 2)
      right = min(right, x);
    if (a == 3)
      bottom = max(bottom, y);
    if (a == 4)
      top = min(top, y);
  }

  int answer =
      top < bottom || right < left ? 0 : (top - bottom) * (right - left);

  cout << answer << endl;
}
