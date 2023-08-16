document.getElementById("Celsius").addEventListener("keypress",function(event){
        if(event.key==='Enter'){
            const data=parseInt(document.getElementById("Celsius").value);
            const fahreheit=data*(9/5)+32;
            const kelvin=data+273.15;
            document.getElementById("Fahreheit").value=fahreheit+" F";
    document.getElementById("Kelvin").value=kelvin+" K";
        }
})
document.getElementById("Fahreheit").addEventListener("keypress",function(event){
    if(event.key==='Enter'){
        const data=parseInt(document.getElementById("Fahreheit").value);
        const celsius=((data-32)*5)/9;
        const kelvin=(data+459.67)*(5/9);
        document.getElementById("Celsius").value=celsius+" C";
document.getElementById("Kelvin").value=kelvin+" K";
    }
})
document.getElementById("Kelvin").addEventListener("keypress",function(event){
    if(event.key==='Enter'){
        const data=parseInt(document.getElementById("Kelvin").value);
        const celsius=(data-273.15);
        const fahreheit=(data-273.15)*(9/5)+32;
        document.getElementById("Celsius").value=celsius+" C";
document.getElementById("Fahreheit").value=fahreheit+" F";
    }
})