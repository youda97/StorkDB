import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class genSpecImageRelation {

    public static void writeImages(){

        try {
            List<String> birbnames = new ArrayList<>();
            FileReader fr = new FileReader("birbNames.txt");
            BufferedReader bufferedReader = new BufferedReader(fr);
            String line;
            while((line = bufferedReader.readLine()) != null) {
                birbnames.add(line);
            }

            // Always close files.
            bufferedReader.close();

            PrintWriter writer = new PrintWriter("specImageRelationScript.txt", "UTF-8");// the insert writer
//            PrintWriter usrNames = new PrintWriter("sig.txt", "UTF-8");
            for(int i =1; i <= birbnames.size(); i ++){

                writer.println("INSERT INTO Speciesimages");
                writer.println("VALUES(");
                writer.println("    NULL,");
                writer.println("    "+String.valueOf(i)+",");
                writer.println("    '"+birbnames.get(i-1)+"'");
                writer.println(");");
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

    public static void main (String[] Args){
        writeImages();
    }


}
