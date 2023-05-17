import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
// import java.util.regex.Pattern;
import java.util.StringTokenizer;

public class BaekJoon1 {
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
        
        //-------------------------------------------------------------------------------
        // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // int n = Integer.parseInt(br.readLine());
        // int[] nums = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        // ArrayList<Integer> answer = new ArrayList<>();
        
        // answer.add(nums[0]);        // 첫번째 원소 추가

        // for(int i=0;i<n;i++){

        //     if (answer.get(answer.size()-1)<nums[i]){  
        //         // 정답배열의 마지막 원소 < 새로 들어올 원소 
        //         answer.add(nums[i]);
        //     }else{
        //         // 정답배열의 마지막 원소 >= 새로 들어올 원소
        //         for(int j=0; j<answer.size()-1; j++){
        //             if (nums[i]<=answer.get(0)){
        //                 // 정답배열의 첫번째 원소보다 새로 들어올 원소가 작다면
        //                 answer.set(0, nums[i]);     // 정답배열의 첫번째 원소를 새로 들어올 원소로 변경
        //                 break;
        //             }
        //             if (nums[i]-answer.get(j)<answer.get(j+1)-answer.get(j)){
        //                 // 상호 원소간의 차이가 새로 들어올 원소가 더 작다면
        //                 answer.set(j+1, nums[i]);   // 새로 들어올 원소로 변경
        //                 break;
        //             }
        //         }
        //     }
        // }
        // System.out.println(answer.size());
        // br.close();

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = Integer.parseInt(st.nextToken());
        }
        int[] answer = new int[n];
        
        answer[0]=nums[0];        // 첫번째 원소 추가
        int answerLength= 1;

        for(int i=0;i<n;i++){

            if (answer[answerLength-1]<nums[i]){  
                // 정답배열의 마지막 원소 < 새로 들어올 원소 
                answer[answerLength]=nums[i];
                answerLength++;
            }else{
                // 정답배열의 마지막 원소 >= 새로 들어올 원소 
                // 이진 탐색으로 삽입될 위치를 찾음
                int left = 0, right = answerLength-1, idx = 0;
                while (left <= right) {
                    int mid = (left+right)/2;
                    if (answer[mid] >= nums[i]) {
                        idx = mid;
                        right = mid-1;
                    } else {
                        left = mid+1;
                    }
                }
                
                // 정답배열의 첫번째 원소보다 새로 들어올 원소가 작다면
                if (nums[i] <= answer[0]) {
                    answer[0] = nums[i];
                } else {  // 새로 들어올 원소로 변경
                    answer[idx] = nums[i];
                }
            }
        }
        System.out.println(answerLength);
        br.close();
    }
}
