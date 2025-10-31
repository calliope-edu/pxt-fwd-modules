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
         * @de Führt Code aus, wenn ein gewähltes Ereignis auftritt
         * @fr Exécute du code lorsqu’un événement choisi se produit
         * @it Esegue codice quando si verifica un evento selezionato
         * @es Ejecuta código cuando ocurre un evento seleccionado
         * @el Εκτελεί κώδικα όταν συμβεί το επιλεγμένο γεγονός
         */
        //% group="Touch"
        //% group.de="Berührung"
        //% group.fr="Tactile"
        //% group.it="Tatto"
        //% group.es="Táctil"
        //% group.el="Αγγίξτε"
        //% block="on $this $event"
        //% block.de="wenn $this $event"
        //% block.fr="lors de $this $event"
        //% block.it="quando $this $event"
        //% block.es="cuando $this $event"
        //% block.el="όταν $this $event"
        //% blockId=fwd_touch_on_event
        //% weight=100
        onEvent(event: jacdac.ButtonEvent, handler: () => void) {
            super.onEvent(event, handler)
        }

        /**
         * Returns the duration (ms) of the button hold in ms
         * @de Gibt die Haltezeit der Taste in ms zurück
         * @fr Renvoie la durée de pression du bouton en ms
         * @it Restituisce la durata della pressione del pulsante in ms
         * @es Devuelve la duración de la pulsación del botón en ms
         * @el Επιστρέφει τη διάρκεια πίεσης του κουμπιού σε ms
         */
        //% group="Touch"
        //% group.de="Berührung"
        //% group.fr="Tactile"
        //% group.it="Tatto"
        //% group.es="Táctil"
        //% group.el="Αγγίξτε"
        //% block="$this hold duration (ms)"
        //% block.de="$this Haltezeit (ms)"
        //% block.fr="durée $this (ms)"
        //% block.it="durata $this (ms)"
        //% block.es="duración $this (ms)"
        //% block.el="διάρκεια $this (ms)"
        //% blockId=fwd_touch_hold_duration
        //% weight=99
        holdDuration(): number {
            return super.holdDuration()
        }

        /**
         * Returns true if the button is currently pressed, otherwise false
         * @de Gibt wahr zurück, wenn die Taste gedrückt ist, sonst falsch
         * @fr Renvoie vrai si le bouton est pressé, sinon faux
         * @it Restituisce vero se il pulsante è premuto, altrimenti falso
         * @es Devuelve verdadero si el botón está presionado, de lo contrario falso
         * @el Επιστρέφει αληθές αν το κουμπί πατηθεί, αλλιώς ψευδές
         */
        //% group="Touch"
        //% group.de="Berührung"
        //% group.fr="Tactile"
        //% group.it="Tatto"
        //% group.es="Táctil"
        //% group.el="Αγγίξτε"
        //% block="$this is pressed"
        //% block.de="$this ist gedrückt"
        //% block.fr="$this est pressé"
        //% block.it="$this è premuto"
        //% block.es="$this está presionado"
        //% block.el="$this είναι πατημένο"
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
