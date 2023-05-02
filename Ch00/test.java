package Ch00;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.Scanner;
import java.util.StringTokenizer;
import java.util.stream.Stream;

public class test{
    public static void main(String[] args) throws IOException {
        // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // StringTokenizer st = new StringTokenizer(br.readLine());    // 한 줄에서 공백을 기준으로 문자열을 분리

        // int N = Integer.parseInt(st.nextToken());
        // int S = Integer.parseInt(st.nextToken());
        
        // int[] nums = new int[N+1];
        // st = new StringTokenizer(br.readLine());

        int[] scoville = {1, 2, 3, 9, 10, 12};
        int answer = solution(scoville, 7);
        System.out.println(answer);
    }

    public static int solution(int[] scoville, int K) {
        PriorityQueue<Integer> que = new PriorityQueue<>();
        for (int i = 0; i < scoville.length; i++) {
            que.add(scoville[i]);
        }

        int cnt = 0;
        while(que.peek() < K){
            if(que.size()==1) return -1;
            que.add(que.poll() + que.poll() * 2);
            cnt++;
        }
        return cnt;
    }
}




