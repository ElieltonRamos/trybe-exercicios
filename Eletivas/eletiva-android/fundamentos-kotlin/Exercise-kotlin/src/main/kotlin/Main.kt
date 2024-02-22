package org.example

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
fun main() {
    println("Digite no terminal:")
    val input = readln().toInt()
    val inputTwo = readln().toInt()
    val inputTree = readln().toInt()
    val result = calculateMedium(input, inputTwo, inputTree)
    println(result)
}

fun calculateSalary(salary: Double): Double {
    val addSalary = salary * 0.25
    return salary + addSalary
}

fun calculateHeight(height: Int, heightPerson: Int): Int {
    return heightPerson / height
}

fun returnBigNumber(numOne: Int, numTwo: Int): Int {
    return if ( numOne > numTwo) numOne else numTwo
}

fun calculateMedium(noteOne: Int, noteTwo: Int, noteTree: Int): String {
    val medium = (noteOne + noteTwo + noteTree) / 3
    if (medium >= 0.0 && medium < 3) {
        return "REPROVADO $medium"
    }
    if (medium in 3..6) {
        return "EXAME $medium"
    }
    return "APROVADO $medium"
}