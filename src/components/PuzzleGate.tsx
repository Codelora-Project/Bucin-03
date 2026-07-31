import React, { useState } from 'react';
import { giftData, PuzzleQuestion } from '../data/giftData';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface PuzzleGateProps {
  onUnlockSuccess: () => void;
}

export const PuzzleGate: React.FC<PuzzleGateProps> = ({ onUnlockSuccess }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [userInputs, setUserInputs] = useState<Record<number, string>>({});
  const [showHint, setShowHint] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const questions = giftData.puzzleConfig.questions;
  const currentQuestion: PuzzleQuestion = questions[currentStep];

  const triggerConfettiEffect = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#d97706', '#b45309', '#fbbf24']
      });
    } catch (e) {
      console.log('Confetti failed gracefully', e);
    }
  };

  const checkAnswer = (answer: string) => {
    setErrorMessage('');
    const trimmed = answer.trim().toLowerCase();
    
    const isCorrect = currentQuestion.correctAnswers.some((val) => {
      const target = val.trim().toLowerCase();
      return trimmed === target || (target.length > 2 && trimmed.includes(target));
    });

    if (isCorrect || currentQuestion.type === 'choice') {
      setUserInputs((prev) => ({ ...prev, [currentQuestion.id]: answer }));

      if (currentStep < questions.length - 1) {
        setShowHint(false);
        setCurrentStep((prev) => prev + 1);
      } else {
        setIsCompleted(true);
        triggerConfettiEffect();
        setTimeout(() => {
          onUnlockSuccess();
        }, 1600);
      }
    } else {
      setErrorMessage('Answer is incorrect, please try again or check the hint.');
      setShowHint(true);
    }
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = userInputs[currentQuestion.id] || '';
    if (!val.trim()) {
      setErrorMessage('Please enter your answer first.');
      return;
    }
    checkAnswer(val);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full"
      >
        <div className="glass-card rounded-3xl p-6 md:p-8 shadow-xl border border-amber-300/60 relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center space-y-3 mb-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
              {giftData.puzzleConfig.title}
            </h2>
            <p className="text-stone-600 text-sm md:text-base font-sans leading-relaxed">
              {giftData.puzzleConfig.description}
            </p>
          </div>

          {/* Step Progress Bar */}
          <div className="flex items-center gap-2 mb-6 justify-center">
            {questions.map((q, idx) => (
              <div
                key={q.id}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentStep
                    ? 'w-10 bg-amber-600'
                    : idx < currentStep
                    ? 'w-6 bg-emerald-600'
                    : 'w-6 bg-amber-200/60'
                }`}
              />
            ))}
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            {!isCompleted ? (
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-200/80">
                  <div className="text-xs font-semibold text-amber-800 uppercase tracking-wider mb-2 font-sans">
                    Question #{currentStep + 1} of {questions.length}
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-stone-900 leading-snug">
                    {currentQuestion.question}
                  </h3>
                </div>

                {/* Input form or multiple choice */}
                {currentQuestion.type === 'text' ? (
                  <form onSubmit={handleTextSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Type your answer here..."
                        value={userInputs[currentQuestion.id] || ''}
                        onChange={(e) => setUserInputs({ ...userInputs, [currentQuestion.id]: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/95 text-stone-900 text-base shadow-sm font-sans"
                        autoFocus
                      />
                    </div>

                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 rounded-xl bg-amber-100/80 border border-amber-300 text-amber-950 text-xs font-sans"
                      >
                        {errorMessage}
                      </motion.div>
                    )}

                    <div className="flex items-center justify-between gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setShowHint(!showHint)}
                        className="text-xs text-amber-800 font-semibold hover:underline cursor-pointer font-sans"
                      >
                        {showHint ? 'Hide Hint' : 'Show Hint'}
                      </button>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer font-sans"
                      >
                        <span>Continue</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-3">
                    {currentQuestion.options?.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => checkAnswer(opt)}
                        className="w-full p-4 rounded-xl border border-amber-300/70 bg-white/90 hover:border-amber-500 hover:bg-amber-50/60 text-left font-medium text-stone-900 shadow-sm transition-all cursor-pointer font-sans text-sm"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {/* Hint Drawer */}
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="p-4 rounded-2xl bg-amber-100/80 border border-amber-200 text-amber-950 text-xs font-sans leading-relaxed"
                  >
                    <div className="font-bold text-amber-900 mb-1">Hint:</div>
                    <p>{currentQuestion.hint}</p>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-4 font-sans"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-2">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-stone-900">
                  All Answers Correct!
                </h3>
                <p className="text-stone-600 text-sm max-w-sm mx-auto">
                  Access to the birthday gift is unlocked. Preparing display...
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </motion.div>
    </div>
  );
};
