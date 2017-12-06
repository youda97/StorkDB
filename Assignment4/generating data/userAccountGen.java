import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class userAccountGen {

    public static String [] cities={
            "London", "Ottawa","Oakville","Woodstock","Strathroy"
    };
    public static String [] accKinds={
            "Recreational", "Student","Researcher"
    };
    public static String [] streetEnds={
            "street", "road","boulevarde","crescent","place"
    };
    public static String [] fNames={
            "Annamarie",
            "Anne",
            "Anne-Corinne",
            "Anne-Marie",
            "Annecorinne",
            "Anneliese",
            "Annelise",
            "Annemarie",
            "Annetta",
            "Annette",
            "Anni",
            "Annice",
            "Casie",
            "Cass",
            "Cassandra",
            "Cassandre",
            "Cassandry",
            "Cassaundra",
            "Cassey",
            "Cassi",
            "Cassie",
            "Cassondra",
            "Cassy",
            "Catarina",
            "Cate",
            "Caterina",
            "Catha",
            "Catharina"
            //28 names total
    };

    public static String getSaltString(int numchars) {
        String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();
        rnd.setSeed(System.currentTimeMillis());
        while (salt.length() < numchars) { // length of the random string.
            int index = (int) (rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        String saltStr = salt.toString();
        return saltStr;

    }

    public static void writeUserAccs(){
        // make file
        Random random = new Random();
        random.setSeed(System.currentTimeMillis());
        List<String> completedUsersNames = new ArrayList<>();
        String name;
        String userName;
        String password;
        String address;
        String accType;
        String cityName;
        try {
            PrintWriter writer = new PrintWriter("userAccountsEntries.txt", "UTF-8");// the insert writer
            PrintWriter usrNames = new PrintWriter("userNames.txt", "UTF-8");
            for(int i =0; i < 250; i ++){
                userName = getSaltString(12);
                if(completedUsersNames.contains(userName)){
                    i--;
                } else{
                    completedUsersNames.add(userName);
                    name = fNames[Math.abs(random.nextInt(27))];
                    password = getSaltString(14);
                    accType = accKinds[Math.abs(random.nextInt(3))];
                    cityName = cities[Math.abs(random.nextInt(5))];
                    address = getSaltString(7);
                    address =address.concat(" ").concat(streetEnds[Math.abs(random.nextInt(5))]);
                    usrNames.println(userName);
                    writer.println("INSERT INTO Useraccounts");
                    writer.println("VALUES(");
                    writer.println("    NULL,");
                    writer.println("    '"+userName+"',");
                    writer.println("    '"+name+"',");
                    writer.println("    '"+password+"',");
                    writer.println("    '"+address+"',");
                    writer.println("    '"+accType+"',");
                    writer.println("    '"+cityName+"'");
                    writer.println(");");
                }
            }
            usrNames.close();
            writer.close();
            System.out.print("all dun frand");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
    public static void main (String[] Args){
        writeUserAccs();
    }
}
