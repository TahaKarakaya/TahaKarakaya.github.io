var names=new Array();
names[0]="jason";
names[1]="John";
names[2]="Jen";
names[3]="Yaakov";
names[4]="frank";
names[5]="paul";
names[6]="jim";
names[7]="paula";
names[8]="laura";
names[9]="larry";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}