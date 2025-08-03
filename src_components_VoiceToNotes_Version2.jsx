import React, { useState, useRef } from "react";

export default function VoiceToNotes() {
  const [recording, setRecording] = useState(false);
  const [note, setNote] = useState("");
  const recognitionRef = useRef(null);

  const startRecording = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser.");
      return;
    }
    setRecording(true);
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (event) => {
      setNote((prev) => prev + " " + event.results[0][0].transcript);
    };
    recognition.onend = () => setRecording(false);
    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopRecording = () => {
    recognitionRef.current && recognitionRef.current.stop();
    setRecording(false);
  };

  const downloadTxt = () => {
    const blob = new Blob([note], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "notes.txt";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-lilac rounded-xl p-6 shadow">
      <h3 className="font-bold text-lg mb-2 text-blue">Voice to Notes 🎤</h3>
      <div className="flex gap-2 mb-2">
        <button
          className={`px-4 py-1 rounded-full font-bold ${
            recording ? "bg-pink text-white" : "bg-mint text-white"
          }`}
          onClick={recording ? stopRecording : startRecording}
        >
          {recording ? "Stop Recording" : "Start Recording"}
        </button>
        <button
          className="bg-blue text-white px-4 py-1 rounded-full font-bold"
          onClick={downloadTxt}
          disabled={!note}
        >
          Download Notes
        </button>
      </div>
      <textarea
        className="w-full bg-cream border rounded p-2"
        rows={4}
        placeholder="Your notes will appear here..."
        value={note}
        onChange={e => setNote(e.target.value)}
      />
    </div>
  );
}