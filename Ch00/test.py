# x,y,p1,p2 = map(int,input().split())
# runx = set(range(p1, 10**6, x))
# runy = set(range(p2, 10**6, y))

# R = runx&runy
# print(min(R) if R else -1)
s1 = ["a", "b", "c"]
s2 = ["com", "b", "d", "p", "c"]

count = 0
for i in range(len(s1)):
    if s1[i] in s2:
        count +=1
print(count)