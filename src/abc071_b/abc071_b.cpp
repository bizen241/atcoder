/**
 * keywords:
 * url: https://atcoder.jp/contests/abc071/tasks/abc071_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  string S;
  cin >> S;

  int bucket[26];
  fill(bucket, bucket + 26, 0);

  for (unsigned i = 0; i < S.size(); i++) {
    bucket[(int)S[i] - 97] += 1;
  }

  string missed;
  for (int i = 0; i < 26; i++) {
    if (bucket[i] == 0) {
      missed.push_back(char(i + 97));
    }
  }

  sort(missed.begin(), missed.end());

  if (missed.size() > 0) {
    cout << missed[0] << endl;
  } else {
    cout << "None" << endl;
  }
}
