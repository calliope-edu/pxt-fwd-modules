namespace fwdButtons {
    //% fixedInstances
    export class FwdDialClient extends modules.RotaryEncoderClient {
        private _cwAction: () => void
        private _ccwAction: () => void
        constructor(role: string) {
            super(role)
            this._cwAction = () => {}
            this._ccwAction = () => {}
            // this sets up the functions to run when the dial is turned clockwise or counterclockwise
            // initially the functions are blank, they get assigned by the makecode program through fwdOnDialTurned()
            super.onReadingChangedBy(1, (delta: number) => {
                if (delta < 0) {
                    this._cwAction()
                } else {
                    this._ccwAction()
                }
            })
        }
        /**
         * Run code when the dial is rotated in the chosen direction.
         * @param direction choose between clockwise (CW) and counterclockwise (CCW)
         * @param handler the code to run
         * @locale de Führt Code aus, wenn das Rad in die gewählte Richtung gedreht wird.
         * @locale it Esegue il codice quando la manopola viene ruotata nella direzione scelta.
         * @locale es Ejecuta código cuando se gira el dial en la dirección elegida.
         * @locale el Εκτελεί κώδικα όταν ο διακόπτης περιστρέφεται στην επιλεγμένη κατεύθυνση.
         */
        //% group="Dial" group.loc.de="Rad" group.loc.it="Manopola" group.loc.es="Dial" group.loc.el="Διακόπτης"
        //% block="on $this rotated $direction" block.loc.de="wenn $this gedreht $direction" block.loc.it="quando $this ruotata $direction" block.loc.es="cuando $this girado $direction" block.loc.el="όταν $this περιστραφεί $direction"
        //% blockId=fwd_dial_on_rotated
        //% weight=100
        onRotated(
            direction: fwdEnums.ClockwiseCounterclockwise,
            handler: () => void
        ): void {
            if (direction === fwdEnums.ClockwiseCounterclockwise.Clockwise) {
                this._cwAction = handler
            } else {
                this._ccwAction = handler
            }
        }
        /**
         * The position of the dial relative to it's starting position when it was connected.
         * 0 is the starting position. A clockwise click is +1. A counterclockwise click is -1.
         * It does not reset to 0 after 1 full rotation. Instead it continues to increment.
         * @locale de Die Position des Rads relativ zu seiner Startposition bei der Verbindung.
         * @locale it La posizione della manopola rispetto alla sua posizione iniziale quando è stata collegata.
         * @locale es La posición del dial en relación con su posición inicial cuando se conectó.
         * @locale el Η θέση του διακόπτη σε σχέση με την αρχική του θέση όταν συνδέθηκε.
         */
        //% group="Dial" group.loc.de="Rad" group.loc.it="Manopola" group.loc.es="Dial" group.loc.el="Διακόπτης"
        //% block="$this position" block.loc.de="$this Position" block.loc.it="$this posizione" block.loc.es="$this posición" block.loc.el="$this θέση"
        //% blockId=fwd_dial_position
        //% weight=99
        position(): number {
            return super.position()
        }
    }
    //% fixedInstance whenUsed
    export const dial1 = new FwdDialClient("dial1")
    //% fixedInstance whenUsed
    export const dial2 = new FwdDialClient("dial2")
    //% fixedInstance whenUsed
    export const dial3 = new FwdDialClient("dial3")
    //% fixedInstance whenUsed
    export const dial4 = new FwdDialClient("dial4")
    //% fixedInstances
    export class FwdDialButtonClient extends modules.ButtonClient {
        constructor(role: string) {
            super(role)
        }
        /**
         * Code to run when the chosen event occurs. The hold event fires every 100ms that the button is held.
         * @param event button down, hold, or up
         * @param handler the code to run
         * @locale de Code, der ausgeführt wird, wenn das gewählte Ereignis eintritt. Das Halte-Ereignis wird alle 100ms ausgelöst, während die Taste gehalten wird.
         * @locale it Codice da eseguire quando si verifica l'evento scelto. L'evento di tenuta si attiva ogni 100ms mentre il pulsante è tenuto premuto.
         * @locale es Código para ejecutar cuando ocurre el evento elegido. El evento de mantener se activa cada 100ms mientras se mantiene presionado el botón.
         * @locale el Κώδικας που εκτελείται όταν συμβαίνει το επιλεγμένο γεγονός. Το γεγονός κράτησης ενεργοποιείται κάθε 100ms ενώ το κουμπί πατιέται.
         */
        //% group="Dial" group.loc.de="Rad" group.loc.it="Manopola" group.loc.es="Dial" group.loc.el="Διακόπτης"
        //% block="on $this $event" block.loc.de="wenn $this $event" block.loc.it="quando $this $event" block.loc.es="cuando $this $event" block.loc.el="όταν $this $event"
        //% blockId=fwd_dialbutton_on_event
        //% weight=98
        onEvent(event: jacdac.ButtonEvent, handler: () => void) {
            super.onEvent(event, handler)
        }
        /**
         * Returns how long the button has been held in ms.
         * @locale de Gibt zurück, wie lange die Taste gehalten wurde in ms.
         * @locale it Restituisce per quanto tempo il pulsante è stato tenuto premuto in ms.
         * @locale es Devuelve cuánto tiempo se ha mantenido presionado el botón en ms.
         * @locale el Επιστρέφει πόσο χρόνο έχει πατηθεί το κουμπί σε ms.
         */
        //% group="Dial" group.loc.de="Rad" group.loc.it="Manopola" group.loc.es="Dial" group.loc.el="Διακόπτης"
        //% block="$this hold duration (ms)" block.loc.de="$this Haltedauer (ms)" block.loc.it="$this durata tenuta (ms)" block.loc.es="$this duración mantener (ms)" block.loc.el="$this διάρκεια κράτησης (ms)"
        //% blockId=fwd_dialbutton_hold_duration
        //% weight=97
        holdDuration(): number {
            return super.holdDuration()
        }
        /**
         * Returns true if the button is currently pressed, otherwise false.
         * @locale de Gibt wahr zurück, wenn die Taste derzeit gedrückt ist, andernfalls falsch.
         * @locale it Restituisce vero se il pulsante è attualmente premuto, altrimenti falso.
         * @locale es Devuelve verdadero si el botón está presionado actualmente, de lo contrario falso.
         * @locale el Επιστρέφει αληθές αν το κουμπί είναι πατημένο αυτή τη στιγμή, αλλιώς ψευδές.
         */
        //% group="Dial" group.loc.de="Rad" group.loc.it="Manopola" group.loc.es="Dial" group.loc.el="Διακόπτης"
        //% block="$this is pressed" block.loc.de="$this ist gedrückt" block.loc.it="$this è premuto" block.loc.es="$this está presionado" block.loc.el="$this είναι πατημένο"
        //% blockId=fwd_dialbutton_is_pressed
        //% weight=96
        isPressed(): boolean {
            return super.pressed()
        }
    }
    //% fixedInstance whenUsed
    export const dialButton1 = new FwdDialButtonClient("dialButton1")
    //% fixedInstance whenUsed
    export const dialButton2 = new FwdDialButtonClient("dialButton2")
    //% fixedInstance whenUsed
    export const dialButton3 = new FwdDialButtonClient("dialButton3")
    //% fixedInstance whenUsed
    export const dialButton4 = new FwdDialButtonClient("dialButton4")
}
