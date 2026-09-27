import React, { useState, useEffect } from 'react';

const LOADING_TEXTS = [
  "Initializing Quantum AI...",
  "Bypassing Mainframe Security...",
  "Hacking NASA Servers...",
  "Downloading ISRO Satellite Data...",
  "Analyzing Karmic Resonance...",
  "Decoding Behavioral Patterns...",
  "Calculating Inevitable Destiny...",
  "Consulting the Ancient Algorithms...",
  "Scanning Your Browser History... 👀",
  "Checking Your Search History...",
  "Asking the Internet for Answers...",
  "Calling the AI Overlords...",
  "Downloading 47 Petabytes of Suspicious Data...",
  "Cross-referencing Your Vibes...",
  "Analyzing Your Last 37 Decisions...",
  "Interrogating the Quantum Hamsters...",
  "Consulting a Very Confused Scientist...",
  "Running Extremely Unnecessary Calculations...",
  "Checking If You Are Actually a Robot...",
  "Detecting Main Character Energy...",
  "Analyzing Your Aura in 8K...",
  "Measuring Your Level of Suspicion...",
  "Searching the Multiverse...",
  "Checking Alternate Timelines...",
  "Consulting Future You...",
  "Future You Says: 'Bro...'",
  "Running Emotional Damage Diagnostics...",
  "Calculating Your NPC Level...",
  "Detecting Unusual Amounts of Vibes...",
  "Asking the Magic 8-Ball...",
  "The Magic 8-Ball Is Confused...",
  "Calling a Professional Psychic...",
  "Psychic Hung Up...",
  "Trying Again...",
  "Contacting the Council of Experts...",
  "The Council Has Reached a Decision...",
  "Ignoring All Previous Calculations...",
  "Recalculating Because Why Not...",
  "Performing One Last Completely Necessary Scan...",
  "99.999% Certain...",
  "Finalizing Results...",
  "Preparing Your Destiny..."
];

function App() {
  const [step, setStep] = useState('form');
  const [loadingIndex, setLoadingIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    dobTime: '',
    currentDate: '',
    currentTime: '',

    personality: '',
    mood: '',
    confidence: '',
    introvertExtrovert: '',
    socialBattery: '',
    patience: '',
    humor: '',
    decisionMaking: '',

    inanimate: '',
    sleep: '',
    sleepPosition: '',
    wakeUpTime: '',
    screenTime: '',
    phoneBattery: '',
    procrastination: '',
    alarmCount: '',

    favoriteColor: '',
    favoriteFood: '',
    favoriteDrink: '',
    favoriteMusic: '',
    favoriteMovie: '',
    favoriteGame: '',
    favoriteNumber: '',
    favoriteAnimal: '',

    behavior: '',
    weirdHabit: '',
    biggestFear: '',
    luckyNumber: '',
    lastSearch: '',
    lastEmoji: '',
    browserTabs: '',
    chargingHabits: '',
    fridgeVisits: '',
    showerThoughts: '',
    talkingToYourself: '',
    imaginaryFriends: '',
    mainCharacterEnergy: '',

    dreamJob: '',
    lifeGoal: '',
    biggestRegret: '',
    secretTalent: '',
    superpower: '',
    alternateUniverse: '',
    timeTravelChoice: '',
    zombiePlan: '',
    alienOpinion: '',

    leftOrRight: '',
    teaOrCoffee: '',
    catsOrDogs: '',
    pizzaOrBurger: '',
    dayOrNight: '',
    summerOrWinter: '',
    introvertOrParty: '',
    chaosLevel: '',
    luckLevel: '',
    vibes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.gender) {
      alert("Gender is crucial for accurate destiny calculation.");
      return;
    }

    // Start loading from the beginning every time
    setLoadingIndex(0);
    setStep('loading');
  };

  useEffect(() => {
    if (step !== 'loading') return;

    const interval = setInterval(() => {
      setLoadingIndex((prev) => {
        if (prev >= LOADING_TEXTS.length - 1) {
          clearInterval(interval);

          setTimeout(() => {
            setStep('result');
          }, 1000);

          return prev;
        }

        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [step]);

  const getResult = () => {
    if (formData.gender === 'female') {
      return "YOU ARE LESBIAN";
    }

    if (formData.gender === 'male') {
      return "YOU ARE GAY";
    }

    return "YOUR DESTINY IS BEYOND COMPREHENSION";
  };

  const restart = () => {
    setLoadingIndex(0);
    setStep('form');
  };

  return (
    <div className="app-container">
      <div className="stars"></div>

      {/* FORM */}
      {step === 'form' && (
        <div className="card 3d-effect">
          <h1 className="title">GAYSTINY</h1>

          <p className="subtitle">
            Ultimate Destiny Calculator
          </p>

          <form
            onSubmit={handleSubmit}
            className="destiny-form"
          >
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <select
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">
                  Select Gender
                </option>

                <option value="male">
                  Male
                </option>

                <option value="female">
                  Female
                </option>
              </select>
            </div>

            <div className="input-group">
              <input
                type="date"
                name="dob"
                title="Date of Birth"
                required
                value={formData.dob}
                onChange={handleChange}
              />

              <input
                type="time"
                name="dobTime"
                title="Time of Birth"
                required
                value={formData.dobTime}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <input
                type="date"
                name="currentDate"
                title="Current Date"
                required
                value={formData.currentDate}
                onChange={handleChange}
              />

              <input
                type="time"
                name="currentTime"
                title="Current Time"
                required
                value={formData.currentTime}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="behavior"
              placeholder="Describe your weirdest behavior or habits..."
              required
              value={formData.behavior}
              onChange={handleChange}
              rows="3"
            />

            <button
              type="submit"
              className="submit-btn 3d-btn"
            >
              CALCULATE FUTURE
            </button>
          </form>
        </div>
      )}

      {/* LOADING */}
      {step === 'loading' && (
        <div className="hacker-screen">

          <div className="spinner 3d-spinner"></div>

          <h2 className="loading-text glitch">
            {LOADING_TEXTS[loadingIndex]}
          </h2>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${
                  ((loadingIndex + 1) /
                    LOADING_TEXTS.length) *
                  100
                }%`
              }}
            ></div>
          </div>

          <p className="loading-percentage">
            {Math.round(
              ((loadingIndex + 1) /
                LOADING_TEXTS.length) *
                100
            )}
            %
          </p>
        </div>
      )}

      {/* RESULT */}
      {step === 'result' && (
        <div className="result-container 3d-effect">

          <h2 className="result-label">
            YOUR FUTURE IS SEALED:
          </h2>

          <h1 className="final-destiny 3d-text-pop">
            {getResult()}
          </h1>

          <button
            onClick={restart}
            className="submit-btn 3d-btn mt-4"
          >
            RECALCULATE
          </button>

        </div>
      )}
    </div>
  );
}

export default App;
