function descuento(compra,dia){
    dia = dia.toLowerCase();
    let arrayNew = [];
    let totalCD = 0;
    let totalSD = 0;
    let c10 = 0;
    switch (dia) {
        case 'martes' || 'jueves':
            for (const obj of compra) {
                console.log(obj)
                if(obj>10000){
                    c10++
                    console.log(c10)
                }
            }
            if(compra.length>3 && c10>0){
                    for(let i = 0 ; i< compra.length; i++){
                        totalSD += compra[i]
                        arrayNew.push(compra[i]-(compra[i] * 0.25));
                        totalCD += arrayNew[i];
                    }
                    console.log(totalCD);
                    return `el total de la compra es: $${totalSD}, pero con descuento le quedo: $${Math.trunc(totalCD)}, con un descuento de: $${Math.trunc(totalSD-totalCD)}`;
            }else{
                    for(let i = 0 ; i< compra.length; i++){
                        totalSD += compra[i]
                        arrayNew.push(compra[i]-(compra[i] * 0.20));
                        totalCD += arrayNew[i];
                    }
                    console.log(totalCD);
                    return `el total de la compra es: $${totalSD}, pero con descuento le quedo: $${Math.trunc(totalCD)}, con un descuento de: $${Math.trunc(totalSD-totalCD)}`;
                }
        case 'lunes' || 'miercoles' || 'viernes' || 'sabado' || 'domingo': 
                for (const obj of compra) {
                    console.log(obj)
                    if(obj>10000){
                        c10++
                        console.log(c10)
                    }
                }
                if(compra.length>3 && c10>0){
                        for(let i = 0 ; i< compra.length; i++){
                            totalSD += compra[i]
                            arrayNew.push(compra[i]-(compra[i] * 0.05));
                            totalCD += arrayNew[i];
                        }
                    console.log(totalCD);
                    return `el total de la compra es: $${totalSD}, pero con descuento le quedo: $${Math.trunc(totalCD)}, con un descuento de: $${Math.trunc(totalSD-totalCD)}`;
                }else{
                        for(let i = 0 ; i< compra.length; i++){
                            totalSD += compra[i]
                            arrayNew.push(compra[i]-(compra[i]));
                            totalCD += arrayNew[i];
                        }
                    console.log(totalCD);
                    return `el total de la compra es: $${totalSD}`;
                }
        
        default:
            return `uno de los valores es invalido`;
    }
}
console.log(descuento([200,2002,200,2000],'lunes'));
function precioNegativo(compra){
    let contadorN = 0;
    for (const obj of compra) {
        if(obj<0){
            contadorN++
        } 
    }
    if(contadorN>0){
        return `hay ${contadorN} con precio negativo, por favor verificar`
    }else{
        return `no hay precios negativos`
    }
}
console.log(precioNegativo([1000,3000,-34000,-3000,-1999]))

function masCostoso(compra){
    let ordenar = compra.sort(function(a, b){return a - b})
    ordenar
    return compra[ordenar.length - 1]
}

console.log(masCostoso( [200,5500,900,7000,500,300]))

function menosCostoso(compra){
    let ordenar = compra.sort(function(a, b){return a - b})
    ordenar
    return compra[0]
}
console.log(menosCostoso( [200,5500,900,7000,500,300]))