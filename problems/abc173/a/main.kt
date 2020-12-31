import java.util.*

fun main() {
    val N = readLine()!!.toInt()

    println((1000 - N % 1000) % 1000)
}
