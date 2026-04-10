/**
 * LUST LOOPS: VIBE - CONTENT DATABASE
 * * LOGIK FÖR FILSTRUKTUR:
 * 1. Kategori: "Allmänt" -> Alltid upplåsta. Innehåller Vanilj + Master Gatekeepers.
 * 2. isGatekeeper: true  -> Dessa dörrar låser upp nya mappar (Kategorier).
 * 3. unlocksSub: "X"     -> Namnet på mappen som öppnas vid 2x SEXIGT.
 */

window.LUST_LOOPS_QUESTION_CONTENT = [
    // --- 1. ALLMÄNT (Master Gatekeepers + Vanilj) ---
    {
        id: "A-1",
        category: "Allmänt",
        text: "Ge och ta kontroll - En av er planerar och bestämmer en hel kväll medans den andra bara njuter, lyder och ger upp kontrollen.",
        isGatekeeper: true,
        unlocksSub: "makt",
        displayName: "Makt & Kontroll",
        followUp: "Har ni en tydlig dominant och en självklar undergiven i sovrummet, eller gillar ni att turas om?"
    },
    {
        id: "A-2",
        category: "Allmänt",
        text: "Att blanda in fysisk stimulans i leken, som smisk, nyp eller nafs, för att höja pulsen?",
        isGatekeeper: true,
        unlocksSub: "smärta",
        displayName: "Nyp, Smisk & Fysisk hetta",
        followUp: "Har ni tillsammans eller på annat håll använt smisk under sexakten? Berätta om er mest minnesvärda upplevelse."
    },
    {
        id: "A-3",
        category: "Allmänt",
        text: "Tanken på att använda talets gåva för att öka värmen? Allt från upphetsande ord och önskningar till heta viskningar och förbjudet språk?",
        isGatekeeper: true,
        unlocksSub: "ord-fantasier",
        displayName: "Ord & Fantasier",
        followUp: "Vilket ord eller scenario får ditt hjärta att slå lite snabbare?"
    },
    {
        id: "A-4",
        category: "Allmänt",
        text: "Att tillsammans utmana era gränser genom att utforska det som känns lite förbjudet, tabu eller utanför det som kallas 'vanilj'.",
        isGatekeeper: true,
        unlocksSub: "tabu",
        displayName: "Gränser & Utmaningar",
        followUp: "Finns det något ni pratat om, men inte testat ännu, ni tänker på just nu?"
    },
    {
        id: "A-5",
        category: "Allmänt",
        text: "Att bada tillsammans i ett varmt bad med massor av skum och tända ljus?",
        followUp: "Vem av er är bäst på att massera axlarna i badet?"
    },
    {
        id: "A-6",
        category: "Allmänt",
        text: "En av er är masserar - Den andra har beställt en helkväll med massage med ett skönt - lyckligt slut, på massagebädden...",
        followUp: "Vilket område på din kropp är mest underskattat vid beröring?"
    },
    {
        id: "A-7",
        category: "Allmänt",
        text: "Att sova helt nakna tillsammans varje natt för att maximera hudkontakt och chans till romans?",
        followUp: "Är närheten viktigast när ni ska somna eller när ni vaknar?"
    },
    {
        id: "A-8",
        category: "Allmänt",
        text: "Att använda doftljus eller eteriska oljor för att sätta stämningen i rummet?",
        followUp: "Vilken specifik doft kopplar du starkast ihop med lust?"
    },
    {
        id: "A-9",
        category: "Allmänt",
        text: "Att långsamt smeka varandra genom kläderna som förspel en lång stund innan ni klär av er?",
        followUp: "Bygger det upp spänningen eller vill du hellre ha direktkontakt?"
    },
    {
        id: "A-10",
        category: "Allmänt",
        text: "Att sitta nära varandra och bara andas i takt i några minuter innan ni börjar?",
        followUp: "Hur känns det när era kroppar synkar på det här sättet?"
    },
    {
        id: "A-11",
        category: "Allmänt",
        text: "Att hångla och tafsa som om ni var nykära tonåringar som förspel?",
        followUp: "När hånglade ni senast så där som man gjorde i början?"
    },
    {
        id: "A-12",
        category: "Allmänt",
        text: "Att få viskande - upphetsande - meningar eller fantasier, i partner i deras öra?",
        followUp: "Vilken av de tre sakerna överraskade dig mest att höra?"
    },
    {
        id: "A-13",
        category: "Allmänt",
        text: "Att ha en hel kväll där mobilerna är avstängda och bara fokus ligger på er?",
        followUp: "Vad är det första du lägger märke till hos din partner när bruset tystnar?"
    },
    {
        id: "A-14",
        category: "Allmänt",
        text: "Att titta varandra djupt i ögonen utan att prata medan ni rör vid varandra?",
        followUp: "Vad säger din partners blick dig just i det ögonblicket?"
    },
    {
        id: "A-15",
        category: "Allmänt",
        text: "Att utforska varandras händer och fingrar med bara läpparna och tungan?",
        followUp: "Hur känns det att ge så mycket uppmärksamhet till en liten del av kroppen?"
    },
    {
        id: "A-16",
        category: "Allmänt",
        text: "Att skriva ett kort, hett sms till din partner mitt under arbetsdagen?",
        followUp: "Hur mycket påverkar den mentala förväntan din fysiska lust?"
    },
    {
        id: "A-17",
        category: "Allmänt",
        text: "Att dansa i bara underkläderna som början på en kväll?",
        followUp: "Finns det en specifik låt som alltid får dig att vilja komma närmre?"
    },
    {
        id: "A-18",
        category: "Allmänt",
        text: "Att ge varandra komplimanger som inte handlar om utseende, utan om utstrålning eller egenskaper?",
        followUp: "Vilken egenskap hos din partner gör dem mest oemotståndliga?"
    },
    {
        id: "A-19",
        category: "Allmänt",
        text: "Att dela en bit mörk choklad eller en jordgubbe mellan era läppar?",
        followUp: "Skulle du vilja blanda in fler smaker i ert förspel?"
    },
    {
        id: "A-20",
        category: "Allmänt",
        text: "Ett lätt tag om hennes hår som styr hennes huvud bakåt, uppåt, för en kyss.",
        followUp: "Är det upphetsande att bli styrd, eller... läskigt?"
    },
    {
        id: "A-21",
        category: "Allmänt",
        text: "Att ligga i varandras famn i total tystnad efter att ni har varit sex och bara vara?",
        followUp: "Vad är det viktigaste för dig under 'efterspelet'?"
    },
    {
        id: "A-22",
        category: "Allmänt",
        text: "Att använda en mjuk fjäder för att kittla huden där den är som känsligast?",
        followUp: "Var på din kropp är du som mest känslig för lätta beröringar?"
    },
    {
        id: "A-23",
        category: "Allmänt",
        text: "Att berätta om en dröm eller fantasi du haft som är romantisk snarare än vild?",
        followUp: "Hur känns det att dela med sig av sina inre miljöer på det sättet?"
    },
    {
        id: "A-24",
        category: "Allmänt",
        text: "Att hålla eller låsa fast varandras händerna under tiden ni har sex?",
        followUp: "Vem vill hålla och vem vill hållas?"
    },

    // --- 2. MAKT (makt) ---
    {
        id: "M-1",
        category: "makt",
        text: "Att partnern bestämmer exakt vilka underkläder eller kläder du ska bära ikväll?",
        followUp: "Gillar du att bli stylad som ett objekt eller vill du ha sista ordet?"
    },
    {
        id: "M-2",
        category: "makt",
        text: "Att bli matad av din partner medan du har händerna bakom ryggen?",
        followUp: "Hur känns det att vara helt beroende av någon annan för en så enkel sak?"
    },
    {
        id: "M-3",
        category: "makt",
        text: "Att partnern använder en bestämd röst och ger dig direkta order istället för att fråga?",
        followUp: "Blir du tänd av auktoritet eller känns det för personligt?"
    },
    {
        id: "M-4",
        category: "makt",
        text: "Att bli tillsagd att klä av dig långsamt medan din partner sitter fullt påklädd och bara ser på?",
        followUp: "Vem av er njuter mest av maktobalansen i att vara naken inför någon påklädd?"
    },
    {
        id: "M-5",
        category: "makt",
        text: "Att partnern håller fast dina handleder mot sängen med bara sin egen muskelkraft?",
        followUp: "Är motståndet en del av leken eller ger du upp direkt?"
    },
    {
        id: "M-6",
        category: "makt",
        text: "Att du måste hålla oavbruten ögonkontakt med din partner medan de stimulerar dig?",
        followUp: "Vem av er viker oftast undan blicken först när det blir intensivt?"
    },
    {
        id: "M-7",
        category: "makt",
        text: "Att bli nekad beröring tills partnern ger dig tillåtelse att röra dem eller dig själv?",
        followUp: "Hur mycket bygger förbudet upp din faktiska kåthet?"
    },
    {
        id: "M-8",
        category: "makt",
        text: "Att partnern använder en 'nedlåtande' men tändande ton som markerar vem som bestämmer?",
        followUp: "Finns det specifika ord som får dig att känna dig extra undergiven?"
    },
    {
        id: "M-9",
        category: "makt",
        text: "Att bli beordrad att sitta på knä framför din partner under ett samtal om era fantasier?",
        followUp: "Hur förändras dynamiken när ni befinner er i olika höjdled?"
    },
    {
        id: "M-10",
        category: "makt",
        text: "Att partnern tar kontroll över din andning genom att lägga en hand lätt över din mun?",
        followUp: "Känns det som en intensiv närvaro eller en skrämmande kontroll?"
    },
    {
        id: "M-11",
        category: "makt",
        text: "Att få poäng eller 'betyg' av din partner för hur väl du lyder deras instruktioner?",
        followUp: "Triggas du av att prestera för att göra din partner nöjd?"
    },
    {
        id: "M-12",
        category: "makt",
        text: "Att bli tillsagd att vänta i sängen i 10 minuter medan partnern gör något annat, innan leken börjar?",
        followUp: "Vad händer i ditt huvud under de där minuterna av väntan?"
    },
    {
        id: "M-13",
        category: "makt",
        text: "Att partnern drar dig i håret för att styra var de vill ha din mun eller dina läppar?",
        followUp: "Är den djuriska kontrollen mer tändande än en mjuk smekning?"
    },
    {
        id: "M-14",
        category: "makt",
        text: "Att partnern bestämmer tempot och rytmen helt, även om du vill öka eller sänka?",
        followUp: "Kan du njuta av att bara flyta med i någon annans rytm?"
    },
    {
        id: "M-15",
        category: "makt",
        text: "Att behöva tilltala sin partner med en specifik titel (t.ex. Sir, Matte eller Mästare) under akten?",
        followUp: "Hjälper titeln dig att kliva in i din roll mer fullständigt?"
    },
    {
        id: "M-16",
        category: "makt",
        text: "Att partnern placerar sin fot på ditt bröst eller ansikte för att markera sin dominans?",
        followUp: "Är symboliken i handlingen viktigare för dig än den fysiska känslan?"
    },
    {
        id: "M-17",
        category: "makt",
        text: "Att bli beordrad att serva din partner (t.ex. hämta ett glas vatten) medan du är helt naken?",
        followUp: "Känner du dig mest som en tjänare eller som en uppvaktad partner?"
    },
    {
        id: "M-18",
        category: "makt",
        text: "Att partnern har kontrollen över fjärrkontrollen till en vibrator som du bär?",
        followUp: "Hur känns det att din njutning ligger i någon annans handflata?"
    },
    {
        id: "M-19",
        category: "makt",
        text: "Att bli 'inspekterad' av din partner, där de granskar din kropp innan de bestämmer sig för att röra dig?",
        followUp: "Blir du tänd av att bli betraktad som en vacker ägodel?"
    },
    {
        id: "M-20",
        category: "makt",
        text: "Att få instruktioner via sms under dagen om exakt vad du ska göra när ni ses ikväll?",
        followUp: "Hur mycket av maktleken sitter i den mentala förberedelsen?"
    },

    // --- 3. SMÄRTA (smärta) ---
    {
        id: "P-1",
        category: "smärta",
        text: "Att partnern gräver ner naglarna ordentligt i din rygg eller dina skinkor vid orgasm?",
        followUp: "Är märkena efteråt ett bevis på passion, en mysig påminnelse dagen efter, eller bara smärtsamma?"
    },
    {
        id: "P-2",
        category: "smärta",
        text: "Att använda en isbit och dra den långsamt längs insidan av låren tills det 'bränner' av kyla?",
        followUp: "Hur reagerar din kropp på den skarpa kontrasten mellan is och hudvärme?"
    },
    {
        id: "P-3",
        category: "smärta",
        text: "Att bli biten hårt i nacken eller axeln precis när spänningen är som högst?",
        followUp: "Blir peaken högre när en gnutta smärta bryter igenom?"
    },
    {
        id: "P-4",
        category: "smärta",
        text: "Att få små, intensiva nyp på insidan av överarmarna eller låren under förspelet?",
        followUp: "Var på din kropp är du som mest känslig för ett välplacerat nyp?"
    },
    {
        id: "P-5",
        category: "smärta",
        text: "Att partnern drar dig hårt i håret för att blotta din hals för kyssar eller bett?",
        followUp: "Gillar du den instinktiva känslan av att bli fysiskt 'tagen'?"
    },
    {
        id: "P-6",
        category: "smärta",
        text: "Att bli smiskad med en öppen handflata rytmiskt tills huden bultar och blir varm?",
        followUp: "Är det ljudet av träffen eller den bultande eftervärmen som tänder mest?"
    },
    {
        id: "P-7",
        category: "smärta",
        text: "Att partnern använder sina knogar för att trycka och dra hårt över dina revben eller bröstkorg?",
        followUp: "Föredrar du en molande, tung smärta eller en skarp och snabb?"
    },
    {
        id: "P-8",
        category: "smärta",
        text: "Att använda en hårborste eller ett annat vardagsföremål för att ge lätt smisk?",
        followUp: "Hur förändras känslan när det inte är en hand som träffar?"
    },
    {
        id: "P-9",
        category: "smärta",
        text: "Att partnern nyper och drar i dina bröstvårtor med en intensitet som gränsar till smärta?",
        followUp: "Är dina bröstvårtor en zon för mjuk njutning eller hård lek?"
    },
    {
        id: "P-10",
        category: "smärta",
        text: "Att bli biten i underläppen under en intensiv kyss så att det nästan smakar blod?",
        followUp: "Hur påverkar det 'djuriska' i ett bett din lust i stunden?"
    },
    {
        id: "P-11",
        category: "smärta",
        text: "Att få smisk på ett ställe, för att sedan direkt bli hårt smekt och kysst där det gör ont?",
        followUp: "Är växlingen mellan smärta och tröst viktig för din upplevelse?"
    },
    {
        id: "P-12",
        category: "smärta",
        text: "Att partnern trycker sina tummar hårt mot dina höftben så att det lämnar lätta märken?",
        followUp: "Tycker du om att se spåren av er natt på din kropp dagen efter?"
    },
    {
        id: "P-13",
        category: "smärta",
        text: "Att använda varmt (men säkert) stearinljusvax som får stelna på din nakna hud?",
        followUp: "Är det förväntan på värmen eller själva chocken som är bäst?"
    },
    {
        id: "P-14",
        category: "smärta",
        text: "Att bli hårt smiskad på låren istället för på skinkorna?",
        followUp: "Hur skiljer sig smärtan på olika delar av underkroppen för dig?"
    },
    {
        id: "P-15",
        category: "smärta",
        text: "Att partnern nafsar och biter dig i örsnibben samtidigt som de viskar något smutsigt?",
        followUp: "Kan en liten smärta göra de mentala bilderna starkare?"
    },
    {
        id: "P-16",
        category: "smärta",
        text: "Att få händerna hårt hållna mot en yta så att trycket blir en del av njutningen?",
        followUp: "Känns kraften i greppet som en form av intensiv närvaro?"
    },
    {
        id: "P-17",
        category: "smärta",
        text: "Att använda en 'Wartenberg wheel' (taggigt hjul) för att skapa en stickande sensation över huden?",
        followUp: "Är du nyfiken på instrument som skapar en annan typ av hudkänsla?"
    },
    {
        id: "P-18",
        category: "smärta",
        text: "Att bli 'bestraffad' med smisk om du råkar göra ett ljud när du blivit beordrad att vara tyst?",
        followUp: "Gör rädslan för smärtan att din njutning blir mer fokuserad?"
    },
    {
        id: "P-19",
        category: "smärta",
        text: "Att partnern drar sina naglar hårt längs din ryggrad så att det lämnar röda streck?",
        followUp: "Ger det dig gåshud av obehag eller av ren, skarp njutning?"
    },
    {
        id: "P-20",
        category: "smärta",
        text: "Att krama varandra så hårt att det känns som om era kroppar ska smälta samman?",
        followUp: "Kan fysiskt tryck kännas som den ultimata formen av trygghet?"
    },

    // --- 4. ORD (ord-fantasier) ---
    {
        id: "O-1",
        category: "ord-fantasier",
        text: "Att viska fantasier till varandra under akten?",
        followUp: "Vilka ord är helt off-limits för dig och vilka kan tända dig?"
    },
    {
        id: "O-2",
        category: "ord-fantasier",
        text: "Att partnern beskriver i detalj vad de vill göra med dig innan ni ens rör varandra?",
        followUp: "Blir du mer tänd av de mentala bilderna än av den fysiska beröringen?"
    },
    {
        id: "O-3",
        category: "ord-fantasier",
        text: "Att använda sms under dagen för att bygga upp en gemensam fantasi inför kvällen?",
        followUp: "Hur mycket påverkar den mentala förväntan din fysiska prestation sen?"
    },
    {
        id: "O-4",
        category: "ord-fantasier",
        text: "Att bli kallad för något som markerar din roll, som t.ex. 'duktig flicka/pojke' eller 'min'?",
        followUp: "Varför tror du att bekräftelse i den formen är så kraftfull?"
    },
    {
        id: "O-5",
        category: "ord-fantasier",
        text: "Att viska dina mest 'smutsiga' tankar direkt i partnerns öra under akten?",
        followUp: "Är det lättare att säga saker i mörker eller när man är mitt uppe i det?"
    },
    {
        id: "O-6",
        category: "ord-fantasier",
        text: "Att låtsas att ni är främlingar som möts för första gången på en bar eller ett hotell?",
        followUp: "Vem av er är bäst på att hålla masken och stanna kvar i rollen?"
    },
    {
        id: "O-7",
        category: "ord-fantasier",
        text: "Att lättklädd läsa högt ur en erotisk bok eller novell för varandra medan din partner masserar och stimulerar?",
        followUp: "Skulle du föredra att vara den som läser eller den som bara lyssnar?"
    },
    {
        id: "O-8",
        category: "ord-fantasier",
        text: "Att använda grova ord (dirty talk) som ni normalt sett aldrig skulle använda i vardagen, men du känner passar i stundens hetta?",
        followUp: "Finns det ord som känns 'för mycket', eller är allt tillåtet i stunden?"
    },
    {
        id: "O-9",
        category: "ord-fantasier",
        text: "Att viska instruktioner i din partners öra om hur de ska göra det skönt för sig själv?",
        followUp: "Blir du tänd av att bli guidad genom din egen njutning?"
    },
    {
        id: "O-10",
        category: "ord-fantasier",
        text: "Att sitta mitt emot varandra och dela era absolut mörkaste fantasier?",
        followUp: "Hur förändras din tillit till partnern när du blottar dina inre miljöer?"
    },
    {
        id: "O-11",
        category: "ord-fantasier",
        text: "Att använda rollspel där en av er är en auktoritet (t.ex. chef/lärare) och den andre underordnad?",
        followUp: "Är det maktförhållandet eller de förbjudna miljöerna som lockar mest?"
    },
    {
        id: "O-12",
        category: "ord-fantasier",
        text: "Att berätta för din partner exakt hur skönt det känns medan det händer, med ocensurerade ord?",
        followUp: "Hjälper din verbala feedback din partner att våga ta i mer?"
    },
    {
        id: "O-13",
        category: "ord-fantasier",
        text: "Att ge partnern ett 'uppdrag' via telefon som de ska utföra innan du kommer hem?",
        followUp: "Hur känns det att veta att din partner lyder dina instruktioner på avstånd?"
    },
    {
        id: "O-14",
        category: "ord-fantasier",
        text: "Att använda viskningar för att skapa spänning på en publik plats där ingen annan hör?",
        followUp: "Är risken att bli hörd en del av den mentala tändningen?"
    },
    {
        id: "O-15",
        category: "ord-fantasier",
        text: "Att återberätta ert absolut bästa sexminne för varandra i detalj, oavsett partner?",
        followUp: "Bygger det upp din lust att påminnas om tidigare framgångar?"
    },
    {
        id: "O-16",
        category: "ord-fantasier",
        text: "Att partnern pratar om dig i tredje person medan de rör dig (t.ex. 'hon gillar när jag...')?",
        followUp: "Känns det som att du blir mer av ett 'objekt' för deras njutning då?"
    },
    {
        id: "O-17",
        category: "ord-fantasier",
        text: "Att ha en 'hemlig kod' för när ni vill ha sex, som bara ni två förstår?",
        followUp: "Hur känns det att ha ett dunt språk mitt bland andra människor?"
    },
    {
        id: "O-18",
        category: "ord-fantasier",
        text: "Att partnern tvingar dig att erkänna hur mycket du vill ha dem innan de ger dig vad du vill?",
        followUp: "Är det erkännandet i sig som är den största tändningen?"
    },
    {
        id: "O-19",
        category: "ord-fantasier",
        text: "Att spela in ett röstmemo med en het fantasi och skicka till din partner?",
        followUp: "Är det pirrigare att höra din partners röst eller att läsa deras ord?"
    },
    {
        id: "O-20",
        category: "ord-fantasier",
        text: "Att använda rollspel där ni låtsas att ni blir påkomna av någon?",
        followUp: "Är chocken i scenariot det som ger den största adrenalinkicken?"
    },
    {
        id: "O-21",
        category: "ord-fantasier",
        text: "Att partnern lovar dig fantastiska saker under dagen som de sedan medvetet dröjer med att ge dig?",
        followUp: "Hur mycket tålamod har du när den mentala spänningen är total?"
    },

    // --- 5. TABU (tabu + sub-categories) ---
    {
        id: "T-G1",
        category: "tabu",
        text: "Anallek: Att utforska den bakre vägen med tålamod, mycket glidmedel och total närvaro?",
        isGatekeeper: true,
        unlocksSub: "tabu-anal",
        displayName: "Anallek",
        followUp: "Vad är det med just det anala som känns mest laddat för dig?"
    },
    {
        id: "T-A1",
        category: "tabu-anal",
        text: "Att använda fingrar eller små plugs för att långsamt töja och förbereda?",
        followUp: "Är förberedelsen en del av njutningen eller bara ett medel för målet?"
    },
    {
        id: "T-A2",
        category: "tabu-anal",
        text: "Rimming: Att låta partnern utforska din analöppning med tungan?",
        followUp: "Hur känns tanken på att vara så totalt blottad för sin partner?"
    },
    {
        id: "T-A3",
        category: "tabu-anal",
        text: "Att bära en anal-plug under hela samlaget för en känsla av extra fyllnad?",
        followUp: "Hur påverkar trycket bakifrån din upplevelse av penetrationen?"
    },
    {
        id: "T-G2",
        category: "tabu",
        text: "Publik Risk: Att ha sex eller leka på platser där risken finns att någon annan ser er?",
        isGatekeeper: true,
        unlocksSub: "tabu-risk",
        displayName: "Publik Risk",
        followUp: "Är det risken att åka fast eller tanken på att bli sedd som tänder dig mest?"
    },
    {
        id: "T-R1",
        category: "tabu-risk",
        text: "Att ha sex i en bil på en plats där folk rör sig i närheten?",
        followUp: "Skulle du kunna slappna av eller snegla mot rutan hela tiden?"
    },
    {
        id: "T-R2",
        category: "tabu-risk",
        text: "Att smyga undan för en snabbis på en hemmafest med folk i rummet intill?",
        followUp: "Blir du mer fokuserad på partnern när ni tvingas vara knäpptysta?"
    },
    {
        id: "T-R3",
        category: "tabu-risk",
        text: "Att utföra sexuella handlingar under bordet på en restaurang eller bar?",
        followUp: "Hur känns det att ha en het hemlighet mitt bland folk?"
    },
    {
        id: "T-G3",
        category: "tabu",
        text: "Normbrytare: Att utforska lekar som bryter mot könsnormer, inklusive attraktion till samma kön eller samkönade inslag?",
        isGatekeeper: true,
        unlocksSub: "tabu-bi",
        displayName: "Bi-nyfikenhet & Normer",
        followUp: "Hur känns det att släppa förväntningarna på hur man 'bör' vara i sängen?"
    },
    {
        id: "T-B1",
        category: "tabu-bi",
        text: "Att titta på samkönad porr tillsammans och prata om vad ni finner tänder er?",
        followUp: "Är det den visuella estetiken eller den specifika akten som lockar mest?"
    },
    {
        id: "T-B2",
        category: "tabu-bi",
        text: "Att inkludera dildos eller strap-on i er lek för att simulera samkönat sex?",
        followUp: "Hur förändras dynamiken när de traditionella rollerna suddas ut?"
    },
    {
        id: "T-B3",
        category: "tabu-bi",
        text: "Att fantisera om en trekant där fokus ligger på samkönad interaktion?",
        followUp: "Är det spänningen i det okända eller själva akten som är mest pirrig?"
    },
    {
        id: "T-B4",
        category: "tabu-bi",
        text: "Att utforska 'pegging' (kvinnan penetrerar mannen analt) för att bryta maktbalansen?",
        followUp: "Finns det en frihet i att få vara den som tar emot istället för att ge?"
    },
    {
        id: "T-G4",
        category: "tabu",
        text: "Extrema Leksaker: Att använda avancerade leksaker som kräver förberedelse och utmanar kroppen fysiskt?",
        isGatekeeper: true,
        unlocksSub: "tabu-toys",
        displayName: "Extrema Sexleksaker",
        followUp: "Finns det en gräns för hur mycket teknik eller material du vill blanda in?"
    },
    {
        id: "T-L1",
        category: "tabu-toys",
        text: "Att använda en 'spreader bar' för att låsa fast benen i en vidöppen position?",
        followUp: "Hur känns det att vara fysiskt tvingad till total öppenhet?"
    },
    {
        id: "T-L2",
        category: "tabu-toys",
        text: "Att utforska elektro-stimulans (e-stim) för att skicka små elektriska impulser genom kroppen?",
        followUp: "Är du nyfiken på den tekniska kontrollen eller den unika fysiska känslan?"
    },
    {
        id: "T-L3",
        category: "tabu-toys",
        text: "Att använda tunga vikter eller klämmor (Lex. bröstvårtstyngder) för en molande sensation?",
        followUp: "Hur påverkas din kåthet av en känsla som stannar kvar under lång tid?"
    },
    {
        id: "T-2",
        category: "tabu",
        text: "Att titta på porr tillsammans för att hitta specifika scener ni vill återskapa?",
        followUp: "Vad i filmerna är det som faktiskt triggar din egen lust?"
    },
    {
        id: "T-3",
        category: "tabu",
        text: "Att ha sex framför en spegel för att se er själva från ett nytt perspektiv?",
        followUp: "Hur förändras din självbild när du ser dig själv i full njutning?"
    },
    {
        id: "T-4",
        category: "tabu",
        text: "Att filma en sexakt tillsammans som ni sedan tittar på och raderar?",
        followUp: "Är det kåtheten i stunden eller att se det efteråt som är poängen?"
    },
    {
        id: "T-5",
        category: "tabu",
        text: "Att bära vibrerande leksaker offentligt som partnern styr via app?",
        followUp: "Skulle du kunna sitta kvar vid middagsbordet utan att avslöja dig?"
    },
    {
        id: "T-6",
        category: "tabu",
        text: "Att dela en hemlig fantasi som du aldrig tidigare berättat för någon?",
        followUp: "Hur förändras din tillit när du blottar din mest dolda fantasi?"
    },
    {
        id: "T-7",
        category: "tabu",
        text: "Att använda mat (t.ex. is, frukt, vispgrädde) på ett kladdigt och utmanande sätt?",
        followUp: "Är det sinnena eller det 'förbjudna' i att kladda som lockar?"
    },
    {
        id: "T-8",
        category: "tabu",
        text: "Att utforska 'edging' – att medvetet avbryta precis innan orgasm flera gånger?",
        followUp: "Vem av er tror du har mest disciplin att inte gå över gränsen?"
    },
    {
        id: "T-9",
        category: "tabu",
        text: "Att låtsas vara totala främlingar som möts för en anonym natt på hotell?",
        followUp: "Vilken personlighet skulle du vilja kliva in i för en kväll?"
    },
    {
        id: "T-10",
        category: "tabu",
        text: "Att medvetet skapa en situation som känns 'fel' men tänder er båda?",
        followUp: "Varför tror du att det som är socialt tabu kan vara så fysiskt skönt?"
    },
    {
        id: "T-11",
        category: "tabu",
        text: "Att ha sex i ett rum i huset där ni aldrig tidigare har varit intima, t.ex. köket?",
        followUp: "Hur förändras energin när man bryter rutinen i hemmet?"
    },
    {
        id: "T-12",
        category: "tabu",
        text: "Att använda ögonbindel när ni är på en plats som inte är hemma?",
        followUp: "Ökar otryggheten spänningen eller blir det för mycket?"
    },
    {
        id: "T-13",
        category: "tabu",
        text: "Att gå ut tillsammans utan underkläder under finkläderna?",
        followUp: "Hur känns det att veta att bara tyget i kläderna skiljer er åt?"
    },
    {
        id: "T-14",
        category: "tabu",
        text: "Att låtsas bli påkomna mitt under akten?",
        followUp: "Är det rädslan eller adrenalinet i scenariot som tänder mest?"
    },
    {
        id: "T-15",
        category: "tabu",
        text: "Att använda en 'butt plug' under en hel middag utan att säga något till de andra?",
        followUp: "Hur påverkas din närvaro när du har en hemlighet i kroppen?"
    },
    {
        id: "T-16",
        category: "tabu",
        text: "Att bjuda in en tredje person (teoretiskt eller praktiskt) för att titta på?",
        followUp: "Skulle du bli mer tänd av att bli sedd eller av att visa upp din partner?"
    },
    {
        id: "T-17",
        category: "tabu",
        text: "Att låta partnern filma dig när du onanerar och skicka videon till dem?",
        followUp: "Är det känslan av att vara i fokus eller att bli betraktad som är hetast?"
    },
    {
        id: "T-18",
        category: "tabu",
        text: "Att ha sex i dagsljus i ett rum med stora fönster utan att dra för gardinerna?",
        followUp: "Är det ljuset eller den lilla risken för insyn som tänder mest?"
    },
    {
        id: "T-19",
        category: "tabu",
        text: "Att prata om vad ni skulle göra om ni var helt anonyma för en natt?",
        followUp: "Skulle du våga mer om ingen visste vem du var?"
    },
    {
        id: "T-20",
        category: "tabu",
        text: "Att utforska 'breathplay' (lätta grepp om halsen) under total tillit?",
        followUp: "Var går gränsen mellan intensiv närvaro och obehag för dig?"
    }
];

window.LUST_LOOPS_CATEGORY_ORDER = ["Allmänt"];