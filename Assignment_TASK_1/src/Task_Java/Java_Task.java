package Task_Java;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Random;
import java.util.Scanner;

public class Java_Task {
	// Task 1
    public static void shuffle(int[] arr) {
        Random rand = new Random();
        for (int i = arr.length - 1; i > 0; i--) {
            int j = rand.nextInt(i + 1);
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // Task 2
    public static int convertRomanToInteger(String romanNumeral) {
        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);

        int result = 0;
        int prevValue = 0;

        for (int i = romanNumeral.length() - 1; i >= 0; i--) {
            int currentValue = romanValues.get(romanNumeral.charAt(i));
            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }
            prevValue = currentValue;
        }

        return result;
    }

    // Task 3
    public static boolean checkPangram(String sentence) {
        boolean[] alphabetStatus = new boolean[26];
        int alphabetCount = 0;

        for (int i = 0; i < sentence.length(); i++) {
            char ch = Character.toLowerCase(sentence.charAt(i));
            if (ch >= 'a' && ch <= 'z' && !alphabetStatus[ch - 'a']) {
                alphabetStatus[ch - 'a'] = true;
                alphabetCount++;
            }
            if (alphabetCount == 26) {
                return true;
            }
        }

        return false;
    }
    public static void main(String[] args) {
        // Task 1
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        shuffle(arr);
        System.out.println("Shuffled Array: " + Arrays.toString(arr));

        // Task 2
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Roman Number (e.g., IX=9): ");
        String romanNumeral = scanner.nextLine();
        int integerEquivalent = convertRomanToInteger(romanNumeral);
        System.out.println("Integer Number: " + integerEquivalent);

        // Task 3
        System.out.print("Enter a sentence to check for the pangram: ");
        String inputSentence = scanner.nextLine();
        boolean isPangram = checkPangram(inputSentence);
        System.out.println("Is Pangram: " + isPangram);

        
    }
}



