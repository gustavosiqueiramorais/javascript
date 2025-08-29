function parImpar(n){
    if (n % 2 == 0){
        return "par";
    } else {
        return "impar";
    }
}

var resp = parImpar(4);
console.log(resp);