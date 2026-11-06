"use client";

import { useState } from "react";
import BreathingExercise from "./components/BreathingExercise";

const moods = [
  {
    id: "good",
    emoji: "😊",
    label: "Good",
    description: "I'm feeling positive",
    message: "That's lovely. Take a moment to appreciate what's going well today.",
    quote: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    colour: "border-green-300 bg-green-50",
  },
  {
    id: "okay",
    emoji: "🙂",
    label: "Okay",
    description: "I'm doing alright",
    message: "That's perfectly okay. You don't have to feel amazing every day.",
    quote: "Almost everything will work again if you unplug it for a few minutes, including you.",
    author: "Anne Lamott",
    colour: "border-amber-300 bg-amber-50",
  },
  {
    id: "low",
    emoji: "😔",
    label: "Low",
    description: "Today is a bit difficult",
    message: "It's okay not to be okay. Be kind to yourself and take things one step at a time.",
    quote: "You are allowed to be both a masterpiece and a work in progress.",
    author: "Sophia Bush",
    colour: "border-blue-300 bg-blue-50",
  },
];

const prompts = [
  "What's one small thing you're grateful for today?",
  "Have you taken a moment to get some fresh air?",
  "What's something kind you could do for yourself today?",
  "What is one thing you have achieved recently, however small?",
  "Can you take five minutes to pause and breathe?",
];

export default function FeelGoodPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [promptIndex, setPromptIndex] = useState(0);

  const mood = moods.find((item) => item.id === selectedMood);

  return (
    <main className="min-h-screen bg-[#f5f7f1] text-[#263b31]">
      <nav className="border-b border-[#dfe7dc] bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="https://colinwebdesign.com" className="text-sm font-semibold text-[#52745d] transition hover:text-[#263b31]">
            ← Colin Anderson
          </a>
          <span className="text-sm font-semibold tracking-wide text-[#52745d]">
            feel good<span className="text-[#9ab69a]">.</span>
          </span>
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dce8d9] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#64836a]">
            <span>✦</span> A little space for yourself
          </div>

          <h1 className="text-5xl font-semibold tracking-tight text-[#294536] sm:text-6xl">
            How are you <span className="text-[#83a889]">feeling?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#718176] sm:text-lg">
            Take a moment to check in with yourself. There's no right or wrong
            answer — just be honest about how you feel.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {moods.map((item) => {
            const isSelected = selectedMood === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setSelectedMood(item.id)}
                aria-pressed={isSelected}
                className={`rounded-3xl border-2 p-7 text-center transition duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  isSelected
                    ? "border-[#709779] bg-white shadow-lg shadow-[#709779]/10"
                    : "border-white bg-white/70 hover:border-[#c6d8c5]"
                }`}
              >
                <span className="text-5xl">{item.emoji}</span>
                <h2 className="mt-5 text-xl font-semibold text-[#294536]">
                  {item.label}
                </h2>
                <p className="mt-2 text-sm text-[#849187]">
                  {item.description}
                </p>
                {isSelected && (
                  <span className="mt-4 inline-block rounded-full bg-[#e6f0e4] px-3 py-1 text-xs font-semibold text-[#52745d]">
                    Selected
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {mood && (
          <section
            aria-live="polite"
            className={`mt-8 rounded-3xl border p-8 shadow-sm sm:p-10 ${mood.colour}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64836a]">
              A little reminder
            </p>
            <p className="mt-4 text-xl font-medium leading-8 text-[#294536] sm:text-2xl">
              {mood.message}
            </p>

            <div className="my-8 h-px bg-[#294536]/10" />

            <p className="text-lg italic leading-8 text-[#526b59]">
              “{mood.quote}”
            </p>
            <p className="mt-3 text-sm font-semibold text-[#78917c]">
              — {mood.author}
            </p>

            <button
              onClick={() => setSelectedMood(null)}
              className="mt-8 rounded-full border border-[#78917c]/40 bg-white/60 px-5 py-2.5 text-sm font-semibold text-[#52745d] transition hover:bg-white"
            >
              Change my mood
            </button>
          </section>
        )}

        <BreathingExercise />

        <section className="mt-14 rounded-3xl bg-[#e8eee3] p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl">
              🌱
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64836a]">
              Today's little reflection
            </p>
          </div>

          <h2 className="mt-6 text-2xl font-semibold leading-snug text-[#294536]">
            {prompts[promptIndex]}
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#718176]">
            There's no need to write anything down. Just give yourself a
            moment to think.
          </p>

          <button
            onClick={() => setPromptIndex((current) => (current + 1) % prompts.length)}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#52745d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3e6049]"
          >
            Another reflection <span>↗</span>
          </button>
        </section>

        <p className="mt-12 text-center text-sm leading-7 text-[#91a094]">
          A small reminder to slow down, check in and look after yourself.
          <br />
          Made with care. Take it one day at a time.
        </p>
      </section>
    </main>
  );
}
