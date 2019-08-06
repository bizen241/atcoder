/**
 * keywords:
 * url: https://atcoder.jp/contests/abc087/tasks/abc087_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int A, B, C, X;
  cin >> A >> B >> C >> X;

  int answer = 0;
  for (int countA = 0; countA <= A; countA++) {
    int a = countA * 500;

    if (a > X) {
      break;
    }
    if (a == X) {
      answer++;
      continue;
    }

    for (int countB = 0; countB <= B; countB++) {
      int b = countB * 100 + a;

      if (b > X) {
        break;
      }
      if (b == X) {
        answer++;
        continue;
      }

      for (int countC = 0; countC <= C; countC++) {
        int c = countC * 50 + b;

        if (c > X) {
          break;
        }
        if (c == X) {
          answer++;
          break;
        }
      }
    }
  }

  cout << answer << endl;
}
