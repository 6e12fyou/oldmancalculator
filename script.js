

function getResult() {
    let playerName = document.getElementById("myText").value;
    playerName = playerName.slice(1)+'ć';
    //document.getElementById("resulttext").textContent = playerName;
    
}

function characterToIndex(char){
    //ugly!
    //TODO: make it not  ugly
    if(char == 'ć')return 80;
    if(char == ' ')return 127;
    if(char == 'A')return 128;
    if(char == 'B')return 129;
    if(char == 'C')return 130;
    if(char == 'D')return 131;
    if(char == 'E')return 132;
    if(char == 'F')return 133;
    if(char == 'G')return 134;
    if(char == 'H')return 135;
    if(char == 'I')return 136;
    if(char == 'J')return 137;
    if(char == 'K')return 138;
    if(char == 'L')return 139;
    if(char == 'M')return 140;
    if(char == 'N')return 141;
    if(char == 'O')return 142;
    if(char == 'P')return 143;
    if(char == 'Q')return 144;
    if(char == 'R')return 145;
    if(char == 'S')return 146;
    if(char == 'T')return 147;
    if(char == 'U')return 148;
    if(char == 'V')return 149;
    if(char == 'W')return 150;
    if(char == 'X')return 151;
    if(char == 'Y')return 152;
    if(char == 'Z')return 153;
    if(char == '(')return 154;
    if(char == ')')return 155;
    if(char == ':')return 156;
    if(char == ';')return 157;
    if(char == '[')return 158;
    if(char == ']')return 159;
    //i got lazy and didnt wanna change every single number here so i just added 32 to it
    //this is stupid.
    if(char == 'a')return 128+32;
    if(char == 'b')return 129+32;
    if(char == 'c')return 130+32;
    if(char == 'd')return 131+32;
    if(char == 'e')return 132+32;
    if(char == 'f')return 133+32;
    if(char == 'g')return 134+32;
    if(char == 'h')return 135+32;
    if(char == 'i')return 136+32;
    if(char == 'j')return 137+32;
    if(char == 'k')return 138+32;
    if(char == 'l')return 139+32;
    if(char == 'm')return 140+32;
    if(char == 'n')return 141+32;
    if(char == 'o')return 142+32;
    if(char == 'p')return 143+32;
    if(char == 'q')return 144+32;
    if(char == 'r')return 145+32;
    if(char == 's')return 146+32;
    if(char == 't')return 147+32;
    if(char == 'u')return 148+32;
    if(char == 'v')return 149+32;
    if(char == 'w')return 150+32;
    if(char == 'x')return 151+32;
    if(char == 'y')return 152+32;
    if(char == 'z')return 153+32;
    if(char == 'ż')return 225;
    if(char == 'ź')return 226;
    if(char == '-')return 227;
    if(char == '?')return 230;
    if(char == '!')return 231;
    if(char == '♂')return 239;
    if(char == '×')return 241;
    if(char == '.')return 242;
    if(char == '/')return 243;
    if(char == ',')return 244;
    if(char == '♀')return 245;

}