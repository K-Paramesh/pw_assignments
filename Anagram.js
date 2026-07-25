function anagram(str1, str2){
    let s1 = str1.toLowerCase().split("").sort().join("").trim();
    let s2 = str2.toLowerCase().split("").sort().join("").trim();

    if (s1===s2){
        console.log("The given strings are anagram");
    } else{
        console.log("The given strings are not anagram")
    }
}
anagram("Listen","Silent");
anagram("Hello", "world");
anagram("Dirty room", "Dormitory");

