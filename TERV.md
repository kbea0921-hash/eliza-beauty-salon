# Eliza Beauty Salon – jóváhagyott megvalósítási terv

Jóváhagyás és kiegészítés dátuma: 2026. október 23.

Állapot: a tervezés jóváhagyva; a weboldal megvalósítása még nem kezdődött el.

## 1. Cél és keretek

Új, reszponzív, magyar nyelvű weboldal készül Sipos Eliza és az Eliza Beauty Salon számára, a projektmappában található anyagok alapján. A későbbi éles környezet Netlify. Az időpontkérő űrlapnak ténylegesen működnie kell: a teszt során a beküldés rögzítésén túl a próbaüzenetnek a kijelölt postafiókba is meg kell érkeznie.

A weboldal négy főoldala: Főoldal, Kezelések, Rólunk, Kapcsolat. A kezelések egy gyűjtőoldalon szerepelnek, külön kezelési aloldalak nélkül. Külön kiegészítő oldal az Adatkezelési tájékoztató.

A hírlevél-feliratkozás és az Arcápolási Kisokos tényleges bekötése opcionális későbbi funkció. Az első verzióban nem szerepel működést ígérő feliratkozási vagy letöltési gomb.

Ez a dokumentum a megvalósítás terve. A terv jóváhagyása nem jelenti azt, hogy a weboldal elkészült, tesztelt vagy élesített.

## 2. Források és tartalmi szabályok

- `eliza-jegyzet.md`: vállalkozási háttér, szolgáltatási célok, funkciók, inspirációk és elérhetőségi mintaadatok.
- `szovegek.md`: a négy oldal szövegei, kezelések, csomagok, árak, vélemények és közös elemek.
- `design-system.md`: kötelező vizuális alap a jelen projektben.
- `logo/`: színes és világos logó SVG/PNG formátumban, favicon SVG/PNG formátumban.

A forrásfájlok változatlanok maradnak. A weboldal tartalma ezekből készül, a jelen tervben jóváhagyott eltérésekkel. Új ár, szám, szakmai eredmény, ígéret vagy ügyfélvélemény nem található ki. A meglévő tapasztalati adatokat nem növeljük automatikusan az aktuális év alapján.

### Jóváhagyott tartalmi döntések

1. A fogadó e-mail-címet a felhasználó a Netlify űrlapértesítésének beállításakor adja meg. Valós, általa elérhető postafiókot kell használni. Ez külön beállítás a weboldalon nyilvánosan feltüntetett kapcsolati adatoktól.
2. A garancia minden érintett blokkban azonos értelmű: „Öt alkalom után elégedetlenség esetén 50% visszatérítés.” Az öt alkalmas kúrához kötött feltételt egyértelműen fel kell tüntetni. A Kezelések oldal ettől eltérő, javulás elmaradásához kötött szövege nem kerül át változatlanul.
3. Az időpontkérési gombok egységes szövege: „Időpontot kérek”. Az időpontot Eliza később egyezteti és igazolja vissza.
4. A kezelésekhez vagy bemutatkozáshoz vezető navigációs gombok megtartják saját funkciójukat, például „Megnézem a kezeléseket” és „Tovább olvasok”. A csomagkártyák időpontkérő gombja szintén „Időpontot kérek”; a kiválasztott csomag neve átadódik az űrlapnak.

## 3. Pozicionálás és célcsoport

Az Eliza Beauty Salon személyre szabott kozmetikai kezeléseket kínál bőrfiatalításra és problémás bőr ápolására, Sipos Eliza szakmai tapasztalatára, modern technológiákra és természetes hatóanyagokra építve.

A kezelési kínálatból levezetett, a terv részeként elfogadott célcsoport-felosztás:

- Elsődleges: Budapesten és környékén élő, jellemzően 35 év feletti nők, akik bőrük feszességén, hidratáltságán vagy megjelenésén szeretnének javítani, személyes figyelemmel.
- Másodlagos: aknés, problémás bőrrel érkező vendégek, köztük a Tini Anti-Akné csomag 14–19 éves korosztálya és az őket segítő szülők.

Elsődleges cél az időpontkérések számának növelése űrlapon vagy telefonon. A látogatói út: megérti, miben kaphat segítséget → megismeri Elizát és a kezeléseket → időpontot kér → Eliza visszaegyeztet.

## 4. Márkahang és vizuális irány

Személyes, tegező, szakértő és gondoskodó kommunikáció. A hangulat nőies, elegáns, nyugodt, prémium, de barátságos. Sok levegő, természetes anyagokat idéző képi világ és visszafogott díszítés.

Kerülendő a harsány, csillogó, túldíszített megjelenés, a neon, az erős színátmenet és a sötét mód. A Rólunk menüpont megmarad, de a tartalom Elizára mint a szolgáltatást nyújtó szakemberre épül.

### Színek

| Szerep | Szín | Felhasználás |
|---|---|---|
| Alap | Krém `#FAF6F2` | Oldalháttér |
| Felület | Púder `#F1E6DF` | Váltakozó szakaszok és kártyák |
| Elsődleges | Rózsafa `#8E4A5A` | Gombok, linkek, kiemelések |
| Aktív állapot | Sötét rózsafa `#6E3644` | Hover és aktív állapot |
| Szöveg/sötét szakasz | Sötét kakaó `#2E2626` | Törzsszöveg, lábléc, kiemelt sáv |
| Másodlagos szöveg | Szürkésbarna `#6B5F5C` | Leírások, címkék |
| Vonal | Halvány púder `#E3D6CF` | Elválasztók és mezőkeretek |
| Díszítés | Homokarany `#C9A27E` | Finom részletek; világos háttéren nem törzsszöveg |

### Tipográfia és térközök

- Címsor: Cormorant Garamond 500/600.
- Törzsszöveg: Jost 400/500; gombok és kicker: Jost 500, nagybetű, 0,08em ritkítás.
- H1 desktop/mobil: 64/40 px, sormagasság 1,1.
- H2: 44/32 px, sormagasság 1,15; H3: 28/24 px, sormagasság 1,2.
- Törzsszöveg: 18/16 px, sormagasság 1,65; kis szöveg: 15/14 px.
- Kicker: 14/13 px; gomb: 15 px.
- Térközök a design system 8 px-es alapegységére épülnek; mobil oldalmargó a megadott 20 px.
- Tartalom maximum 1200 px, folyó szöveg maximum 680 px széles.
- Szakaszok függőleges térköze desktopon 96–128 px, mobilon 64 px.

### Komponensek és logók

- Elsődleges gomb: rózsafa háttér, fehér felirat, 16 × 32 px belső térköz, kapszulaforma; hover: sötét rózsafa.
- Másodlagos gomb: átlátszó háttér, rózsafa keret és szöveg.
- Kártyák: púder vagy fehér háttér, 16 px lekerekítés, visszafogott árnyék vagy árnyék nélkül.
- Képek: 16 px lekerekítés, meleg és természetes fények.
- Űrlapmezők: fehér háttér, halvány púder keret, 12 px lekerekítés, látható rózsafa fókusz.
- Ikonok: egységes, vékony vonalas készlet.
- Világos háttéren `logo/logo.svg`, sötét háttéren `logo/logo-feher.svg`; PNG-változatok tartalékként.
- A logó képaránya változatlan. A meglévő faviconok használhatók.

## 5. Oldaltérkép és közös elemek

| Oldal | Útvonal | Feladat |
|---|---|---|
| Főoldal | `/` | Bemutatás, bizalomépítés, továbbvezetés |
| Kezelések | `/kezelesek/` | Kezelések és csomagok áttekintése |
| Rólunk | `/rolunk/` | Eliza története, szakértelme, értékei |
| Kapcsolat | `/kapcsolat/` | Elérhetőségek, közvetlen időpontkérés |
| Adatkezelési tájékoztató | `/adatkezeles/` | A később kapott kurzussablon alapján kitöltött tájékoztató |

### Fejléc

Világos krémszínű háttér, bal oldalon színes, főoldalra vezető logó. Desktopon négy menüpont, aktív oldal jelölése és kiemelt „Időpontot kérek” gomb. Mobilon menünyitó, elérhető navigáció és időpontkérési lehetőség. Az időpontkérő gomb az adott oldal űrlapjához vezet.

### Közös időpontkérő

A Főoldal, Kezelések és Rólunk oldal végén azonos tartalmú és mezőkészletű komponens. A Kapcsolat oldalon a fő kapcsolatblokk tölti be ezt a szerepet; ott nincs második, megismételt űrlap.

### Lábléc

Sötét kakaó háttér, világos logó, rövid bemutatkozás, nyilvános elérhetőségek, nyitvatartás, oldallinkek, szerzői jogi sor és adatkezelési hivatkozás. Közösségi profil hiányában nem kerülnek bele közösségi ikonok.

## 6. Főoldal

| Sorrend | Szakasz | Tartalom és elrendezés | CTA |
|---|---|---|---|
| 1. | Nyitó szakasz | Kicker, megadott H1 és bevezető bal oldalon; meleg tónusú kezelési stockfotó jobb oldalon | „Megnézem a kezeléseket”, mellette „Időpontot kérek” |
| 2. | Előnyök | „Bízd magad szakértő kezekre”; négy előny vonalas ikonokkal | A szolgáltatás megértése |
| 3. | Vélemények | Fruzsi és Magdi megadott véleménye két kártyában | Bizalomépítés |
| 4. | Bemutatkozás | Kép és szöveg, a megadott szakmai számok külön kiemelve | „Tovább olvasok” → Rólunk |
| 5. | Folyamat | Négy számozott lépés | Bizonytalanság csökkentése |
| 6. | Felhívás | „Fektess bőröd szépségébe – megéri!” hangsúlyos sávban | „Időpontot kérek” |
| 7. | GYIK | A négy megadott kérdés lenyitható válaszokkal | Gyakorlati kérdések tisztázása |
| 8. | Időpontkérő | Bevezető, űrlap és telefonos elérhetőség | „Időpontot kérek” |
| 9. | Lábléc | Közös elemek | Navigáció és kapcsolat |

A véleményekhez nem kerül kitalált értékelési pontszám, platformjelölés vagy profilkép. A főoldali hírlevélszakasz az első verzióból kimarad; később önálló blokként visszailleszthető.

## 7. Kezelések

1. Nyitó szakasz: „Szakértői kozmetikai megoldások”, megadott bevezető, időpontkérő gomb.
2. Bőrproblémák: négy problémakör áttekinthető blokkokban; a hosszabb bevezető olvasható szövegszélességgel.
3. Kezeléscsoportok: Belico, Mesotica, további kezelések; a forrásban meglévő időtartamokkal és korosztályi megjelölésekkel.
4. Várható előnyök: a megadott eredménylista rendezett felsorolásban.
5. Garancia: az öt alkalmas kúra utáni elégedetlenség esetére vállalt 50% visszatérítés, a jóváhagyott megfogalmazás szerint.
6. Csomagok: három összehasonlítható kártya.
7. Vélemények: a két rendelkezésre álló vélemény.
8. Folyamat: a főoldallal azonos négy lépés.
9. Időpontkérő és lábléc.

| Csomag | Ár | Tartalom |
|---|---|---|
| Anti-Age | 79 000 Ft | A `szovegek.md` szerinti leírás és tételes tartalom |
| Anti-Age Plus | 99 000 Ft | A `szovegek.md` szerinti leírás és tételes tartalom |
| Tini Anti-Akné | 59 000 Ft | A `szovegek.md` szerinti leírás és tételes tartalom |

Nincs forrással nem alátámasztott „legnépszerűbb” jelölés. A csomagkártyák „Időpontot kérek” gombja az űrlaphoz vezet, és a csomag nevét szerkeszthető előtöltésként átadja az üzenetmezőnek. Hiányzó kezelésárat vagy időtartamot nem találunk ki.

## 8. Rólunk

1. Nyitó szakasz: „A bőröd egészsége az én küldetésem”, személyes bevezető, időpontkérő gomb.
2. Eliza története: tagolt szöveg és kép; a 2011-es, 2018-as és 2019-es mérföldkövek visszafogott időrendi kiemeléssel.
3. Szakmai háttér: tapasztalat, vendégszám, tréneri és mesterkozmetikusi háttér a forrás szerint.
4. Öt érték: Minőség, Hitelesség, Természetesség, Fejlődés, Énidő, a megadott magyarázatokkal.
5. Szalonhangulat: képes-szöveges blokk a privát, nyugodt környezetről.
6. Záró felhívás, időpontkérő és lábléc.

Stockmodell nem szerepelhet Eliza portréjaként. A terv helyet biztosít későbbi saját portrénak; addig kezelési részlet vagy hangulatkép használható. Stock enteriőr nem jelenhet meg a tényleges szalon dokumentációjaként.

## 9. Kapcsolat

Desktopon két oszlop: balra cím, bevezető és űrlap; jobbra kattintható telefon, e-mail, cím és nyitvatartás. Mobilon egy oszlop, a bevezető után könnyen elérhető telefonos kapcsolat.

Az űrlap környezetében egyértelmű magyarázat: az üzenet időpontkérés, az időpontot Eliza külön egyezteti vissza. Az oldal további része a megadott GYIK, majd a közös lábléc. Beágyazott térkép helyett egyszerű térképlink készülhet a végleges cím megerősítése után.

A nyilvános elérhetőségi mintaadatokat az értesítési címtől külön kell kezelni. A forrás szerint a telefonszám és az e-mail kitalált; valódi szalonként történő nyilvános indulás előtt a publikálandó adatokat meg kell erősíteni vagy cserélni.

## 10. Reszponzív működés és hozzáférhetőség

| Nézet | Kiinduló tartomány | Elrendezés |
|---|---|---|
| Mobil | 768 px alatt | Egy oszlop, egymás alatti kártyák, mobilmenü |
| Tablet | 768–1023 px | Tartalomtól függő egy- vagy kétoszlopos blokkok |
| Asztali | 1024 px-től | Teljes navigáció, osztott nyitóblokkok, három csomag egymás mellett |

A töréspontok a tényleges magyar szövegek tördelése alapján finomíthatók. Mobilon sem veszhet el ár, kezelési tartalom vagy kapcsolatfelvételi lehetőség. A kártyák olvasási sorrendje megmarad, vízszintes oldalirányú túlfutás nem lehet.

Billentyűzettel kezelhető menü, GYIK és űrlap; látható fókusz, megfelelő mezőcímkék és mezőhöz kapcsolt hibaüzenetek szükségesek. A képek tartalmuknak megfelelő alternatív leírást kapnak; a puszta díszítések nem terhelik a felolvasást. A mozgások visszafogottak, a csökkentett mozgást kérő beállítás figyelembevételével.

## 11. Technikai megközelítés és űrlap

Javasolt technikai alap: statikus, többoldalas weboldal, közös vizuális szabályokkal, visszafogott JavaScript-használattal és Netlify Forms űrlapkezeléssel. A végleges, telepített HTML-nek tartalmaznia kell a Netlify által felismerhető űrlapdefiníciót. Az űrlapfelismerést engedélyezni, majd az oldalt telepíteni kell.

### Mezők és működés

- Teljes név: kötelező.
- E-mail: kötelező, formátumellenőrzéssel.
- Üzenet: kötelező.
- Adatkezelési hivatkozás és a később kapott sablonhoz igazított kísérőszöveg.
- Az oldal forrását jelző kiegészítő adat a beküldésben.

A négy oldal ugyanazt az időpontkérési folyamatot használja, egységes mezőnevekkel. A fogadó postafiókot a Netlify értesítési beállításában adjuk meg, nem a nyilvános kapcsolatadatokból vezetjük le.

Állapotok: alapállapot, kitöltés, validációs hiba, folyamatban lévő küldés, siker, hiba és újrapróbálás. Küldés közben ismételt beküldés elleni védelem szükséges. Hibánál a kitöltött tartalom megmarad. A sikerjelzés csak ténylegesen elfogadott beküldés után jelenhet meg, és nem állíthatja, hogy az időpont már visszaigazolt.

Alap spamvédelem: rejtett csapdamező. A Netlify értesítést külön be kell állítani, és az adott fiók aktuális használati kereteit az induláskor ellenőrizni kell.

### Kötelező átvételi teszt

1. A Netlify felismeri a telepített űrlapot.
2. A felhasználó megadja a valós fogadó postafiókot, és elkészül az értesítési beállítás.
3. A telepített oldalról valós tesztcímmel, értelmes szöveggel próbaküldés történik.
4. A beküldés megjelenik a Netlify űrlapkezelésében.
5. A próbaüzenet megérkezése a kijelölt postafiókban is igazolt.
6. Minden oldal űrlapja és a csomagból induló előtöltés ellenőrzött.

A képernyőn látható sikerüzenet önmagában nem teljesíti az átvételi feltételt. Elmaradó üzenet esetén az értesítési beállításokat és a spamként kezelt beküldéseket is ellenőrizni kell. A valós e-mail-cím megadásáig a kézbesítési teszt függőben marad.

## 12. Képek, SEO és kiegészítő oldalak

Meleg, természetes fényű stockfotók: kezelési részletek, bőrápolás és nyugodt környezet. A kiválasztáskor rögzíteni kell a forrást és a felhasználási feltételeket. Stockfotóból nem készül előtte–utána bizonyíték.

A képek kijelzőmérethez igazított méretben és optimalizált formátumban készülnek. Rögzített képarányok csökkentik a betöltési elmozdulásokat; a nyitóképen kívüli képek késleltetett betöltést kaphatnak.

Oldalanként egyértelmű H1, egyedi keresőcím és leírás; logikus címsorhierarchia, közösségi megosztási metaadatok, favicon, saját 404 oldal. A végleges domain ismeretében véglegesíthető a kanonikus URL és az oldaltérkép. A keresőadatokba sem kerülhet a forrásnál erősebb vagy kitalált állítás.

Az adatkezelési oldal szövegét a felhasználó később a kurzus sablonjából adja. Az oldal és a hozzá vezető hivatkozások elkészülnek, de a hiányzó tartalom éles adatgyűjtés előtti rendezendő tétel. Üres vagy ideiglenes oldal nem tekinthető elkészült tájékoztatónak.

## 13. Későbbi, opcionális bővítések

- Főoldali hírlevél-feliratkozás.
- Arcápolási Kisokos letöltés és tényleges kézbesítés.
- Ehhez kapcsolódó feliratkozási szolgáltatás és végleges kísérőszövegek.
- Saját portré és szalonfotók cseréje a megfelelő képi helyeken.

Online időpontfoglaló rendszer nem része a tervezett működésnek: Eliza visszaegyezteti az időpontot.

## 14. Megvalósítás és verziókövetés

A verziókövetés helyi Git-commitokkal történik. Csak az adott mérföldkőhöz tartozó fájlok kerülnek a commitba; címzettadat, hitelesítő adat és más titok nem kerülhet a repositoryba. A távoli feltöltés és az élesítés külön végrehajtási lépés. A terv mentése önmagában még nem hoz létre commitot.

| Mérföldkő | Munka és ellenőrizhető eredmény | Commit |
|---|---|---|
| 1. Alapállapot | A három eredeti Markdown-forrás, a teljes `logo/` mappa és a jóváhagyott `TERV.md`; weboldalkód nélkül | Első commit az alapanyagokkal és a jóváhagyott tervvel |
| 2. Közös vizuális alap | Oldalváz, tipográfia, színek, térközök, fejléc, mobilmenü, lábléc, gombok, kártyák és űrlap megjelenése | Commit a közös vizuális alap elkészültekor |
| 3. Négy oldal | Főoldal, Kezelések, Rólunk, Kapcsolat a végleges szakaszokkal és reszponzív elrendezéssel | Commit a négy oldal elkészültekor |
| 4. Funkciók és optimalizálás | Netlify-kompatibilis űrlap, validáció és állapotok; SEO, képoptimalizálás, kiegészítő oldalak és hivatkozások; teszttelepítés és kézbesítési próba | Commit az űrlap, SEO és képoptimalizálás után |
| 5. Kiadási állapot | Vizuális és működési ellenőrzések, javítások, megérkezett próbaüzenet, végleges publikálandó adatok és adatkezelési tartalom | Végső commit az ellenőrzött változatról, az éles publikálás előtt |

A commitok leírása a ténylegesen elkészült állapotot tükrözze. A kézbesítés nem jelölhető igazoltnak a postafiókbeli ellenőrzés előtt. A Netlify-fiókban elvégzett beállítások nem részei a Git-tartalomnak; elvégzésük és ellenőrzési eredményük a kiadási feljegyzésben rögzíthető érzékeny adatok nélkül.

### Részletes munkasorrend

1. Első helyi commit: változatlan alapanyagok és jóváhagyott terv.
2. A statikus többoldalas szerkezet és közös vizuális alap létrehozása, mobil/desktop ellenőrzése, commit.
3. A szövegek szakaszokhoz rendelése, képek kiválasztása, négy főoldal elkészítése, commit.
4. Az űrlap és csomag-előtöltés megvalósítása; SEO, képek és kiegészítő oldalak rendezése.
5. Netlify teszttelepítés, űrlapfelismerés és értesítés beállítása a felhasználó által ekkor megadott fogadó címre, próbaüzenet igazolása, commit.
6. Teljes átvételi ellenőrzés és javítás, végleges kiadási commit.
7. Éles publikálás, majd rövid ellenőrzés a végleges címen is, beleértve az űrlap működését.

## 15. Átvételi ellenőrzőlista

- Mind a négy főoldal teljes, a kiegészítő oldal és a lábléchivatkozás működik.
- A megadott tartalmak, árak és jóváhagyott garancia következetesek.
- Az időpontkérő gombok felirata egységes; a visszaegyeztetés magyarázata világos.
- Helyes logóváltozat jelenik meg minden háttéren.
- Mobilon, tableten és asztali nézetben nincs levágás vagy vízszintes túlfutás.
- A navigáció, GYIK, telefon-, e-mail- és belső hivatkozások működnek.
- A menü és az űrlap billentyűzettel is használható, a fókusz látható.
- A hibás mezők, sikertelen küldés és újrapróbálás kezelése megfelelő.
- A csomagválasztás átadja a csomag nevét az űrlapnak.
- A Netlify-ban látszik a tesztbeküldés, és a próbaüzenet megérkezett a valós fogadó postafiókba.
- A nyilvános kapcsolati adatok külön ellenőrzöttek; a fogadó értesítési cím ettől független.
- A képek optimalizáltak, eredetük és használhatóságuk dokumentált.
- A keresőmetaadatok, favicon, 404 és végleges URL-beállítások ellenőrzöttek.
- Az adatkezelési szöveg rendelkezésre áll az éles adatgyűjtés előtt.
- A végső commit a ténylegesen ellenőrzött változatot rögzíti; az élesítés utáni ellenőrzés külön megtörtént.

## 16. Később megadandó adatok

- Valós fogadó e-mail-cím: a Netlify értesítés beállításakor.
- Végleges nyilvános elérhetőségek: az éles publikálás előtt megerősítendők.
- Adatkezelési szöveg: a kurzussablonból, az éles adatgyűjtés előtt.
- Netlify projekt és végleges domain: a telepítési szakaszban.

Ezek a függőségek nem akadályozzák a közös vizuális alap és a négy oldal elkészítését, de a teljes működés és az éles kiadás készre jelentéséhez rendezni kell őket.

## 17. Ellenőrzött technikai hivatkozások

A tervezéskor, 2026. október 23-án ellenőrzött hivatalos források; a beállításokat a megvalósításkor ismét az aktuális Netlify-felülettel kell összevetni.

- Netlify Forms beállítások: https://docs.netlify.com/manage/forms/setup/
- Űrlapértesítések: https://docs.netlify.com/manage/forms/notifications/
- Űrlapok hibaelhárítása: https://docs.netlify.com/manage/forms/troubleshooting-tips/
