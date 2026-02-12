// js/exams/ap1_sample.js
// Abschlussprüfung Teil 1 – Beispielprüfung ähnlich IHK AP1 (4 Aufgaben, 100 Punkte)

const EXAM = {
  duration: 90 * 60, // 90 Minuten
  tasks: [
    // ===== 1. Aufgabe – Serviceprozess / UML / Text (25 Punkte) =====

    {
      id: "A1a",
      block: "1",
      type: "uml",
      operator: "Beschreiben Sie",
      context:
        "Ein Softwarehaus betreibt eine Hotline. Kunden melden Störungen, die von der IT-Abteilung erfasst und vom Serviceteam bearbeitet werden.",
      question:
        "kurz den Ablauf im Hotline-System aus Sicht von Kunde, IT-Abteilung und Serviceteam anhand des dargestellten Use-Case-Diagramms.",
      points: 6,
      keywords: [
        "kunde",
        "störung melden",
        "Störung",
        "it-abteilung",
        "serviceteam",
        "erfassen",
        "bearbeiten",
        "rückmeldung"
      ],
      svg: `
        <svg width="460" height="220" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="440" height="200" fill="#020617" stroke="#9ca3af"/>
          <text x="230" y="30" fill="#e5e7eb" text-anchor="middle" font-size="14">
            Hotline-System (Use-Case)
          </text>

          <!-- Akteur Kunde -->
          <circle cx="50" cy="90" r="18" fill="none" stroke="#e5e7eb"/>
          <line x1="50" y1="108" x2="50" y2="138" stroke="#e5e7eb"/>
          <line x1="36" y1="122" x2="64" y2="122" stroke="#e5e7eb"/>
          <line x1="50" y1="138" x2="38" y2="165" stroke="#e5e7eb"/>
          <line x1="50" y1="138" x2="62" y2="165" stroke="#e5e7eb"/>
          <text x="50" y="185" fill="#e5e7eb" text-anchor="middle" font-size="12">
            Kunde
          </text>

          <!-- Systemgrenze -->
          <rect x="120" y="40" width="300" height="150" fill="none" stroke="#6b7280"/>
          <text x="270" y="55" fill="#9ca3af" font-size="12">Hotline-System</text>

          <!-- Use Cases -->
          <ellipse cx="260" cy="90" rx="80" ry="23" fill="none" stroke="#22c55e"/>
          <text x="260" y="90" fill="#e5e7eb" text-anchor="middle" font-size="12">
            Störung melden
          </text>

          <ellipse cx="260" cy="140" rx="95" ry="23" fill="none" stroke="#22c55e"/>
          <text x="260" y="140" fill="#e5e7eb" text-anchor="middle" font-size="12">
            Störung erfassen &amp; bearbeiten
          </text>

          <!-- Verbindungen -->
          <line x1="68" y1="100" x2="180" y2="90" stroke="#e5e7eb"/>
          <line x1="68" y1="122" x2="180" y2="140" stroke="#e5e7eb"/>
        </svg>
      `,
      solution:
        "Ein möglicher Ablauf: Der Kunde meldet eine Störung (Use Case „Störung melden“). Die IT-Abteilung erfasst die Störung und plant die Bearbeitung. Das Serviceteam bearbeitet den Auftrag und gibt abschließend eine Rückmeldung an den Kunden."
    },

    {
      id: "A1ba",
      block: "1",
      type: "two-of-many",
      operator: "Beschreiben Sie",
      context:
        "Störungsmeldungen werden nur per E-Mail entgegengenommen und in einer Tabelle verwaltet. Die Arbeitsplanung erfolgt einmal pro Woche am Freitag.",
      question: "zwei Kritikpunkte an diesem Ablauf.",
      points: 4,
      keywords: [
        "verzögerung",
        "wartezeit",
        "reaktionszeit",
        "übersicht",
        "priorisierung",
        "fehleranfällig",
        "medienbruch"
      ],
      solution:
        "Es kommt zu langen Wartezeiten, da die Arbeitsplanung nur einmal wöchentlich erfolgt. Außerdem ist die Verwaltung per E-Mail und Tabelle fehleranfällig und bietet wenig Transparenz bei Prioritäten."
    },

    {
      id: "A1bb",
      block: "1",
      type: "two-of-many",
      operator: "Nennen Sie",
      context: "Die Servicequalität soll verbessert werden.",
      question: "zwei Maßnahmen, mit denen der Ablauf optimiert werden kann.",
      points: 4,
      keywords: [
        "ticketsystem",
        "webformular",
        "priorisierung",
        "servicezeiten",
        "24/7",
        "bereitschaftsdienst",
        "rückmeldung"
      ],
      solution:
        "Einführung eines webbasierten Ticketsystems mit durchgängiger Erfassung und Priorisierung sowie Erweiterung der Servicezeiten oder Einrichtung eines Bereitschaftsdienstes."
    },

    {
      id: "A1c",
      block: "1",
      type: "text",
      operator: "Nennen Sie",
      context:
        "Sie möchten besser verstehen, welche Anforderungen Kunden an den neuen Service haben.",
      question:
        "drei Methoden, mit denen Sie den Bedarf der Kunden analysieren können.",
      points: 3,
      keywords: [
        "befragung",
        "fragebogen",
        "interview",
        "workshop",
        "umfrage"
      ],
      solution:
        "Mögliche Methoden sind etwa Kundenbefragungen oder Online-Umfragen, Interviews mit ausgewählten Kunden sowie Workshops oder Auswertung bestehender Supportdaten."
    },

    {
      id: "A1d",
      block: "1",
      type: "text",
      operator: "Benennen Sie",
      context:
        "Ein Artikel beschreibt Risiken bei zu hohen oder zu niedrigen Servicepreisen.",
      question:
        "je eine Gefahr bei zu hohen und bei zu niedrigen Servicepreisen.",
      points: 8,
      keywords: [
        "zu hoch",
        "kunden",
        "ablehnen",
        "kein verkauf",
        "zu niedrig",
        "verlust",
        "kosten nicht gedeckt"
      ],
      solution:
        "Bei zu hohen Preisen lehnen Kunden den Service ab, es kommt zu keinem Verkauf. Bei zu niedrigen Preisen werden die eigenen Kosten nicht gedeckt und es droht Verlust."
    },

    // Summe 1. Aufgabe: 6 + 4 + 4 + 3 + 8 = 25

    // ===== 2. Aufgabe – Telearbeit / Ergonomie / Kostenrechnung (25 Punkte) =====

    {
      id: "A2a",
      block: "2",
      type: "two-of-many",
      operator: "Nennen und begründen Sie",
      context:
        "Für den neuen 24/7-Service sollen Telearbeitsplätze eingerichtet werden.",
      question:
        "zwei zusätzliche Anschaffungen oder Maßnahmen neben dem PC, damit die Arbeit von zu Hause aus erledigt werden kann.",
      points: 4,
      keywords: [
        "monitor",
        "tastatur",
        "maus",
        "vpn",
        "verschlüsselung",
        "sicherheitsrichtlinie",
        "headset",
        "datenschutz"
      ],
      solution:
        "Beispiele sind ein externer Monitor mit ergonomischer Höhe, ein Headset für Kundenkontakte, ein sicherer VPN-Zugang zum Firmennetz sowie organisatorische Regelungen zum Datenschutz am Heimarbeitsplatz."
    },

    {
      id: "A2b",
      block: "2",
      type: "two-of-many",
      operator: "Erläutern Sie",
      context:
        "Es wird vorgeschlagen, einfache Tablets für das Homeoffice zu nutzen.",
      question:
        "an zwei Aspekten, warum Tablets die Anforderungen an einen Bildschirmarbeitsplatz häufig nicht erfüllen.",
      points: 4,
      keywords: [
        "bildschirmgröße",
        "ergonomie",
        "tastatur",
        "eingabegerät",
        "haltung",
        "auflösung"
      ],
      solution:
        "Tablets verfügen meist über zu kleine Bildschirme, was eine ergonomische Arbeit erschwert. Zudem fehlen vollwertige Eingabegeräte wie Tastatur und Maus, sodass eine körperlich ungünstige Haltung gefördert wird."
    },

    {
      id: "A2c",
      block: "2",
      type: "two-of-many",
      operator: "Beschreiben Sie",
      context:
        "Als Kompromiss werden Notebooks im Homeoffice eingesetzt.",
      question:
        "zwei Möglichkeiten, die Arbeit mit Notebooks ergonomischer zu gestalten.",
      points: 4,
      keywords: [
        "externer monitor",
        "tastatur",
        "maus",
        "höhenverstellbar",
        "bürostuhl",
        "beleuchtung"
      ],
      solution:
        "Die Ergonomie lässt sich verbessern, indem ein externer Monitor, eine separate Tastatur und Maus eingesetzt werden und das Notebook auf Augenhöhe positioniert wird. Außerdem sind ein ergonomischer Bürostuhl und geeignete Beleuchtung wichtig."
    },

    {
      id: "A2d",
      block: "2",
      type: "text",
      operator: "Tragen Sie ein",
      context:
        "Sie sollen Vor- und Nachteile von Homeoffice für Beschäftigte zusammentragen.",
      question:
        "je zwei mögliche Vorteile und zwei Nachteile von Homeoffice.",
      points: 4,
      keywords: [
        "vereinbarkeit",
        "familie",
        "pendelzeit",
        "flexibilität",
        "soziale kontakte",
        "abgrenzung",
        "isolierung"
      ],
      solution:
        "Vorteile sind zum Beispiel bessere Vereinbarkeit von Beruf und Privatleben sowie der Wegfall von Pendelzeiten. Nachteile können fehlende soziale Kontakte im Team und eine schwierige Abgrenzung von Arbeit und Freizeit sein."
    },


    {
      id: "A2e",
      block: "2",
      type: "rechnung",
      operator: "Berechnen Sie",
      context:
        "Die Hotline soll zusätzlich von 20:00 Uhr bis 06:00 Uhr (10 Stunden Nachtschicht) angeboten werden. Für First-, Second- und Third-Level-Support ist in dieser Zeit jeweils ein Mitarbeiter in Bereitschaft.",
      question:
        "zu welchem einheitlichen Minutensatz der Service kalkuliert werden muss, um die Kosten der Tabellenangaben exakt zu decken. Der Rechenweg muss nachvollziehbar sein.",
      points: 5,
      expectedResult: "2,40",
      keywords: [
        "gesamtkosten bereitschaft",
        "gesamtkosten",
        "gesamtkosten anrufzeit",
        "gesamtminuten",
        "kosten gesamt",
        "minutensatz",
        "geteilt durch"
      ],
      svg: `
    <svg width="460" height="150" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="440" height="130" fill="#020617" stroke="#9ca3af"/>
      <text x="230" y="30" fill="#e5e7eb" text-anchor="middle" font-size="13">
        Kostenübersicht Hotline-Nachtschicht
      </text>

      <!-- Tabellenkopf -->
      <text x="40"  y="55" fill="#e5e7eb" font-size="11">Level</text>
      <text x="140" y="55" fill="#e5e7eb" font-size="11">Bereitschaft €/h</text>
      <text x="260" y="55" fill="#e5e7eb" font-size="11">Minutenpreis €</text>
      <text x="370" y="55" fill="#e5e7eb" font-size="11">Anrufminuten</text>

      <!-- First-Level -->
      <text x="40"  y="80" fill="#e5e7eb" font-size="11">First</text>
      <text x="160" y="80" fill="#e5e7eb" font-size="11">12,00</text>
      <text x="270" y="80" fill="#e5e7eb" font-size="11">0,50</text>
      <text x="390" y="80" fill="#e5e7eb" font-size="11">150</text>

      <!-- Second-Level -->
      <text x="40"  y="100" fill="#e5e7eb" font-size="11">Second</text>
      <text x="160" y="100" fill="#e5e7eb" font-size="11">15,00</text>
      <text x="270" y="100" fill="#e5e7eb" font-size="11">1,00</text>
      <text x="390" y="100" fill="#e5e7eb" font-size="11">100</text>

      <!-- Third-Level -->
      <text x="40"  y="120" fill="#e5e7eb" font-size="11">Third</text>
      <text x="160" y="120" fill="#e5e7eb" font-size="11">20,00</text>
      <text x="270" y="120" fill="#e5e7eb" font-size="11">1,50</text>
      <text x="390" y="120" fill="#e5e7eb" font-size="11">50</text>
    </svg>
  `,
      solution:
        "Gesamtkosten Bereitschaft: (12,00 + 15,00 + 20,00) x 10 = 470,00 EUR. " +
        "Gesamtminuten: 150 + 100 + 50 = 300 Minuten. " +
        "Kosten beanspruchte Anrufzeit: (0,50 x 150) + (1,00 x 100) + (1,50 x 50) = 250,00 EUR. " +
        "Kosten gesamt: 470,00 + 250,00 = 720,00 EUR. " +
        "Minutensatz: 720,00 / 300 = 2,40 EUR."
    },


    {
      id: "A2f",
      block: "2",
      type: "two-of-many",
      operator: "Formulieren Sie",
      context:
        "Die Kostenpflichtigkeit der Hotline muss den Kunden kommuniziert werden.",
      question:
        "zwei überzeugende Argumente in ganzen Sätzen, die in einer E-Mail verwendet werden können.",
      points: 4,
      keywords: [
        "transparenz",
        "kalkulation",
        "qualität",
        "verfügbarkeit",
        "fachpersonal",
        "nachvollziehbar"
      ],
      solution:
        "In der E-Mail können Sie beispielsweise betonen, dass durch die Gebühr eine hohe Verfügbarkeit und fachliche Qualität des Supports sichergestellt wird und die Preise transparent und nachvollziehbar kalkuliert sind."
    },

    // Summe 2. Aufgabe: 4 + 4 + 4 + 4 + 5 + 4 = 25

    // ===== 3. Aufgabe – Datenschutz / IT-Sicherheit / VPN (22 Punkte) =====

    {
      id: "A3a",
      block: "3",
      type: "two-of-many",
      operator: "Nennen Sie",
      context:
        "Bei der Nutzung eines Laptops als Telearbeitsplatz müssen Kundendaten geschützt werden.",
      question:
        "zwei in Deutschland relevante gesetzliche Grundlagen zum Datenschutz.",
      points: 2,
      keywords: [
        "dsgvo",
        "bdsd",
        "bds g",
        "bundesdatenschutzgesetz",
        "eu-dsgvo",
        "ttdsg",
        "telekommunikation telemedien datenschutz gesetz"
      ],
      solution:
        "Beispiele: DSGVO, Bundesdatenschutzgesetz (BDSG), TTDSG (Telekommunikation-Telemedien-Datenschutz-Gesetz)."
    },

    {
      id: "A3b",
      block: "3",
      type: "text",
      operator: "Nennen Sie",
      context:
        "Das Bundesamt für Sicherheit in der Informationstechnik gibt Anforderungen zum Schutz von Informationen für Telearbeit vor.",
      question:
        "je ein Beispiel für eine sinnvolle technisch-organisatorische Maßnahme in den Bereichen Zugriffsschutz, Zutrittsschutz, sichere Datenkommunikation und Transport von Datenträgern.",
      points: 4,
      keywords: [
        "passwort",
        "verschlüsselung",
        "bildschirm sperre",
        "abschließbarer raum",
        "vpn",
        "https",
        "datenträger"
      ],
      solution:
        "Beispiele sind starke Passwörter und Verschlüsselung für den Zugriffsschutz, ein abschließbarer Raum für den Zutrittsschutz, ein VPN-Tunnel zur sicheren Datenkommunikation und die gesicherte Aufbewahrung bzw. der verschlossene Transport von Datenträgern."
    },

    {
      id: "A3c",
      block: "3",
      type: "two-of-many",
      operator: "Nennen Sie",
      context:
        "Eine SSD im Laptop soll mithilfe eines TPM und einer Verschlüsselungssoftware abgesichert werden.",
      question:
        "zwei Kriterien für ein sicheres Passwort für die Entsperrung der SSD.",
      points: 2,
      keywords: [
        "länge",
        "sonderzeichen",
        "groß",
        "klein",
        "zahlen",
        "2faktor authentifizierung",
        "2fa",
        "nicht leicht zu erraten"
      ],
      solution:
        "Ein sicheres Passwort sollte ausreichend lang sein und eine Kombination aus Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen enthalten und nicht leicht zu erraten sein."
    },

    {
      id: "A3cc",
      block: "3",
      type: "text",
      operator: "Beschreiben Sie",
      context:
        "Der Verschlüsselungsalgorithmus unterstützt die Sicherheitsziele Vertraulichkeit und Integrität.",
      question:
        "was Vertraulichkeit und Integrität in Bezug auf die Daten auf der SSD bedeuten.",
      points: 4,
      keywords: [
        "vertraulichkeit",
        "nur berechtigte",
        "zugriff",
        "integrität",
        "unverändert",
        "manipulation erkennen"
      ],
      solution:
        "Vertraulichkeit bedeutet, dass nur berechtigte Personen mit dem richtigen Schlüssel auf die Daten zugreifen können. Integrität bedeutet, dass unberechtigte Änderungen erkannt werden und die Daten in einem unveränderten Zustand bleiben."
    },

    {
      id: "A3cd",
      block: "3",
      type: "text",
      operator: "Beurteilen Sie",
      context:
        "Es besteht die Gefahr, dass ein kompletter Laptop gestohlen wird.",
      question:
        "inwiefern das beschriebene Verschlüsselungssystem die Daten auf der SSD in diesem Fall schützt.",
      points: 2,
      keywords: [
        "zugriff",
        "ohne passwort",
        "erschwert",
        "daten geschützt",
        "angriff",
        "brute-force"
      ],
      solution:
        "Durch die Verschlüsselung bleiben die Daten für Angreifer ohne Passwort und Schlüssel in der Regel unzugänglich. Der Diebstahl des Geräts allein reicht nicht aus, um auf die gespeicherten Informationen zuzugreifen."
    },

    {
      id: "A3d",
      block: "3",
      type: "text",
      operator: "Beschreiben Sie",
      context:
        "Vom Telearbeitsplatz soll eine sichere Verbindung zu einem Server im Firmennetz aufgebaut werden. Zusätzlich kommt ein persönliches Zertifikat zum Einsatz.",
      question:
        "den sicherheitstechnischen Vorteil eines VPN und die geplante Identifizierung mithilfe des digitalen Zertifikats.",
      points: 8,
      keywords: [
        "vpn",
        "verschlüsselung",
        "getunnelte verbindung",
        "öffentliche netze",
        "identität",
        "vertrauenswürdige stelle"
      ],
      solution:
        "Ein VPN stellt eine verschlüsselte, getunnelte Verbindung zwischen Telearbeitsplatz und Firmenserver her, sodass Daten auch über öffentliche Netze vertraulich übertragen werden. Das digitale Zertifikat dient dazu, den Benutzer oder das Gerät eindeutig zu identifizieren und gegenüber dem Server zu authentifizieren, basierend auf einem vertrauenswürdigen Zertifikatsaussteller."
    },

    // Summe 3. Aufgabe: 2 + 4 + 2 + 4 + 2 + 8 = 22

    // ===== 4. Aufgabe – Projektplanung / Gantt / ERD / SQL (28 Punkte) =====

    {
      id: "A4aa",
      block: "4",
      type: "text",
      operator: "Nennen Sie",
      context:
        "Ein Projekt zur Einführung eines Ticketsystems soll geplant werden.",
      question:
        "je zwei wesentliche Merkmale eines Gantt-Diagramms und eines Netzplans.",
      points: 4,
      keywords: [
        "gantt",
        "balken",
        "zeitachse",
        "dauer",
        "netzplan",
        "vorgangsknoten",
        "pufferzeiten",
        "abhängigkeiten",
        "kritischer pfad"
      ],
      solution:
        "Ein Gantt-Diagramm stellt Vorgänge als Balken auf einer Zeitachse dar und zeigt Dauer und zeitliche Lage. Ein Netzplan stellt Vorgänge als Knoten mit Abhängigkeiten dar und erlaubt die Ermittlung von Pufferzeiten und des kritischen Pfades."
    },

    {
      id: "A4ab",
      block: "4",
      type: "uml",
      operator: "Bringen Sie in die richtige Reihenfolge",
      context:
        "Es liegt eine unsortierte Liste von Projektphasen vor. Alle Phasen sind vorhanden, aber noch nicht in der korrekten Reihenfolge.",
      question:
        "Bringen Sie die genannten Projektphasen in eine sinnvolle Reihenfolge von der ersten bis zur letzten Phase.",
      points: 3,
      correctOrder: [
        "anforderungsanalyse",
        "konzeptioneller entwurf",
        "logischer entwurf",
        "physischer entwurf",
        "implementierung",
        "tests",
        "wartung"
      ],
      svg: `
      <svg width="360" height="280" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="340" height="260" fill="#020617" stroke="#9ca3af"/>
        <text x="190" y="30" fill="#e5e7eb" text-anchor="middle" font-size="13">
          Projektphasen (unsortiert)
        </text>

        <!-- 1 -->
        <rect x="30" y="50" width="300" height="22" fill="none" stroke="#22c55e"/>
        <text x="40" y="66" fill="#e5e7eb" font-size="11">
          Physischer Entwurf
        </text>

        <!-- 2 -->
        <rect x="30" y="80" width="300" height="22" fill="none" stroke="#22c55e"/>
        <text x="40" y="96" fill="#e5e7eb" font-size="11">
          Implementierung
        </text>

        <!-- 3 -->
        <rect x="30" y="110" width="300" height="22" fill="none" stroke="#22c55e"/>
        <text x="40" y="126" fill="#e5e7eb" font-size="11">
          Logischer Entwurf
        </text>

        <!-- 4 -->
        <rect x="30" y="140" width="300" height="22" fill="none" stroke="#22c55e"/>
        <text x="40" y="156" fill="#e5e7eb" font-size="11">
          Anforderungsanalyse
        </text>

        <!-- 5 -->
        <rect x="30" y="170" width="300" height="22" fill="none" stroke="#22c55e"/>
        <text x="40" y="186" fill="#e5e7eb" font-size="11">
          Konzeptioneller Entwurf
        </text>

        <!-- 6 -->
        <rect x="30" y="200" width="300" height="22" fill="none" stroke="#22c55e"/>
        <text x="40" y="216" fill="#e5e7eb" font-size="11">
          Wartung
        </text>

        <!-- 7 -->
        <rect x="30" y="230" width="300" height="22" fill="none" stroke="#22c55e"/>
        <text x="40" y="246" fill="#e5e7eb" font-size="11">
          Tests
        </text>
      </svg>
      `,
      solution:
        "Eine typische Reihenfolge ist: Anforderungsanalyse, konzeptioneller Entwurf, logischer Entwurf, physischer Entwurf und Implementierung, Test und Validierung, Übergabe in Anwendung und Wartung."
    },

    {
      id: "A4b",
      block: "4",
      type: "diagramm",
      operator: "Bestimmen Sie",
      context:
        "Das folgende Gantt-Diagramm zeigt die Vorgänge A bis D mit ihren Startzeiten und Dauern auf einer Zeitachse (0 bis 4 Tage).",
      question:
        "anhand des dargestellten Gantt-Diagramms die frühestmögliche Projektdauer und einen Vorgang mit der größten Pufferzeit. Beschreiben Sie kurz, wie Sie diese Werte aus dem Diagramm ablesen.",
      points: 8,
      keywords: [
        "gantt",
        "zeitachse",
        "parallel",
        "vorgang",
        "puffer",
        "kritischer pfad",
        "projektdauer"
      ],
      svg: `
      <svg width="460" height="170" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="440" height="150" fill="#020617" stroke="#9ca3af"/>
        <text x="230" y="30" fill="#e5e7eb" text-anchor="middle" font-size="13">
          Gantt-Diagramm (Schema)
        </text>

        <!-- Zeitachse -->
        <text x="80"  y="50" fill="#e5e7eb" font-size="10">0</text>
        <text x="140" y="50" fill="#e5e7eb" font-size="10">1</text>
        <text x="200" y="50" fill="#e5e7eb" font-size="10">2</text>
        <text x="260" y="50" fill="#e5e7eb" font-size="10">3</text>
        <text x="320" y="50" fill="#e5e7eb" font-size="10">4</text>

        <!-- A-D als vier Zeilen -->
        <text x="40" y="75"  fill="#e5e7eb" font-size="11">A</text>
        <rect x="80" y="65" width="60" height="12" fill="#22c55e"/>

        <text x="40" y="95"  fill="#e5e7eb" font-size="11">B</text>
        <rect x="140" y="85" width="80" height="12" fill="#22c55e"/>

        <text x="40" y="115" fill="#e5e7eb" font-size="11">C</text>
        <rect x="140" y="105" width="60" height="12" fill="#22c55e"/>

        <text x="40" y="135" fill="#e5e7eb" font-size="11">D</text>
        <rect x="200" y="125" width="80" height="12" fill="#22c55e"/>
      </svg>
      `,
      solution:
        "Die frühestmögliche Projektdauer lässt sich als Länge des längsten Weges von Projektstart bis Projektende ablesen (kritischer Pfad). Im Schema endet der letzte Vorgang bei Tag 4; die Projektdauer beträgt daher 4 Tage. Ein Vorgang mit der größten Pufferzeit ist derjenige, dessen Balken zeitlich verschoben werden könnte, ohne das Projektende bei Tag 4 zu verändern (z.B. ein nicht kritischer Vorgang, der parallel zu anderen Vorgängen liegt)."
    },

    {
      id: "A4ca",
      block: "4",
      type: "uml",
      operator: "Beschreiben Sie",
      context:
        "Ein Ticketsystem erfasst bisher Kunden und Tickets. In Zukunft sollen zusätzlich Tätigkeiten zu den Tickets gespeichert werden. Das ER-Diagramm zeigt die Entitäte Kunde, Ticket und eine noch nicht ausgefüllte Entität Tätigkeit.",
      question:
        "welche Attribute die Entität Tätigkeit sinnvollerweise enthalten sollte und in welcher Kardinalität sie mit Ticket in Beziehung steht. Beschreiben Sie Ihre Ergänzungen in ganzen Sätzen.",
      points: 5,
      keywords: [
        "tätigkeit",
        "beschreibung",
        "ergebnis",
        "start",
        "ende",
        "ticket",
        "1:n"
      ],
      svg: `
        <svg width="520" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="500" height="180" fill="#020617" stroke="#9ca3af"/>
          <text x="260" y="30" fill="#e5e7eb" text-anchor="middle" font-size="13">
            ERD-Ausschnitt Ticketsystem
          </text>

          <!-- Kunde -->
          <rect x="40" y="80" width="120" height="40" fill="none" stroke="#22c55e"/>
          <text x="100" y="105" fill="#e5e7eb" text-anchor="middle" font-size="11">
            Kunde
          </text>

          <!-- Ticket -->
          <rect x="200" y="80" width="120" height="40" fill="none" stroke="#22c55e"/>
          <text x="260" y="105" fill="#e5e7eb" text-anchor="middle" font-size="11">
            Ticket
          </text>

          <!-- Tätigkeit -->
          <rect x="360" y="80" width="120" height="40" fill="none" stroke="#22c55e"/>
          <text x="420" y="105" fill="#e5e7eb" text-anchor="middle" font-size="11">
            Tätigkeit
          </text>

          <!-- Beziehungen -->
          <line x1="160" y1="100" x2="200" y2="100" stroke="#e5e7eb"/>
          <line x1="320" y1="100" x2="360" y2="100" stroke="#e5e7eb"/>
        </svg>
      `,
      solution:
        "Die Entität Tätigkeit erhält folgende Attribute: TätigkeitsID (Primärschlüssel), TicketID (Fremdschlüssel auf Ticket), Beschreibung der Tätigkeit, Ergebnis, Startzeit und Endzeit. Zwischen Ticket und Tätigkeit besteht eine 1:n-Beziehung: Ein Ticket kann viele Tätigkeiten haben, jede Tätigkeit gehört genau zu einem Ticket."
    },

    {
      id: "A4cb",
      block: "4",
      type: "sql",
      operator: "Erstellen Sie",
      context:
        "Im Ticketsystem sollen statistische Auswertungen durchgeführt werden.",
      question:
        "eine SQL-Abfrage, die für jede Priorität die Anzahl der Tickets ausgibt.",
      points: 2,
      keywords: ["select", "count", "group by", "priorität", "ticket"],
      solution:
        "Eine mögliche Abfrage lautet: SELECT Prioritaet, COUNT(*) AS Anzahl FROM Ticket GROUP BY Prioritaet;"
    },

    {
      id: "A4cc",
      block: "4",
      type: "sql",
      operator: "Erstellen Sie",
      context:
        "Die Geschäftsleitung möchte wissen, wie viele Kunden überhaupt Tickets eröffnet haben.",
      question:
        "eine SQL-Abfrage, die die Anzahl unterschiedlicher Kunden mit mindestens einem Ticket ermittelt.",
      points: 3,
      keywords: ["select", "count", "distinct", "kunde", "kundenid", "ticket"],
      solution:
        "Eine mögliche Abfrage lautet: SELECT COUNT(DISTINCT KundenID) AS AnzahlKundenMitTickets FROM Ticket;"
    },

    {
      id: "A4cd",
      block: "4",
      type: "text",
      operator: "Analysieren Sie",
      context:
        "Eine SQL-Abfrage soll offene Tickets mit einem Erfassungsdatum ausgeben, das mehr als zwei Monate zurückliegt.",
      question:
        "das zu erwartende Ergebnis einer solchen Abfrage in eigenen Worten.",
      points: 3,
      keywords: [
        "offene tickets",
        "älter als",
        "zwei monate",
        "erfassungsdatum",
        "priorisierung",
        "handlungsbedarf"
      ],
      solution:
        "Die Abfrage filtert Tickets, die im Zustand offen sind und deren Erfassungsdatum mehr als zwei Monate in der Vergangenheit liegt. Die Ausgabe zeigt somit besonders lang offene Tickets, bei denen Handlungsbedarf besteht."
    }

    // Summe 4. Aufgabe: 4 + 3 + 8 + 5 + 2 + 3 + 3 = 28
    // Gesamtsumme: 25 + 25 + 22 + 28 = 100 Punkte
  ]
};
