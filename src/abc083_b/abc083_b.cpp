/**
 * keywords:
 * url: https://atcoder.jp/contests/abc083/tasks/abc083_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N, A, B;
  cin >> N >> A >> B;

  int answer = 0;
  for (int i = 1; i <= N; i++) {
    int sum = 0;
    int target = i;
    while (target > 0) {
      sum += target % 10;
      target /= 10;
    }

    if (sum >= A && sum <= B) {
      answer += i;
    }
  }

  cout << answer << endl;
}
