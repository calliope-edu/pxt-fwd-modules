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
    //% group="Servo - 270° Positional"
    //% group.de="Servo - 270° Positionsservo"
    //% group.fr="Servo - 270° Positionnel"
    //% group.it="Servo - 270° Posizionale"
    //% group.es="Servo - 270° Posicional"
    //% group.el="Σερβο - 270° Θέση"
    //% block="turn $servo $state"
    //% block.de="schalte $servo $state"
    //% block.fr="activer $servo $state"
    //% block.it="attiva $servo $state"
    //% block.es="activar $servo $state"
    //% block.el="ενεργοποίησε $servo $state"
    //% blockId=fwd_servopos_set_enabled
    //% state.shadow="toggleOnOff"
    //% weight=100
    export function posSetEnabled(
        servo: fwdBase.FwdServoClient,
        state: boolean
    ): void {
        return servo.setEnabled(state)
    }

    /**
     * Set the angle of the servo and immediately run the next block.
     * @param servo the servo client to set the angle of
     * @param angle servo angle
     * @de Setzt den Winkel des Servos und fährt sofort mit dem nächsten Block fort.
     * @fr Définit l’angle du servo et exécute immédiatement le bloc suivant.
     * @it Imposta l’angolo del servo e passa immediatamente al blocco successivo.
     * @es Ajusta el ángulo del servo y ejecuta inmediatamente el siguiente bloque.
     * @el Ορίζει τη γωνία του σερβοκινητήρα και εκτελεί αμέσως το επόμενο μπλοκ.
     */
    //% group="Servo - 270° Positional"
    //% group.de="Servo - 270° Positionsservo"
    //% group.fr="Servo - 270° Positionnel"
    //% group.it="Servo - 270° Posizionale"
    //% group.es="Servo - 270° Posicional"
    //% group.el="Σερβο - 270° Θέση"
    //% block="set $servo to $angle °"
    //% block.de="stelle $servo auf $angle °"
    //% block.fr="mettre $servo à $angle °"
    //% block.it="imposta $servo a $angle °"
    //% block.es="ajustar $servo a $angle °"
    //% block.el="όρισε $servo σε $angle °"
    //% blockId=fwd_servopos_set_angle
    //% angle.min=0 angle.max=270
    //% weight=99
    export function setAngle(
        servo: fwdBase.FwdServoClient,
        angle: number
    ): void {
        servo.setAngle(angle)
    }

    /**
     * Set the angle of the servo and wait 1 second so the movement finishes before running the next block.
     * @param servo the servo client to set the angle of
     * @param angle servo angle
     * @de Setzt den Winkel des Servos und wartet 1 Sekunde, bevor der nächste Block ausgeführt wird.
     * @fr Définit l’angle du servo et attend 1 seconde avant d’exécuter le bloc suivant.
     * @it Imposta l’angolo del servo e attende 1 secondo prima di eseguire il blocco successivo.
     * @es Ajusta el ángulo del servo y espera 1 segundo antes de ejecutar el siguiente bloque.
     * @el Ορίζει τη γωνία του σερβοκινητήρα και περιμένει 1 δευτερόλεπτο πριν εκτελεστεί το επόμενο μπλοκ.
     */
    //% group="Servo - 270° Positional"
    //% group.de="Servo - 270° Positionsservo"
    //% group.fr="Servo - 270° Positionnel"
    //% group.it="Servo - 270° Posizionale"
    //% group.es="Servo - 270° Posicional"
    //% group.el="Σερβο - 270° Θέση"
    //% block="set $servo to $angle ° and wait"
    //% block.de="stelle $servo auf $angle ° und warte"
    //% block.fr="mettre $servo à $angle ° et attendre"
    //% block.it="imposta $servo a $angle ° e attendi"
    //% block.es="ajustar $servo a $angle ° y esperar"
    //% block.el="όρισε $servo σε $angle ° και περίμενε"
    //% blockId=fwd_servopos_set_angle_and_wait
    //% angle.min=0 angle.max=270
    //% weight=98
    export function setAngleAndWait(
        servo: fwdBase.FwdServoClient,
        angle: number
    ): void {
        servo.setAngleAndWait(angle)
    }

    /**
     * Returns the angle that the servo is set to.
     * @param servo the servo client to get the angle of
     * @de Gibt den aktuellen Winkel des Servos zurück.
     * @fr Renvoie l’angle actuel du servo.
     * @it Restituisce l’angolo corrente del servo.
     * @es Devuelve el ángulo actual del servo.
     * @el Επιστρέφει την τρέχουσα γωνία του σερβοκινητήρα.
     */
    //% group="Servo - 270° Positional"
    //% group.de="Servo - 270° Positionsservo"
    //% group.fr="Servo - 270° Positionnel"
    //% group.it="Servo - 270° Posizionale"
    //% group.es="Servo - 270° Posicional"
    //% group.el="Σερβο - 270° Θέση"
    //% block="$servo angle (°)"
    //% block.de="$servo Winkel (°)"
    //% block.fr="angle $servo (°)"
    //% block.it="angolo $servo (°)"
    //% block.es="ángulo $servo (°)"
    //% block.el="γωνία $servo (°)"
    //% blockId=fwd_servopos_get_angle
    //% weight=97
    export function getAngle(servo: fwdBase.FwdServoClient): number {
        return servo.getAngle()
    }

    /**
     * Preset servo positions based on a clock's hour hand.
     * @param position pos0 through pos9 where the number represents the clock hour position
     * @de Vorgegebene Servo-Positionen basierend auf einem Stundenzeiger.
     * @fr Positions prédéfinies du servo basées sur les heures d’une horloge.
     * @it Posizioni predefinite del servo basate sull’orologio.
     * @es Posiciones predefinidas del servo basadas en las horas del reloj.
     * @el Προκαθορισμένες θέσεις του σερβοκινητήρα βάσει της ώρας του ρολογιού.
     */
    //% group="Servo - 270° Positional"
    //% group.de="Servo - 270° Positionsservo"
    //% group.fr="Servo - 270° Positionnel"
    //% group.it="Servo - 270° Posizionale"
    //% group.es="Servo - 270° Posicional"
    //% group.el="Σερβο - 270° Θέση"
    //% block="position $position"
    //% block.de="Position $position"
    //% block.fr="position $position"
    //% block.it="posizione $position"
    //% block.es="posición $position"
    //% block.el="θέση $position"
    //% blockId=fwd_servopos_position_presets
    //% weight=96
    export function positionPresets(position: ServoClockPositions): number {
        return position as number
    }

    /**
     * Returns whether the servo is enabled, enabled = true, disabled = false.
     * @param servo the servo client to get the status of
     * @de Gibt zurück, ob der Servo aktiviert ist.
     * @fr Indique si le servo est activé.
     * @it Restituisce se il servo è abilitato.
     * @es Devuelve si el servo está activado.
     * @el Επιστρέφει εάν ο σερβοκινητήρας είναι ενεργός.
     */
    //% group="Servo - 270° Positional"
    //% group.de="Servo - 270° Positionsservo"
    //% group.fr="Servo - 270° Positionnel"
    //% group.it="Servo - 270° Posizionale"
    //% group.es="Servo - 270° Posicional"
    //% group.el="Σερβο - 270° Θέση"
    //% block="$servo is enabled"
    //% block.de="$servo ist aktiviert"
    //% block.fr="$servo est activé"
    //% block.it="$servo è abilitato"
    //% block.es="$servo está activado"
    //% block.el="$servo είναι ενεργός"
    //% blockId=fwd_servopos_is_enabled
    //% weight=95
    export function posIsEnabled(servo: fwdBase.FwdServoClient): boolean {
        return servo.enabled()
    }

    export const enum ServoClockPositions {
        //% block="🕛 00:00"
        Position0 = 270,
        //% block="🕐 01:00"
        Position1 = 240,
        //% block="🕑 02:00"
        Position2 = 210,
        //% block="🕒 03:00"
        Position3 = 180,
        //% block="🕓 04:00"
        Position4 = 150,
        //% block="🕔 05:00"
        Position5 = 120,
        //% block="🕕 06:00"
        Position6 = 90,
        //% block="🕖 07:00"
        Position7 = 60,
        //% block="🕗 08:00"
        Position8 = 30,
        //% block="🕘 09:00"
        Position9 = 0,
    }
}
