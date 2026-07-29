function string1(str1) {
    let str = str1.split(" ").pop().length;
   // return str;
   console.log(str);
}

function string2(str2) {
    let str = str2.trim().split(" ").pop().length;
    console.log(str);
    return str;

}


string1("Hello world");          
string1("JavaScript is fun");    
string1("OpenAI ChatGPT");       
string1("Coding"); 

string2("  Let's go  ");          
string2("JavaScript is fun  ");    
string2("  JS is Fun");       
string2("Coding is easy"); 

