// Generated by gfwlist2pac
// https://github.com/clowwindy/gfwlist2pac

var proxy = "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080; DIRECT";

var domains = {
  "wikipedia.org": 1, 
  "evernote.com": 1, 
  "h2database.com": 1, 
  "activiti.org": 1, 
  "youtu.be": 1, 
  "stackoverflow.com": 1, 
  "dmm.co.jp": 1, 
  "blogspot.in": 1, 
  "docker.io": 1, 
  "jetbrain.com": 1, 
  "nerd-herders.com": 1, 
  "optimizely.com": 1, 
  "google.com.hk": 1, 
  "google.com.sg": 1, 
  "99soft.org": 1, 
  "copy.com": 1, 
  "akamaihd.net": 1, 
  "google.co.id": 1, 
  "imgmega.com": 1, 
  "xbeta.info": 1, 
  "blogspot.co.id": 1, 
  "googlesyndication.com": 1, 
  "amazonaws.com": 1, 
  "slack.com": 1, 
  "thoughtworks.com": 1, 
  "javmoo.xyz": 1, 
  "atlassian.com": 1, 
  "github.com": 1, 
  "swagger.io": 1, 
  "regex101.com": 1, 
  "github.io": 1, 
  "blogspot.com": 1, 
  "google.com.tw": 1, 
  "snsoso.com": 1, 
  "gistboxapp.com": 1, 
  "google.com": 1, 
  "google.com.ph": 1, 
  "apache.org": 1, 
  "co.uk": 1, 
  "googleapis.com": 1, 
  "macrumors.com": 1, 
  "google.co.jp": 1, 
  "d3js.org": 1, 
  "interviewcake.com": 1, 
  "co.hk": 1, 
  "avmoo.net": 1
};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    pos = host.lastIndexOf('.', pos - 1);
    while(1) {
        if (pos <= 0) {
            if (hasOwnProperty.call(domains, host)) {
                return proxy;
            } else {
                return direct;
            }
        }
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
}
