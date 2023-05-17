import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;
import java.io.IOException;

public class BaekJoon2 {
    static int[] memo;
    static int cnt = 0;
    static int dpCnt = 0;
    public static void main(String[] args) throws NumberFormatException, IOException {

        // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // String str = br.readLine();
        // StringTokenizer st = new StringTokenizer(str, " ");
        // int A = Integer.parseInt(st.nextToken());
        // int B = Integer.parseInt(st.nextToken());
        // br.close();

        // // 배열 입력
        // for (int i=0; i<9; i++){
        //     StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        //     for (int j=0; j<9; j++){
        //         arr[i][j] = Integer.parseInt(st.nextToken());
        //         if(arr[i][j]>=max){
        //             x = i;
        //             y = j;
        //             max = arr[i][j];
        //         }
        //     }
        // }

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());
        memo = new int[num];
        fib(num);
        fibonacci(num);

        System.out.println(cnt+" "+(num-2));
    }

    public static int fib(int num){
        if(num==1 || num==2){
            cnt++;
            return 1;
        }else{
            return (fib(num-1)+fib(num-2));
        }
    }

    public static int fibonacci(int num){
        memo[0] = 1;
        memo[1] = 1;

        for (int i = 2; i < num; i++) {
            dpCnt++;
            memo[i] = memo[i-2] + memo[i-1];
        }
        return memo[num-1];
    }
}
