namespace fwdMotors {
    /**
     * Set the servo to enabled or disabled.
     * @param servo the servo client to set the status of
     * @param state enabled = true, disabled = false
     * @de Setzt den Servo auf aktiviert oder deaktiviert.
     * @fr Active ou désactive le servo.
     * @it Imposta il servo su abilitato o disabilitato.
     * @es Activa o desactiva el servo.
     * @el Ενεργοποιεί ή απενεργοποιεί τον σερβοκινητήρα.
     */
    //% group="Servo - Continuous"
    //% group.loc.de="Servo - Kontinuierlich"
    //% group.loc.fr="Servo - Continu"
    //% group.loc.it="Servo - Continuo"
    //% group.loc.es="Servo - Continuo"
    //% group.loc.el="Σερβο - Συνεχής"
    //% block="turn $servo $state"
    //% block.loc.de="schalte $servo $state"
    //% block.loc.fr="mettre $servo $state"
    //% block.loc.it="attiva $servo $state"
    //% block.loc.es="poner $servo $state"
    //% block.loc.el="ενεργοποίησε $servo $state"
    //% blockId=fwd_servocon_set_enabled
    //% state.shadow="toggleOnOff"
    //% weight=100
    export function conSetEnabled(
        servo: fwdBase.FwdServoClient,
        state: boolean
    ): void {
        return servo.setEnabled(state)
    }

    /**
     * Set the servo speed to between 100% and -100%. Negative speeds are the reverse direction.
     * @param servo the servo client to set the speed of
     * @param speed the speed to set the servo to (%)
     * @de Setzt die Servogeschwindigkeit zwischen 100% und -100%. Negative Werte drehen rückwärts.
     * @fr Définit la vitesse du servo entre 100 % et -100 %. Les vitesses négatives sont en sens inverse.
     * @it Imposta la velocità del servo tra 100% e -100%. Valori negativi indicano direzione inversa.
     * @es Ajusta la velocidad del servo entre 100% y -100%. Valores negativos son en sentido inverso.
     * @el Ορίζει την ταχύτητα του σερβοκινητήρα μεταξύ 100% και -100%. Αρνητικές ταχύτητες σημαίνουν αντίθετη κατεύθυνση.
     */
    //% group="Servo - Continuous"
    //% group.loc.de="Servo - Kontinuierlich"
    //% group.loc.fr="Servo - Continu"
    //% group.loc.it="Servo - Continuo"
    //% group.loc.es="Servo - Continuo"
    //% group.loc.el="Σερβο - Συνεχής"
    //% block="set $servo to $speed \\%"
    //% block.loc.de="stelle $servo auf $speed \\%"
    //% block.loc.fr="régler $servo à $speed \\%"
    //% block.loc.it="imposta $servo a $speed \\%"
    //% block.loc.es="ajustar $servo a $speed \\%"
    //% block.loc.el="όρισε $servo σε $speed \\%"
    //% blockId=fwd_servocon_set_speed
    //% speed.min=-100 speed.max=100
    //% weight=99
    export function setSpeed(
        servo: fwdBase.FwdServoClient,
        speed: number
    ): void {
        servo.setSpeed(speed)
    }

    /**
     * Returns the speed that the servo is set to (%).
     * @param servo the servo client to get the speed of
     * @de Gibt die aktuelle Servogeschwindigkeit (%) zurück.
     * @fr Renvoie la vitesse actuelle du servo (%).
     * @it Restituisce la velocità attuale del servo (%).
     * @es Devuelve la velocidad actual del servo (%).
     * @el Επιστρέφει την τρέχουσα ταχύτητα του σερβοκινητήρα (%).
     */
    //% group="Servo - Continuous"
    //% group.loc.de="Servo - Kontinuierlich"
    //% group.loc.fr="Servo - Continu"
    //% group.loc.it="Servo - Continuo"
    //% group.loc.es="Servo - Continuo"
    //% group.loc.el="Σερβο - Συνεχής"
    //% block="$servo speed (\\%)"
    //% block.loc.de="$servo Geschwindigkeit (\\%)"
    //% block.loc.fr="vitesse $servo (\\%)"
    //% block.loc.it="velocità $servo (\\%)"
    //% block.loc.es="velocidad $servo (\\%)"
    //% block.loc.el="ταχύτητα $servo (\\%)"
    //% blockId=fwd_servocon_get_speed
    //% weight=98
    export function getSpeed(servo: fwdBase.FwdServoClient): number {
        return servo.getSpeed()
    }

    /**
     * Returns whether the servo is enabled, enabled = true, disabled = false.
     * @param servo the servo client to get the status of
     * @de Gibt zurück, ob der Servo aktiviert ist (true = aktiviert, false = deaktiviert).
     * @fr Indique si le servo est activé (true = activé, false = désactivé).
     * @it Restituisce se il servo è abilitato (true = abilitato, false = disabilitato).
     * @es Devuelve si el servo está activado (true = activado, false = desactivado).
     * @el Επιστρέφει εάν ο σερβοκινητήρας είναι ενεργός (true = ενεργός, false = ανενεργός).
     */
    //% group="Servo - Continuous"
    //% group.loc.de="Servo - Kontinuierlich"
    //% group.loc.fr="Servo - Continu"
    //% group.loc.it="Servo - Continuo"
    //% group.loc.es="Servo - Continuo"
    //% group.loc.el="Σερβο - Συνεχής"
    //% block="$servo is enabled"
    //% block.loc.de="$servo ist aktiviert"
    //% block.loc.fr="$servo est activé"
    //% block.loc.it="$servo è abilitato"
    //% block.loc.es="$servo está activado"
    //% block.loc.el="$servo είναι ενεργός"
    //% blockId=fwd_servocon_is_enabled
    //% weight=97
    export function conIsEnabled(servo: fwdBase.FwdServoClient): boolean {
        return servo.enabled()
    }
}
