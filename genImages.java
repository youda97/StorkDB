import java.io.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class genImages {





    public static void writeImages(){

        try {

            PrintWriter writer = new PrintWriter("imDum.html", "UTF-8");// the insert writer
//            PrintWriter usrNames = new PrintWriter("sig.txt", "UTF-8");
            for(int i =111; i < 999; i ++){

                writer.println("INSERT INTO Images");
                writer.println("VALUES(");
                writer.println("    NULL,");
                writer.println(" <a href=\"https://download.ams.birds.cornell.edu/api/v1/asset/4"+String.valueOf(i)+"1111\"> im a monkus"+i+"</a>  ");
//                writer.println(");");
            }
//            usrNames.close();
            writer.close();
            System.out.print("all dun frand");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
//
//    public static void main (String[] Args){
//        writeImages();
//    }

}
