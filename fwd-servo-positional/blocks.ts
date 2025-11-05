namespace fwdMotors {
    /**
     * Set the servo to enabled or disabled.
     * @param servo the servo client to set the status of
     * @param state enabled = true, disabled = false
     * @locale de Setzt den Servo auf aktiviert oder deaktiviert.
     * @locale fr Active ou désactive le servo.
     * @locale it Imposta il servo su abilitato o disabilitato.
     * @locale es Activa o desactiva el servo.
     * @locale el Ενεργοποιεί ή απενεργοποιεί τον σερβοκινητήρα.
     */
    //% group="Servo - 270° Positional"
    //% group.loc.de="Servo - 270° Positionsservo"
    //% group.loc.fr="Servo - 270° Positionnel"
    //% group.loc.it="Servo - 270° Posizionale"
    //% group.loc.es="Servo - 270° Posicional"
    //% group.loc.el="Σερβο - 270° Θέση"
    //% block="turn $servo $state"
    //% block.loc.de="schalte $servo $state"
    //% block.loc.fr="activer $servo $state"
    //% block.loc.it="attiva $servo $state"
    //% block.loc.es="activar $servo $state"
    //% block.loc.el="ενεργοποίησε $servo $state"
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
     * @locale de Setzt den Winkel des Servos und fährt sofort mit dem nächsten Block fort.
     * @locale fr Définit l’angle du servo et exécute immédiatement le bloc suivant.
     * @locale it Imposta l’angolo del servo e passa immediatamente al blocco successivo.
     * @locale es Ajusta el ángulo del servo y ejecuta inmediatamente el siguiente bloque.
     * @locale el Ορίζει τη γωνία του σερβοκινητήρα και εκτελεί αμέσως το επόμενο μπλοκ.
     */
    //% group="Servo - 270° Positional"
    //% group.loc.de="Servo - 270° Positionsservo"
    //% group.loc.fr="Servo - 270° Positionnel"
    //% group.loc.it="Servo - 270° Posizionale"
    //% group.loc.es="Servo - 270° Posicional"
    //% group.loc.el="Σερβο - 270° Θέση"
    //% block="set $servo to $angle °"
    //% block.loc.de="stelle $servo auf $angle °"
    //% block.loc.fr="mettre $servo à $angle °"
    //% block.loc.it="imposta $servo a $angle °"
    //% block.loc.es="ajustar $servo a $angle °"
    //% block.loc.el="όρισε $servo σε $angle °"
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
     * @locale de Setzt den Winkel des Servos und wartet 1 Sekunde, bevor der nächste Block ausgeführt wird.
     * @locale fr Définit l’angle du servo et attend 1 seconde avant d’exécuter le bloc suivant.
     * @locale it Imposta l’angolo del servo e attende 1 secondo prima di eseguire il blocco successivo.
     * @locale es Ajusta el ángulo del servo y espera 1 segundo antes de ejecutar el siguiente bloque.
     * @locale el Ορίζει τη γωνία του σερβοκινητήρα και περιμένει 1 δευτερόλεπτο πριν εκτελεστεί το επόμενο μπλοκ.
     */
    //% group="Servo - 270° Positional"
    //% group.loc.de="Servo - 270° Positionsservo"
    //% group.loc.fr="Servo - 270° Positionnel"
    //% group.loc.it="Servo - 270° Posizionale"
    //% group.loc.es="Servo - 270° Posicional"
    //% group.loc.el="Σερβο - 270° Θέση"
    //% block="set $servo to $angle ° and wait"
    //% block.loc.de="stelle $servo auf $angle ° und warte"
    //% block.loc.fr="mettre $servo à $angle ° et attendre"
    //% block.loc.it="imposta $servo a $angle ° e attendi"
    //% block.loc.es="ajustar $servo a $angle ° y esperar"
    //% block.loc.el="όρισε $servo σε $angle ° και περίμενε"
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
     * @locale de Gibt den aktuellen Winkel des Servos zurück.
     * @locale fr Renvoie l’angle actuel du servo.
     * @locale it Restituisce l’angolo corrente del servo.
     * @locale es Devuelve el ángulo actual del servo.
     * @locale el Επιστρέφει την τρέχουσα γωνία του σερβοκινητήρα.
     */
    //% group="Servo - 270° Positional"
    //% group.loc.de="Servo - 270° Positionsservo"
    //% group.loc.fr="Servo - 270° Positionnel"
    //% group.loc.it="Servo - 270° Posizionale"
    //% group.loc.es="Servo - 270° Posicional"
    //% group.loc.el="Σερβο - 270° Θέση"
    //% block="$servo angle (°)"
    //% block.loc.de="$servo Winkel (°)"
    //% block.loc.fr="angle $servo (°)"
    //% block.loc.it="angolo $servo (°)"
    //% block.loc.es="ángulo $servo (°)"
    //% block.loc.el="γωνία $servo (°)"
    //% blockId=fwd_servopos_get_angle
    //% weight=97
    export function getAngle(servo: fwdBase.FwdServoClient): number {
        return servo.getAngle()
    }

    /**
     * Preset servo positions based on a clock's hour hand.
     * @param position pos0 through pos9 where the number represents the clock hour position
     * @locale de Vorgegebene Servo-Positionen basierend auf einem Stundenzeiger.
     * @locale fr Positions prédéfinies du servo basées sur les heures d’une horloge.
     * @locale it Posizioni predefinite del servo basate sull’orologio.
     * @locale es Posiciones predefinidas del servo basadas en las horas del reloj.
     * @locale el Προκαθορισμένες θέσεις του σερβοκινητήρα βάσει της ώρας του ρολογιού.
     */
    //% group="Servo - 270° Positional"
    //% group.loc.de="Servo - 270° Positionsservo"
    //% group.loc.fr="Servo - 270° Positionnel"
    //% group.loc.it="Servo - 270° Posizionale"
    //% group.loc.es="Servo - 270° Posicional"
    //% group.loc.el="Σερβο - 270° Θέση"
    //% block="position $position"
    //% block.loc.de="Position $position"
    //% block.loc.fr="position $position"
    //% block.loc.it="posizione $position"
    //% block.loc.es="posición $position"
    //% block.loc.el="θέση $position"
    //% blockId=fwd_servopos_position_presets
    //% weight=96
    export function positionPresets(position: ServoClockPositions): number {
        return position as number
    }

    /**
     * Returns whether the servo is enabled, enabled = true, disabled = false.
     * @param servo the servo client to get the status of
     * @locale de Gibt zurück, ob der Servo aktiviert ist.
     * @locale fr Indique si le servo est activé.
     * @locale it Restituisce se il servo è abilitato.
     * @locale es Devuelve si el servo está activado.
     * @locale el Επιστρέφει εάν ο σερβοκινητήρας είναι ενεργός.
     */
    //% group="Servo - 270° Positional"
    //% group.loc.de="Servo - 270° Positionsservo"
    //% group.loc.fr="Servo - 270° Positionnel"
    //% group.loc.it="Servo - 270° Posizionale"
    //% group.loc.es="Servo - 270° Posicional"
    //% group.loc.el="Σερβο - 270° Θέση"
    //% block="$servo is enabled"
    //% block.loc.de="$servo ist aktiviert"
    //% block.loc.fr="$servo est activé"
    //% block.loc.it="$servo è abilitato"
    //% block.loc.es="$servo está activado"
    //% block.loc.el="$servo είναι ενεργός"
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
