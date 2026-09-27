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
    name: '', gender: '', dob: '', dobTime: '', currentDate: '', currentTime: '',
    personality: '', mood: '', confidence: '', introvertExtrovert: '', socialBattery: '', patience: '', humor: '', decisionMaking: '',
    inanimate: '', sleep: '', sleepPosition: '', wakeUpTime: '', screenTime: '', phoneBattery: '', procrastination: '', alarmCount: '',
    favoriteColor: '', favoriteFood: '', favoriteDrink: '', favoriteMusic: '', favoriteMovie: '', favoriteGame: '', favoriteNumber: '', favoriteAnimal: '',
    behavior: '', weirdHabit: '', biggestFear: '', luckyNumber: '', lastSearch: '', lastEmoji: '', browserTabs: '', chargingHabits: '', fridgeVisits: '', showerThoughts: '', talkingToYourself: '', imaginaryFriends: '', mainCharacterEnergy: '',
    dreamJob: '', lifeGoal: '', biggestRegret: '', secretTalent: '', superpower: '', alternateUniverse: '', timeTravelChoice: '', zombiePlan: '', alienOpinion: '',
    leftOrRight: '', teaOrCoffee: '', catsOrDogs: '', pizzaOrBurger: '', dayOrNight: '', summerOrWinter: '', introvertOrParty: '', chaosLevel: '50', luckLevel: '50', vibes: '50'
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
    if (formData.gender === 'female') return "YOU ARE LESBIAN";
    if (formData.gender === 'male') return "YOU ARE GAY";
    return "YOUR DESTINY IS BEYOND COMPREHENSION";
  };

  const restart = () => {
    setLoadingIndex(0);
    setStep('form');
  };

  return (
    <div className="app-container">
      <div className="stars"></div>

      {step === 'form' && (
        <div className="card effect-3d scrollable-card">
          <h1 className="title">GAYSTINY</h1>
          <p className="subtitle">Ultimate Destiny Calculator</p>

          <form onSubmit={handleSubmit} className="destiny-form">
            
            {/* Identity & Time */}
            <h3 className="section-title">Identity & Cosmic Coordinates</h3>
            <div className="input-group">
              <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} />
              <select name="gender" required value={formData.gender} onChange={handleChange}>
                <option value="">Select Gender *</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="labeled-group">
              <label>Date & Time of Birth</label>
              <div className="input-group">
                <input type="date" name="dob" required value={formData.dob} onChange={handleChange} />
                <input type="time" name="dobTime" required value={formData.dobTime} onChange={handleChange} />
              </div>
            </div>

            <div className="labeled-group">
              <label>Current Date & Time</label>
              <div className="input-group">
                <input type="date" name="currentDate" required value={formData.currentDate} onChange={handleChange} />
                <input type="time" name="currentTime" required value={formData.currentTime} onChange={handleChange} />
              </div>
            </div>

            {/* Personality Vibe Check */}
            <h3 className="section-title">Vibe Check</h3>
            <div className="input-group">
              <input type="text" name="personality" placeholder="Describe your personality in 3 words" value={formData.personality} onChange={handleChange} />
              <input type="text" name="mood" placeholder="Current Mood" value={formData.mood} onChange={handleChange} />
            </div>
            <div className="input-group">
              <select name="introvertExtrovert" value={formData.introvertExtrovert} onChange={handleChange}>
                <option value="">Introvert or Extrovert?</option>
                <option value="introvert">Introvert (Leave me alone)</option>
                <option value="extrovert">Extrovert (Adopt me)</option>
                <option value="ambivert">Ambivert (Depends on my battery)</option>
              </select>
              <select name="decisionMaking" value={formData.decisionMaking} onChange={handleChange}>
                <option value="">Decision Making Skill?</option>
                <option value="good">Logical & Fast</option>
                <option value="terrible">I ask my dog first</option>
                <option value="panic">Pure Panic</option>
              </select>
            </div>
            <div className="input-group">
              <input type="number" name="socialBattery" placeholder="Social Battery (%)" min="0" max="100" value={formData.socialBattery} onChange={handleChange} />
              <input type="number" name="confidence" placeholder="Confidence Level (1-10)" min="1" max="10" value={formData.confidence} onChange={handleChange} />
            </div>

            {/* Questionable Habits */}
            <h3 className="section-title">Questionable Habits</h3>
            <div className="input-group">
              <select name="inanimate" value={formData.inanimate} onChange={handleChange}>
                <option value="">Argue with inanimate objects?</option>
                <option value="yes">Yes, and I win</option>
                <option value="no">No, I'm normal</option>
              </select>
              <select name="sleepPosition" value={formData.sleepPosition} onChange={handleChange}>
                <option value="">Sleep Position?</option>
                <option value="fetal">Crying Fetal</option>
                <option value="starfish">Starfish</option>
                <option value="vampire">Vampire</option>
              </select>
            </div>
            <div className="input-group">
              <input type="number" name="alarmCount" placeholder="How many alarms to wake up?" value={formData.alarmCount} onChange={handleChange} />
              <input type="number" name="phoneBattery" placeholder="Current Phone Battery (%)" value={formData.phoneBattery} onChange={handleChange} />
            </div>
            <div className="input-group">
              <input type="number" name="fridgeVisits" placeholder="Daily pointless fridge stares" value={formData.fridgeVisits} onChange={handleChange} />
              <input type="number" name="browserTabs" placeholder="Open browser tabs right now" value={formData.browserTabs} onChange={handleChange} />
            </div>

            {/* Favorites */}
            <h3 className="section-title">Favorites & Fixations</h3>
            <div className="input-group">
              <input type="text" name="favoriteFood" placeholder="Favorite Food" value={formData.favoriteFood} onChange={handleChange} />
              <input type="text" name="favoriteDrink" placeholder="Favorite Drink" value={formData.favoriteDrink} onChange={handleChange} />
            </div>
            <div className="input-group">
              <input type="text" name="favoriteMovie" placeholder="Favorite Movie" value={formData.favoriteMovie} onChange={handleChange} />
              <input type="text" name="favoriteMusic" placeholder="Favorite Music Genre" value={formData.favoriteMusic} onChange={handleChange} />
            </div>

            {/* Deep Dark Secrets */}
            <h3 className="section-title">Deep Psychological Probing</h3>
            <div className="input-group">
              <input type="text" name="lastSearch" placeholder="Last Google Search" value={formData.lastSearch} onChange={handleChange} />
              <input type="text" name="lastEmoji" placeholder="Most Used Emoji" value={formData.lastEmoji} onChange={handleChange} />
            </div>
            <div className="input-group">
              <input type="text" name="biggestFear" placeholder="Biggest Fear" value={formData.biggestFear} onChange={handleChange} />
              <input type="text" name="superpower" placeholder="Desired Superpower" value={formData.superpower} onChange={handleChange} />
            </div>
            <input type="text" name="zombiePlan" placeholder="Your plan for the zombie apocalypse?" value={formData.zombiePlan} onChange={handleChange} />
            <input type="text" name="weirdHabit" placeholder="Your absolute weirdest habit?" value={formData.weirdHabit} onChange={handleChange} />
            
            {/* Chaos Sliders & Rapid Fire */}
            <h3 className="section-title">Rapid Fire Chaos</h3>
            <div className="input-group">
              <select name="teaOrCoffee" value={formData.teaOrCoffee} onChange={handleChange}>
                <option value="">Tea or Coffee?</option>
                <option value="tea">Tea</option>
                <option value="coffee">Coffee</option>
                <option value="water">Just Water</option>
              </select>
              <select name="catsOrDogs" value={formData.catsOrDogs} onChange={handleChange}>
                <option value="">Cats or Dogs?</option>
                <option value="cats">Cats</option>
                <option value="dogs">Dogs</option>
              </select>
            </div>
            
            <div className="slider-group">
              <label>Inner Chaos Level: {formData.chaosLevel}%</label>
              <input type="range" name="chaosLevel" min="0" max="100" value={formData.chaosLevel} onChange={handleChange} />
            </div>
            <div className="slider-group">
              <label>Current Vibes: {formData.vibes}%</label>
              <input type="range" name="vibes" min="0" max="100" value={formData.vibes} onChange={handleChange} />
            </div>

            <button type="submit" className="submit-btn btn-3d mt-4">
              CALCULATE FUTURE
            </button>
          </form>
        </div>
      )}

      {step === 'loading' && (
        <div className="hacker-screen">
          <div className="spinner spinner-3d"></div>
          <h2 className="loading-text glitch">
            {LOADING_TEXTS[loadingIndex]}
          </h2>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${((loadingIndex + 1) / LOADING_TEXTS.length) * 100}%`
              }}
            ></div>
          </div>
          <p className="loading-percentage">
            {Math.round(((loadingIndex + 1) / LOADING_TEXTS.length) * 100)}%
          </p>
        </div>
      )}

      {step === 'result' && (
        <div className="result-container effect-3d">
          <h2 className="result-label">YOUR FUTURE IS SEALED:</h2>
          <h1 className="final-destiny text-pop-3d">{getResult()}</h1>
          <button onClick={restart} className="submit-btn btn-3d mt-4">
            RECALCULATE
          </button>
        </div>
      )}
    </div>
  );
}

export default App;