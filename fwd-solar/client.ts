namespace fwdSensors {
    //% fixedInstances
    export class FwdSolarClient extends modules.LightLevelClient {
        MAX_REPORT_BRIGHTNESS = 100
        MAX_SERVICE_BRIGHTNESS = 1

        toBlocksBrightness(serviceBrightness: number): number {
            return (
                (this.MAX_REPORT_BRIGHTNESS * serviceBrightness) /
                this.MAX_SERVICE_BRIGHTNESS
            )
        }

        toServiceBrightness(reportBrightness: number): number {
            return (
                (this.MAX_SERVICE_BRIGHTNESS * reportBrightness) /
                this.MAX_REPORT_BRIGHTNESS
            )
        }

        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's light level reading (%).
         * @de Gibt den Lichtwert des Sensors zurück (%).
         * @fr Renvoie le niveau de lumière du capteur (%).
         * @it Restituisce il livello di luce del sensore (%).
         * @es Devuelve la lectura del nivel de luz del sensor (%).
         * @el Επιστρέφει την ένδειξη φωτεινότητας του αισθητήρα (%).
         */
        //% group="Solar"
        //% group.de="Solar"
        //% group.fr="Solaire"
        //% group.it="Solare"
        //% group.es="Solar"
        //% group.el="Ηλιακό"
        //% block="$this light level (\\%)"
        //% block.de="$this Lichtwert (\\%)"
        //% block.fr="niveau lumineux de $this (\\%)"
        //% block.it="livello di luce di $this (\\%)"
        //% block.es="nivel de luz de $this (\\%)"
        //% block.el="επίπεδο φωτεινότητας $this (\\%)"
        //% blockId=fwd_solar_get_light_level
        //% weight=100
        lightLevel(): number {
            return super.lightLevel()
        }

        /**
         * Returns true when the light level (%) is past the provided threshold in the designated direction.
         * @param threshold the light level (%) to check against
         * @param direction over or under the threshold
         * @de Gibt wahr zurück, wenn der Lichtwert (%) den angegebenen Schwellenwert in die gewählte Richtung überschreitet oder unterschreitet.
         * @fr Renvoie vrai lorsque le niveau de lumière (%) dépasse le seuil indiqué dans la direction choisie.
         * @it Restituisce vero quando il livello di luce (%) supera o scende sotto la soglia indicata nella direzione scelta.
         * @es Devuelve verdadero cuando el nivel de luz (%) supera o está por debajo del umbral indicado en la dirección designada.
         * @el Επιστρέφει αληθές όταν το επίπεδο φωτεινότητας (%) υπερβαίνει ή είναι κάτω από το καθορισμένο όριο προς την επιλεγμένη κατεύθυνση.
         */
        //% group="Solar"
        //% group.de="Solar"
        //% group.fr="Solaire"
        //% group.it="Solare"
        //% group.es="Solar"
        //% group.el="Ηλιακό"
        //% block="$this is $direction $threshold \\%"
        //% block.de="$this ist $direction $threshold \\%"
        //% block.fr="$this est $direction $threshold \\%"
        //% block.it="$this è $direction $threshold \\%"
        //% block.es="$this está $direction $threshold \\%"
        //% block.el="$this είναι $direction $threshold \\%"
        //% blockId=fwd_solar_is_past_threshold
        //% threshold.min=0 threshold.max=100 threshold.defl=5
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.lightLevel() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const solar1 = new FwdSolarClient("solar1")
    //% fixedInstance whenUsed
    export const solar2 = new FwdSolarClient("solar2")
    //% fixedInstance whenUsed
    export const solar3 = new FwdSolarClient("solar3")
    //% fixedInstance whenUsed
    export const solar4 = new FwdSolarClient("solar4")
}
