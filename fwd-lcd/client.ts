namespace fwdSensors {
    /**
     * Initializing makes LCD blocks work more reliably in "on start".
     * Place this block in "on start" before the LCD blocks.
     * It simply delays program execution by 1 second.
     * @de Initialisierung sorgt dafür, dass LCD-Blöcke im "on start" zuverlässiger funktionieren.
     * @fr L'initialisation rend les blocs LCD plus fiables dans "au démarrage".
     * @it L'inizializzazione rende i blocchi LCD più affidabili in "all'avvio".
     * @es La inicialización hace que los bloques LCD funcionen más confiablemente en "al iniciar".
     * @el Η αρχικοποίηση κάνει τα μπλοκ LCD πιο αξιόπιστα στο "on start".
     */
    //% block="initialize LCD"
    //% block.loc.de="LCD initialisieren"
    //% block.loc.fr="initialiser LCD"
    //% block.loc.it="inizializza LCD"
    //% block.loc.es="inicializar LCD"
    //% block.loc.el="αρχικοποίηση LCD"
    //% blockId=fwd_lcd_initialize
    //% group="LCD"
    //% weight=100
    export function initializeLcd() {
        pause(1000)
    }

    /**
     * Takes a number and rounds it to the provided decimal point.
     * @de Rundet eine Zahl auf die angegebene Nachkommastelle.
     * @fr Arrondit un nombre au nombre de décimales spécifié.
     * @it Arrotonda un numero al numero di decimali specificato.
     * @es Redondea un número a los decimales proporcionados.
     * @el Στρογγυλοποιεί έναν αριθμό στο καθορισμένο δεκαδικό ψηφίο.
     */
    //% block="round $number_ to $decimals decimals"
    //% block.loc.de="runde $number_ auf $decimals Nachkommastellen"
    //% block.loc.fr="arrondir $number_ à $decimals décimales"
    //% block.loc.it="arrotonda $number_ a $decimals decimali"
    //% block.loc.es="redondear $number_ a $decimals decimales"
    //% block.loc.el="στρογγυλοποίηση $number_ σε $decimals δεκαδικά"
    //% decimals.min=0 decimals.max=4 decimals.defl=0
    //% blockId=fwd_lcd_round
    //% group="LCD"
    //% weight=95
    export function round(number_: number, decimals: number): number {
        if (decimals < 0) return number_
        const factor = Math.pow(10, decimals)
        return Math.round(number_ * factor) / factor
    }

    //% fixedInstances blockGap=8
    export class LCDClient extends modules.CursorCharacterScreenClient {
        private readonly delay = 20

        constructor(role: string) {
            super(role)
            super.setEnabled(1) // verhindert ein Problem beim ersten setCursor()
        }

        //% block="clear $this"
        //% block.loc.de="$this Bildschirm löschen"
        //% block.loc.fr="effacer $this"
        //% block.loc.it="cancella $this"
        //% block.loc.es="borrar $this"
        //% block.loc.el="καθαρισμός $this"
        //% blockId=fwd_lcd_clear_screen
        //% group="LCD"
        //% weight=94
        clearScreen() {
            this.printLineString("                ", 1)
            this.printLineString("                ", 2)
        }

        //% block="print string $string_ on line $line of $this"
        //% block.loc.de="zeige Text $string_ auf Zeile $line von $this"
        //% block.loc.fr="afficher texte $string_ sur ligne $line de $this"
        //% block.loc.it="stampa testo $string_ su riga $line di $this"
        //% block.loc.es="imprimir texto $string_ en línea $line de $this"
        //% block.loc.el="εκτύπωση $string_ στη γραμμή $line του $this"
        //% line.min=1 line.max=2 line.defl=1
        //% blockId=fwd_lcd_print_line_string
        //% group="LCD"
        //% weight=99
        printLineString(string_: string, line: number) {
            line -= 1
            if (line < 0 || line > 1) {
                this.setCursorAndWait(0, 0)
                this.printAndWait("err:!1-2", 'line', false)
                return
            }
            if (string_.length > 16) {
                this.setCursorAndWait(0, line)
                this.printAndWait(">16 chars", 'line', false)
                return
            }
            this.setCursorAndWait(0, line)
            this.printAndWait(string_, 'line', false)
        }

        //% block="print string $string_ on quadrant $quadrant of $this"
        //% block.loc.de="zeige Text $string_ im Quadrant $quadrant von $this"
        //% block.loc.fr="afficher texte $string_ dans quadrant $quadrant de $this"
        //% block.loc.it="stampa testo $string_ nel quadrante $quadrant di $this"
        //% block.loc.es="imprimir texto $string_ en cuadrante $quadrant de $this"
        //% block.loc.el="εκτύπωση $string_ στο τεταρτημόριο $quadrant του $this"
        //% quadrant.min=1 quadrant.max=4 quadrant.defl=1
        //% blockId=fwd_lcd_print_quadrant_string
        //% group="LCD"
        //% weight=98
        printQuadrantString(string_: string, quadrant: number) {
            let col = 0, row = 0, rightAlign = false
            switch (quadrant) {
                case 2: col = 8; row = 0; rightAlign = true; break
                case 3: col = 0; row = 1; break
                case 4: col = 8; row = 1; rightAlign = true; break
                case 1: default: break
            }
            if (![1, 2, 3, 4].includes(quadrant)) {
                this.setCursorAndWait(col, row)
                this.printAndWait("err:!1-4", 'quadrant', rightAlign)
                return
            }
            this.setCursorAndWait(col, row)
            if (string_.length > 8) {
                this.printAndWait(">8 chars", 'quadrant', rightAlign)
                return
            }
            this.printAndWait(string_, 'quadrant', rightAlign)
        }

        //% block="print number $number_ on line $line of $this"
        //% block.loc.de="zeige Zahl $number_ auf Zeile $line von $this"
        //% block.loc.fr="afficher nombre $number_ sur ligne $line de $this"
        //% block.loc.it="stampa numero $number_ su riga $line di $this"
        //% block.loc.es="imprimir número $number_ en línea $line de $this"
        //% block.loc.el="εκτύπωση αριθμού $number_ στη γραμμή $line του $this"
        //% line.min=1 line.max=2 line.defl=1
        //% blockId=fwd_lcd_print_line_number
        //% group="LCD"
        //% weight=97
        printLineNumber(number_: number, line: number) {
            this.printLineString(number_.toString(), line)
        }

        //% block="print number $number_ on quadrant $quadrant of $this"
        //% block.loc.de="zeige Zahl $number_ im Quadrant $quadrant von $this"
        //% block.loc.fr="afficher nombre $number_ dans quadrant $quadrant de $this"
        //% block.loc.it="stampa numero $number_ nel quadrante $quadrant di $this"
        //% block.loc.es="imprimir número $number_ en cuadrante $quadrant de $this"
        //% block.loc.el="εκτύπωση αριθμού $number_ στο τεταρτημόριο $quadrant του $this"
        //% quadrant.min=1 quadrant.max=4 quadrant.defl=1
        //% blockId=fwd_lcd_print_quadrant_number
        //% group="LCD"
        //% weight=96
        printQuadrantNumber(number_: number, quadrant: number) {
            this.printQuadrantString(number_.toString(), quadrant)
        }

        setCursorAndWait(x: number, y: number) {
            super.setCursor(x, y)
            pause(this.delay)
        }

        printAndWait(string_: string, lineOrQuadrant: string, rightAlign: boolean) {
            if (string_ === 'undefined') string_ = '--'
            let blanks = lineOrQuadrant === 'quadrant'
                ? this.makeBlanksString(8 - string_.length)
                : this.makeBlanksString(16 - string_.length)
            super.show(rightAlign ? blanks + string_ : string_ + blanks)
            pause(this.delay)
        }

        makeBlanksString(numberOfBlanks: number): string {
            return " ".repeat(numberOfBlanks)
        }
    }

    //% fixedInstance whenUsed
    export const lcd1 = new LCDClient("lcd1")
    //% fixedInstance whenUsed
    export const lcd2 = new LCDClient("lcd2")
    //% fixedInstance whenUsed
    export const lcd3 = new LCDClient("lcd3")
    //% fixedInstance whenUsed
    export const lcd4 = new LCDClient("lcd4")
}
