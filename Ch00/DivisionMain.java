import java.util.Scanner;

public class DivisionMain {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("숫자를 입력해주세요: ");
        int num = sc.nextInt();
        try {
            int result = num / 10;
            System.out.println("결과: " + result);
        } catch (ArithmeticException  e) {
            System.out.println("Cannot divide by zero");
        }
    }
}
