namespace fwdButtons {
    //% fixedInstances
    export class FwdDialClient extends modules.RotaryEncoderClient {
        private _cwAction: () => void
        private _ccwAction: () => void
        constructor(role: string) {
            super(role)
            this._cwAction = () => {}
            this._ccwAction = () => {}
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
         * @locale fr Exécute le code lorsque le bouton rotatif est tourné dans la direction choisie.
         */
        //% group="Dial" group.loc.de="Rad" group.loc.it="Manopola" group.loc.es="Dial" group.loc.el="Διακόπτης" group.loc.fr="Molette"
        //% block="on $this rotated $direction" block.loc.de="wenn $this gedreht $direction" block.loc.it="quando $this ruotata $direction" block.loc.es="cuando $this girado $direction" block.loc.el="όταν $this περιστραφεί $direction" block.loc.fr="quand $this tourné $direction"
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
         * The position of the dial relative to its starting position when it was connected.
         * 0 is the starting position. A clockwise click is +1. A counterclockwise click is -1.
         * It does not reset to 0 after 1 full rotation. Instead it continues to increment.
         * @locale fr La position du bouton rotatif par rapport à sa position de départ lors de la connexion. 0 = position de départ, +1 = rotation horaire, -1 = rotation antihoraire.
         */
        //% group="Dial" group.loc.de="Rad" group.loc.it="Manopola" group.loc.es="Dial" group.loc.el="Διακόπτης" group.loc.fr="Molette"
        //% block="$this position" block.loc.de="$this Position" block.loc.it="$this posizione" block.loc.es="$this posición" block.loc.el="$this θέση" block.loc.fr="$this position"
        //% blockId=fwd_dial_position
        //% weight=99
        position(): number {
            return super.position()
        }
    }

    //% fixedInstance whenUsed
    export const dial1 = new FwdDialClient("dial1")
    export const dial2 = new FwdDialClient("dial2")
    export const dial3 = new FwdDialClient("dial3")
    export const dial4 = new FwdDialClient("dial4")

    //% fixedInstances
    export class FwdDialButtonClient extends modules.ButtonClient {
        constructor(role: string) {
            super(role)
        }

        /**
         * Code to run when the chosen event occurs. The hold event fires every 100ms that the button is held.
         * @param event button down, hold, or up
         * @locale fr Code à exécuter lorsqu’un événement choisi se produit. L’événement "hold" se déclenche toutes les 100 ms tant que le bouton est maintenu.
         */
        //% group="Dial" group.loc.de="Rad" group.loc.it="Manopola" group.loc.es="Dial" group.loc.el="Διακόπτης" group.loc.fr="Molette"
        //% block="on $this $event" block.loc.de="wenn $this $event" block.loc.it="quando $this $event" block.loc.es="cuando $this $event" block.loc.el="όταν $this $event" block.loc.fr="quand $this $event"
        //% blockId=fwd_dialbutton_on_event
        //% weight=98
        onEvent(event: jacdac.ButtonEvent, handler: () => void) {
            super.onEvent(event, handler)
        }

        /**
         * Returns how long the button has been held in ms.
         * @locale fr Renvoie la durée (ms) pendant laquelle le bouton est maintenu.
         */
        //% group="Dial" group.loc.de="Rad" group.loc.it="Manopola" group.loc.es="Dial" group.loc.el="Διακόπτης" group.loc.fr="Molette"
        //% block="$this hold duration (ms)" block.loc.de="$this Haltedauer (ms)" block.loc.it="$this durata tenuta (ms)" block.loc.es="$this duración mantener (ms)" block.loc.el="$this διάρκεια κράτησης (ms)" block.loc.fr="$this durée maintien (ms)"
        //% blockId=fwd_dialbutton_hold_duration
        //% weight=97
        holdDuration(): number {
            return super.holdDuration()
        }

        /**
         * Returns true if the button is currently pressed, otherwise false.
         * @locale fr Renvoie vrai si le bouton est actuellement pressé, sinon faux.
         */
        //% group="Dial" group.loc.de="Rad" group.loc.it="Manopola" group.loc.es="Dial" group.loc.el="Διακόπτης" group.loc.fr="Molette"
        //% block="$this is pressed" block.loc.de="$this ist gedrückt" block.loc.it="$this è premuto" block.loc.es="$this está presionado" block.loc.el="$this είναι πατημένο" block.loc.fr="$this est pressé"
        //% blockId=fwd_dialbutton_is_pressed
        //% weight=96
        isPressed(): boolean {
            return super.pressed()
        }
    }

    //% fixedInstance whenUsed
    export const dialButton1 = new FwdDialButtonClient("dialButton1")
    export const dialButton2 = new FwdDialButtonClient("dialButton2")
    export const dialButton3 = new FwdDialButtonClient("dialButton3")
    export const dialButton4 = new FwdDialButtonClient("dialButton4")
}
