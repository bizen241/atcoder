/**
 * keywords:
 * url: https://atcoder.jp/contests/arc004/tasks/arc004_1
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N;
  cin >> N;

  int X[N], Y[N];
  for (int i = 0; i < N; i++) {
    cin >> X[i] >> Y[i];
  }

  double maximum = 0;
  for (int i = 0; i < N; i++) {
    for (int j = 0; j < N; j++) {
      maximum = max(maximum, sqrt(pow(X[i] - X[j], 2) + pow(Y[i] - Y[j], 2)));
    }
  }

  cout << fixed << setprecision(6);
  cout << maximum << endl;
}
