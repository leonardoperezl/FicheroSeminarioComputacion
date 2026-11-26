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
    titulo: "Internet de las Cosas (IoT)",
    descripcion: "Exploración de la tecnología IoT, sus aplicaciones en la vida cotidiana y su impacto en la industria.",
    enlace: "https://drive.google.com/drive/folders/1VpspnnAR_WGCVsUkr7875ISW5uXk1jyl?usp=sharing"
  },
  {
    titulo: "Claude",
    descripcion: "Presentación sobre Claude, un modelo de lenguaje desarrollado por Anthropic, sus características y aplicaciones.",
    enlace: "https://drive.google.com/drive/folders/1A4yVUvh4TjNNVcVQQcMf7RLHFvf9WcsD?usp=drive_link"
  },
  {
    titulo: "Tutorial GPT4Sales",
    descripcion: "Guía paso a paso para utilizar GPT4Sales.",
    enlace: "https://drive.google.com/drive/folders/1dTNf12Eq6GoADKx4ziMfmgsBhobgc0kt?usp=sharing"
  },
  {
    titulo: "Secuencia de Collatz",
    descripcion: "",
    enlace: ""
  },
  {
    titulo: "Secuencia de Collatz",
    descripcion: "",
    enlace: ""
  },
  {
    titulo: "",
    descripcion: "",
    enlace: ""
  },
  {
    titulo: "",
    descripcion: "",
    enlace: ""
  },
  {
    titulo: "",
    descripcion: "",
    enlace: ""
  },
  {
    titulo: "",
    descripcion: "",
    enlace: ""
  },
  {
    titulo: "",
    descripcion: "",
    enlace: ""
  },
  {
    titulo: "",
    descripcion: "",
    enlace: ""
  },
];


// ── Proyectos IA ──────────────────────────────────────────────────────────────
// Para agregar un proyecto, copiar un bloque { } y completar los campos.

const proyectos = [
  {
    titulo: "Karel Proyecto IA",
    descripcion: "Una página web creada por Claude para aprender C++ con ejercicios interactivos",
    enlace: "https://leonardoperezl.github.io/KarelProyectoIA_SC/"
  },
  {
    titulo: "IoT Cuestionario",
    descripcion: "Una página web creada por Claude para aprender sobre Internet de las Cosas (IoT) con un cuestionario interactivo",
    enlace: "https://leonardoperezl.github.io/IoTCuestionario/"
  },
  {
    titulo: "Agentes IA",
    descripcion: "Una página web creada por Claude para aprender sobre agentes de inteligencia artificial con ejercicios interactivos",
    enlace: "https://leonardoperezl.github.io/AgentesIACuestionario/"
  },
];


// ── Problemas de código ───────────────────────────────────────────────────────
// Para agregar un problema, copiar un bloque { } y completar los campos.
// En "solucion" usar comillas invertidas (`) para incluir saltos de línea e indentación.

const problemas = [
  {
    titulo: "Encontrar un valor n en una cadena de texto",
    enunciado: "Dado un valor n, encontrar todas las palabras que contienen dicho valor en una cadena de texto.",
    solucion:
`success: bool = False
while not success:
    k: str = input("Ingrese el valor a evaluar: ")
    
    if len(k) != 1:
        print("Ingrese unicamente un solo valor.")
        continue
    
    # Checks
    if k.isnumeric():
        print("El valor ingresado no puede ser un número.")
        continue
    
    if k.isspace():
        print("El valor ingresado no puede ser un espacio.")
        continue
    
    phrase: str = input("Ingrese el texto: ")
    words: list[str] = phrase.split(" ")
    
    print(f"Palabras que contienen el valor '{k}': ")
    for word in words:
        if k in word:
            print(f"\t- {word}")
    
    success = True

print("Programa terminado.")`
  },
  {
    titulo: "Promedios de números pares e impares mayores al promedio",
    enunciado: "Dado un vector de números enteros, calcular el promedio general y los promedios de los valores pares e impares que sean mayores que el promedio general.",
    solucion:
`def main():
    # Leer n (longitud del vector)
    n = int(input("Ingrese el valor de n (cantidad de datos): "))

    # Leer los n datos enteros y almacenarlos en el vector
    vector = []
    for i in range(n):
        valor = int(input(f"Ingrese el dato #{i + 1}: "))
        vector.append(valor)

    # Calcular el promedio general del vector
    promedio_general = sum(vector) / n

    # Filtrar solo los valores mayores al promedio general
    # "if v > promedio_general" es el filtro
    mayores_al_promedio: list[int] = [v for v in vector if v > promedio_general]

    # Separar en pares e impares (dentro de los que son mayores al promedio)
    pares = [v for v in mayores_al_promedio if v % 2 == 0]
    impares = [v for v in mayores_al_promedio if v % 2 != 0]

    # Calcular promedios, cuidando no dividir entre cero
    promedio_pares = sum(pares) / len(pares) if pares else 0
    promedio_impares = sum(impares) / len(impares) if impares else 0

    # Mostrar resultados
    print(f"\nVector ingresado: {vector}")
    print(f"Promedio general: {promedio_general:.2f}")
    print(f"Valores mayores al promedio: {mayores_al_promedio}")

    if pares:
        print(f"Promedio de los pares (mayores al promedio): {promedio_pares:.2f}")
    else:
        print("No hay valores pares mayores al promedio.")

    if impares:
        print(f"Promedio de los impares (mayores al promedio): {promedio_impares:.2f}")
    else:
        print("No hay valores impares mayores al promedio.")
`
  },
  {
    titulo: "Invertir una cadena",
    enunciado: "Dada una cadena de texto, retornar la cadena invertida sin usar slicing ni la función reversed().",
    solucion:
`def main():
    # Leer el número de caracteres a ingresar
    while True:
        n: int = int(input("Ingrese la cantidad de numeros a ingresar: "))
        
        if n <= 1_000: break
        else: "Ingrese una cantidad menor o igual a 1,000 por favor." 
    
    # Ingresar los números y guardarlos en el arreglo A
    vA: list[int] = [
        int(input(f"Ingrese el valor #{i}: ")) for i in range(1, n + 1)
    ]
    
    # Filtrar si son pares o impares
    vP: list[int] = [i for i in vA if i % 2 == 0]
    vI: list[int] = [i for i in vA if i not in vP]
    
    # Imprimir resultados
    print(
        f"Los valores pares son: {" ".join(map(str, vP))} "
        f"con un promedio de {sum(vP) / len(vP):.2f}"
    )
    
    print(
        f"Los valores impares son: {" ".join(map(str, vI))} "
        f"con un promedio de {sum(vI) / len(vI):.2f}"
    )


if __name__ == "__main__":
    main()`
  },
  {
    titulo: "Mezclar dos vectores y calcular promedios",
    enunciado: "Leer dos valores m y n después leer n valores enteros de datos ya ordenados y guardarlos en un vector ademas leer m valores enteros también ya ordenados y almacenarlos en otro vector luego mezclar los datos de ambos vectores en un tercer vector, luego obtener el promedio de los valores pares del vector, contar cuantos valores fueron impares los primeros dos resultados mostrarlos en una misma linea en una segunda linea mostrar todos los datos del tercer vector.",
    solucion:
`def read_x_times(vector_id: str, x: int) -> list[int]:
    """
    Lee una cantidad de datos x, las guarda en un vector y regresa ese
    vector.
    """
    
    output: list[int] = []
    for i in range(1, x + 1):
        tmp: int = \
            int(input(f"Ingrese el valor #{i} del vector {vector_id}: "))
        output.append(tmp)
    
    return output


# Función principal
def main():
    # Leer los valores iniciales
    n: int = int(input("Ingrese el valor 'n': "))
    m: int = int(input("Ingrese el valor 'm': "))
    
    # Leer los vectores supuestamente ya ordenados
    vector_n: list[int] = read_x_times("n", n)
    vector_m: list[int] = read_x_times("m", m)
    
    # Mezclar ambos en un mismo vector
    vector_n_m = vector_n + vector_m
    
    # Obtener pares e impares
    pares = [i for i in vector_n_m if i % 2 == 0]
    impares = [i for i in vector_n_m if i not in pares]
    
    # Obtener los datos solicitados
    promedio_pares: float = round(float(sum(pares) / len(pares)), 2)
    num_impares: int = len(impares)
    
    # Imprimir lo solicitado
    print("\nRESULTADOS DEL PROGRAMA")
    print(
        f"Promedio de pares: {promedio_pares}, "
        f"Número de impares: {num_impares}"
    )
    
    print(f"Datos del tercer vector: {", ".join(map(str, vector_n_m))}")


if __name__ == "__main__":
    main()`
  },
  {
    titulo: "Secuencia de Collatz",
    enunciado: "Te dan un número n. Si es par, lo divides entre 2; si es impar, lo multiplicas por 3 y le sumas 1. Repites el proceso hasta que llegue a 1. Debes imprimir toda la secuencia.",
    solucion:
`def main():
    n: int = int(input(""))
    secuencia: list[str] = []
    
    while True:
        secuencia.append(str(n))
        
        if n == 1:
            break
        
        if (n % 2) == 1:
            n = n * 3 + 1
            continue
        
        n = int(n / 2)
    
    print(f"{' '.join(secuencia)}")


if __name__ == "__main__":
    main()`
  }
];
