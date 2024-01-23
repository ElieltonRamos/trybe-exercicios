def count_pairs(n):
    numbers = range(1, n + 1)
    count_par = [num for num in numbers if num % 2 == 0]
    return count_par


# print(count_pairs(5))


# def recursive_count_pairs(n):
#     result = []
#     if n == 1:
#         return result
#     if n % 2 == 0:
#         result.append(n)
#     else:
#         recursive_count_pairs(n - 1)


def recursive_count_pairs(n):
    if n == 1:
        return []

    result = recursive_count_pairs(n - 1)

    if n % 2 == 0:
        result.append(n)

    return result


print(recursive_count_pairs(5))
