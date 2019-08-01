/**
 * keywords:
 * url: https://atcoder.jp/contests/abc068/tasks/abc068_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N;
  cin >> N;

  int answer = 1;
  int maxCount = 0;

  for (int i = N; i > 0; i--) {
    int n = i;
    int count = 0;

    while (n % 2 == 0) {
      n /= 2;
      count += 1;
    }

    if (count > maxCount) {
      answer = i;
      maxCount = count;
    }
  }

  cout << answer << endl;
}
