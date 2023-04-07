package Ch00;

public class test2 {
    public static void main(String[] args) {
        System.out.println(solution("()))((()"));
    }

    public static String solution(String p) {
        String answer = dfs(p);
        return answer;
    }

    public static String dfs(String w){
        /* 입력이 빈 문자열인 경우 빈 문자열 반환 */
        if (w.length()==0){
            return "";
        }

        String u = "";         // 더 이상 분리할 수 없는 균형잡힌 괄호 문자열
        String v = "";
        int lcnt, rcnt = 0, 0;
    




        return "!";
    }
}
