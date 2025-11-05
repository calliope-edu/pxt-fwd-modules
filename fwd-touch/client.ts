namespace fwdButtons {
    //% fixedInstances
    export class FwdTouchClient extends modules.ButtonClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Code to run when a chosen event occurs
         * @param event button down, hold, or up
         * @param handler the code to run
         * @locale de Führt Code aus, wenn ein gewähltes Ereignis auftritt
         * @locale fr Exécute du code lorsqu’un événement choisi se produit
         * @locale it Esegue codice quando si verifica un evento selezionato
         * @locale es Ejecuta código cuando ocurre un evento seleccionado
         * @locale el Εκτελεί κώδικα όταν συμβεί το επιλεγμένο γεγονός
         */
        //% group="Touch"
        //% group.loc.de="Berührung"
        //% group.loc.fr="Tactile"
        //% group.loc.it="Tatto"
        //% group.loc.es="Táctil"
        //% group.loc.el="Αγγίξτε"
        //% block="on $this $event"
        //% block.loc.de="wenn $this $event"
        //% block.loc.fr="lors de $this $event"
        //% block.loc.it="quando $this $event"
        //% block.loc.es="cuando $this $event"
        //% block.loc.el="όταν $this $event"
        //% blockId=fwd_touch_on_event
        //% weight=100
        onEvent(event: jacdac.ButtonEvent, handler: () => void) {
            super.onEvent(event, handler)
        }

        /**
         * Returns the duration (ms) of the button hold in ms
         * @locale de Gibt die Haltezeit der Taste in ms zurück
         * @locale fr Renvoie la durée de pression du bouton en ms
         * @locale it Restituisce la durata della pressione del pulsante in ms
         * @locale es Devuelve la duración de la pulsación del botón en ms
         * @locale el Επιστρέφει τη διάρκεια πίεσης του κουμπιού σε ms
         */
        //% group="Touch"
        //% group.loc.de="Berührung"
        //% group.loc.fr="Tactile"
        //% group.loc.it="Tatto"
        //% group.loc.es="Táctil"
        //% group.loc.el="Αγγίξτε"
        //% block="$this hold duration (ms)"
        //% block.loc.de="$this Haltezeit (ms)"
        //% block.loc.fr="durée $this (ms)"
        //% block.loc.it="durata $this (ms)"
        //% block.loc.es="duración $this (ms)"
        //% block.loc.el="διάρκεια $this (ms)"
        //% blockId=fwd_touch_hold_duration
        //% weight=99
        holdDuration(): number {
            return super.holdDuration()
        }

        /**
         * Returns true if the button is currently pressed, otherwise false
         * @locale de Gibt wahr zurück, wenn die Taste gedrückt ist, sonst falsch
         * @locale fr Renvoie vrai si le bouton est pressé, sinon faux
         * @locale it Restituisce vero se il pulsante è premuto, altrimenti falso
         * @locale es Devuelve verdadero si el botón está presionado, de lo contrario falso
         * @locale el Επιστρέφει αληθές αν το κουμπί πατηθεί, αλλιώς ψευδές
         */
        //% group="Touch"
        //% group.loc.de="Berührung"
        //% group.loc.fr="Tactile"
        //% group.loc.it="Tatto"
        //% group.loc.es="Táctil"
        //% group.loc.el="Αγγίξτε"
        //% block="$this is pressed"
        //% block.loc.de="$this ist gedrückt"
        //% block.loc.fr="$this est pressé"
        //% block.loc.it="$this è premuto"
        //% block.loc.es="$this está presionado"
        //% block.loc.el="$this είναι πατημένο"
        //% blockId=fwd_touch_is_pressed
        //% weight=98
        isPressed(): boolean {
            return super.pressed()
        }
    }

    //% fixedInstance whenUsed
    export const touch1 = new FwdTouchClient("touch1")
    //% fixedInstance whenUsed
    export const touch2 = new FwdTouchClient("touch2")
    //% fixedInstance whenUsed
    export const touch3 = new FwdTouchClient("touch3")
    //% fixedInstance whenUsed
    export const touch4 = new FwdTouchClient("touch4")
}
