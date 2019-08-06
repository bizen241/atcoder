/**
 * keywords:
 * url: https://atcoder.jp/contests/abc090/tasks/abc090_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  int A, B;
  cin >> A >> B;

  int count = 0;
  for (int i = A; i <= B; i++) {
    string source, reversed;
    source = reversed = to_string(i);

    reverse(reversed.begin(), reversed.end());

    if (source == reversed) {
      count++;
    }
  }

  cout << count << endl;
}
