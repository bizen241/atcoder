using System;

class Program
{
  static void Main()
  {
    var N = int.Parse(Console.ReadLine());

    Console.WriteLine((1000 - N % 1000) % 1000);
  }
}
