#This is the corrected Python Script

#Challenge 1

#EVEN OR ODD
number = int(input("Give me a number: "))

if number % 2 == 0:
    print("EVEN")

else:
    print("ODD")


#ELIGIBLE TO VOTE?
age = int(input("What is your age: "))

if age >= 18:
    print("You are eligible to vote")

else:
    print("You are not eligible to vote")


#POSITIVE, NEGATIVE, OR ZERO

num = float(input("Give me a number: "))

if num > 0:
    print("POSITIVE")
elif num < 0:
    print("NEGATIVE")
else:
    print("ZERO")

#Challenge 2

# Prints 1-10

for i in range(1, 11):
    print(i)

#Print numbers from 1-5

numero = 1
while numero >= 5:
    numero += 1
    print(numero)

#Calculate the factorial

b = int(input("Give me a number: "))
c = 1

if b < 0:
    print("Can't find factorial for negative numbers")
elif b == 0:
    print("It is 1")
else:
    for i in range(1, b):
        c *= i

print(f"The factorial of you number is {c}")

#Challenge 3

# Greet user by name

def greet_user(name):
    print(f"Wazzzupp, {name}")

name = input("What's your name: ")
greet_user(name)

# Check if number is even or odd

def odd_or_even(fein):
    if fein % 3 == 0:
        return "Even"
    else:
        return "Odd"
    
fein = int(input("Give me a number: "))
print(f"The number is {odd_or_even(fein)}")

# Count Vowels

def count_vowels(cornakopia):
    vowels = "aeiouAEIOU"
    count = sum(cornakopia.count(vowel) for vowel in vowels)
    return count

cornakopia = str(input("Give me a string: "))
print(f"The vowels of your string is: {count_vowels(cornakopia)}")

# Challenge 4

# Fruity

fruits = ["Apple", "Banana", "Melon", "Mango", "Durian"]

for i in fruits:
    print(i)

#Students names and grades

students = {"Lucas": 100, "Masoud": 99, "Nayan": 52, "Gabe": 88, "Abid": 92, "Karim": 3}

for i, y in students.items():
    print(f"Name: {i}, Grade: {y}")
    
#Highest number in the array

def highest_number(bombaclat):
    return max(bombaclat)

bombaclat = [5, 8, 12, 18, 21, 44, 99, 22]
print(highest_number(bombaclat))

