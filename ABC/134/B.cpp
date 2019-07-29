#include <iostream>

using namespace std;

int main() {
  int N, D;
  cin >> N >> D;

  int answer = (N + D * 2) / (D * 2 + 1);

  cout << answer << endl;
}
