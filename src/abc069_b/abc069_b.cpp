/**
 * keywords: 文字列
 * url: https://atcoder.jp/contests/abc069/tasks/abc069_b
 */
#include <bits/stdc++.h>

using namespace std;

int main() {
  string s;
  cin >> s;

  string numeronym = s[0] + to_string(s.size() - 2) + s[s.size() - 1];

  cout << numeronym << endl;
}
