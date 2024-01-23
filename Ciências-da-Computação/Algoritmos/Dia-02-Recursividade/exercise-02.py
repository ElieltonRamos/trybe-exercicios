def recursive_max(lista):
    # Caso recursivo: chama a função recursivamente com a lista reduzida
    max_resto = recursive_max(lista[1:])

    # Compara o primeiro elemento da lista com o máximo do restante
    if max_resto is None or lista[0] > max_resto:
        return lista[0]
    else:
        return max_resto


# Exemplo de uso
numeros = [4, 2, 8, 1, 5, 7]

maior_numero = recursive_max(numeros)
print(f"O maior número na lista é: {maior_numero}")
