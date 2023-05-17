
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;

public class Programmers{

    public static ArrayList<Integer> solution(String s) {
        ArrayList<Integer> answer = new ArrayList<>();      // 1. 튜플을 만들 ArrayList 객체.
        
        s = s.substring(2,s.length());           // 2. 가장 앞의 {{ 를 제거한다.
        s = s.substring(0,s.length()-2).replace("},{","-");     // 3. 가장 뒤의 }} 를 제거한 뒤, },{ 형태의 문자열을 -로 바꾼다.
        String str[] = s.split("-");        // 4. 위에서 바꾼 문자열(-)을 기준으로 split 해준다.
        
        Arrays.sort(str,new Comparator<String>(){   // 5. 나눠진 문자열 배열을 길이에 따라 다시 정렬한다.
            public int compare(String o1, String o2){
                
                return Integer.compare(o1.length(), o2.length());
            }
        });
        
        // 6. 각 문자열을 탐색한다.
        for(String x : str){
           
            String[] temp = x.split(",");        // 7. 한 문자열마다 ,를 기준으로 split하여 새로운 문자열 배열을 만든다.
            
            for(int i = 0 ; i < temp.length;i++){       // 8. 새로만든 문자열 배열에는 정수값만 존재하며 이를 탐색한다.
                int n = Integer.parseInt(temp[i]);      // 9. 각 문자열 값을 정수로 바꾼다.  
                if(!answer.contains(n))                 // 10. 튜플에 들어있는 값이 아니라면 추가해준다.
                    answer.add(n);
            }
        }
        
        return answer;
    }

    public static void main(String[] args) throws IOException {
        String s = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
        System.out.println(solution(s));
    }
}




