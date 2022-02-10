
Vue.config.devtools = true;
var app = new Vue({
    el: "#app",
    data: {
        visible: false,
        active: "",
        genres: [],
        platforms: [],
        votes: [],
        orderSelected: "title",
        voteSelected: "all",
        genreSelected: "all",
        platformSelected: "all",
        filtered: [],
        cards: [
            {
                title: "La casa di carta",
                genre: ["Crime", "Thriller"],
                seasons: 5,
                state: "Conclusa",
                flag: "es",
                vote: 8,
                story: "Otto ladri si barricano nell'edificio della Zecca spagnola con alcuni ostaggi, mentre una mente criminale manipola la polizia per mettere in atto il suo piano.",
                considerations: "Tra le migliori serie tv spagnole, anche se 3 e 4 stagione non sono all'altezza delle prime 2.",
                platform: "netflix"
            },
            {
                title: "After life",
                genre: ["Commedia", "Drammatico"],
                seasons: 2,
                state: "In corso",
                flag: "gb",
                vote: 9,
                story: "Un giornalista cerca di superare la morte della moglie trasformandosi in un burbero, nel tentativo di tenere lontane le persone che vogliono aiutarlo.",
                considerations: "Commedia divertente e strappa lacrime che tiene incollati dall'inizio alla fine.",
                platform: "netflix"
            },
            {
                title: "Alto mare",
                genre: ["Crime", "Drammatico", "Giallo"],
                seasons: 3,
                state: "Conclusa",
                flag: "es",
                vote: 7,
                story: "Due sorelle scoprono inquietanti segreti di famiglia dopo una misteriosa serie di omicidi a bordo di una nave di lusso in viaggio dalla Spagna al Brasile negli anni '40.",
                considerations: "Serie carina, piena di colpi di scena, recitazione non troppo eccelsa, trama molto bella.",
                platform: "netflix"
            },
            {
                title: "Atypical",
                genre: ["Commedia", "Drammatico"],
                seasons: 4,
                state: "Conclusa",
                flag: "us",
                vote: 9,
                story: "Un adolescente con disturbi dello spettro autistico decide di trovarsi una ragazza e il suo bisogno d'indipendenza spinge l'intera famiglia a rimettersi in discussione.",
                considerations: "Un mix tra divertimento e riflessione, recitazione straordinaria e trama ottima.",
                platform: "netflix"
            },
            {
                title: "Bridgerton",
                genre: ["Sentimentale", "Drammatico"],
                seasons: 1,
                state: "In corso",
                flag: "us",
                vote: 9,
                story: "Gli otto affiatati fratelli della famiglia Bridgerton cercano l'amore e la felicità nell'alta società londinese. Ispirata ai romanzi di successo di Julia Quinn.",
                considerations: "Ambientazione e costumi perfetti, voto molto alto ma potrebbe cambiare con le prossime stagioni.",
                platform: "netflix"
            },
            {
                title: "Che fine ha fatto Sara",
                genre: ["Drammatico", "Giallo", "Thriller"],
                seasons: 2,
                state: "In corso",
                flag: "mx",
                vote: 8,
                story: "Determinato a vendicarsi e a provare di essere stato incastrato per l'omicidio della sorella, Álex cerca di scoprire molto più del vero colpevole del crimine.",
                considerations: "Produzione messicana sopra ogni aspettativa, recitazione non al top ma trama coinvolgente.",
                platform: "netflix"
            },
            {
                title: "Cobra kai",
                genre: ["Commedia", "Azione", "Drammatico"],
                seasons: 4,
                state: "In corso",
                flag: "us",
                vote: 8,
                story: "Decenni dopo il torneo che ha cambiato le loro vite, la rivalità tra Johnny e Daniel si riaccende in questo sequel della saga di \"Karate Kid\".",
                considerations: "Riesce ad appassionare anche i non appassionati del genere, mai noiosa.",
                platform: "netflix"
            },
            {
                title: "Dash e Lily",
                genre: ["Commedia", "Sentimentale"],
                seasons: 1,
                state: "In corso",
                flag: "us",
                vote: 5,
                story: "Gli opposti si attraggono a Natale quando il cinico Dash e la solare Lily si scambiano messaggi e sfide in un diario rosso che si passano in giro per New York.",
                considerations: "Commedia natalizia che non ha nulla di particolare.",
                platform: "netflix"
            },
            {
                title: "Dead to me",
                genre: ["Commedia"],
                seasons: 2,
                state: "In corso",
                flag: "us",
                vote: 7,
                story: "Una vedova irascibile in cerca di chi ha investito il marito stringe amicizia con una donna eccentrica e ottimista che non è esattamente come sembra.",
                considerations: "Serie leggera, carina e divertente.",
                platform: "netflix"
            },
            {
                title: "Dietro i suoi occhi",
                genre: ["Thriller"],
                seasons: 1,
                state: "Miniserie",
                flag: "gb",
                vote: 7,
                story: "Diventata amante del capo e poi amica segreta della sua enigmatica moglie, una madre single si trova coinvolta in una perversa realtà di giochi psicologici.",
                considerations: "Bel thriller coinvolgente, unica pecca il finale paranormale che fa calare il voto.",
                platform: "netflix"
            },
            {
                title: "Equinox",
                genre: ["Thriller", "Giallo"],
                seasons: 1,
                state: "Miniserie",
                flag: "dk",
                vote: 7,
                story: "Tormentata da strane visioni dopo ventun anni dalla scomparsa della sorella e dei suoi compagni di classe, Astrid inizia a investigare per scoprire l'inquietante verità.",
                considerations: "Molto bello, anche se ci si aspettava un finale diverso, meno \"fantasy\".",
                platform: "netflix"
            },
            {
                title: "Estate di morte",
                genre: ["Thriller", "Giallo"],
                seasons: 1,
                state: "In corso",
                flag: "pl",
                vote: 7,
                story: "Le prove rinvenute sul corpo di una vittima accendono le speranze di un procuratore: la sorella scomparsa 25 anni prima potrebbe essere ancora viva.",
                considerations: "Trama bella e coinvolgente, in attesa di una eventuale seconda stagione",
                platform: "netflix"
            },
            {
                title: "Fleabag",
                genre: ["Commedia"],
                seasons: 2,
                state: "Conclusa",
                flag: "gb",
                vote: 9,
                story: "Una donna londinese ha una vita problematica, dovuta ad una famiglia disfunzionale, alle difficoltà economiche legate alla gestione di una caffetteria e alla sua instabile quanto frenetica vita sessuale e sentimentale.",
                considerations: "Creata, scritta e interpretata da Phoebe Waller-Bridge, tra le migliori serie in circolazione.",
                platform: "prime"
            },
            {
                title: "Il caos dopo di te",
                genre: ["Giallo", "Thriller", "Drammatico"],
                seasons: 1,
                state: "Miniserie",
                flag: "es",
                vote: 8,
                story: "All'inizio del suo incarico, una professoressa è tormentata da una morte sospetta avvenuta poche settimane prima nella scuola... e inizia a temere per la propria vita.",
                considerations: "Ottimo thriller spagnolo, trama coinvolgente e con molti colpi di scena.",
                platform: "netflix"
            },
            {
                title: "Il metodo Kominsky",
                genre: ["Commedia"],
                seasons: 3,
                state: "Conclusa",
                flag: "us",
                vote: 8,
                story: "L'insegnante di recitazione Sandy Kominsky e il suo grande amico Norman Newlander si tengono allegri mentre affrontano gli alti e bassi legati all'invecchiamento.",
                considerations: "Bellissima commedia divertente, un mix tra leggerezza e drammaticità.",
                platform: "netflix"
            },
            {
                title: "Into the night",
                genre: ["Thriller", "Drammatico"],
                seasons: 1,
                state: "In corso",
                flag: "be",
                vote: 5,
                story: "I passeggeri e l'equipaggio di un volo notturno dirottato fanno di tutto per evitare i raggi del sole mentre un misterioso evento cosmico semina devastazione a terra.",
                considerations: "Recitazione non eccelsa, lento e un pò noioso, potrebbe migliorare nelle prossime stagioni.",
                platform: "netflix"
            },
            {
                title: "La fantastica signora Maisel",
                genre: ["Drammatico", "Commedia"],
                seasons: 3,
                state: "In corso",
                flag: "us",
                vote: 10,
                story: "Verso la fine degli anni Cinquanta, l'esistenza di Miriam, apparentemente idilliaca, prende una piega sorprendente quando la donna scopre di avere un talento nascosto per la commedia.",
                considerations: "Ambientazioni e costumi che ti fanno vivere l'epoca, recitazione al top, nessun difetto. Capolavoro.",
                platform: "prime"
            },
            {
                title: "La regina degli scacchi",
                genre: ["Drammatico"],
                seasons: 1,
                state: "Miniserie",
                flag: "us",
                vote: 10,
                story: "In un orfanotrofio negli anni '50 una ragazzina rivela un talento incredibile per gli scacchi che la porta verso la fama, ma intanto lotta con un problema di dipendenza.",
                considerations: "Interpretazione sontuosa, ha appassionato anche chi di scacchi non capisce nulla. Questo dice tutto.",
                platform: "netflix"
            },
            {
                title: "L'estate in cui imparammo a volare",
                genre: ["Drammatico", "Sentimentale"],
                seasons: 1,
                state: "In corso",
                flag: "us",
                vote: 4,
                story: "Le amiche Tully e Kate si sostengono nelle difficoltà e nei momenti più belli grazie al legame profondo che le unisce dall'adolescenza ai 40 anni.",
                considerations: "Poco interessante e noioso, interrotto dopo il primo episodio.",
                platform: "netflix"
            },
            {
                title: "Lupin",
                genre: ["Azione", "Giallo", "Drammatico"],
                seasons: 2,
                state: "In corso",
                flag: "fr",
                vote: 8,
                story: "Ispirandosi alle avventure di Arsenio Lupin, il ladro gentiluomo Assane Diop decide di vendicare il padre per un'ingiustizia subita per colpa di una ricca famiglia.",
                considerations: "Molto coinvolgente e ben fatto, trama bellissima, in attesa delle stagioni successive.",
                platform: "netflix"
            },
            {
                title: "Messiah",
                genre: ["Thriller", "Drammatico"],
                seasons: 1,
                state: "Cancellata",
                flag: "us",
                vote: 6,
                story: "Una diffidente agente della CIA indaga su un personaggio carismatico che genera un movimento spirituale e tensioni politiche. Una storia non basata su fatti reali.",
                considerations: "Cancellata dopo una stagione per motivi religiosi, peccato era interessante.",
                platform: "netflix"
            },
            {
                title: "Natale con uno sconosciuto",
                genre: ["Commedia", "Drammatico", "Sentimentale"],
                seasons: 2,
                state: "In corso",
                flag: "no",
                vote: 6,
                story: "Stanca dei continui commenti sul suo essere eternamente single, Johanne si mette a cercare un fidanzato da portare a casa per Natale. Ha 24 giorni di tempo per riuscirci.",
                considerations: "Serie natalizia norvegese, carina e leggera.",
                platform: "netflix"
            },
            {
                title: "New Amsterdam",
                genre: ["Drammatico"],
                seasons: 1,
                state: "In corso",
                flag: "us",
                vote: 8,
                story: "L'ospedale più antico d'America dà il benvenuto a un nuovo direttore medico, l'anticonformista Max Goodwin, deciso a mutare lo status quo e salvare le vite dei pazienti.",
                considerations: "Cast importante, episodi sempre interessanti, varie problematiche trattate, bellissima serie.",
                platform: "netflix"
            },
            {
                title: "Northern rescue",
                genre: ["Drammatico"],
                seasons: 1,
                state: "In corso",
                flag: "ca",
                vote: 6,
                story: "Dopo la morte improvvisa della moglie, il comandante di un'unità di ricerca e soccorso John West torna con i tre figli nella città natale a Turtle Island Bay.",
                considerations: "Serie canadese non particolare ma godibile.",
                platform: "netflix"
            },
            {
                title: "Peaky blinders",
                genre: ["Drammatico", "Crime"],
                seasons: 5,
                state: "In corso",
                flag: "gb",
                vote: 9,
                story: "Nella Birmingham del 1919, il boss della malavita Tommy Shelby è sempre più deciso a farsi strada nella vita, a qualunque prezzo.",
                considerations: "Ambientato negli anni 20, serie cult per gli amanti del genere, stupenda.",
                platform: "netflix"
            },
            {
                title: "Ratched",
                genre: ["Drammatico"],
                seasons: 1,
                state: "In corso",
                flag: "us",
                vote: 7,
                story: "Nel 1947 Mildred Ratched inizia a lavorare come infermiera in un rinomato ospedale psichiatrico... ma sotto il suo aspetto raffinato si cela un lato oscuro.",
                considerations: "Serie elegante e ben recitata, interpretata divinamente da Sarah Paulson.",
                platform: "netflix"
            },
            {
                title: "Riverdale",
                genre: ["Drammatico", "Giallo"],
                seasons: 4,
                state: "In corso",
                flag: "us",
                vote: 6,
                story: "Impegnati a districarsi tra sesso, amori, scuola e famiglia, l'adolescente Archie e i suoi amici si ritrovano invischiati in un cupo mistero a Riverdale.",
                considerations: "Prima stagione da 9 poi un calare, a tratti cade nell'assurdità, adolescenziale.",
                platform: "netflix"
            },
            {
                title: "Russian doll",
                genre: ["Commedia", "Drammatico"],
                seasons: 1,
                state: "In corso",
                flag: "us",
                vote: 5,
                story: "Nadia continua a morire e a rivivere il suo trentaseiesimo compleanno, bloccata in un loop temporale che non le lascia via di fuga davanti all'abisso della mortalità.",
                considerations: "Interrotto dopo qualche episodio, trovato noioso e lento.",
                platform: "netflix"
            },
            {
                title: "Safe",
                genre: ["Thriller", "Drammatico", "Giallo"],
                seasons: 1,
                state: "Miniserie",
                flag: "gb",
                vote: 7,
                story: "Quando la figlia adolescente scompare, un chirurgo vedovo che vive in un quartiere benestante comincia a scoprire gli oscuri segreti delle persone che gli stanno intorno.",
                considerations: "Thriller abbastanza carino, cast buono e trama interessante.",
                platform: "netflix"
            },
            {
                title: "Snowpiercer",
                genre: ["Fantascienza", "Drammatico", "Thriller"],
                seasons: 2,
                state: "In corso",
                flag: "us",
                vote: 4,
                story: "La terra è ghiacciata e gli ultimi umani sopravvissuti vivono su un enorme treno che gira intorno al globo, cercando di coesistere in un delicato equilibrio.",
                considerations: "Nonostante abbia guardato più episodi l'ho trovato noioso, interrotto.",
                platform: "netflix"
            },
            {
                title: "Lost",
                genre: ["Fantascienza", "Drammatico", "Thriller"],
                seasons: 6,
                state: "Conclusa",
                flag: "us",
                vote: 8,
                story: "Quando un aereo precipita, quarantotto superstiti trovano rifugio su un'isola deserta. Tutti si trovano ad adattare le proprie scelte etiche, religiose e politiche a quelle degli altri per permettere al gruppo di sopravvivere.",
                considerations: "Ha fatto la storia delle serie tv, bellissima a parte un finale discutibile.",
                platform: "disney+"
            },
            {
                title: "The 100",
                genre: ["Fantascienza", "Drammatico", "Azione"],
                seasons: 6,
                state: "In corso",
                flag: "us",
                vote: 6,
                story: "Un secolo dopo la devastazione nucleare della Terra, da una stazione spaziale vengono inviate 100 persone sul pianeta per vedere se è ancora abitabile.",
                considerations: "Se fosse durata 3 stagioni sarebbe stata da 8/9, ma dopo molto meno interessante.",
                platform: "netflix"
            },
            {
                title: "The good place",
                genre: ["Commedia", "Fantascienza"],
                seasons: 4,
                state: "Conclusa",
                flag: "us",
                vote: 9,
                story: "Dopo la morte, l'egocentrica Eleanor Shellstrop finisce per errore in Paradiso, dove cerca di diventare una persona migliore per evitare di essere scoperta.",
                considerations: "Divertente, intelligente, significativo, sono alcuni aggettivi di questa sitcom geniale.",
                platform: "netflix"
            },
            {
                title: "The haunting of hill house",
                genre: ["Fantascienza", "Horror", "Drammatico"],
                seasons: 1,
                state: "Miniserie",
                flag: "us",
                vote: 8,
                story: "I membri di una famiglia divisa affrontano i ricordi tormentosi legati alla loro vecchia casa e gli eventi terrificanti che li hanno spinti ad abbandonarla.",
                considerations: "Mantiene viva l'attenzione dello spettatore dall'inizio alla fine, molto bella.",
                platform: "netflix"
            },
            {
                title: "The last word",
                genre: ["Commedia", "Drammatico"],
                seasons: 1,
                state: "In corso",
                flag: "de",
                vote: 4,
                story: "Una donna rimasta di colpo vedova si riappassiona alla vita diventando un'elogista di professione, mentre si misura con il panorama esistenziale di morte, dolore e amore.",
                considerations: "Non colpisce sotto ogni punto di vista, interrotto.",
                platform: "netflix"
            },
            {
                title: "The sinner",
                genre: ["Thriller", "Drammatico", "Giallo"],
                seasons: 3,
                state: "In corso",
                flag: "us",
                vote: 8,
                story: "In una piccola cittadina dello stato di New York, un detective tormentato dai suoi conflitti interiori va a caccia di risposte per risolvere crimini sconcertanti.",
                considerations: "Thriller antologico pieno di colpi di scena e misteri da scoprire, molto bello.",
                platform: "netflix"
            },
            {
                title: "Torno per natale",
                genre: ["Sentimentale", "Drammatico", "Commedia"],
                seasons: 1,
                state: "Miniserie",
                flag: "de",
                vote: 5,
                story: "Tornato a casa per Natale, il musicista spiantato Bastian combatte la malinconia che l'assale e affronta una serie di sorprese poco piacevoli.",
                considerations: "Leggero ma a tratti scontato, godibile ma senza niente di particolare.",
                platform: "netflix"
            },
            {
                title: "Upload",
                genre: ["Fantascienza", "Drammatico", "Commedia"],
                seasons: 1,
                state: "In corso",
                flag: "us",
                vote: 8,
                story: "2033, in un futuro in cui gli esseri umani sono in grado di \"caricare\" la propria coscienza, al momento della morte del proprio corpo, in un aldilà digitale.",
                considerations: "Tratta la morte in modo fantasioso ma la storia è molto coinvolgente, in attesa di nuove stagioni.",
                platform: "prime"
            },
            {
                title: "Virgin river",
                genre: ["Sentimentale", "Drammatico"],
                seasons: 3,
                state: "In corso",
                flag: "us",
                vote: 9,
                story: "In cerca di un nuovo inizio, un'infermiera specializzata lascia Los Angeles per trasferirsi in una remota cittadina a nord che si rivelerà piena di sorprese.",
                considerations: "Tratta dai romanzi di Robyn Carr, imperdibile per gi amanti del genere.",
                platform: "netflix"
            },
            {
                title: "Forever",
                genre: ["Commedia", "Drammatico"],
                seasons: 1,
                state: "Miniserie",
                flag: "us",
                vote: 6,
                story: "Le esistenze di June e Oscar prendono una svolta inaspettata quando i due si ritrovano in un territorio del tutto sconosciuto, interrogandosi sull'amore e sul loro stesso matrimonio.",
                considerations: "Breve, a volte lenta e triste, nonostante abbia deluso le aspettative resta un prodotto carino.",
                platform: "prime"
            },
            {
                title: "Sky rojo",
                genre: ["Azione", "Drammatico"],
                seasons: 2,
                state: "In corso",
                flag: "es",
                vote: 7,
                story: "Un tragico incidente in un bordello spinge tre donne con un passato difficile in una pazza fuga dal loro protettore e dai suoi scagnozzi.",
                considerations: "Coinvolgente e piena d'azione, vista con scetticismo, rimasto colpito positivamente.",
                platform: "netflix"
            },
            {
                title: "Sparita nel nulla",
                genre: ["Thriller", "Drammatico"],
                seasons: 1,
                state: "In corso",
                flag: "es",
                vote: 7,
                story: "Per ritrovare la figlia vittima di un rapimento, Antonio si fa mandare in una prigione in Colombia innescando una serie di eventi che coinvolgeranno molte persone.",
                considerations: "Un crescendo episodio dopo episodio, interessante fino alla fine, mai noioso.",
                platform: "netflix"
            },
            {
                title: "Good omens",
                genre: ["Commedia", "Fantascienza"],
                seasons: 1,
                state: "Miniserie",
                flag: "gb",
                vote: 6,
                story: "Una coppia, formata da un angelo e da un demone, deve unire le forze ed escogitare un modo per salvare il pianeta, mentre la fine dei tempi si avvicina in maniera inevitabile ed inesorabile.",
                considerations: "Inizialmente può sembrare poco interessante ma, tutto sommato, ben fatta e con un bel finale.",
                platform: "prime"
            },
            {
                title: "The missing",
                genre: ["Thriller", "Drammatico", "Giallo"],
                seasons: 2,
                state: "Conclusa",
                flag: "gb",
                vote: 8,
                story: "Incentrata, in ogni stagione, su un caso di scomparsa del figlio. Mischia mistero e angoscia, al dramma psicologico e personale di chi rimane nella sua quotidianità, privato del proprio figlio.",
                considerations: "Serie antologica ricca di momenti di suspense, con ambientazioni costruite alla perfezione e una recitazione di alto livello.",
                platform: "prime"
            },
            {
                title: "Mindhunter",
                genre: ["Thriller", "Crime", "Drammatico"],
                seasons: 2,
                state: "In corso",
                flag: "us",
                vote: 7,
                story: "Alla fine degli anni '70 due agenti dell'FBI danno impulso alla criminologia scavando nella psicologia degli assassini ed entrando in contatto con mostri troppo reali.",
                considerations: "Basata su reali serial killer degli anni 70, riesce a coinvolgerti e a farti comprendere la loro psicologia.",
                platform: "netflix"
            },
            {
                title: "Generazione 56k",
                genre: ["Commedia", "Sentimentale"],
                seasons: 1,
                state: "In corso",
                flag: "it",
                vote: 8,
                story: "Un incontro casuale porta due trentenni a ricordare il 1998, l'anno della loro prima tempesta ormonale e della svolta epocale portata da Internet nelle loro vite.",
                considerations: "Ti riporta negli anni 90 lasciandoti un pizzico di malinconia. Emozionante, da guardare tutto di un fiato.",
                platform: "netflix"
            },
            {
                title: "Sex life",
                genre: ["Drammatico", "Sentimentale", "Erotico"],
                seasons: 1,
                state: "In corso",
                flag: "us",
                vote: 7,
                story: "Una donna vede scontrarsi i suoi audaci trascorsi sessuali e il suo presente di moglie e mamma quando nella sua vita ricompare un ex ribelle che non riesce a dimenticare.",
                considerations: "La difficile scelta tra una vita perfetta e l'amore mai dimenticato rende questa serie interessante, anche se un pò troppo esplicita.",
                platform: "netflix"
            },
            {
                title: "Lucifer",
                genre: ["Drammatico", "Fantascienza", "Commedia"],
                seasons: 6,
                state: "Conclusa",
                flag: "us",
                vote: 8,
                story: "Stanco di essere il Signore degli inferi, il diavolo si trasferisce a Los Angeles, dove apre un nightclub e stabilisce un legame con una detective della omicidi.",
                considerations: "Lunga, ad alcuni tratti ripetitiva e lenta ma nel complesso divertente e con un bel finale.",
                platform: "netflix"
            },
            {
                title: "Squid game",
                genre: ["Drammatico", "Azione", "Thriller"],
                seasons: 1,
                state: "In corso",
                flag: "kr",
                vote: 9,
                story: "Centinaia di individui a corto di denaro accettano uno strano invito a competere in giochi per bambini. Li attende un premio invitante, ma la posta in gioco è mortale.",
                considerations: "Drama coreano dal successo mondiale, coinvolgente nonostante lingua coreana con sottotitoli, imperdibile.",
                platform: "netflix"
            },
            {
                title: "Sex education",
                genre: ["Drammatico", "Sentimentale", "Commedia"],
                seasons: 3,
                state: "In corso",
                flag: "gb",
                vote: 8,
                story: "L'insicuro Otis sa tutto sul sesso, grazie alla madre terapeuta. Così la ribelle Maeve gli propone di fondare una clinica all'interno della scuola.",
                considerations: "Commedia divertente, incentrata sul sesso in età adolescenziale, coinvolgente e con un cast eccellente.",
                platform: "netflix"
            },
            {
                title: "Guida Astrologica per cuori infranti",
                genre: ["Commedia", "Sentimentale"],
                seasons: 1,
                state: "In corso",
                flag: "it",
                vote: 5,
                story: "Alice è affranta e disperatamente single. Ma dopo aver stretto amicizia con un carismatico guru dell'astrologia, si rivolge alle stelle per trovare l'anima gemella.",
                considerations: "La recitazione non eccelsa e la trama abbassano il voto finale.",
                platform: "netflix"
            },
            {
                title: "Cruel Summer",
                genre: ["Thriller", "Drammatico"],
                seasons: 1,
                state: "In corso",
                flag: "us",
                vote: 9,
                story: "La serie segue due adolescenti: Kate Wallis, una ragazza popolare amata da tutti, e la timida e introversa Jeanette Turner. Nel 1993 Kate scompare per mano del nuovo vice preside Martin Harris, e Jeanette prende il sopravvento su quella che era la sua vita.",
                considerations: "Thriller psicologico con colpi di scena dall'inizio fino agli ultimi 10 secondi dell'ultimo episodio, stupendo.",
                platform: "prime"
            },
            {
                title: "You",
                genre: ["Thriller", "Drammatico"],
                seasons: 3,
                state: "In corso",
                flag: "us",
                vote: 9,
                story: "Un ragazzo pericolosamente affascinante e profondamente ossessivo ricorre a misure estreme per entrare nelle vite delle persone che lo attraggono.",
                considerations: "Nonostante il copione sia più o meno lo stesso in ogni stagione non si riesce a fare a meno di guardarla.",
                platform: "netflix"
            },
            {
                title: "Strappare lungo i bordi",
                genre: ["Animazione", "Commedia"],
                seasons: 1,
                state: "In corso",
                flag: "it",
                vote: 9,
                story: "Un fumettista romano la cui coscienza prende le forme di un armadillo riflette sulla sua vita e un amore mancato mentre con due amici si reca fuori città.",
                considerations: "Un viaggio nei sentimenti, dalle risate alla commozione, una perla.",
                platform: "netflix"
            },
            {
                title: "Incastrati",
                genre: ["Commedia", "Thriller", "Giallo"],
                seasons: 1,
                state: "In corso",
                flag: "it",
                vote: 9,
                story: "Due sfortunati tecnici della TV si ritrovano per caso sulla scena di un delitto e per evitare di essere sospettati finiscono per mettersi sempre più nei guai.",
                considerations: "Non ha nulla a che vedere con le solite commedie italiane, è di un livello molto superiore, da non perdere.",
                platform: "netflix"
            }
        ]
    },
    methods: {
        cardSelected(index) {
            if(index == this.active) {
                this.visible = !this.visible;
            } else {
                this.active = index;
                this.visible = true;
            }
        },
        genreArray() {
            this.filtered.forEach(element => {
                for (let i = 0; i < element.genre.length; i++) {
                    if (!this.genres.includes(element.genre[i])) {
                        this.genres.push(element.genre[i]);
                    }
                }
            });
            this.genres.sort();
        },
        platformArray() {
            this.filtered.forEach(element => {
                if(!this.platforms.includes(element.platform)) {
                    this.platforms.push(element.platform);
                }
            });
            this.platforms.sort();
        },
        voteArray() {
            this.filtered.forEach(element => {
                if (!this.votes.includes(element.vote)) {
                    this.votes.push(element.vote);
                }
            });
            this.votes.sort(function(x, y) {
                return y - x;
            });
        },
        sortForVote() {
            this.filtered.sort(function(x, y) {
                return y.vote - x.vote;
            });
        },
        sortForTitle() {
            this.filtered.sort(function(a, b) {
                var titleA = a.title.toUpperCase();
                var titleB = b.title.toUpperCase();
                if(titleA < titleB) {
                    return -1;
                } else if (titleA > titleB) {
                    return 1;
                } else {
                    return 0;
                }
            });
        },
        changeSelected() {
            if (this.orderSelected == "title") {
                this.sortForTitle();
            } else if (this.orderSelected == "vote") {
                this.sortForVote();
            }
        },
        filterCard() {
            this.filtered = [];
            this.cards.forEach(card => {
                if(((this.voteSelected == card.vote) || (this.voteSelected == 'all')) && ((card.genre.includes(this.genreSelected)) || (this.genreSelected == 'all')) && ((this.platformSelected == card.platform) || (this.platformSelected == 'all'))) {
                    this.filtered.push(card);
                }
            });
        },
        refreshPage() {
            location.reload();
        },
        fullStars(card) {
            var fullStars = Math.floor(card.vote / 2);
            return fullStars;
        },
        halfStars(card) {
            if(card.vote % 2 != 0) {
                return true;
            }
            return false;
        },
        emptyStars(card) {
            var emptyStars = Math.ceil(card.vote / 2);
            return (5 - emptyStars);
        }
    },
    mounted() {
        this.filtered = this.cards;
        this.genreArray();
        this.platformArray();
        this.voteArray();
        this.sortForTitle();
    }
});