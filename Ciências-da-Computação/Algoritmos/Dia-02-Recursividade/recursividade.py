def sum_recursive(n):
    if n == 0:
        return 0
    else:
        # print(n)
        return n + sum_recursive(n - 1)


result = sum_recursive(4)

print(result)
