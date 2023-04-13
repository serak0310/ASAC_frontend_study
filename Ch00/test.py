# x,y,p1,p2 = map(int,input().split())
# runx = set(range(p1, 10**6, x))
# runy = set(range(p2, 10**6, y))

# R = runx&runy
# print(min(R) if R else -1)
from itertools import combinations

num_list = [1, 2, 3, 4, 5, 6, 7, 8]
n=2
answer = [[]]
for i in range(0, len(num_list)//n):
    for j in range(n):
        print(i, j)
        answer[i][j] = num_list[0]
        num_list = num_list[1:]

print(answer)