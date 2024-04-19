### Avtentikacija

    - Utvrduvanje na avtenticnos, identitet
    - Proces vo koj verificrame dali nekoj e toj sto tvrdi deka e.
    Primer:
        - Verifikacija na licnost so pokazuvanje licna karta,
        - najava na fb so email i lozinka

### Avtorizacija

    - Dozvola, privilegija za izvrsuvanje na odredeni funkcii
    - Proces na verificranje na korisnikot dali ima priviliegii da pristapi do odredeni aplikacii, fajlovi, mesta i slicno.
    Primer:    
        - Korisnikot koj moze da gi vidi svoite beleski na telefonot, a pred toa da go otkluci so pin, pattern, finger id, face id (se avtencira)

### Multi-tenancy

    tenant - stanar, kirijas, zitel
    multi-tenancy - poveke stanari, kade sto sekoj si gi gleda samo svoite podatoci, drugite ne mozat da mu gi vidat, i toj ne moze na drugite

    - Multi-tenancy (Multi-korisnost) e arhitektura na software koja ovozmozuva poveke nezavisni korisnici ili organizacii da spodeluvaat ista aplikacija ili sistem, dodeka gi zadrzuva izoliralni podatocite i konfiguraciite. Taa obezbeduva efikasno spodeluvanje na resursi i prilagoduvanje za sekoj korisnik ili organizacija.

    Primer:
    - Admin korisnikot ima pristap do poveke privilegii, dodeka obicniot korisnik ima pomalku.
    - Admin moze da ve blokira od koristenje na sofverot, moze da vi stavi restrikcii za odredeni servisi vo zavisnost od kolku nekoj korisnik platil, kako se odnesuval i slicno
    - Korisnik - moze da napravi nov zapis, da go uredi, da go izbrise toj zapis sto go kreiral vo svoe ime, ne vo ime na drug korisnik.

### JWT - JSON Web Token

    - Se koristi za bezbedna komunikacija pomegu klient i server, kako JSON objekt
    - JWT e digitalno potpisan
    - Moze da koristi algoritmi kako HMAC ili HS256 za privatni klucevi
    - Ima javni klucevi kako RSA, ECDSA.
    - Struktura
        Primer: xxxxx.yyyyyy.zzzzz
        1. Header
            - type of token
            - type of algorhitm used
            Primer { "typ": "JWT", alg "HS256"}
        2. Payload
            - sodrzi claims. Claim vi e izjava na nekoj entite (na primer user-korisnikot), isto taka sodrzi i dopolnitelni podatoci
            Tri vidovi-tipovi na claims:
            1. registered - vie moze da gi vidite tie podatoci
            2. private - moze i da gi izmenuvate tie podatoci
            3. public - ne moze da vidite i da pristapite do niedni podatoci
            Primer: {
                "name": "James Bond",
                "admin": true,
                "subject": "12345678",
                "issuedAt": "190420242100"
                ...
            }
        3. Signature - go zema enkodiraniot HEADER, PAYLOAD i SECRET i pravi podpis na sledniot nacin:
            - HMACSHA256(base64UrlEncode(HEADER) + "." + base64UrlEncode(PAYLOAD), SECRET)
            - Potpisot ni sluzi za da se osigurame deka originalnata poraka ne bila promeneta na pat kon krajniot korisnik.

 ### Packets - moduli koi sto ke gi koristime
    - express
    - mongoose
    - node-input-validator
    - bcryptjs
    - jsonwebtoken
    - express-jwt