function padLeft(text, amount, ch = " "){
    for(let i = 0; i < amount; i++){
        text = ch + text;
    }
    return text
}