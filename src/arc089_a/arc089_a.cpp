/**
 * keywords: 平面
 * url: https://atcoder.jp/contests/abc086/tasks/arc089_a
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int N;
  cin >> N;

  bool canTravel = true;
  int prevT = 0, prevX = 0, prevY = 0;
  int nextT, nextX, nextY;

  for (int i = 0; i < N; i++) {
    cin >> nextT >> nextX >> nextY;

    int duration = nextT - prevT;
    int distance = abs(nextX - prevX) + abs(nextY - prevY);

    if (distance > duration || distance % 2 != duration % 2) {
      canTravel = false;

      break;
    }

    prevT = nextT;
    prevX = nextX;
    prevY = nextY;
  }

  string answer = canTravel ? "Yes" : "No";

  cout << answer << endl;
}
