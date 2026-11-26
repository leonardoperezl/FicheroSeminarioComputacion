// ── Presentaciones ───────────────────────────────────────────────────────────
// Para agregar una presentación, copiar un bloque { } y completar los campos.
// "descripcion" es opcional: se puede dejar como cadena vacía o eliminar la línea.

const presentaciones = [
  {
    titulo: "Aspectos básicos y aplicaciones de la IA en el ámbito educativo y empresarial",
    descripcion: "Introducción a la inteligencia artificial, sus aplicaciones en educación y negocios, y cómo está transformando estos sectores.",
    enlace: "https://drive.google.com/drive/folders/1mQ45_x3Uo5nPNr-tywsNmsvGXAwB5c77?usp=sharing"
  },
  {
    titulo: "Funciones y Módulos",
    descripcion: "Definición de funciones, parámetros, retorno de valores e importación de módulos.",
    enlace: "https://drive.google.com/file/d/REEMPLAZAR/view"
  },
  {
    titulo: "Programación Orientada a Objetos",
    descripcion: "Clases, objetos, herencia y encapsulamiento en Python.",
    enlace: "https://drive.google.com/file/d/REEMPLAZAR/view"
  }
];


// ── Problemas de código ───────────────────────────────────────────────────────
// Para agregar un problema, copiar un bloque { } y completar los campos.
// En "solucion" usar comillas invertidas (`) para incluir saltos de línea e indentación.

const problemas = [
  {
    titulo: "Suma de los primeros N naturales",
    enunciado: "Dado un número entero positivo N, calcular la suma de todos los números naturales del 1 al N.",
    solucion:
`def suma_naturales(n):
    return n * (n + 1) // 2

print(suma_naturales(10))   # 55
print(suma_naturales(100))  # 5050`
  },
  {
    titulo: "Número primo",
    enunciado: "Escribir una función que determine si un número entero positivo es primo.",
    solucion:
`def es_primo(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

print(es_primo(7))   # True
print(es_primo(10))  # False`
  },
  {
    titulo: "Invertir una cadena",
    enunciado: "Dada una cadena de texto, retornar la cadena invertida sin usar slicing ni la función reversed().",
    solucion:
`def invertir(s):
    resultado = ""
    for caracter in s:
        resultado = caracter + resultado
    return resultado

print(invertir("Python"))  # nohtyP
print(invertir("hola"))    # aloh`
  }
];
