package main

import "fmt"

func main() {
	var N int
	fmt.Scan(&N)

	fmt.Println((1000 - N%1000) % 1000)
}
