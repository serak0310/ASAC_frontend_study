package Ch00;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.regex.Pattern;

public class test2 {
    public static void main(String[] args) throws NumberFormatException, IOException {
        // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // int num = Integer.parseInt(br.readLine());
        // int[] times = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();     //string[] to int[]
        // Arrays.sort(times);     // 정렬

        // int total = 0;
        // for (int i=0; i<num; i++){
        //     total += times[i]*(num-i);
        // }
        // System.out.println(total);
        
        String new_id = "...!@BaT#*..y.abcdefghijklm";

        // 1단계
        String answer = new_id.toLowerCase();       // 소문자
        System.out.println(answer);
        
        // 2단계
        answer = answer.replaceAll("[^-_.a-z0-9]", "");     // 앞에 ^ 가 붙어있을 경우 not을 의미
        System.out.println(answer);

        // 3단계
        answer = answer.replaceAll("[.]{2,}", ".");  // 연속된 . 제거
        System.out.println(answer);

        // 4단계
        answer = answer.replaceAll("^[.]", "");     // 맨 앞 . 제거
        answer = answer.replaceAll("[.]$", "");     // 맨 뒤 . 제거
        System.out.println(answer);

        // 5단계
        if(answer.isEmpty()){       // 리턴으로 변경하기
            System.out.println("aaa");      // 문자열 비어있을 시 aaa 리턴
        }
        System.out.println(answer);

        // 6단계
        if(16<=answer.length()){
            answer = answer.substring(0,15);      // 15자리
        }
        answer = answer.replaceAll("[.]$", "");     // 끝문자 제거

        // 7단계
        while(answer.length()<3){
            char lastchar = answer.charAt(answer.length()-1);
            answer = answer+lastchar;
        }
        System.out.println(answer);
        
    }
}
