let N = Int(readLine()!)!

print(N % 1000 == 0 ? 0 : 1000 - (N % 1000))
