package Ch00;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.Arrays;

public class test{
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // String[] str = br.readLine().split(" ");
        // int HH = Integer.parseInt(str[0]);
        // int MM = Integer.parseInt(str[1]);

        // int num = Integer.parseInt(br.readLine());

        String[] babbling = {"ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"};
        System.out.println(solution(babbling));
    }

    public static int solution(String[] babbling) {
        int answer = 0;
        String[] doit = {"aya", "ye", "woo", "ma"};
        
        for (int i=0; i<babbling.length; i++){
            // 연속된 발음이 있을 경우 넘어감
            if(babbling[i].contains("ayaaya") || babbling[i].contains("yeye") || babbling[i].contains("woowoo") || babbling[i].contains("mama")) {
                continue;
            }

            for(String str: doit){
                babbling[i] = babbling[i].replaceFirst(str, "*");
            }
            babbling[i] = babbling[i].replace("*", "");
            if (babbling[i].length()==0){
                answer ++;
            }
        }
        return answer;
    }
}




