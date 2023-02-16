const getTag = (a) => { 
    return a.replace(/\s/g, '_');
}

function toUcWord(){
    let sp = this.split(' ');
    let final = '';
    sp.forEach(e=>{
        final += e.charAt(0).toUpperCase() + e.slice(1) +" ";
    });
    return final.trim();
}

export { getTag, toUcWord };