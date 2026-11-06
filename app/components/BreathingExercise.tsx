"use client";

import { useEffect, useState } from "react";

const phases = [
  { label: "Breathe in", duration: 4, scale: 1.35 },
  { label: "Hold", duration: 4, scale: 1.35 },
  { label: "Breathe out", duration: 6, scale: 1 },
];

export default function BreathingExercise() {
  const [running, setRunning] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(4);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    if (!running) return;

    const timer = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current > 1) return current - 1;

        setPhaseIndex((index) => {
          const next = (index + 1) % phases.length;
          if (next === 0) setCycles((count) => count + 1);
          return next;
        });

        return phases[(phaseIndex + 1) % phases.length].duration;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [running, phaseIndex]);

  function startExercise() {
    setSecondsLeft(phases[phaseIndex].duration);
    setRunning(true);
  }

  function resetExercise() {
    setRunning(false);
    setPhaseIndex(0);
    setSecondsLeft(phases[0].duration);
    setCycles(0);
  }

  const phase = phases[phaseIndex];

  return (
    <section className="mt-8 rounded-3xl border border-[#dce8d9] bg-white p-8 shadow-sm sm:p-10">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#edf3e9] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#64836a]">
          <span>☁️</span> Take a breathing break
        </div>

        <h2 className="mt-6 text-2xl font-semibold text-[#294536] sm:text-3xl">
          Find your moment of calm
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#849187]">
          Follow the circle and take a few slow, comfortable breaths.
          There's nothing you need to achieve.
        </p>
      </div>

      <div className="my-10 flex flex-col items-center">
        <div className="flex h-64 w-64 items-center justify-center">
          <div
            className="flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-[#dcebd8] to-[#a9c8a8] shadow-[0_15px_50px_rgba(112,151,121,0.2)]"
            style={{
              transform: `scale(${running ? phase.scale : 1})`,
              transition: running
                ? `transform ${phase.duration}s ease-in-out`
                : "transform 0.5s ease",
            }}
          >
            <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-white/60 bg-white/30 text-center">
              <span className="text-sm font-semibold text-[#3e6049]">
                {running ? phase.label : "Ready?"}
              </span>
              {running && (
                <span className="mt-1 text-2xl font-semibold text-[#3e6049]">
                  {secondsLeft}
                </span>
              )}
            </div>
          </div>
        </div>

        <p className="mt-2 text-sm text-[#91a094]">
          {cycles === 0
            ? "A few moments just for you"
            : `${cycles} breathing ${cycles === 1 ? "cycle" : "cycles"} completed`}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {!running ? (
          <button
            onClick={startExercise}
            className="rounded-full bg-[#52745d] px-7 py-3 font-semibold text-white transition hover:bg-[#3e6049]"
          >
            {cycles > 0 ? "Continue" : "Start breathing"}
          </button>
        ) : (
          <button
            onClick={() => setRunning(false)}
            className="rounded-full bg-[#52745d] px-7 py-3 font-semibold text-white transition hover:bg-[#3e6049]"
          >
            Pause
          </button>
        )}

        <button
          onClick={resetExercise}
          className="rounded-full border border-[#dce8d9] px-7 py-3 font-semibold text-[#64836a] transition hover:bg-[#f5f7f1]"
        >
          Reset
        </button>
      </div>

      <p className="mt-6 text-center text-xs leading-6 text-[#a0aaa1]">
        Breathe naturally and comfortably. Stop if you feel dizzy or uncomfortable.
      </p>
    </section>
  );
}
