for test_case in range(1, 11):    
    N = int(input())
    code = input().split()
    M = int(input())
    orders = input().split()

    for i in range(len(orders)):
        if orders[i] == "I":
            x = int(orders[i+1])
            y = int(orders[i+2])
            for j in range(y):
                code.insert(x+j, orders[i+3+j])
        elif orders[i]=="D":
            x = int(orders[i+1])
            y = int(orders[i+2])
            for j in range(y):
                code.pop(x)
    
    print(f"#{test_case}", end=" ")
    for i in range(10):
        print(f"{code[i]}", end=" ")
    print()