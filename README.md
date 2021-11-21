Describe: rodgers()

Test 1: "It should return an array between 0 and the user input" 
Code: robogers(10); 
Expected Output: [1,2,3,4,5,6,7,8,9,10]

Test 2: "It should replace any value containing 1 with the string "Beep!" 
Code: robogers(5); 
Expected Output: [Beep!,2,3,4,5]

Test 3: "It should replace any value containing 2 or 1 and 2 with "Boop!" 
Code: robogers(15); 
Expected Output: [Beep!,2,3,4,5,6,7,8,9,Beep!,Beep!,Boop!,Beep!,Beep!,Beep!]

Test 4: "It should replace any value containing "3" with the string "Won't you be my neighbor?" 
Code: robogers(25); 
Expected Output: [Beep!,2,3,4,5,6,7,8,9,Beep!,Beep!,Boop!,Won't you be my neighbor?,Beep!,Beep!,Beep!,Beep!,Beep!,Beep!,Boop!,Boop!,Boop!,"Won't you be my neighbor?","Boop!","Boop!"]

1 = Beep!
2 = Boop!
3 = "Won't you be my neighbor?"