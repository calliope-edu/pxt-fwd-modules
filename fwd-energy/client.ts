namespace fwdSensors {
    //% fixedInstances
    export class FwdDcCurrentClient extends modules.DcCurrentMeasurementClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's current reading (mA).
         * @de Gibt den gemessenen Strom des Sensors zurück (mA).
         * @fr Renvoie la valeur du courant mesurée par le capteur (mA).
         * @it Restituisce la corrente misurata dal sensore (mA).
         * @es Devuelve la corriente medida por el sensor (mA).
         * @el Επιστρέφει την τιμή ρεύματος που μετρά ο αισθητήρας (mA).
         */
        //% group="Energy"
        //% group.de="Energie"
        //% group.fr="Énergie"
        //% group.it="Energia"
        //% group.es="Energía"
        //% group.el="Ενέργεια"
        //% block="$this mA"
        //% block.de="$this mA"
        //% block.fr="$this mA"
        //% block.it="$this mA"
        //% block.es="$this mA"
        //% block.el="$this mA"
        //% blockId=fwd_dccurrent_get_current
        //% weight=100
        current(): number {
            const amps = super.reading()
            const milliamps = Math.round(amps * 1000)
            return milliamps
        }

        /**
         * Returns true when the current (mA) is past the provided threshold in the designated direction.
         * @param threshold the current (mA) to check against
         * @param direction over or under the threshold
         * @de Gibt wahr zurück, wenn der Strom (mA) den angegebenen Schwellenwert überschreitet oder unterschreitet.
         * @fr Renvoie vrai lorsque le courant (mA) dépasse le seuil indiqué.
         * @it Restituisce vero quando la corrente (mA) supera o scende sotto la soglia indicata.
         * @es Devuelve verdadero cuando la corriente (mA) supera o está por debajo del umbral indicado.
         * @el Επιστρέφει αληθές όταν η ένταση ρεύματος (mA) υπερβαίνει ή είναι κάτω από το καθορισμένο όριο.
         */
        //% group="Energy"
        //% group.de="Energie"
        //% group.fr="Énergie"
        //% group.it="Energia"
        //% group.es="Energía"
        //% group.el="Ενέργεια"
        //% block="$this is $direction $threshold mA"
        //% block.de="$this ist $direction $threshold mA"
        //% block.fr="$this est $direction $threshold mA"
        //% block.it="$this è $direction $threshold mA"
        //% block.es="$this está $direction $threshold mA"
        //% block.el="$this είναι $direction $threshold mA"
        //% blockId=fwd_dccurrent_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.current() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const current1 = new FwdDcCurrentClient("current1")
    //% fixedInstance whenUsed
    export const current2 = new FwdDcCurrentClient("current2")
    //% fixedInstance whenUsed
    export const current3 = new FwdDcCurrentClient("current3")
    //% fixedInstance whenUsed
    export const current4 = new FwdDcCurrentClient("current4")

    //% fixedInstances
    export class FwdDcVoltageClient extends modules.DcVoltageMeasurementClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Returns the sensor's voltage reading (V).
         * @de Gibt die gemessene Spannung des Sensors zurück (V).
         * @fr Renvoie la tension mesurée par le capteur (V).
         * @it Restituisce la tensione misurata dal sensore (V).
         * @es Devuelve el voltaje medido por el sensor (V).
         * @el Επιστρέφει την τιμή τάσης που μετρά ο αισθητήρας (V).
         */
        //% group="Energy"
        //% group.de="Energie"
        //% group.fr="Énergie"
        //% group.it="Energia"
        //% group.es="Energía"
        //% group.el="Ενέργεια"
        //% block="$this V"
        //% block.de="$this V"
        //% block.fr="$this V"
        //% block.it="$this V"
        //% block.es="$this V"
        //% block.el="$this V"
        //% blockId=fwd_dcvoltage_get_voltage
        //% weight=98
        voltage(): number {
            return super.reading()
        }

        /**
         * Returns true when the voltage (V) is past the provided threshold in the designated direction.
         * @param threshold the voltage (V) to check against
         * @param direction over or under the threshold
         * @de Gibt wahr zurück, wenn die Spannung (V) den angegebenen Schwellenwert überschreitet oder unterschreitet.
         * @fr Renvoie vrai lorsque la tension (V) dépasse le seuil indiqué.
         * @it Restituisce vero quando la tensione (V) supera o scende sotto la soglia indicata.
         * @es Devuelve verdadero cuando el voltaje (V) supera o está por debajo del umbral indicado.
         * @el Επιστρέφει αληθές όταν η τάση (V) υπερβαίνει ή είναι κάτω από το καθορισμένο όριο.
         */
        //% group="Energy"
        //% group.de="Energie"
        //% group.fr="Énergie"
        //% group.it="Energia"
        //% group.es="Energía"
        //% group.el="Ενέργεια"
        //% block="$this is $direction $threshold V"
        //% block.de="$this ist $direction $threshold V"
        //% block.fr="$this est $direction $threshold V"
        //% block.it="$this è $direction $threshold V"
        //% block.es="$this está $direction $threshold V"
        //% block.el="$this είναι $direction $threshold V"
        //% blockId=fwd_dcvoltage_is_past_threshold
        //% weight=97
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.voltage() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const voltage1 = new FwdDcVoltageClient("voltage1")
    //% fixedInstance whenUsed
    export const voltage2 = new FwdDcVoltageClient("voltage2")
    //% fixedInstance whenUsed
    export const voltage3 = new FwdDcVoltageClient("voltage3")
    //% fixedInstance whenUsed
    export const voltage4 = new FwdDcVoltageClient("voltage4")
}
