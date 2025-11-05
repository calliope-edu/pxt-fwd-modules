namespace fwdSensors {
    //% fixedInstances
    export class FwdEco2Client extends modules.ECO2Client {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's estimated CO2 (eCO2) reading (ppm).
         * @de Gibt den geschätzten CO2-Wert (eCO2) des Sensors zurück (ppm).
         * @fr Renvoie la valeur estimée de CO2 (eCO2) du capteur (ppm).
         * @it Restituisce la lettura stimata di CO2 (eCO2) del sensore (ppm).
         * @es Devuelve la lectura estimada de CO2 (eCO2) del sensor (ppm).
         * @el Επιστρέφει την εκτιμώμενη τιμή CO2 (eCO2) του αισθητήρα (ppm).
         */
        //% group="eCO2"
        //% group.loc.de="eCO2"
        //% group.loc.fr="eCO2"
        //% group.loc.it="eCO2"
        //% group.loc.es="eCO2"
        //% group.loc.el="eCO2"
        //% block="$this ppm"
        //% block.loc.de="$this ppm"
        //% block.loc.fr="$this ppm"
        //% block.loc.it="$this ppm"
        //% block.loc.es="$this ppm"
        //% block.loc.el="$this ppm"
        //% blockId=fwd_eco2_get_eco2
        //% weight=100
        eco2(): number {
            return super.eCO2()
        }

        /**
         * Returns true when the eCO2 (ppm) is past the provided threshold in the designated direction.
         * @param threshold the eCO2 (ppm) to check against
         * @param direction over or under the threshold
         * @de Gibt wahr zurück, wenn der eCO2-Wert (ppm) den angegebenen Schwellenwert überschreitet oder unterschreitet.
         * @fr Renvoie vrai lorsque l’eCO2 (ppm) dépasse le seuil indiqué.
         * @it Restituisce vero quando il valore eCO2 (ppm) supera o scende sotto la soglia indicata.
         * @es Devuelve verdadero cuando el valor eCO2 (ppm) supera o está por debajo del umbral indicado.
         * @el Επιστρέφει αληθές όταν η τιμή eCO2 (ppm) υπερβαίνει ή είναι κάτω από το καθορισμένο όριο.
         */
        //% group="eCO2"
        //% group.loc.de="eCO2"
        //% group.loc.fr="eCO2"
        //% group.loc.it="eCO2"
        //% group.loc.es="eCO2"
        //% group.loc.el="eCO2"
        //% block="$this is $direction $threshold ppm"
        //% block.loc.de="$this ist $direction $threshold ppm"
        //% block.loc.fr="$this est $direction $threshold ppm"
        //% block.loc.it="$this è $direction $threshold ppm"
        //% block.loc.es="$this está $direction $threshold ppm"
        //% block.loc.el="$this είναι $direction $threshold ppm"
        //% blockId=fwd_eco2_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.eco2() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const eCO2_1 = new FwdEco2Client("eCO2_1")
    //% fixedInstance whenUsed
    export const eCO2_2 = new FwdEco2Client("eCO2_2")
    //% fixedInstance whenUsed
    export const eCO2_3 = new FwdEco2Client("eCO2_3")
    //% fixedInstance whenUsed
    export const eCO2_4 = new FwdEco2Client("eCO2_4")

    //% fixedInstances
    export class FwdTvocClient extends modules.TvocClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's total VOC (tVOC) reading.
         * @de Gibt die Gesamt-VOC-Werte (tVOC) des Sensors zurück.
         * @fr Renvoie la valeur totale de COV (tVOC) du capteur.
         * @it Restituisce la lettura totale di VOC (tVOC) del sensore.
         * @es Devuelve la lectura total de VOC (tVOC) del sensor.
         * @el Επιστρέφει την ένδειξη συνολικών VOC (tVOC) του αισθητήρα.
         */
        //% group="eCO2"
        //% group.loc.de="eCO2"
        //% group.loc.fr="eCO2"
        //% group.loc.it="eCO2"
        //% group.loc.es="eCO2"
        //% group.loc.el="eCO2"
        //% block="$this reading"
        //% block.loc.de="$this Wert"
        //% block.loc.fr="$this valeur"
        //% block.loc.it="$this lettura"
        //% block.loc.es="$this lectura"
        //% block.loc.el="$this ένδειξη"
        //% blockId=fwd_tvoc_get_tvoc
        //% weight=98
        tvoc(): number {
            return super.tVOC()
        }

        /**
         * Returns true when the tVOC reading is past the provided threshold in the designated direction.
         * @param threshold the tVOC value to check against
         * @param direction over or under the threshold
         * @de Gibt wahr zurück, wenn der tVOC-Wert den angegebenen Schwellenwert überschreitet oder unterschreitet.
         * @fr Renvoie vrai lorsque la valeur tVOC dépasse le seuil indiqué.
         * @it Restituisce vero quando il valore tVOC supera o scende sotto la soglia indicata.
         * @es Devuelve verdadero cuando el valor tVOC supera o está por debajo del umbral indicado.
         * @el Επιστρέφει αληθές όταν η τιμή tVOC υπερβαίνει ή είναι κάτω από το καθορισμένο όριο.
         */
        //% group="eCO2"
        //% group.loc.de="eCO2"
        //% group.loc.fr="eCO2"
        //% group.loc.it="eCO2"
        //% group.loc.es="eCO2"
        //% group.loc.el="eCO2"
        //% block="$this is $direction $threshold"
        //% block.loc.de="$this ist $direction $threshold"
        //% block.loc.fr="$this est $direction $threshold"
        //% block.loc.it="$this è $direction $threshold"
        //% block.loc.es="$this está $direction $threshold"
        //% block.loc.el="$this είναι $direction $threshold"
        //% blockId=fwd_tvoc_is_past_threshold
        //% weight=97
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.tvoc() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const tVOC1 = new FwdTvocClient("tVOC1")
    //% fixedInstance whenUsed
    export const tVOC2 = new FwdTvocClient("tVOC2")
    //% fixedInstance whenUsed
    export const tVOC3 = new FwdTvocClient("tVOC3")
    //% fixedInstance whenUsed
    export const tVOC4 = new FwdTvocClient("tVOC4")
}
