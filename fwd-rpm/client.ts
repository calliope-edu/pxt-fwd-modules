namespace fwdSensors {
    //% fixedInstances
    export class FwdRpmClient extends modules.RotationsPerMinuteClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Speed measured by the sensor.
         * Positive values are clockwise rotation and negative are counterclockwise.
         * @locale de Geschwindigkeit, die vom Sensor gemessen wird. Positive Werte = Uhrzeigersinn, negative = gegen den Uhrzeigersinn.
         * @locale fr Vitesse mesurée par le capteur. Les valeurs positives = sens horaire, négatives = sens antihoraire.
         * @locale it Velocità misurata dal sensore. Valori positivi = senso orario, negativi = senso antiorario.
         * @locale es Velocidad medida por el sensor. Valores positivos = sentido horario, negativos = antihorario.
         * @locale el Ταχύτητα μετρημένη από τον αισθητήρα. Θετικές τιμές = δεξιόστροφη, αρνητικές = αριστερόστροφη.
         */
        //% group="RPM" group.loc.de="RPM" group.loc.it="RPM" group.loc.es="RPM" group.loc.el="RPM" group.loc.fr="RPM"
        //% block="$this RPM" block.loc.de="$this U/min" block.loc.it="$this RPM" block.loc.es="$this RPM" block.loc.el="$this Σ.Α.Λ" block.loc.fr="$this tr/min"
        //% blockId=fwd_rpm_get_rpm
        //% weight=100
        rpm(): number {
            return Math.round(super.reading())
        }

        /**
         * Returns true when the RPM is past the provided threshold in the designated direction.
         * @param threshold the RPM value to check against
         * @param direction over or under the threshold
         * @locale de Gibt wahr zurück, wenn die RPM den angegebenen Schwellenwert in der gewählten Richtung überschreitet.
         * @locale fr Renvoie vrai lorsque le RPM dépasse le seuil fourni dans la direction indiquée.
         * @locale it Restituisce vero quando i RPM superano la soglia fornita nella direzione indicata.
         * @locale es Devuelve verdadero cuando las RPM superan el umbral proporcionado en la dirección indicada.
         * @locale el Επιστρέφει αληθές όταν οι RPM ξεπερνούν το δοθέν όριο στην καθορισμένη κατεύθυνση.
         */
        //% group="RPM" group.loc.de="RPM" group.loc.it="RPM" group.loc.es="RPM" group.loc.el="RPM" group.loc.fr="RPM"
        //% block="$this is $direction $threshold RPM" block.loc.de="$this ist $direction $threshold U/min" block.loc.it="$this è $direction $threshold RPM" block.loc.es="$this está $direction $threshold RPM" block.loc.el="$this είναι $direction $threshold Σ.Α.Λ" block.loc.fr="$this est $direction $threshold tr/min"
        //% blockId=fwd_rpm_is_past_threshold
        //% weight=99
        isPastThreshold(
            threshold: number,
            direction: fwdEnums.OverUnder
        ): boolean {
            const difference = this.rpm() - threshold > 0
            const isPastThreshold =
                (direction === fwdEnums.OverUnder.Over && difference) ||
                (direction === fwdEnums.OverUnder.Under && !difference)
            return isPastThreshold
        }
    }

    //% fixedInstance whenUsed
    export const rpm1 = new FwdRpmClient("RPM1")
    export const rpm2 = new FwdRpmClient("RPM2")
    export const rpm3 = new FwdRpmClient("RPM3")
    export const rpm4 = new FwdRpmClient("RPM4")
}
