const address = "1.1.1.1";
let splitedstr=address.split("");
for(i=0;i<splitedstr.length;i++){
    if(splitedstr[i]=="."){
       splitedstr[i]="[.]"
    }
}
let defangIPAddress=splitedstr.join('')
console.log(defangIPAddress);
