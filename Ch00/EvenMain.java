public class EvenMain {
    public static void main(String[] args) {
        for(int i=1; i<=10; i++){
            if(Even.isEven(i)){
                System.out.println(i+" ");
            }
        }
    }
}

class Even{
    public static boolean isEven(int num){
        if(num%2==0){
            return true;
        }else{
            return false;
        }
    }
}