namespace fwdMotors {
    function createDrivingControls() {
        let enabled = false
        let leftMotor: fwdBase.FwdServoClient
        let rightMotor: fwdBase.FwdServoClient
        function initMotors(
            left: fwdBase.FwdServoClient,
            right: fwdBase.FwdServoClient
        ) {
            leftMotor = left
            rightMotor = right
            enabled = true
            // Jacdac-Cache aufwärmen: first call blockiert (~1–2s), besser hier als beim Fahren
            leftMotor.setSpeed(0)
            rightMotor.setSpeed(0)
        }
        function drive(direction: -1 | 1, speed: number): void {
            if (!enabled) return
            leftMotor.setSpeed(direction * speed)
            rightMotor.setSpeed(-direction * speed)
        }
        function turnInPlace(angle: number): void {
            if (!enabled) return
            const DEG_PER_SEC = 30
            const direction = angle > 0 ? 1 : -1
            leftMotor.setSpeed(60 * direction)
            rightMotor.setSpeed(60 * direction)
            basic.pause((Math.abs(angle) / DEG_PER_SEC) * 1000)
            leftMotor.setSpeed(0)
            rightMotor.setSpeed(0)
        }
        return {
            initMotors: initMotors,
            drive: drive,
            turnInPlace: turnInPlace,
        }
    }
    export const drivingControls = createDrivingControls()
    /**
     * Use this block before using the other driving blocks to set which servo clients get treated as left and right.
     * @param left the servo client to use as the left motor
     * @param right the servo client to use as the right motor
     */
    //% group="Driving"
    //% group.de="Fahren"
    //% group.fr="Conduite"
    //% group.it="Guida"
    //% group.es="Conducción"
    //% group.el="Οδήγηση"
    //% block="setup driving|left motor $left|right motor $right"
    //% block.de="Fahren einrichten|linker Motor $left|rechter Motor $right"
    //% block.fr="configurer conduite|moteur gauche $left|moteur droit $right"
    //% block.it="configura guida|motore sinistro $left|motore destro $right"
    //% block.es="configurar conducción|motor izquierdo $left|motor derecho $right"
    //% block.el="ρύθμιση οδήγησης|αριστερός κινητήρας $left|δεξιός κινητήρας $right"
    //% blockId=fwd_driving_setup
    //% inlineInputMode=external
    //% weight=100
    export function setupDriving(
        left: fwdBase.FwdServoClient,
        right: fwdBase.FwdServoClient
    ) {
        drivingControls.initMotors(left, right)
    }
    /**
     * Drive forwards or backwards at the desired speed (requires setup driving to used first).
     * @param direction forwards or backwards
     * @param speed 0% (stationary) to 100% (max speed)
     */
    //% group="Driving"
    //% group.de="Fahren"
    //% group.fr="Conduite"
    //% group.it="Guida"
    //% group.es="Conducción"
    //% group.el="Οδήγηση"
    //% block="drive $direction at $speed %"
    //% block.de="fahre $direction mit $speed %"
    //% block.fr="conduire $direction à $speed %"
    //% block.it="guida $direction a $speed %"
    //% block.es="conducir $direction a $speed %"
    //% block.el="οδήγησε $direction με $speed %"
    //% blockId=fwd_driving_drive
    //% speed.shadow="speedPicker"
    //% weight=99
    export function drive(direction: fwdEnums.ForwardReverse, speed: number) {
        drivingControls.drive(direction, speed)
    }
    /**
     * Stop driving or turning. Sets speed to 0%.
     */
    //% group="Driving"
    //% group.de="Fahren"
    //% group.fr="Conduite"
    //% group.it="Guida"
    //% group.es="Conducción"
    //% group.el="Οδήγηση"
    //% block="stop motors"
    //% block.de="Motoren stoppen"
    //% block.fr="arrêter moteurs"
    //% block.it="ferma motori"
    //% block.es="detener motores"
    //% block.el="σταμάτησε τους κινητήρες"
    //% blockId=fwd_driving_stop
    //% weight=98
    export function stop() {
        drivingControls.drive(1, 0)
    }
    /**
     * Turns the vehicle left or right in place by spinning the wheels in opposite directions.
     * @param angle positive angles turn right, negative angles turn left
     */
    //% group="Driving"
    //% group.de="Fahren"
    //% group.fr="Conduite"
    //% group.it="Guida"
    //% group.es="Conducción"
    //% group.el="Οδήγηση"
    //% block="turn $angle ° in place"
    //% block.de="drehe $angle ° auf der Stelle"
    //% block.fr="tourner $angle ° sur place"
    //% block.it="ruota $angle ° sul posto"
    //% block.es="gira $angle ° en el lugar"
    //% block.el="στρίψε $angle ° επί τόπου"
    //% blockId=fwd_driving_turn_in_place
    //% angle.min=-359 angle.max=359
    //% weight=97
    export function turn(angle: number) {
        drivingControls.turnInPlace(angle)
    }
}
