import React, { useState, useEffect, useRef } from 'react';
import logo from '../logo.svg';

function AudioPlayer({ tracks }) {
    const [trackIndex, setTrackIndex] = useState(0);
    // const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isEnd, setIsEnd] = useState(false)

    const { title, src } = tracks[trackIndex]
    const audioRef = useRef(null)

    const handleTrackEnded = () => {
        if (trackIndex == tracks.length - 1) {
            setIsEnd(true)
            return
        }
        console.log(`index: ${trackIndex} length: ${tracks.length} isEnd: ${isEnd}`)
        console.log(`Track ${trackIndex} has ended. Playing: ${trackIndex + 1}`)
        setTrackIndex(trackIndex + 1)
        audioRef.current.play();
    }

    const handlePlayButtonClick = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying)
    };

    useEffect(() => {
        const audio = new Audio(tracks[trackIndex].src);
        audio.addEventListener("loadedmetadata", () => {
            audioRef.current.play();
        });
        audio.addEventListener("ended", handleTrackEnded);
        audio.autoplay = true;
        audioRef.current = audio;

        return () => {
            audio.removeEventListener("ended", handleTrackEnded);
            audio.pause();
        };
    }, [trackIndex, isEnd]);

    return (
        <div>
            <div
                onClick={handlePlayButtonClick}
                style={styles.button}
            >
                <img src={logo} className="App-logo" alt="logo" />
                <h2 style={styles.header}>Current Track: {title}</h2>
            </div>
            <h2>
                Next Track: {isEnd ? "The End 🏁" : tracks[trackIndex + 1].title}
            </h2>
        </div>
    );
};

const styles = {
    button: {
        cursor: "pointer",
        border: "1px solid white",
        padding: '2rem',
        borderRadius: '2rem',
    },
    header: {
        padding: 0,
        margin: 0,
    }
}

export default AudioPlayer;