# for test_case in range(1, 11):
#     t = int(input())
#     arr = [list(input()) for _ in range(100)]
#     max = 0

#     # 가로 검사
#     for i in range(100):
#         for j in range(100):
#             for l in range(100):
#                 string = arr[i][j:j+l]
#                 if string==string[::-1] and max<len(string):
#                     max = len(string)

#     # 세로 검사
#     for i in range(100):
#         for j in range(100):
#             string=[]
#             for l in range(100):
#                 string.append(arr[j+l][i])
#             if string==string[::-1] and max<len(string):
#                 max = len(string)
#     print(max)

for test_case in range(1, 11):
    t = int(input())
    arr = [list(input()) for _ in range(100)]
    max = 0

    # 가로 검사
    for i in range(100):
        for j in range(100):
            for l in range(99,-1,-1):
                string = arr[i][j:j+l]
                if string==string[::-1] and max<len(string):
                    max = len(string)
                    flag = True
                    break
            

    # # 세로 검사
    # for i in range(100):
    #     for j in range(100):
    #         string=[]
    #         for l in range(100):
    #             string.append(arr[j+l][i])
    #         if string==string[::-1] and max<len(string):
    #             max = len(string)
    print(max)

    