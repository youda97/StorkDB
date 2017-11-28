import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class generateBirds {

    public static String[] ScientificNameA= {
            "big", "small","thick","scrawny","squeaky","sparkly","purple"
    };
    public static String[] ScientificNameB= {
        "toed","beaked","winged","eyed","tailed","legged","egged"
    };
    public static String[] ScientificNameC= {
        "lawrence","fire","ash","wood","ice","tree","cactus"
    };
    public static String[] ScientificNameD= {
        "crane","bird","falcon","eagle","vulture","owl","heron"
    };
    public static String [] Traitsdesc = {
            "red","green","purple","blue","sparkling","orange"
    };

    public static String [] cities={
            "London", "Ottawa","Oakville","Woodstock","Strathroy"
    };

    public static void writeSpecies(){
        // make file
        Random random = new Random();
        random.setSeed(System.currentTimeMillis());
        List<String> completedNames = new ArrayList<>();
        try {
            PrintWriter writer = new PrintWriter("speciesEntriesForDb.txt", "UTF-8");// the insert writer
            PrintWriter viableBirds = new PrintWriter("birbNames.txt", "UTF-8");
        for(int i =0; i < 2400; i ++){
            StringBuilder newname = new StringBuilder(ScientificNameA[Math.abs(random.nextInt()%7)]);
            newname.append("-").append(ScientificNameB[Math.abs(random.nextInt()%7)]);
            newname.append(" ").append(ScientificNameC[Math.abs(random.nextInt()%7)]);
            newname.append("-").append(ScientificNameD[Math.abs(random.nextInt()%7)]);
            if(completedNames.contains(newname.toString())){// alrd contained, so leave
                i--;// redo it since its alrd used, set counter back to 1 less and dont add to file

            }else{
                completedNames.add(newname.toString());
                //  build the traits string
                StringBuilder trait = new StringBuilder(Traitsdesc[Math.abs(random.nextInt(6))]);
                trait.append(" beak, ").append(Traitsdesc[Math.abs(random.nextInt(6))]);
                trait.append(" wings, ").append(Traitsdesc[Math.abs(random.nextInt(6))]);
                trait.append(" eggs, ").append(Traitsdesc[Math.abs(random.nextInt(6))]);
                trait.append(" eyes, ").append(Traitsdesc[Math.abs(random.nextInt(6))]);
                trait.append(" feet, ").append(Traitsdesc[Math.abs(random.nextInt(6))]);
                String city = cities[Math.abs(random.nextInt(5))];
                String rarity = String.valueOf(Math.abs(random.nextInt(100)));
                writer.println("INSERT INTO Species");
                writer.println("VALUES(");
                writer.println("    \""+newname.toString()+"\",");
                writer.println("    \""+trait.toString()+"\",");
                writer.println("    "+rarity+",");
                writer.println("    \""+city+"\"");
                writer.println(");");
                viableBirds.println(newname.toString());
                // write to file
                System.out.println(i);

            }

        }
        viableBirds.close();
        writer.close();
        System.out.print("all dun frand");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }
    public static void main (String[] Args){
        writeSpecies();
    }
}
