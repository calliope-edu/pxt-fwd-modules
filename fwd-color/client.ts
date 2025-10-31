namespace fwdSensors {
    export const enum redGreenBlue {
        //% block="red" block.loc.de="rot" block.loc.it="rosso" block.loc.es="rojo" block.loc.el="κόκκινο"
        Red = 0,
        //% block="green" block.loc.de="grün" block.loc.it="verde" block.loc.es="verde" block.loc.el="πράσινο"
        Green = 1,
        //% block="blue" block.loc.de="blau" block.loc.it="blu" block.loc.es="azul" block.loc.el="μπλε"
        Blue = 2,
    }
    //% fixedInstances
    export class FwdColorClient extends modules.ColorClient {
        constructor(role: string) {
            super(role)
        }
        /**
         * Returns one of the sensor's color readings (%).
         * @locale de Gibt einen der Farbwerte des Sensors zurück (%).
         * @locale it Restituisce una delle letture di colore del sensore (%).
         * @locale es Devuelve una de las lecturas de color del sensor (%).
         * @locale el Επιστρέφει μία από τις αναγνώσεις χρώματος του αισθητήρα (%).
         */
        //% group="Color" group.loc.de="Farbe" group.loc.it="Colore" group.loc.es="Color" group.loc.el="Χρώμα"
        //% block="$this $color \\%" block.loc.de="$this $color \\%" block.loc.it="$this $color \\%" block.loc.es="$this $color \\%" block.loc.el="$this $color \\%"
        //% blockId=fwd_color_get_color
        //% weight=100
        color(color: redGreenBlue): number {
            this.setStreaming(true)
            const values = this._reading.pauseUntilValues() as any[]
            return Math.round(values[color] * 100)
        }
        /**
         * Returns true when the color (%) is between the provided thresholds.
         * @param threshold1 the first color (%) threshold
         * @param threshold2 the second color (%) threshold
         * @locale de Gibt wahr zurück, wenn die Farbe (%) zwischen den angegebenen Schwellenwerten liegt.
         * @locale it Restituisce vero quando il colore (%) è tra le soglie fornite.
         * @locale es Devuelve verdadero cuando el color (%) está entre los umbrales proporcionados.
         * @locale el Επιστρέφει αληθές όταν το χρώμα (%) είναι μεταξύ των παρεχόμενων ορίων.
         */
        //% group="Color" group.loc.de="Farbe" group.loc.it="Colore" group.loc.es="Color" group.loc.el="Χρώμα"
        //% block="$this $color is between $threshold1 and $threshold2 \\%" block.loc.de="$this $color ist zwischen $threshold1 und $threshold2 \\%" block.loc.it="$this $color è tra $threshold1 e $threshold2 \\%" block.loc.es="$this $color está entre $threshold1 y $threshold2 \\%" block.loc.el="$this $color είναι μεταξύ $threshold1 και $threshold2 \\%"
        //% threshold1.min=0 threshold1.max=100 threshold1.defl=0
        //% threshold2.min=0 threshold2.max=100 threshold2.defl=100
        //% blockId=fwd_color_is_between
        //% weight=99
        isBetween(
            color: redGreenBlue,
            threshold1: number,
            threshold2: number,
        ): boolean {
            if (threshold1 > threshold2) {
                let holder = threshold1
                threshold1 = threshold2
                threshold2 = holder
            } 
            if (this.color(color) - threshold1 < 0) {
                return false
            }
            if (this.color(color) - threshold2 > 0) {
                return false
            }
            return true
        }
    }
    //% fixedInstance whenUsed
    export const color1 = new FwdColorClient("color1")
    //% fixedInstance whenUsed
    export const color2 = new FwdColorClient("color2")
    //% fixedInstance whenUsed
    export const color3 = new FwdColorClient("color3")
    //% fixedInstance whenUsed
    export const color4 = new FwdColorClient("color4")
    //% fixedInstances
    export class FwdColorLEDClient extends fwdBase.LightbulbClient {
        constructor(role: string) {
            super(role)
            this.setBrightness(100)
        }
        /**
         * Set the brightness of the color sensor LED. Set it to 0% to turn it off.
         * @param brightness 0%-100% intensity
         * @locale de Stellt die Helligkeit der Farbsensor-LED ein. Auf 0% setzen, um sie auszuschalten.
         * @locale it Imposta la luminosità del LED del sensore di colore. Impostare a 0% per spegnerlo.
         * @locale es Establece el brillo del LED del sensor de color. Establézcalo en 0% para apagarlo.
         * @locale el Ορίζει τη φωτεινότητα του LED του αισθητήρα χρώματος. Ορίστε το στο 0% για να το απενεργοποιήσετε.
         */
        //% group="Color" group.loc.de="Farbe" group.loc.it="Colore" group.loc.es="Color" group.loc.el="Χρώμα"
        //% blockId=fwd_color_set_brightness
        //% block="set $this brightness to $brightness (\\%)" block.loc.de="setze $this Helligkeit auf $brightness (\\%)" block.loc.it="imposta $this luminosità a $brightness (\\%)" block.loc.es="establecer $this brillo a $brightness (\\%)" block.loc.el="όρισε $this φωτεινότητα σε $brightness (\\%)"
        //% brightness.min=0
        //% brightness.max=100
        //% weight=98
        setBrightness(brightness: number) {
            super.setBrightness(brightness)
        }
        /**
         * Returns true if the color sensor LED brightness is anything other than 0%.
         * @locale de Gibt wahr zurück, wenn die Helligkeit der Farbsensor-LED nicht 0% ist.
         * @locale it Restituisce vero se la luminosità del LED del sensore di colore è diversa da 0%.
         * @locale es Devuelve verdadero si el brillo del LED del sensor de color es diferente de 0%.
         * @locale el Επιστρέφει αληθές αν η φωτεινότητα του LED του αισθητήρα χρώματος είναι διαφορετική από 0%.
         */
        //% group="Color" group.loc.de="Farbe" group.loc.it="Colore" group.loc.es="Color" group.loc.el="Χρώμα"
        //% block="$this is on" block.loc.de="$this ist an" block.loc.it="$this è acceso" block.loc.es="$this está encendido" block.loc.el="$this είναι ενεργό"
        //% blockId=fwd_color_is_on
        //% weight=97
        isOn(): boolean {
            return super.isOn()
        }
    }
    //% fixedInstance whenUsed
    export const colorLED1 = new FwdColorLEDClient("colorLED1")
    //% fixedInstance whenUsed
    export const colorLED2 = new FwdColorLEDClient("colorLED2")
    //% fixedInstance whenUsed
    export const colorLED3 = new FwdColorLEDClient("colorLED3")
    //% fixedInstance whenUsed
    export const colorLED4 = new FwdColorLEDClient("colorLED4")
}
