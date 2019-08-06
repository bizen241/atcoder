/**
 * keywords:
 * url: https://atcoder.jp/contests/abc105/tasks/abc105_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  const int CAKE_PRICE = 4;
  const int DONUT_PRICE = 7;

  int N;
  cin >> N;

  string answer = "No";
  int cakesPrice = 0;
  while (cakesPrice <= N) {
    if (cakesPrice == N || (N - cakesPrice) % 7 == 0) {
      answer = "Yes";
      break;
    }

    cakesPrice += CAKE_PRICE;
  }

  cout << answer << endl;
}
