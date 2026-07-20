export interface Sito {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  gallery: { label: string; caption: string }[];
}

export const sitiArcheologici: Sito[] = [
  {
    slug: 'mura-poligonali',
    title: 'Mura Poligonali',
    subtitle: 'Il circuito murario dell’antica Signia',
    description: 'Il circuito murario in opera poligonale dell’antica Signia, lungo poco più di 5 Km, è perfettamente intatto e visitabile per quasi tutta la sua estensione.\n\nLungo il percorso delle mura, costruite a grandi blocchi di calcare, si aprono numerose porte, ingressi principali alla città, quali Porta Foca, Porta dell’Elcino e Porta Saracena, divenuta il simbolo della città. A un restauro tardo repubblicano si deve invece ascrivere la monumentale Porta Maggiore, ancora oggi ingresso principale al centro storico di Segni. Lungo l’antico circuito difensivo si aprono anche porte di minori dimensioni, chiamate posterule, che servivano per gli spostamenti di tutti i giorni e, in caso di assedio per le cosiddette sortite. Di queste se ne conservano due nel tratto delle mura a monte di Porta Saracena, mentre un’altra, denominata Porta San Pietro, situata al di sotto dell’omonima chiesa, è tra le più suggestive con la sua terminazione ad ogiva.\n\nIl poderoso circuito in poligonale fu riutilizzato per la difesa anche in epoca medievale: restauri e rialzamenti in blocchi di tufo e materiali di riutilizzo si notano in tutto il versante meridionale e orientale delle mura, fino alla cd. Porta delle Monache, in prossimità dell’acropoli. Il fianco occidentale, facente capo a Porta Saracena, venne però abbandonato e la linea di difesa della città arretrata, sfruttando invece gli alti e possenti terrazzamenti d’età romana, che su questo lato della città antica ben si potevano adattare al ruolo di difesa.',
    gallery: [
      { label: 'Mura 1 - 1200x900', caption: 'Veduta panoramica delle mura poligonali' },
      { label: 'Mura 2 - 1200x900', caption: 'Dettaglio della muratura in opera poligonale' },
      { label: 'Mura 3 - 1200x900', caption: 'Porta di accesso nord-est' },
      { label: 'Mura 4 - 1200x900', caption: 'Torre difensiva e tratto di cinta' },
    ],
  },
  {
    slug: 'ninfeo',
    title: 'Ninfeo di Q. Mutius',
    subtitle: 'La firma dell’architetto sulla fontana monumentale',
    description: 'Il Ninfeo di <em>Q. Mutius</em> a Segni, fontana monumentale perfettamente conservata e databile al tardo II secolo a.C. – inizi I sec. a.C., costituisce una testimonianza fondamentale dell’architettura romana della tarda repubblica. L’eccezionalità del monumento è data tuttavia dalla presenza di un’iscrizione, ben visibile nella decorazione a mosaico rustico al centro del prospetto principale del ninfeo. Qui, in una cornice formata da gusci di <em>telline</em> e sullo sfondo di un mosaico bianco a tessere irregolari di calcare, si legge, in lettere greche formate da perline di <em>blu egiziano</em>, la firma dell’architetto che progettò il ninfeo: Quintus Mutius. La firma dell’architetto ne fa l’unico monumento di quell’importantissima fase di elaborazione artistica del quale conosciamo tanto la struttura quanto il nome del suo progettista, testimonianza di valore unico per lo studio di un momento formativo dell’architettura romana intera.\n\nIl Ninfeo di Segni doveva fare parte di un più ampio complesso, del quale conosciamo oggi solo alcune poderose strutture di contenimento in opera poligonale e opera incerta che delimitavano una grande terrazza artificiale.',
    gallery: [
      { label: 'Ninfeo 1 - 1200x900', caption: 'Facciata del ninfeo in opera reticolata' },
      { label: 'Ninfeo 2 - 1200x900', caption: 'Dettaglio dell\'iscrizione dedicatoria' },
      { label: 'Ninfeo 3 - 1200x900', caption: 'Resti della vasca centrale' },
      { label: 'Ninfeo 4 - 1200x900', caption: 'Pianta schematica del monumento' },
    ],
  },
  {
    slug: 'acropoli',
    title: 'Acropoli',
    subtitle: 'Il cuore sacro e strategico della città',
    description: 'L’area dell’antica acropoli, situata sulla sommità del monte, riuniva in un unico organismo architettonico almeno tre elementi di grande rilievo per la città antica: il tempio, dedicato a Giunone Moneta, con la sua piazza antistante; il grande bacino circolare posto alle sue spalle, quale esempio più noto di <em>opus signinum</em> e, oltre questo, la piccola terrazza terminale, destinata ad ospitare un qualche edificio ormai perduto. La grande struttura, quale oggi percepibile, è il risultato finale di una lunga serie di interventi, dei quali non è spesso possibile distinguere le varie fasi, ma di cui è possibile individuare nel tardo II secolo a.C. una generale riorganizzazione architettonica, conferendo all’acropoli di Segni i caratteri propri delle maggiori architetture del tardo ellenismo, quali noi oggi possiamo pienamente apprezzare.\n\nMentre nella città romana l’acropoli era destinata ad ospitare il culto della divinità protettrice della città, nel medioevo acquisisce un ruolo prettamente strategico, in virtù del fatto che era il luogo più incline a essere fortificato e sicuramente quello maggiormente difendibile.\n\nSe è possibile che la sistemazione di <em>questo castrum</em> possa risalire già ai primi secoli dell’alto medioevo, in maniera analoga a molte altre città in questo periodo, in un arco di tempo compreso tra il XII e il XIII secolo numerosi interventi sembrano modificare ulteriormente l’aspetto di questa zona, che dovette accentuare il carattere di borgo fortificato. In questo momento, infatti, oltre agli interventi architettonici riscontrabili nella chiesa di San Pietro, i documenti ci attestano la costruzione di un palazzo da parte del pontefice Eugenio III, probabilmente nel posto oggi occupato dal maestoso complesso dell’ex Seminario Vescovile.',
    gallery: [
      { label: 'Acropoli 1 - 1200x900', caption: 'Veduta dell\'area dell\'acropoli' },
      { label: 'Acropoli 2 - 1200x900', caption: 'Resti del tempio arcaico' },
      { label: 'Acropoli 3 - 1200x900', caption: 'Materiale votivo rinvenuto' },
      { label: 'Acropoli 4 - 1200x900', caption: 'Ricostruzione del santuario' },
    ],
  },
  {
    slug: 'foro',
    title: 'Area del Foro',
    subtitle: 'Il fulcro della vita cittadina',
    description: 'L’antico Foro di Segni occupava l’area dell’attuale Piazza S. Maria, la quale ha perpetuato nel corso dei secoli il ruolo di fulcro della vita cittadina svolto dall’antico spazio forense. Nella pianificazione urbanistica della città antica, la piazza del Foro venne collocata nel punto di incrocio dei due maggiori assi viari: il primo, con andamento nord-sud, collegava la porta principale della città con l’acropoli; il secondo, est-ovest, raccordava la piazza con un altro ingresso di notevole importanza, la porta cd. dell’Elcino. Sono ancora oggi in più punti visibili i resti di alcuni dei grandi terrazzamenti su cui venne impostata la piazza, che testimoniano, con la loro disposizione planimetrica e la loro complessità strutturale, l’accurata progettazione che sottostava a tali opere. Nel tardo I sec. a.C., in una zona adiacente al foro e gravitante sul principale asse est-ovest della viabilità urbana, venne costruito un grande criptoportico, oggi parzialmente visitabile lungo via Lauri.\n\nIn età medievale la piazza continuò a costituire il fulcro della vita cittadina, modificando però il suo assetto interno e ospitando i complessi architettonici che erano l’espressione della società dell’epoca. Se pochi materiali di arredo liturgico, appartenenti alla fine dell’VIII – inizi del IX secolo e provenienti dalla cattedrale, sembrano indicare interventi databili già nell’alto medioevo, la maggior parte delle strutture finora indagate è da riferirsi al XII – XIII secolo. Questi edifici sono la testimonianza diretta della trasformazione del nuovo assetto raggiunto dalla piazza, ricco di significati politici ed economici nella netta distinzione fra spazi civili e spazi religiosi, in una fase di grande vitalità sociale ed economica della città.\n\nDi fondamentale importanza per comprendere l’assetto dell’area in epoca antica e medievale, sono stati i risultati della campagna di scavo 2012-2014, denominata <em>Segni Project</em>, svolta con la preziosa collaborazione della British School at Rome.',
    gallery: [
      { label: 'Foro 1 - 1200x900', caption: 'Pavimentazione in travertino' },
      { label: 'Foro 2 - 1200x900', caption: 'Resti della basilica civile' },
      { label: 'Foro 3 - 1200x900', caption: 'Area del comitium' },
      { label: 'Foro 4 - 1200x900', caption: 'Ricostruzione planimetrica' },
    ],
  },
  {
    slug: 'santa-lucia',
    title: 'Complesso Santa Lucia',
    subtitle: 'Un complesso ellenistico e la canonizzazione di Becket',
    description: 'Il complesso di Santa Lucia sorge nell’area alta della città, lungo il fianco orientale delle fortificazioni dalle quali era separato da un grande muraglione di contenimento in opera incerta di calcare. Si tratta dei resti di un grande complesso sostruttivo, databile intorno alla metà del II secolo a.C., impostato su una serie di ambienti voltati affacciati verso la valle e destinati a sorreggere un’ampia terrazza destinata a ospitare un qualche importante monumento, verosimilmente pubblico, a noi oggi completamente ignoto. In epoca medievale, su questa serie di arcate, così come documentato da fotografie dei primi anni del ‘900, si impostò la chiesa dedicata a Santa Lucia, ricordata e descritta nel manoscritto di Gregorio Lauri (1701-1708). L’edificio ecclesiastico aveva una cappella dedicata a Tomas Becket, che nel febbraio del 1173 fu qui canonizzato da Papa Alessandro III.',
    gallery: [
      { label: 'Santa Lucia 1 - 1200x900', caption: 'Veduta del complesso monumentale' },
      { label: 'Santa Lucia 2 - 1200x900', caption: 'Mosaico pavimentale con motivi geometrici' },
      { label: 'Santa Lucia 3 - 1200x900', caption: 'Resti delle terme romane' },
      { label: 'Santa Lucia 4 - 1200x900', caption: 'Stratigrafia del sito' },
    ],
  },
  {
    slug: 'tempio-ercole',
    title: 'Area del Tempio d’Ercole',
    subtitle: 'Il santuario del dio protettore della pastorizia',
    description: 'Il complesso architettonico occupava un’ampia terrazza artificiale, in parte sostruita da poderose cisterne in cementizio, ancora oggi perfettamente conservate, posta subito al di fuori di Porta Maggiore a una quota sensibilmente inferiore rispetto a questa. Si collocava in un punto nodale della viabilità suburbana, lì dove confluivano verso l’entrata principale della città i maggiori assi provenienti dal territorio e costituiva una sorta di secondo foro in cui probabilmente si svolgeva il commercio del bestiame e la macellazione delle carni. Il ritrovamento di tre basi con dedica a Ercole e un cospicuo nucleo di terrecotte architettoniche, conservate al Museo Archeologico, fanno supporre proprio in quest’area un tempio dedicato al dio protettore della pastorizia. In epoca medievale quest’area fu occupata da diverse sepolture, così come descritto nelle notizie degli scavi effettuati da Ettore Ghislanzoni agli inizi del ‘900.',
    gallery: [
      { label: 'Tempio 1 - 1200x900', caption: 'Resti del podio templare' },
      { label: 'Tempio 2 - 1200x900', caption: 'Elementi architettonici in terracotta' },
      { label: 'Tempio 3 - 1200x900', caption: 'Materiale votivo rinvenuto' },
      { label: 'Tempio 4 - 1200x900', caption: 'Ricostruzione del tempio' },
    ],
  },
];

export interface Chiesa {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  history: string;
  features: string;
}

export const chiese: Chiesa[] = [
  {
    slug: 'cattedrale',
    title: 'Cattedrale Santa Maria Assunta',
    subtitle: 'Il capolavoro barocco di Giovanni Battista Roderi',
    description: 'Il maestoso edificio della Cattedrale, dedicata a Santa Maria Assunta, fu ricostruito dalle fondamenta nel 1657, il progetto fu affidato all’architetto Giovanni Battista Roderi. La pianta della Cattedrale è a croce greca, con sei cappelle e quattro altari ai lati, abbondantemente decorati con stucchi, ori e marmi pregiati e tutte arricchite da tele e affreschi, opera di famosi artisti del ‘600 e del ‘700. Tra questi ricordiamo Lazzaro Baldi, che esegue gli affreschi nella cappella di San Bruno, i fratelli Courtois, autori dell’affresco della cupola centrale, raffigurante l’incoronazione di Maria in cielo, e dei dipinti della cappella della Croce e ancora Francesco Cozza, autore della prestigiosa tela che rappresenta “L’incredulità di San Tommaso”, Giovanni Battista Gaulli, detto il Baciccio, che decora la cappella di San Francesco con scene di vita del santo, Alessandro Carchenne, autore delle grandi tele del presbiterio con scene di vita della Vergine Maria e Ignazio Tirinelli della tela posta come pala d’altare, raffigurante Maria Assunta in cielo. E ancora un organo Morettini del 1850, ancora perfettamente funzionante e molte altre opere d’arte di pittori, artigiani, scultori che sono stati i protagonisti di questo complesso architettonico degno di nota.\n\nAll’esterno, la facciata fu rivestita in pietra locale nel 1817, a spese del Vescovo Ciotti e in stile neoclassico.',
    history: 'L’edificio attuale sostituisce la precedente struttura medievale di cui rimangono poche tracce. La ricostruzione seicentesca ha conferito alla Cattedrale il suo attuale aspetto monumentale, rendendola uno dei più importanti esempi di architettura barocca nel territorio. Gli interventi dell’Ottocento hanno poi completato il rivestimento esterno e arricchito il patrimonio organario.',
    features: 'Pianta a croce greca, sei cappelle laterali con altari in marmi policromi, cupola affrescata dai Courtois, organo Morettini (1850), facciata neoclassica in pietra locale.',
  },
  {
    slug: 'san-pietro',
    title: 'Chiesa di San Pietro',
    subtitle: 'Sulle vestigia del Tempio di Giunone Moneta',
    description: 'La chiesa di San Pietro si trova nell’area dell’antica acropoli ed è costruita sui resti di quello che era il grande tempio di Giunone Moneta (II secolo a.C.), di cui rimangono il podio e parte della cella centrale sulla quale oggi si innalza l’edificio cristiano. La trasformazione da tempio pagano a chiesa, probabilmente è avvenuta già in epoca altomedievale, ma a livello architettonico non rimane nulla di questo periodo, fatta eccezione per pochi, ma significativi frammenti di decorazione in marmo, alcuni reimpiegati come materiale da costruzione nel campanile romanico, insieme ad un altro esemplare oggi esposto presso il Museo Archeologico Comunale.\n\nLa chiesa è costituita da un’unica navata, anche se nella parete di destra sono ancora visibili tre ampie arcate, che farebbero pensare almeno ad un’altra piccola navata posta su questo lato dell’edificio. All’interno di questi archi, costruiti in epoca medievale, durante alcuni lavori di restauro, effettuati nell’anno 1965, sono stati scoperti alcuni affreschi. Il primo, databile al XIII secolo, raffigura una <em>Madonna in trono con il Bambino</em>; degli inizi del XV secolo, invece, è l’affresco di <em>San Sebastiano</em>.\n\nSulla parete di sinistra, in una nicchia leggermente incassata nel muro, un affresco del XVI secolo raffigura una <em>Madonna con il Bambino e ai lati i due Santi Diaconi, Lorenzo e Stefano, sul lato sinistro in basso il profilo di un Santo con capelli e barba bianchi</em>.\n\nCome pala d’altare vi è San Pietro (olio su tela – 1907) dipinto dal Tadolini, dello stesso autore è il quadro che chiude la nicchia di San Gaetano. A destra sull’altare “<em>Conferimento del primato dell’apostolo Pietro</em>” (olio su tela – seconda metà del XVI secolo) Anonimo',
    history: 'Dell’epoca altomedievale rimangono frammenti marmorei nel campanile romanico. Nel 1965 sono stati riscoperti affreschi del XIII secolo (Madonna in trono), del XV (San Sebastiano) e del XVI (Madonna con Bambino e Santi Diaconi). La pala d’altare è del Tadolini (1907).',
    features: 'Podio del tempio romano, campanile romanico, affreschi del XIII-XVI secolo, pala d’altare di Tadolini.',
  },
  {
    slug: 'gesu',
    title: 'Chiesa del Gesù',
    subtitle: 'Santuario della Madonna Addolorata',
    description: 'Costruita il 9 settembre 1713, quando era vescovo Filippo Michele Ellis, la piccola chiesa è a navata unica con sei cappelle laterali e un presbiterio separato dall’aula da una balaustra in legno.',
    history: 'Fu consacrata il 4 ottobre 1734 dal Vescovo Giovanni Battista Bisleti (1716 – 1749), e al suo interno conserva il quadro, ritenuto miracoloso e venerato dalla città, della <em>Madonna Addolorata</em>, che sembra avere forte analogie con quello della scuola del Guido Reni (1575 – 1652), conservato a Firenze nella Galleria degli Uffizi: “Vergine in contemplazione”.\n\nAnnesso alla chiesa, nella seconda metà del 1700 i Padri Dottrinari costruirono il Palazzo che dal 1876 divenne sede del Comune di Segni. Il rettore Battista Ardizzoni di Nizza, ottenuta dai suoi superiori la facoltà di prendere in prestito 3500 scudi per la costruzione, incaricò l’architetto Domenico Simonetti di Como di redigerne il progetto.',
    features: 'Navata unica, sei cappelle laterali, dipinto della Madonna Addolorata, balaustra lignea del presbiterio.',
  },
  {
    slug: 'san-stefano',
    title: 'Chiesa di Santo Stefano',
    subtitle: 'Tradizione e memoria nel quartiere ebraico',
    description: 'Secondo la tradizione popolare, la chiesa di Santo Stefano sorge sui resti di un antica sinagoga, nel quartiere ebraico della città, questo giustificherebbe anche la dedica della chiesa al primo Santo martire di origine ebraica. Distrutta durante i bombardamenti della II Guerra Mondiale, fu ricostruita, lasciando della fabbrica originale soltanto il campanile romanico, ancora oggi visibile e probabilmente il più antico della città.',
    history: 'Della struttura medievale (XII-XIII secolo) rimangono alcune tracce di un portico, visibili in parte nella facciata esterna e in alcuni locali interni, che originariamente precedeva l’ingresso della chiesa. La dedica a Santo Stefano Protomartire avvalora l’ipotesi del sito sinagogale preesistente.',
    features: 'Campanile romanico (XII secolo), tracce di portico medievale, architettura di ricostruzione post-bellica.',
  },
];

export interface Edificio {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  history: string;
  architecture: string;
}

export const edifici: Edificio[] = [
  {
    slug: 'palazzo-comunita',
    title: 'Antico Palazzo della Comunità',
    subtitle: 'Sede del governo civico medievale',
    description: 'Il palazzo fu costruito verso la metà del XIII secolo e fu la sede del Comune fino al 1876. Dal 2001 ospita il Museo Archeologico Comunale di Segni. Nella sua fase originaria l’edificio doveva essere costituito da un portico al pianterreno formato da una serie di arcate a tutto sesto, che alternano blocchetti di calcare a quelli di tufo, dando un effetto bicromo molto vivace.',
    history: 'Al secondo piano si apriva una loggia con ampi finestroni ad arco acuto in blocchetti di tufo e al terzo piano probabilmente vi era una seconda loggia, più piccola. Il palazzo, come mostra la muratura stessa portata alla luce durante i restauri effettuati proprio in occasione dell’individuazione dell’edificio come sede museale, ha subito numerosi rifacimenti nel corso dei secoli. Una ricostruzione del Palazzo e dell’assetto della piazza nel Duecento si trova nelle sezioni medievali del percorso espositivo del Museo.',
    architecture: 'Portico al pianterreno con arcate a tutto sesto (calcare e tufo), loggia al secondo piano con finestre ad arco acuto, resti di loggia al terzo piano, muratura storica con stratificazione di rifacimenti.',
  },
  {
    slug: 'vescovado',
    title: 'Vescovado',
    subtitle: 'Sede vescovile millenaria',
    description: 'Le fasi più antiche del Palazzo Episcopale, ancora oggi visibile lungo l’attuale via Rossi, possono datarsi attorno al XII – XIII secolo, come si presume dalla muratura rinvenuta sotto l’intonaco moderno, recuperata in seguito a recenti lavori di ripristino e riadattamento della struttura, tanto all’esterno che all’interno, in alcune stanze del palazzo. Oltre al tessuto murario in blocchetti di calcare, comune agli altri edifici medievali conservati nel centro storico della città, sono emerse anche numerose bifore, alcune visibili su questo lato della strada, diverse tra loro per stile e decorazione.',
    history: 'La Diocesi di Segni è attestata a partire dal 499, anno in cui il vescovo Santulo fu chiamato a sottoscrivere nel sinodo romano, indetto da papa Simmaco. La Diocesi comprendeva, oltre la città di Segni, anche i territori degli attuali Comuni di Artena (Montefortino), Colleferro, Gavignano, Montelanico e Valmontone, rimase sede di Diocesi fino al 1986, quando fu poi unita a quella di Velletri.',
    architecture: 'Muratura medievale in calcare, numerose bifore di differenti stili, stratificazioni dal XII secolo all’epoca moderna.',
  },
  {
    slug: 'palazzo-conti',
    title: 'Palazzo Conti',
    subtitle: 'Residenza nobiliare all’ingresso della città',
    description: 'Vasto complesso architettonico che include la monumentale Porta Maggiore. Sebbene di origine medievale, l’aspetto attuale risale in gran parte ai restauri successivi al saccheggio del 1557 operato dalle truppe di Marcantonio Colonna.',
    history: 'Restaurato da Alessandro Conti Sforza nel XVI secolo. Nel 1887 il Vescovo Biagio Sibilia lo acquistò per conto di Leone XIII, affidandolo alle suore di Santa Giovanna Antida per l’educazione della gioventù femminile.',
    architecture: 'Integrazione con Porta Maggiore, torre quadrata medievale, facciata rinascimentale, resti di muratura in via dell’Asilo.',
  },
];

export interface Artifact {
  name: string;
  description: string;
  object?: string;
  provenance?: string;
  dating?: string;
  room?: string;
  bibliography?: string;
}

export interface Collezione {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  items: Artifact[];
}

export const collezioni: Collezione[] = [
  {
    slug: 'necropoli',
    title: 'Necropoli',
    subtitle: 'Corredi funerari e materiali dalle necropoli',
    description: 'La collezione comprende oggetti rinvenuti nelle necropoli dell’antica Signia e del territorio circostante. I reperti documentano le credenze e le pratiche relative al mondo dei morti dall’età del Ferro all’epoca romana imperiale.',
    items: [
      {
        name: 'Testa funeraria maschile',
        description: 'In marmo bianco, appartenente al ceto dirigente della società signina, con fronte aggrottata e calvo.',
        object: 'Testa funeraria maschile in marmo bianco. Il personaggio rappresentato, forse appartenente al ceto dirigente della società signina, è calvo e con la fronte aggrottata: tali caratteri sono allusivi alla dignità della vecchiaia e alla severità dei costumi, valori nei quali si riconosceva la classe dirigente romana.',
        provenance: 'Segni, prov. ignota',
        dating: 'Metà del I sec. a. C.',
        room: 'Le necropoli',
        bibliography: 'CIFARELLI – COLAIACOMO – STRAZZULLA 2006, tav. III.',
      },
      {
        name: 'Ara funeraria circolare',
        description: 'Frammento decorato con fregio dorico, ghirlande e bucrani, reimpiegata come vera di pozzo.',
        object: 'Frammento di ara funeraria circolare decorata con fregio dorico, ghirlande e bucrani stilizzati. Il pezzo, pur essendo frammentario, testimonia la produzione scultorea di elevata qualità presente nel territorio signino.',
        provenance: 'Segni',
        dating: 'I sec. a. C.',
        room: 'Le necropoli',
      },
      {
        name: 'Corredo da Tre Acacie',
        description: 'Corredo di una sepoltura rinvenuto nella villa di Tre Acacie, Segni, risalente al II-III secolo d.C.',
        object: 'Corredo funerario rinvenuto nella villa rustica di Tre Acacie, composto da ceramiche, vetri e oggetti personali. Il corredo documenta le pratiche sepolcrali di epoca imperiale nel territorio di Signia.',
        provenance: 'Villa di Tre Acacie, Segni',
        dating: 'II-III sec. d. C.',
        room: 'Le necropoli',
      },
      {
        name: 'Urna cineraria',
        description: 'Contenitore per le ceneri con decorazioni geometriche.',
        object: 'Urna cineraria in pietra locale con coperchio, decorata con motivi geometrici incisi. Destinata alla conservazione delle ceneri del defunto dopo la cremazione.',
        provenance: 'Segni',
        dating: 'I sec. a. C.',
        room: 'Le necropoli',
      },
    ],
  },
  {
    slug: 'doni',
    title: 'Votivi',
    subtitle: 'I doni agli dei',
    description: 'Questa collezione raccoglie gli oggetti votivi offerti agli dei nei santuari dell’antica Signia, principalmente dall’Acropoli e dal Tempio di Ercole, illustrando la profonda religiosità della comunità antica.',
    items: [
      {
        name: 'Melograno votivo',
        description: 'Di forma sferica, originariamente verniciato di rosso, proveniente dall’Acropoli di Segni.',
        object: 'Melograno votivo in terracotta di forma sferica, originariamente verniciato di rosso. Il melograno era simbolo di fertilità e rinascita, offerto nelle aree sacre come dono agli dei.',
        provenance: 'Acropoli di Segni',
        dating: 'III-II sec. a. C.',
        room: 'I votivi',
      },
      {
        name: 'Mammella votiva',
        description: 'Di forma emisferica, con tracce di pittura rossa, proveniente dall’Acropoli di Segni.',
        object: 'Mammella votiva in terracotta di forma emisferica, con tracce di pittura rossa. Le offerte anatomiche rappresentavano le parti del corpo da guarire o per cui si richiedeva intercessione divina.',
        provenance: 'Acropoli di Segni',
        dating: 'III-II sec. a. C.',
        room: 'I votivi',
      },
      {
        name: 'Bambolina snodabile',
        description: 'Statuetta femminile votiva ad arti snodabili, III-II secolo a.C., dall’Acropoli.',
        object: 'Statuetta femminile votiva in terracotta ad arti snodabili, con dettagli delle vesti e dell’acconciatura. Le bamboline votive erano offerte a divinità femminili legate alla sfera domestica e riproduttiva.',
        provenance: 'Acropoli di Segni',
        dating: 'III-II sec. a. C.',
        room: 'I votivi',
      },
      {
        name: 'Testa di bambino in fasce',
        description: 'Testa votiva di fanciullo con capelli a ciocche resi da solcature oblique.',
        object: 'Testa votiva in terracotta raffigurante un fanciullo con capelli a ciocche resi da solcature oblique, avvolto in fasce. Le teste infantili erano offerte per chiedere protezione sui figli.',
        provenance: 'Acropoli di Segni',
        dating: 'III-II sec. a. C.',
        room: 'I votivi',
      },
      {
        name: 'Minerva',
        description: 'Statuetta votiva raffigurante Minerva con chitone e mantello.',
        object: 'Statuetta votiva in terracotta raffigurante Minerva, riconoscibile per l’elmo e lo scudo, con chitone lungo e mantello. Offerta nei santuari come protettrice della città e delle arti.',
        provenance: 'Tempio di Ercole, Segni',
        dating: 'III-II sec. a. C.',
        room: 'I votivi',
      },
      {
        name: 'Ercole in bronzo',
        description: 'Statuetta in bronzo di Ercole in assalto, con clava sollevata e leontè sull’avambraccio.',
        object: 'Statuetta in bronzo di Ercole raffigurato in assalto, con clava sollevata e la leontè avvolta sull’avambraccio. Pezzo di elevata qualità fusa, testimonianza del culto erculeo nel territorio.',
        provenance: 'Tempio di Ercole, Segni',
        dating: 'II-I sec. a. C.',
        room: 'I votivi',
      },
    ],
  },
  {
    slug: 'materiali',
    title: 'I materiali più antichi',
    subtitle: 'Fine VII-VI secolo a.C.',
    description: 'I reperti più antichi del territorio di Segni, che documentano la frequentazione dell’area ben prima della monumentalizzazione della città romana.',
    items: [
      {
        name: 'Coppa attica',
        description: 'Frammento del tipo Piccoli Maestri, dal deposito votivo del tempio di Giunone Moneta.',
        object: 'Frammento di coppa attica del tipo Piccoli Maestri, con decorazione a figure nere. Il frammento documenta gli scambi commerciali e culturali tra Segni e il mondo greco già in epoca arcaica.',
        provenance: 'Tempio di Giunone Moneta, Acropoli',
        dating: 'Fine VII-inizi VI sec. a. C.',
        room: 'I materiali più antichi',
      },
      {
        name: 'Vaso d’impasto',
        description: 'Frammento con decorazione incisa, dallo scavo presso Porta Foca.',
        object: 'Frammento di vaso d’impasto con decorazione geometrica incisa. Tipico della produzione locale di epoca arcaica, testimonia le abilità ceramiche delle popolazioni preromane del territorio.',
        provenance: 'Porta Foca, Segni',
        dating: 'Fine VII-inizi VI sec. a. C.',
        room: 'I materiali più antichi',
      },
      {
        name: 'Fuseruole troncoconiche',
        description: 'In impasto, rinvenute presso Porta Foca (fine VII - inizi VI sec. a.C.).',
        object: 'Fuseruole troncoconiche in impasto, utilizzate per filare la lana e tessere. Oggetti della vita quotidiana che testimoniano le attività domestiche nelle abitazioni arcaiche.',
        provenance: 'Porta Foca, Segni',
        dating: 'Fine VII-inizi VI sec. a. C.',
        room: 'I materiali più antichi',
      },
      {
        name: 'Kantharoi d’impasto',
        description: 'Dallo scavo della SBAL vicino a Porta Foca, fine VII-VI secolo a.C.',
        object: 'Kantharoi in impasto con anse alte, tipici della ceramica locale di epoca arcaica. Utilizzati come coppe da bere, documentano le abitudini conviviali e il banchetto nelle comunità locali.',
        provenance: 'Porta Foca, Segni',
        dating: 'Fine VII-VI sec. a. C.',
        room: 'I materiali più antichi',
      },
    ],
  },
  {
    slug: 'iscrizioni',
    title: 'Le iscrizioni',
    subtitle: 'La voce della pietra: area del tempio d’Ercole e Foro',
    description: 'La collezione epigrafica documenta la vita istituzionale e religiosa della città attraverso testi su pietra, marmo e bronzo.',
    items: [
      {
        name: 'Dedica ad Ercole',
        description: 'Frammento di cippo in calcare con dedica da parte di Timocles Medicus.',
        object: 'Frammento di cippo in calcare con iscrizione dedicatoria ad Ercole da parte di Timocles, figlio di Medico. Il testo, in latino, documenta il culto erculeo e la presenza di famiglie di origine greca nel territorio.',
        provenance: 'Area del Tempio di Ercole, Segni',
        dating: 'I sec. a. C.',
        room: 'Le iscrizioni',
      },
      {
        name: 'Cippo di L. Cretarius',
        description: 'Cippo frammentario in travertino con iscrizione dedicatoria ad Ercole.',
        object: 'Cippo frammentario in travertino con iscrizione dedicatoria ad Ercole da parte di Lucio Cretario. Il monumento testimonia la devozione privata nei confronti del dio protettore della città.',
        provenance: 'Area del Tempio di Ercole, Segni',
        dating: 'I sec. a. C.',
        room: 'Le iscrizioni',
      },
      {
        name: 'Peso in calcare',
        description: 'Con maniglione di bronzo e cifra incisa XX (20 libre).',
        object: 'Peso commerciale in calcare con maniglione di bronzo e cifra incisa XX corrispondente a 20 libre romane. Attestazione delle attività commerciali e della regolamentazione dei pesi nella città antica.',
        provenance: 'Foro di Segni',
        dating: 'I sec. a. C.',
        room: 'Le iscrizioni',
      },
      {
        name: 'Iscrizione dei Cosmati',
        description: 'Ricorda l’attività di Lorenzo e Jacopo Cosmati presso la Cattedrale nel 1185.',
        object: 'Lastra in marmo con iscrizione che ricorda l’attività dei marmorari Lorenzo e Jacopo Cosmati presso la Cattedrale di Segni nel 1185. Documento fondamentale per la storia dell’arte medievale nel Lazio.',
        provenance: 'Cattedrale di Segni',
        dating: '1185 d. C.',
        room: 'Le iscrizioni',
      },
    ],
  },
  {
    slug: 'produzioni',
    title: 'Le produzioni e i bolli',
    subtitle: 'Artigianato e commercio nel territorio',
    description: 'Testimonianze della produzione locale di ceramica e laterizi, con i bolli che identificano le officine e i proprietari terrieri.',
    items: [
      {
        name: 'Bollo CLAUDI PRISC',
        description: 'Frammento di tegola in laterizio dalla villa rustica di Tre Acacie.',
        object: 'Frammento di tegola in laterizio con bollo CLAUDI PRISC, indicante il proprietario terriero o l’officina produttrice. Il bollo documenta l’organizzazione della produzione laterizia nel territorio signino.',
        provenance: 'Villa rustica di Tre Acacie, Segni',
        dating: 'I sec. d. C.',
        room: 'Le produzioni e i bolli',
      },
      {
        name: 'Sigillata italica',
        description: 'Fondo di piatto con bollo in planta pedis C·ME·R e palmetta.',
        object: 'Fondo di piatto in sigillata italica con bollo in planta pedis recante le lettere C·ME·R e decorazione a palmetta. Ceramica da mensa di alta qualità prodotta nelle officine dell’Italia centrale.',
        provenance: 'Segni',
        dating: 'I sec. a. C.',
        room: 'Le produzioni e i bolli',
      },
      {
        name: 'Bollo dei quattuorviri',
        description: 'Tegola che ricorda Manio Occio e Tito Manlio (da Gavignano).',
        object: 'Tegola in laterizio con bollo che ricorda i quattuorviri Manio Occio e Tito Manlio, magistrati locali. Il reperto, rinvenuto a Gavignano, testimonia i collegamenti amministrativi tra i centri del territorio.',
        provenance: 'Gavignano',
        dating: 'I sec. a. C.',
        room: 'Le produzioni e i bolli',
      },
      {
        name: 'Lucerna NERI',
        description: 'Del tipo Firmalampen con marchio di fabbrica NERI.',
        object: 'Lucerna del tipo Firmalampen con marchio di fabbrica NERI impresso sul disco. Le lucerne marchiate erano prodotte in serie nelle officine del centro Italia e diffuse in tutto il Mediterraneo romano.',
        provenance: 'Segni',
        dating: 'I-II sec. d. C.',
        room: 'Le produzioni e i bolli',
      },
      {
        name: 'Anello distanziatore',
        description: 'Incisione L. FIGULUS, dal deposito votivo dell’acropoli.',
        object: 'Anello distanziatore in terracotta con incisione L. FIGULUS, nome dell’artigiano o del proprietario. Oggetto utilizzato nella cottura della ceramica per separare i pezzi in fornace.',
        provenance: 'Acropoli di Segni',
        dating: 'I sec. a. C.',
        room: 'Le produzioni e i bolli',
      },
    ],
  },
  {
    slug: 'sculture',
    title: 'Le sculture e le decorazioni',
    subtitle: 'Arte e decorazione architettonica',
    description: 'Opere in marmo e pietra che decoravano gli edifici pubblici e privati della città, dai ritratti alle decorazioni architettoniche.',
    items: [
      {
        name: 'Statua funeraria femminile',
        description: 'In marmo bianco, dalla località Fratteto.',
        object: 'Statua funeraria femminile in marmo bianco, raffigurante una matrona con acconciatura complessa e drappeggio elaborato. Il pezzo, dalla località Fratteto, è esempio di arte funeraria di epoca romana.',
        provenance: 'Fratteto, Segni',
        dating: 'I sec. a. C.',
        room: 'Le sculture e le decorazioni',
      },
      {
        name: 'Trave decorata',
        description: 'Frammento in calcare con lacunari decorati da motivi floreali.',
        object: 'Frammento di trave in calcare con lacunari decorati da motivi floreali e vegetali. Elemento architettonico che decorava il soffitto di un edificio pubblico o privato di elevato rango.',
        provenance: 'Segni',
        dating: 'I sec. a. C.',
        room: 'Le sculture e le decorazioni',
      },
      {
        name: 'Ara circolare',
        description: 'Decorata con triglifi, ghirlande e bucrani stilizzati (I sec. a.C.).',
        object: 'Ara circolare in pietra decorata con triglifi, ghirlande e bucrani stilizzati. Monumento funerario o votivo di gusto classicistico, testimonianza della produzione scultorea locale.',
        provenance: 'Segni',
        dating: 'I sec. a. C.',
        room: 'Le sculture e le decorazioni',
      },
      {
        name: 'Satiro',
        description: 'Piccola scultura in marmo dall’area alle spalle del Comune.',
        object: 'Piccola scultura in marmo raffigurante un satiro, personaggio del seguito dionisiaco. Il pezzo, dall’area alle spalle del Comune, decorava probabilmente una fontana o un ninfeo.',
        provenance: 'Area alle spalle del Comune, Segni',
        dating: 'I sec. a. C.',
        room: 'Le sculture e le decorazioni',
      },
      {
        name: 'Augusto con aquila',
        description: 'Frammento di statua maschile in marmo dall’area del foro.',
        object: 'Frammento di statua maschile in marmo dall’area del foro, raffigurante probabilmente l’imperatore Augusto con aquila. Il pezzo testimonia la presenza di monumenti celebrativi del potere imperiale nella città.',
        provenance: 'Foro di Segni',
        dating: 'I sec. a. C.',
        room: 'Le sculture e le decorazioni',
      },
    ],
  },
  {
    slug: 'terrecotte',
    title: 'Le terrecotte architettoniche',
    subtitle: 'Rivestimenti e decorazioni fittili',
    description: 'La ricca collezione di terrecotte che decoravano i tetti dei templi, con antefisse, sime e lastre di rivestimento.',
    items: [
      {
        name: 'Cornice traforata',
        description: 'Con palmette su archetti, dal tempio di Giunone Moneta.',
        object: 'Cornice traforata in terracotta con palmette su archetti, elemento decorativo del coronamento del tempio di Giunone Moneta. Le terrecotte architettoniche erano utilizzate per rivestire e abbellire i tetti degli edifici sacri.',
        provenance: 'Tempio di Giunone Moneta, Acropoli',
        dating: 'VI sec. a. C.',
        room: 'Le terrecotte architettoniche',
      },
      {
        name: 'Lastra di rivestimento',
        description: 'Decorata con palmette e fiori di loto dall’acropoli.',
        object: 'Lastra di rivestimento in terracotta decorata con palmette e fiori di loto. Elemento del rivestimento fittile del tempio, con motivi vegetali di tradizione orientaleggiante.',
        provenance: 'Acropoli di Segni',
        dating: 'VI sec. a. C.',
        room: 'Le terrecotte architettoniche',
      },
      {
        name: 'Lastra con Gorgoni',
        description: 'Lastra architettonica con teste di gorgoni e maschili barbate.',
        object: 'Lastra architettonica in terracotta con teste di gorgoni e maschili barbate. I motivi apotropaici erano destinati a proteggere l’edificio sacro dagli influssi negativi.',
        provenance: 'Acropoli di Segni',
        dating: 'VI sec. a. C.',
        room: 'Le terrecotte architettoniche',
      },
      {
        name: 'Sima strigilata',
        description: 'Con decorazione a treccia e denti di lupo.',
        object: 'Sima strigilata in terracotta con decorazione a treccia e denti di lupo. Elemento di gronda utilizzato per convogliare le acque piovane, decorato con motivi geometrici e vegetali.',
        provenance: 'Tempio di Giunone Moneta, Acropoli',
        dating: 'VI sec. a. C.',
        room: 'Le terrecotte architettoniche',
      },
    ],
  },
  {
    slug: 'tavola-cucina',
    title: 'Sulla tavola e in cucina',
    subtitle: 'Gli oggetti della vita quotidiana',
    description: 'Ceramiche, vetri e utensili legati alla preparazione e al consumo dei cibi nelle ville e nelle case di Signia.',
    items: [
      {
        name: 'Ceramica comune',
        description: 'Reperti dalla villa rustica di Tre Acacie.',
        object: 'Ceramica comune da mensa e da cucina, rinvenuta nella villa rustica di Tre Acacie. Vasellame utilizzato per la preparazione, la cottura e il servizio dei cibi nella casa romana.',
        provenance: 'Villa rustica di Tre Acacie, Segni',
        dating: 'I-III sec. d. C.',
        room: 'Sulla tavola e in cucina',
      },
      {
        name: 'Coppe in terra sigillata',
        description: 'Frammenti con decorazioni a rilievo.',
        object: 'Frammenti di coppe in terra sigillata con decorazioni a rilievo. Ceramica da mensa di alta qualità, caratterizzata da superficie lucida rossa, diffusa in tutto l’Impero romano.',
        provenance: 'Segni',
        dating: 'I sec. a. C.',
        room: 'Sulla tavola e in cucina',
      },
      {
        name: 'Vetro colorato',
        description: 'Frammento di coppa costolonata in vetro verdeazzurro.',
        object: 'Frammento di coppa costolonata in vetro verdeazzurro. Il vetro soffiato colorato era utilizzato per la realizzazione di vasellame da tavola di pregio, testimonianza del lusso nelle abitazioni signine.',
        provenance: 'Segni',
        dating: 'I sec. d. C.',
        room: 'Sulla tavola e in cucina',
      },
      {
        name: 'Anfora da mensa',
        description: 'Contenitore per il vino o l’olio sulla tavola antica.',
        object: 'Anfora da mensa in ceramica, contenitore utilizzato per servire vino o olio durante i banchetti. Le anfore da tavola erano di dimensioni ridotte rispetto a quelle da trasporto.',
        provenance: 'Segni',
        dating: 'I sec. a. C.',
        room: 'Sulla tavola e in cucina',
      },
    ],
  },
];
