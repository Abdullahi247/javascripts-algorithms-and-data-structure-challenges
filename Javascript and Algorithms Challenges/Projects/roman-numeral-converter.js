function convertToRoman(num){
// This Function Below Covers Any Digit Equal or less than Nine 9.
     function nineBelow(rim5){if(rim5 == 9){
            th = th.concat("IX")
            }
            else if(rim5 >= 5){
            th = th.concat("V")
            var rim4 = rim5 - 5;
            th = th.concat(lv.repeat(rim4))
            }
            else if(rim5 == 4){
            th = th.concat("IV")
            }
             else{
            th = th.concat(lv.repeat(rim5))
            }}
// This Function Above Covers Any Digit Equal or less than Nine 9.
    let lv = "I";
    let tens = "X";
    let  hundreds = "C";
    if(num % 1000 >= 0){
        var div1 = num / 1000;
        div1 = Math.floor(div1);
        var rim1 = num % 1000;
        var th="M";
        th = th.repeat(div1);
        if(rim1 >= 900){
            th = th.concat("CM");
            var rim2 = rim1 - 900;
            if(rim2 >= 90){
            th = th.concat("XC");
            var rim5 = rim2 - 90;
            nineBelow(rim5)
            
            }
            else if (rim2 >= 50){           // figures between 49 - 90
            th = th.concat("L");
            var div5 = rim2 / 10;
            var rim5 = rim2 % 10
            div5 = Math.floor(div5);
            if(div5 > 5){
            var div5i = div5 - 5;  
            th = th.concat(tens.repeat(div5i));
             nineBelow(rim5)
             }
            else{
             nineBelow(rim5)
            }
            }
            else if(rim2 >= 40){
            th = th.concat("XL");
            var rim5 = rim2 - 40;
            nineBelow(rim5)                 //  code for figures between 49 - 90 above      
            }
            else{
            var div5 = rim2 / 10;
            var rim5 = rim2 % 10;
            div5 = Math.floor(div5);
            th = th.concat(tens.repeat(div5));
            nineBelow(rim5)
            }
        }
        else if (rim1 >= 500){
            th = th.concat("D");
            var rim2 = rim1 % 100;
            var div5 = rim1 / 100;
            div5 = Math.floor(div5);
            if( div5 >= 5){
                div5 = div5 - 5
                th = th.concat(hundreds.repeat(div5));
            if(rim2 >= 90){
            th = th.concat("XC");
            var rim5 = rim2 - 90;
            nineBelow(rim5)
            }
            else if (rim2 >= 50){           // figures between 49 - 90
            th = th.concat("L");
            var div5 = rim2 / 10;
            var rim5 = rim2 % 10
            div5 = Math.floor(div5);
            if(div5 >= 5){
            var div5i = div5 - 5;  
            th = th.concat(tens.repeat(div5i));
             nineBelow(rim5)
             } 
            }
            else if(rim2 >= 40){
            th = th.concat("XL");
            var rim5 = rim2 - 40;
            nineBelow(rim5)                 //  code for figures between 49 - 90 above      
            }
            else{
            var div5 = rim2 / 10;
            var rim5 = rim2 % 10;
            div5 = Math.floor(div5);
            th = th.concat(tens.repeat(div5));
            nineBelow(rim5)
            }
            }    
        }
        else if(rim1 >= 400){
            th = th.concat("CD");
            var rim2 = rim1 % 100;
            if(rim2 >= 90){
            th = th.concat("XC");
            var rim5 = rim2 - 90;
            nineBelow(rim5)
            }
            else if (rim2 >= 50){           // figures between 49 - 90
            th = th.concat("L");
            var div5 = rim2 / 10;
            var rim5 = rim2 % 10
            div5 = Math.floor(div5);
            if(div5 >= 5){
            var div5i = div5 - 5;  
            th = th.concat(tens.repeat(div5i));
             nineBelow(rim5)
             } 
            }
            else if(rim2 >= 40){
            th = th.concat("XL");
            var rim5 = rim2 - 40;
            nineBelow(rim5)                 //  code for figures between 49 - 90 above      
            }
            else{
            var div5 = rim2 / 10;
            var rim5 = rim2 % 10;
            div5 = Math.floor(div5);
            th = th.concat(tens.repeat(div5));
            nineBelow(rim5)
            }
        

        }
        else{
            var div1 = rim1 / 100;
            div1 = Math.floor(div1);
            var t = hundreds.repeat(div1);
            th = th.concat(t);
            var rim2 = rim1 % 100;
                        if(rim2 >= 90){
            th = th.concat("XC");
            var rim5 = rim2 - 90;
            nineBelow(rim5)
            }
            else if (rim2 >= 50){           // figures between 49 - 90
            th = th.concat("L");
            var div5 = rim2 / 10;
            var rim5 = rim2 % 10
            div5 = Math.floor(div5);
            if(div5 >= 5){
            var div5i = div5 - 5;  
            th = th.concat(tens.repeat(div5i));
             nineBelow(rim5)
             } 
            }
            else if(rim2 >= 40){
            th = th.concat("XL");
            var rim5 = rim2 - 40;
            nineBelow(rim5)                 //  code for figures between 49 - 90 above      
            }
            else{
            var div5 = rim2 / 10;
            var rim5 = rim2 % 10;
            div5 = Math.floor(div5);
            th = th.concat(tens.repeat(div5));
            nineBelow(rim5)
            }
        }
        }
                return th;
}

convertToRoman(410);
convertToRoman(400);
convertToRoman(500);
convertToRoman(501);
convertToRoman(649);
convertToRoman(798);
convertToRoman(891);
convertToRoman(1000);
convertToRoman(1004);
convertToRoman(1006);
convertToRoman(1023);
convertToRoman(2300);
convertToRoman(3999)

