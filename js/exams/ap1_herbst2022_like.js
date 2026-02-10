// js/exams/ap1_herbst2022_like.js
// Abschlussprüfung Teil 1 – Beispielprüfung angelehnt an IHK AP1 Herbst 2022 (4 Aufgaben, 100 Punkte)

const EXAM = {
  duration: 90 * 60, // 90 Minuten
  tasks: [
    // ===== 1. Aufgabe – Projekt / Stakeholder / externe Beratung (23 Punkte) =====

    {
      id: "A1a",
      block: "1",
      type: "text",
      operator: "Beschreiben Sie",
      context:
        "Die LogiPack GmbH plant ein Projekt zur Einführung einer neuen Verpackungslinie, um auf veränderte Kundenanforderungen zu reagieren.",
      question:
        "kurz, warum ein strukturiertes Projektvorgehen bei dieser Umstellung sinnvoll ist.",
      points: 3,
      keywords: [
        "komplexität",
        "ziele",
        "ressourcen",
        "zeitplan",
        "risiken",
        "koordination",
        "Start",
        "Ende"
      ],
      solution:
        "Ein strukturiertes Projektvorgehen hilft, Ziele und Anforderungen klar zu definieren, Ressourcen und Zeitplan zu koordinieren sowie Risiken systematisch zu steuern."
    },

    {
      id: "A1b",
      block: "1",
      type: "text",
      operator: "Nennen Sie",
      context:
        "Für das Projekt zur neuen Verpackungslinie soll ein Projektstrukturplan erstellt werden.",
      question:
        "fünf typische Phasen eines Projekts in sinnvoller Reihenfolge.",
      points: 5,
      keywords: [
        "initialisierung",
        "analyse",
        "planung",
        "durchführung",
        "realisierung",
        "umsetzung",
        "kontrolle",
        "abschluss"
      ],
      solution:
        "Eine mögliche sinnvolle Reihenfolge ist: Projektinitialisierung, Analyse/Anforderungsaufnahme, Projektplanung, Durchführung/Umsetzung, Projektabschluss mit Kontrolle und Übergabe."
    },

    {
      id: "A1c",
      block: "1",
      type: "text",
      operator: "Beschreiben Sie",
      context:
        "Die neue Verpackungslinie betrifft unterschiedliche Gruppen im Unternehmen und bei den Kunden.",
      question:
        "drei Gruppen von Stakeholdern und jeweils ein konkretes Interesse dieser Gruppe an dem Projekt.",
      points: 3,
      keywords: [
        "geschäftsführung",
        "kunden",
        "mitarbeiter",
        "produktion",
        "qualität",
        "kosten",
        "termine"
      ],
      solution:
        "Geschäftsführung (Interesse: Senkung der Stückkosten und bessere Wettbewerbsfähigkeit), Produktionsmitarbeiter (Interesse: ergonomische Arbeitsplätze und sichere Abläufe), Kunden (Interesse: stabile Lieferzeiten und gleichbleibende Qualität der Verpackung)."
    },

    {
      id: "A1d",
      block: "1",
      type: "text",
      operator: "Nennen Sie",
      context:
        "Es wird überlegt, einen externen Projektberater für die Einführung einzusetzen.",
      question:
        "je zwei mögliche Vorteile und zwei mögliche Nachteile eines externen Projektberaters.",
      points: 5,
      keywords: [
        "expertise",
        "erfahrung",
        "neutral",
        "kosten",
        "kennt das unternehmen nicht",
        "akzeptanz",
        "abhängigkeit"
      ],
      solution:
        "Vorteile: Fachliche Expertise und Erfahrung aus ähnlichen Projekten, neutrale Sicht von außen. Nachteile: Zusätzliche Kosten und begrenzte Kenntnisse der internen Abläufe, mögliche geringere Akzeptanz bei Mitarbeitern."
    },

    {
      id: "A1e",
      block: "1",
      type: "rechnung",
      operator: "Berechnen Sie",
      context:
        "Alternativ zur internen Projektleitung soll ein externer Projektmanager tageweise beauftragt werden. Ein Angebot enthält einen Tagessatz und eine geschätzte Anzahl von Einsatztagen.",
      question:
        "den effektiven Stundensatz des externen Projektmanagers und vergleichen Sie ihn mit den Personalkosten eines internen Mitarbeiters.",
      points: 7,
      keywords: [
        "tagessatz",
        "stunden",
        "stundensatz",
        "kostenvergleich",
        "interner mitarbeiter"
      ],
      svg: `
        <svg width="460" height="150" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="440" height="130" fill="#020617" stroke="#9ca3af"/>
          <text x="230" y="30" fill="#e5e7eb" text-anchor="middle" font-size="13">
            Projektkostenübersicht – externe vs. interne Leitung
          </text>

          <!-- Tabellenkopf -->
          <text x="40"  y="60" fill="#e5e7eb" font-size="11">Variante</text>
          <text x="170" y="60" fill="#e5e7eb" font-size="11">Satz</text>
          <text x="290" y="60" fill="#e5e7eb" font-size="11">Arbeitszeit</text>
          <text x="390" y="60" fill="#e5e7eb" font-size="11">Hinweis</text>

          <!-- Extern -->
          <text x="40"  y="85" fill="#e5e7eb" font-size="11">Externer PM</text>
          <text x="170" y="85" fill="#e5e7eb" font-size="11">960,00 € / Tag</text>
          <text x="290" y="85" fill="#e5e7eb" font-size="11">8 Stunden</text>
          <text x="390" y="85" fill="#e5e7eb" font-size="11">Projektangebot</text>

          <!-- Intern -->
          <text x="40"  y="110" fill="#e5e7eb" font-size="11">Interner MA</text>
          <text x="170" y="110" fill="#e5e7eb" font-size="11">48,00 € / Stunde</text>
          <text x="290" y="110" fill="#e5e7eb" font-size="11">8 Stunden</text>
          <text x="390" y="110" fill="#e5e7eb" font-size="11">Personalkosten</text>
        </svg>
      `,
      solution:
        "Externer Projektmanager: 960 € pro Tag bei 8 Stunden → 960 / 8 = 120 €/h. Interner Mitarbeiter: 48 €/h. Der externe Projektmanager ist deutlich teurer pro Stunde, kann aber durch Spezialisierung Projektlaufzeit und Risiken reduzieren."
    },

    // Summe Aufgabe 1: 3 + 5 + 3 + 5 + 7 = 23

    // ===== 2. Aufgabe – Scanner / Speicher / RAID / Kennzeichnung (25 Punkte) =====

    {
      id: "A2a",
      block: "2",
      type: "rechnung",
      operator: "Berechnen Sie",
      context:
        "Für die Qualitätskontrolle der Kartonverpackungen wird eine neue Fertigungslinie mit zwei Kamerascannern eingerichtet. Jeder Scanner prüft die Oberflächen auf Beschädigungen und druckt bei Bedarf einen Warnhinweis.",
      question:
        "die Anzahl der Scans pro Tag, wenn die Anlage 10 Stunden pro Tag in Betrieb ist und jeder Scanner 80 Kartons pro Minute prüft.",
      points: 5,
      keywords: ["scanner", "80", "kartons", "10 stunden", "anzahl scans"],
      svg: `
        <svg width="460" height="150" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="440" height="130" fill="#020617" stroke="#9ca3af"/>
          <text x="230" y="30" fill="#e5e7eb" text-anchor="middle" font-size="13">
            Fertigungslinie – Scannerleistung
          </text>

          <text x="40"  y="60" fill="#e5e7eb" font-size="11">Anzahl Scanner:</text>
          <text x="200" y="60" fill="#e5e7eb" font-size="11">2</text>

          <text x="40"  y="80" fill="#e5e7eb" font-size="11">Leistung pro Scanner:</text>
          <text x="200" y="80" fill="#e5e7eb" font-size="11">80 Kartons / Minute</text>

          <text x="40"  y="100" fill="#e5e7eb" font-size="11">Betriebsdauer pro Tag:</text>
          <text x="200" y="100" fill="#e5e7eb" font-size="11">10 Stunden</text>
        </svg>
      `,
      solution:
        "Leistung eines Scanners: 80 Kartons/Minute. Zwei Scanner: 2 × 80 = 160 Kartons/Minute. 10 Stunden = 600 Minuten. Gesamt: 160 × 600 = 96.000 Scans pro Tag."
    },

    {
      id: "A2b",
      block: "2",
      type: "rechnung",
      operator: "Berechnen Sie",
      context:
        "Zu jedem Scan wird ein Graustufenbild mit 2,4 Megapixeln gespeichert. Pro Pixel wird 1 Byte benötigt.",
      question:
        "das tägliche Datenvolumen in MiB und runden Sie auf ganze MiB.",
      points: 4,
      keywords: ["2,4", "megapixel", "byte", "datenvolumen", "mib"],
      solution:
        "2,4 Megapixel ≈ 2,4 × 10^6 Byte pro Bild. Pro Tag: 96.000 Scans × 2,4 × 10^6 Byte = 230.400.000.000 Byte ≈ 219.726 MiB (unter Nutzung von Umrechnungsfaktoren) → ungefähr 220 MiB pro Tag (gerundeter Näherungswert)."
    },

    {
      id: "A2c",
      block: "2",
      type: "rechnung",
      operator: "Ermitteln Sie",
      context:
        "Die Bilder sollen ein Jahr lang auf einem RAID-System gespeichert werden. Es werden vier Festplatten mit je 4 TiB Bruttokapazität in RAID 5 eingesetzt.",
      question:
        "die nutzbare Speicherkapazität in TiB und überprüfen Sie, ob der Speicherplatz für ein Jahr ausreichend ist, wenn 220 MiB pro Tag anfallen.",
      points: 4,
      keywords: [
        "raid 5",
        "4 festplatten",
        "4 tib",
        "nutzerkapazität",
        "220 mib",
        "365 tage"
      ],
      solution:
        "RAID 5 mit 4 Platten: nutzbar sind (4 − 1) × 4 TiB = 12 TiB. Jahresdatenvolumen: 220 MiB × 365 ≈ 80.300 MiB ≈ 78,4 GiB. 12 TiB >> 78,4 GiB, der Speicher ist mehr als ausreichend."
    },

    {
      id: "A2d",
      block: "2",
      type: "text",
      operator: "Beschreiben Sie",
      context:
        "Ein Kollege schlägt vor, statt RAID 5 einen JBOD-Verbund (Just a Bunch Of Disks) ohne Redundanz einzusetzen.",
      question:
        "zwei Vorteile und zwei Nachteile eines JBOD-Verbunds gegenüber einem RAID-System.",
      points: 4,
      keywords: [
        "kapazität",
        "kostengünstig",
        "einfach",
        "keine redundanz",
        "datenverlust",
        "ausfallsicherheit"
      ],
      solution:
        "Vorteile: Einfache Einrichtung und volle Nutzung der Gesamtkapazität aller Platten, oft geringere Kosten. Nachteile: Keine Redundanz, bei Ausfall einer Platte gehen Daten verloren und es besteht keine erhöhte Ausfallsicherheit."
    },

    {
      id: "A2e",
      block: "2",
      type: "text",
      operator: "Nennen Sie",
      context:
        "Für die Kennzeichnung der Kartons werden unterschiedliche Technologien diskutiert.",
      question:
        "je einen technischen Vorteil und einen Nachteil für Barcode, QR-Code und RFID-Tag.",
      points: 8,
      keywords: [
        "barcode",
        "qr-code",
        "rfid",
        "vorteil",
        "nachteil",
        "kosten",
        "reichweite",
        "datenmenge"
      ],
      solution:
        "Barcode: Vorteil – sehr kostengünstig und weit verbreitet; Nachteil – geringe Datenmenge und Sichtkontakt notwendig. QR-Code: Vorteil – speichert mehr Informationen und ist leicht mit Kameras lesbar; Nachteil – größerer Aufdruck und weiterhin Sichtkontakt nötig. RFID-Tag: Vorteil – berührungsloses Auslesen ohne Sichtkontakt und schnelle Erfassung vieler Tags; Nachteil – höhere Kosten und mögliche Datenschutz- bzw. Störungsthemen."
    },

    // Summe Aufgabe 2: 5 + 4 + 4 + 4 + 8 = 25

    // ===== 3. Aufgabe – IPv6 / Netzplan / Adressierung (28 Punkte) =====

    {
      id: "A3a",
      block: "3",
      type: "text",
      operator: "Nennen Sie",
      context:
        "Für eine neue Automatisierungslösung in der Produktion soll IPv6 im Firmennetz eingesetzt werden.",
      question:
        "zwei technologische Vorteile von IPv6 gegenüber IPv4.",
      points: 4,
      keywords: [
        "größerer adressraum",
        "autokonfiguration",
        "slaac",
        "ipsec",
        "vereinfachtes routing"
      ],
      solution:
        "IPv6 bietet einen deutlich größeren Adressraum, sodass jedes Gerät eine eigene öffentliche Adresse erhalten kann. Außerdem unterstützt IPv6 Mechanismen wie automatische Konfiguration (SLAAC) und eine verbesserte Integration von Sicherheitsfunktionen wie IPsec."
    },

    {
      id: "A3b",
      block: "3",
      type: "uml",
      operator: "Analysieren Sie",
      context:
        "Im Testnetzwerk sollen eine Steuerung, mehrere Sensoren und ein Industrie-PC über IPv6 vernetzt werden. Die folgende Skizze zeigt einen Ausschnitt.",
      question:
        "welche Geräte sich im gleichen Subnetz befinden und welche Adresse als Standard-Gateway zu verwenden ist.",
      points: 6,
      keywords: [
        "router",
        "switch",
        "standard-gateway",
        "gleiche prefix",
        "subnetz"
      ],
      svg: `
        <svg width="460" height="220" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="440" height="200" fill="#020617" stroke="#9ca3af"/>
          <text x="230" y="30" fill="#e5e7eb" text-anchor="middle" font-size="13">
            IPv6-Testnetz – Produktionsbereich
          </text>

          <!-- Router -->
          <rect x="180" y="50" width="100" height="30" fill="none" stroke="#22c55e"/>
          <text x="230" y="70" fill="#e5e7eb" text-anchor="middle" font-size="11">
            Router (R1)
          </text>
          <text x="230" y="88" fill="#9ca3af" text-anchor="middle" font-size="10">
            2001:db8:100::1/64
          </text>

          <!-- Switch -->
          <rect x="180" y="110" width="100" height="20" fill="none" stroke="#22c55e"/>
          <text x="230" y="124" fill="#e5e7eb" text-anchor="middle" font-size="10">
            Switch S1
          </text>

          <!-- Verbindungen Router-Switch -->
          <line x1="230" y1="80" x2="230" y2="110" stroke="#e5e7eb"/>

          <!-- Sensor -->
          <rect x="40" y="150" width="100" height="30" fill="none" stroke="#22c55e"/>
          <text x="90" y="168" fill="#e5e7eb" text-anchor="middle" font-size="10">
            Sensorfeld
          </text>
          <text x="90" y="184" fill="#9ca3af" text-anchor="middle" font-size="9">
            2001:db8:100::10/64
          </text>
          <line x1="140" y1="165" x2="180" y2="120" stroke="#e5e7eb"/>

          <!-- Steuerung -->
          <rect x="180" y="150" width="100" height="30" fill="none" stroke="#22c55e"/>
          <text x="230" y="168" fill="#e5e7eb" text-anchor="middle" font-size="10">
            Steuerung PLC
          </text>
          <text x="230" y="184" fill="#9ca3af" text-anchor="middle" font-size="9">
            2001:db8:100::20/64
          </text>
          <line x1="230" y1="150" x2="230" y2="130" stroke="#e5e7eb"/>

          <!-- Industrie-PC -->
          <rect x="320" y="150" width="100" height="30" fill="none" stroke="#22c55e"/>
          <text x="370" y="168" fill="#e5e7eb" text-anchor="middle" font-size="10">
            Industrie-PC
          </text>
          <text x="370" y="184" fill="#9ca3af" text-anchor="middle" font-size="9">
            2001:db8:100::30/64
          </text>
          <line x1="320" y1="165" x2="280" y2="120" stroke="#e5e7eb"/>
        </svg>
      `,
      solution:
        "Alle Geräte besitzen Adressen aus dem Präfix 2001:db8:100::/64 und befinden sich somit im selben Subnetz. Als Standard-Gateway ist die Routeradresse 2001:db8:100::1/64 zu konfigurieren."
    },

    {
      id: "A3c",
      block: "3",
      type: "text",
      operator: "Geben Sie an",
      context:
        "Auf einem Messgerät soll die Erreichbarkeit im IPv6-Netz geprüft werden.",
      question:
        "welche beiden IPv6-Adressen Sie testen, um das Loopback-Interface und das Standard-Gateway zu überprüfen.",
      points: 4,
      keywords: ["loopback", "::1", "standard-gateway", "ping"],
      solution:
        "Für das Loopback-Interface wird die Adresse ::1 genutzt, um die lokale TCP/IP-Implementierung zu prüfen. Für das Standard-Gateway wird die Routeradresse 2001:db8:100::1 verwendet."
    },

    {
      id: "A3d",
      block: "3",
      type: "text",
      operator: "Begründen Sie",
      context:
        "Bei der Ausführung des Befehls ip a auf einem Sensorgerät wird nur eine Link-Local-Adresse angezeigt, keine globale IPv6-Adresse.",
      question:
        "warum trotzdem eine Kommunikation im lokalen Netz möglich ist und welche Einschränkung dabei besteht.",
      points: 4,
      keywords: [
        "link-local",
        "fe80",
        "nur lokales netz",
        "kein routing",
        "kein internet"
      ],
      solution:
        "Link-Local-Adressen (fe80::/64) werden automatisch vergeben und erlauben Kommunikation innerhalb des lokalen Netzes. Sie werden jedoch nicht geroutet, sodass keine Verbindung über Router hinweg oder ins Internet möglich ist."
    },

    {
      id: "A3e",
      block: "3",
      type: "text",
      operator: "Bewerten Sie",
      context:
        "Drei Lieferanten bieten unterschiedliche Steuerungsrechner für die Automatisierung an. Es werden Kriterien wie Preis, Energieeffizienz und Erweiterbarkeit berücksichtigt.",
      question:
        "welcher Lieferant bei gleicher Gewichtung der Kriterien am sinnvollsten erscheint. Begründen Sie Ihre Wahl in zwei bis drei Sätzen.",
      points: 10,
      keywords: [
        "preis",
        "energie",
        "erweiterbarkeit",
        "bewertung",
        "nutzwert",
        "lieferant"
      ],
      svg: `
        <svg width="460" height="180" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="440" height="160" fill="#020617" stroke="#9ca3af"/>
          <text x="230" y="30" fill="#e5e7eb" text-anchor="middle" font-size="13">
            Angebotsübersicht Steuerungsrechner
          </text>

          <!-- Tabellenkopf -->
          <text x="40"  y="55" fill="#e5e7eb" font-size="11">Kriterium</text>
          <text x="170" y="55" fill="#e5e7eb" font-size="11">Lieferant A</text>
          <text x="290" y="55" fill="#e5e7eb" font-size="11">Lieferant B</text>
          <text x="390" y="55" fill="#e5e7eb" font-size="11">Lieferant C</text>

          <!-- Preis -->
          <text x="40"  y="80" fill="#e5e7eb" font-size="11">Preis (1=teuer,5=günstig)</text>
          <text x="190" y="80" fill="#e5e7eb" font-size="11">3</text>
          <text x="310" y="80" fill="#e5e7eb" font-size="11">4</text>
          <text x="410" y="80" fill="#e5e7eb" font-size="11">2</text>

          <!-- Energieeffizienz -->
          <text x="40"  y="105" fill="#e5e7eb" font-size="11">Energieeffizienz (1=schlecht,5=sehr gut)</text>
          <text x="190" y="105" fill="#e5e7eb" font-size="11">4</text>
          <text x="310" y="105" fill="#e5e7eb" font-size="11">3</text>
          <text x="410" y="105" fill="#e5e7eb" font-size="11">5</text>

          <!-- Erweiterbarkeit -->
          <text x="40"  y="130" fill="#e5e7eb" font-size="11">Erweiterbarkeit (1=gering,5=hoch)</text>
          <text x="190" y="130" fill="#e5e7eb" font-size="11">5</text>
          <text x="310" y="130" fill="#e5e7eb" font-size="11">3</text>
          <text x="410" y="130" fill="#e5e7eb" font-size="11">4</text>
        </svg>
      `,
      solution:
        "Bei gleicher Gewichtung ergibt sich für Lieferant A: 3+4+5=12 Punkte, für B: 4+3+3=10 Punkte, für C: 2+5+4=11 Punkte. Lieferant A erzielt den höchsten Nutzwert und bietet ein gutes Verhältnis aus Preis, Effizienz und Erweiterbarkeit, daher ist A am sinnvollsten."
    },

    // Summe Aufgabe 3: 4 + 6 + 4 + 4 + 10 = 28

    // ===== 4. Aufgabe – SQL / Programmierung / ERD (24 Punkte) =====

    {
      id: "A4a",
      block: "4",
      type: "sql",
      operator: "Formulieren Sie",
      context:
        "In der Datenbank der Produktionssteuerung werden Produktionsdaten der Kartonwellen gespeichert. Die Tabelle ProductionData hat die Spalten: OrderID (PK), Width, Length, Thickness, Quantity.",
      question:
        "einen SQL-Befehl, der alle Datensätze mit Thickness = 2,8 ausgibt und nach Length aufsteigend sortiert.",
      points: 3,
      keywords: ["select", "from", "where", "thickness", "order by", "length"],
      solution:
        "Ein möglicher Befehl ist: SELECT OrderID, Width, Length, Thickness, Quantity FROM ProductionData WHERE Thickness = 2.8 ORDER BY Length ASC;"
    },

    {
      id: "A4b",
      block: "4",
      type: "sql",
      operator: "Erstellen Sie",
      context:
        "Die Produktionsleitung möchte wissen, wie viele Wellen insgesamt mit einer Thickness von 3,0 produziert wurden.",
      question:
        "eine SQL-Abfrage, die die Gesamtmenge (Quantity) aller Datensätze mit Thickness = 3,0 ermittelt.",
      points: 3,
      keywords: ["select", "sum", "quantity", "where", "thickness"],
      solution:
        "Eine mögliche Abfrage lautet: SELECT SUM(Quantity) AS GesamtMenge FROM ProductionData WHERE Thickness = 3.0;"
    },

    {
      id: "A4c",
      block: "4",
      type: "uml",
      operator: "Beschreiben Sie",
      context:
        "Die Steuerung der Walzanlage erhält Produktionsdaten über eine Funktion launchTask(resultList). In jeder Iteration werden Länge, Breite und Dicke aus dem Ergebnisfeld ausgelesen. Ein Not-Aus-Schalter emergencyStop soll die Schleife bei Aktivierung sofort abbrechen.",
      question:
        "anhand des Struktogramms den grundsätzlichen Ablauf der Funktion.",
      points: 6,
      keywords: [
        "schleife",
        "solange",
        "for",
        "emergencyStop",
        "abbruch",
        "prüfung"
      ],
      svg: `
        <svg width="460" height="220" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="440" height="200" fill="#020617" stroke="#9ca3af"/>
          <text x="230" y="30" fill="#e5e7eb" text-anchor="middle" font-size="13">
            Struktogramm – launchTask(resultList)
          </text>

          <!-- Oberer Block -->
          <rect x="40" y="50" width="380" height="40" fill="none" stroke="#22c55e"/>
          <text x="230" y="75" fill="#e5e7eb" text-anchor="middle" font-size="11">
            i = 0
          </text>

          <!-- Schleifenblock -->
          <rect x="40" y="90" width="380" height="90" fill="none" stroke="#22c55e"/>

          <!-- Schleifenbedingung -->
          <line x1="40" y1="120" x2="420" y2="120" stroke="#22c55e"/>
          <text x="230" y="110" fill="#e5e7eb" text-anchor="middle" font-size="11">
            solange i &lt; Länge(resultList) UND emergencyStop == false
          </text>

          <!-- Schleifenkörper -->
          <text x="60" y="140" fill="#e5e7eb" font-size="10">
            lese Länge, Breite, Dicke aus resultList[i]
          </text>
          <text x="60" y="160" fill="#e5e7eb" font-size="10">
            übergebe Werte an Steuerung der Walzanlage
          </text>
          <text x="60" y="180" fill="#e5e7eb" font-size="10">
            i = i + 1
          </text>
        </svg>
      `,
      solution:
        "Die Funktion initialisiert den Zähler i und durchläuft die Ergebnisliste in einer Schleife. In jeder Iteration werden Länge, Breite und Dicke aus dem aktuellen Eintrag gelesen und an die Walzensteuerung übergeben. Die Schleife läuft, solange noch Einträge vorhanden sind und der Not-Aus-Schalter emergencyStop nicht betätigt wurde; andernfalls wird sie abgebrochen."
    },

    {
      id: "A4d",
      block: "4",
      type: "uml",
      operator: "Ergänzen Sie",
      context:
        "Die Datenbank soll so erweitert werden, dass jede Walzanlage eindeutig den zugehörigen Produktionsdatensätzen zugeordnet werden kann. Das folgende ER-Diagramm zeigt die Entitäten Walzanlage und Produktionsdaten.",
      question:
        "gedanklich das Diagramm um einen Primärschlüssel der Walzanlage, einen passenden Fremdschlüssel in ProductionData sowie die Kardinalität zwischen Walzanlage und Produktionsdaten. Beschreiben Sie Ihre Ergänzungen.",
      points: 6,
      keywords: [
        "walzanlageid",
        "primärschlüssel",
        "fremdschlüssel",
        "1:n",
        "beziehung"
      ],
      svg: `
        <svg width="460" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="440" height="180" fill="#020617" stroke="#9ca3af"/>
          <text x="230" y="30" fill="#e5e7eb" text-anchor="middle" font-size="13">
            ERD – Walzanlage und Produktionsdaten
          </text>

          <!-- Walzanlage -->
          <rect x="60" y="70" width="130" height="40" fill="none" stroke="#22c55e"/>
          <text x="125" y="93" fill="#e5e7eb" text-anchor="middle" font-size="11">
            Walzanlage
          </text>

          <!-- Produktionsdaten -->
          <rect x="270" y="70" width="130" height="40" fill="none" stroke="#22c55e"/>
          <text x="335" y="93" fill="#e5e7eb" text-anchor="middle" font-size="11">
            ProductionData
          </text>

          <!-- Beziehung -->
          <line x1="190" y1="90" x2="270" y2="90" stroke="#e5e7eb"/>
        </svg>
      `,
      solution:
        "Die Entität Walzanlage erhält einen Primärschlüssel WalzanlageID. In ProductionData wird ein Fremdschlüssel WalzanlageID ergänzt. Zwischen Walzanlage und ProductionData besteht eine 1:n-Beziehung: Eine Walzanlage kann viele Produktionsdatensätze haben, jeder Produktionsdatensatz gehört genau zu einer Walzanlage."
    },

    {
      id: "A4e",
      block: "4",
      type: "text",
      operator: "Analysieren Sie",
      context:
        "In einem Bericht sollen nur solche Produktionsdatensätze hervorgehoben werden, bei denen die Quantity deutlich von einem erwarteten Durchschnittswert abweicht.",
      question:
        "welchen Vorteil eine solche Auswertung für die Produktionsverantwortlichen hat.",
      points: 6,
      keywords: [
        "ausreißer",
        "abweichung",
        "qualität",
        "fehlererkennung",
        "prozessteuerung"
      ],
      solution:
        "Durch die Hervorhebung von Datensätzen mit außergewöhnlich hoher oder niedriger Menge können Ausreißer schneller erkannt werden. Dies erleichtert die Identifikation von Qualitätsproblemen oder Störungen im Prozess und unterstützt eine gezielte Ursachenanalyse."
    }

    // Summe Aufgabe 4: 3 + 3 + 6 + 6 + 6 = 24
    // Gesamt: 23 + 25 + 28 + 24 = 100 Punkte
  ]
};
