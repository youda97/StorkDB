import java.io.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;

public class sightingsGen {

    public static String [] cities={
            "London", "Ottawa","Oakville","Woodstock","Strathroy"
    };
    public static Date getDate(Random rnd) {
        Date dt;
        long ms;

// Get an Epoch value roughly between 1940 and 2010
// -946771200000L = January 1, 1940
// Add up to 70 years to it (using modulus on the next long)
        ms = -946771200000L + (Math.abs(rnd.nextLong()) % (70L * 365 * 24 * 60 * 60 * 1000));
// Construct a date
        dt = new Date(ms);
        return dt;
    };


    public static void writeSightings(){
        // make file
        Random random = new Random();
        random.setSeed(System.currentTimeMillis());
        List<String> completedUsersNames = new ArrayList<>();
        List<String> birbnames = new ArrayList<>();

        String timestamp;
        String  numFound;
        String cityname;
        String userID;
        String scienceName;
        SimpleDateFormat df = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String line;
        try {
            FileReader fr = new FileReader("birbNames.txt");
            BufferedReader bufferedReader = new BufferedReader(fr);

            while((line = bufferedReader.readLine()) != null) {
                birbnames.add(line);
            }

            // Always close files.
            bufferedReader.close();
            PrintWriter writer = new PrintWriter("sightingsScripts.txt", "UTF-8");// the insert writer
//            PrintWriter usrNames = new PrintWriter("sig.txt", "UTF-8");
            for(int i =0; i < 100000; i ++){
                numFound = String.valueOf(Math.abs(random.nextInt(20)));
                cityname = cities[Math.abs(random.nextInt(5))];
                userID = String.valueOf(Math.abs(random.nextInt(245))+7);
                scienceName = birbnames.get(Math.abs(random.nextInt(birbnames.size())));
                timestamp = df.format(getDate(random));
                writer.println("INSERT INTO Sightings");
                writer.println("VALUES(");
                writer.println("    NULL,");
                writer.println("    '"+timestamp+"',");
                writer.println("    "+numFound+",");
                writer.println("    '"+cityname+"',");
                writer.println("    "+userID+",");
                writer.println("    '"+scienceName+"'");
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

//    public static void main (String[] Args){
//        writeSightings();
//    }

}
