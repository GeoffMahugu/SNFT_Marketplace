import  { useState } from "react";

function Drop(props) {
    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSeconds] = useState();

    const currentDateTime = Date.now() / 1000;
    const dropDateTime = new Date(props.dropDate);
    const eventTimeInSec = dropDateTime.getTime() / 1000;
    let dropTimeLeft = Math.floor(eventTimeInSec - currentDateTime);

    const pad = (value) => {
        return value < 10 ? "0" + value : value;
    };

    const timer = () => {
        let daysLeft = Math.floor(dropTimeLeft / 24 / 60 / 60);
        let hoursLeftInSec = Math.floor(dropTimeLeft - daysLeft * 86400);
        let hoursLeft = Math.floor(hoursLeftInSec / 3600);
        let minutesLeftInSec = Math.floor(hoursLeftInSec - hoursLeft * 3600);
        let minutesLeft = Math.floor(minutesLeftInSec / 60);
        let secondsLeft = dropTimeLeft % 60;

        setDay(daysLeft);
        setHour(hoursLeft);
        setMinute(minutesLeft);
        setSeconds(secondsLeft);

        if (dropTimeLeft == 0) {
            clearInterval(timerInterval);
        } else {
            dropTimeLeft--;
        }
    };
    
    const timerInterval = setInterval(() => {
        timer();
    }, 1000);

    return (
        <section
            className="drop-section black-overlay"
            style={{ backgroundImage: `url(${props.dropCover.src})` }}
        >
            <div className="container">
                <div className="drop-content">
                    <h1>
                        <a href="#">
                            Drop by {props.dropBy} <br /> coming{" "}
                            {props.dropDateShort}
                        </a>
                    </h1>
                    <div className="drop-timer">
                        <div>
                            <p className="timer">{pad(day)}</p>
                            <div className="timer-type">Days</div>
                        </div>
                        <div>
                            <p className="timer">{pad(hour)}</p>
                            <div className="timer-type">Hours</div>
                        </div>
                        <div>
                            <p className="timer">{pad(minute)}</p>
                            <div className="timer-type">Minutes</div>
                        </div>
                        <div>
                            <p className="timer">{pad(second)}</p>
                            <div className="timer-type">Seconds</div>
                        </div>
                    </div>
                    <a href="#" className="btn">
                        View artwork
                    </a>
                    <p>{props.dropText}</p>
                </div>
            </div>
        </section>
    );
}

export default Drop;
