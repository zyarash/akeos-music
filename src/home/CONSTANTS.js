const MAILING_LIST_LINK = "https://www.toneden.io/akeos/post/join-the-akeos-mailing-list";

function Release(name, path, link) {
  this.name = name;
  this.path = "/MUSIC/" + path;
  this.link = link;
  this.img = path;
}

const RELEASES = [
  new Release("MATERIAL EP", "MATERIALEP.png", "https://nsd.lnk.to/NSDX176"),
  new Release("IDENTITY THEFT VIP", "IDENTITYTHEFTVIP.png", "https://www.toneden.io/akeos/post/akeos-syzy-identity-theft-akeos-vip"),
  new Release("LOL OK", "LOLOK.png", "https://nsd.lnk.to/NSDS120"),
  new Release("SKENG", "SKENG.png", "https://nsd.lnk.to/NSDBLS042"),
  new Release("FEEL IT ALL REMIX", "FEELITALL.png", "https://nsd.lnk.to/NSDS108"),
  new Release("CYCLOPS COMPILATION", "CYCLOPSCOMPILATION.png", "https://outnow.io/t/bootcamp"),
  new Release("BLACK OPS XL3", "BLACKOPSXL3.png", "https://nsd.lnk.to/NSDBOXL03"),
  new Release("SQUIGGLE THE LINES", "SQUIGGLETHELINES.png", "https://bassrush.ffm.to/squigglethelines"),
  new Release("THUMBS", "THUMBS.png", "https://fanlink.to/THUMBS"),
  new Release("MONROVIA", "MONROVIA.png", "http://smarturl.it/SubsidiaDusk"),
  new Release("HEARTBREAK REMIX", "HEARTBREAKREMIX.png", "https://gudvibrations.lnk.to/HBremixes"),
  new Release("HALCYON COMPILATION", "HALCYONCOMPILATION.png", "https://go.halcyon.fm/hsv1"),
  new Release("DERMA CRUSH", "DERMACRUSH.png", "https://nsd.lnk.to/NSDBLS034"),
  new Release("CRIMSON CRATER", "CRIMSONCRATER.png", "https://bassrush.ffm.to/crimsoncrater"),
  new Release("TOLL GATE", "TOLLGATE.png", "https://gudvibrations.ffm.to/tollgate"),
  new Release("INSOMNIA EP", "INSOMNIAEP.png", "https://nsd.lnk.to/NSDBL103"),
  new Release("PHASEONE REMIX", "PHASEONEREMIX.png", "https://disc.fanlink.to/TranscendencyRemixes"),
  new Release("SERIAL LIVE EP", "SERIALLIVEEP.png", "https://disc.fanlink.to/SerialLiveEP"),
  new Release("STFU", "STFU.png", "https://open.spotify.com/track/3gsFRdu4EDnQfvs5dRxDNW?si=970cd6ce8f2b4a7d"),
  new Release("TERMINAL PARADE", "TERMINALPARADE.png", "https://www.gate.fm/tksmsYV"),
  new Release("LABRYINTH EP", "LABRYINTHEP.png", "https://nsd.lnk.to/NSDBL081"),
]


function Tour(date, name, venue, loc, sk_link, ticket_link, past) {
    this.date = date;
    this.name = name;
    this.venue = venue;
    this.loc = loc;
    this.sk_link = sk_link;
    this.ticket_link = ticket_link;
}

const TOURS = [
    new Tour(
        "SEPTEMBER 24, 2021",
        "LOST LANDS",
        "LEGEND VALLEY",
        "THORNVILLE OH, USA",
        "https://www.songkick.com/festivals/1632659-lost-lands/id/39935702-lost-lands-2021",
        "https://www.lostlandsfestival.com/",
        0
    ),
    new Tour(
        "APRIL 03, 2020",
        "BASS INFERNO",
        "CERVANTES' MASTERPIECE BALLROOM",
        "DENVER CO, USA",
        "",
        "",
        1
    ),
    new Tour(
    ),
    new Tour(
    )
]

export { MAILING_LIST_LINK, RELEASES };
