public class StudentMain{
    public static void main(String[] args) {
        Student student1 = new Student("김슈니", 0, "디지털미디어");
        student1.printInfo();
    }
}

class Student{
    String name;
    int studentID;
    String major;

    public Student(String name, int studentID, String major){
        this.name = name;
        this.studentID = studentID;
        this.major = major;
    }

    public void printInfo(){
        System.out.println("이름: "+name);
        System.out.println("학번: "+studentID);
        System.out.println("전공: "+major);
    }
}