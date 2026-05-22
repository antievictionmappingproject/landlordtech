import React, { Component } from 'react'
import { connect } from 'react-redux';
import { windowResize, updateData } from './actions';
import { csvParse } from 'd3';
import { convGeoJSON } from './utils';
import { Header, Hero, Intro, MapArea, SurveyArea, Footer, PamphletArea } from './components';

const Fragment = React.Fragment;

const SENTIMENT_PHRASES = [
  // Negated positives (must beat their bare sub words)
  { phrase: "not good", score: -1.5 },
  { phrase: "not great", score: -1.5 },
  { phrase: "not helpful", score: -1.5 },
  { phrase: "not safe", score: -2 },
  { phrase: "not comfortable", score: -1.5 },
  { phrase: "not working", score: -1.5 },
  { phrase: "not reliable", score: -1.5 },
  { phrase: "not fair", score: -1.5 },
  { phrase: "not clear", score: -1 },
  { phrase: "not accessible", score: -1.5 },
  { phrase: "not easy", score: -1 },
  { phrase: "not transparent", score: -1.5 },
  { phrase: "not supported", score: -1.5 },
  { phrase: "no support", score: -1.5 },
  { phrase: "no privacy", score: -2 },
  { phrase: "no choice", score: -2 },
  { phrase: "no response", score: -1.5 },
  { phrase: "no communication", score: -1.5 },
  { phrase: "no solution", score: -1.5 },
  { phrase: "no complaints", score: 1 },
  { phrase: "nothing wrong", score: 1 },
  { phrase: "never works", score: -2 },
  { phrase: "doesn't work", score: -2 },
  { phrase: "does not work", score: -2 },
  { phrase: "don't like", score: -2 },
  { phrase: "do not like", score: -2 },
  { phrase: "doesn't help", score: -1.5 },
  { phrase: "does not help", score: -1.5 },
  { phrase: "can't access", score: -1.5 },
  { phrase: "cannot access", score: -1.5 },
  { phrase: "can't use", score: -1.5 },
  { phrase: "cannot use", score: -1.5 },
  { phrase: "hard to use", score: -1.5 },
  { phrase: "hard to access", score: -1.5 },
  { phrase: "hard to navigate", score: -1.5 },

  // Strong negative multi-word
  { phrase: "invasion of privacy", score: -3 },
  { phrase: "lack of privacy", score: -2.5 },
  { phrase: "privacy concerns", score: -2 },
  { phrase: "feel unsafe", score: -2.5 },
  { phrase: "unsafe feeling", score: -2.5 },
  { phrase: "taken advantage", score: -2.5 },
  { phrase: "unfair treatment", score: -2 },
  { phrase: "treated badly", score: -2 },
  { phrase: "lack of support", score: -1.5 },
  { phrase: "poor communication", score: -1.5 },
  { phrase: "rent went up", score: -2 },
  { phrase: "rent increase", score: -1.5 },
  { phrase: "pro landlord", score: -1.5 },
  { phrase: "pro-landlord", score: -1.5 },
  { phrase: "multiple apps", score: -1 },
  { phrase: "too many steps", score: -1 },
  { phrase: "I dislike it", score: -1.5 },
  { phrase: "waste of time", score: -2 },
  { phrase: "time consuming", score: -1 },
  { phrase: "slow response", score: -1.5 },
  { phrase: "takes forever", score: -1.5 },
  { phrase: "complicated process", score: -1.5 },
  { phrase: "no discussion", score: -1.5 },
  { phrase: "false information", score: -2 },

  // Positive multi-word (must beat their bare sub words)
  { phrase: "feel safe", score: 2.5 },
  { phrase: "safe feeling", score: 2.5 },
  { phrase: "stress free", score: 1.5 },
  { phrase: "no stress", score: 1.5 },
  { phrase: "really like", score: 2 },
  { phrase: "like it", score: 1.5 },
  { phrase: "i like", score: 1.5 },
  { phrase: "love it", score: 2 },
  { phrase: "makes it easier", score: 1.5 },
  { phrase: "saves time", score: 1.5 },
  { phrase: "easy to use", score: 1.5 },
  { phrase: "easy to access", score: 1.5 },
  { phrase: "easy to navigate", score: 1.5 },
  { phrase: "user friendly", score: 1.5 },
  { phrase: "user-friendly", score: 1.5 },
  { phrase: "well designed", score: 1.5 },
  { phrase: "works well", score: 1.5 },
  { phrase: "works great", score: 2 },
  { phrase: "works fine", score: 1 },
  { phrase: "does the job", score: 1 },
  { phrase: "no issues", score: 1 },
  { phrase: "no problem", score: 1 },
  { phrase: "no hassle", score: 1 },
  { phrase: "good communication", score: 1.5 },
  { phrase: "quick access", score: 1 },
  { phrase: "smooth experience", score: 1.5 },
  { phrase: "positive experience", score: 2 },
  { phrase: "good experience", score: 2 },
  { phrase: "happy with", score: 1.5 },
  { phrase: "works as expected", score: 1 },
  { phrase: "cost effective", score: 1 },
  { phrase: "easy setup", score: 1 },
  { phrase: "clean interface", score: 1 },
  { phrase: "good interface", score: 1 },
  { phrase: "well organized", score: 1 },
  { phrase: "well managed", score: 1 },
  { phrase: "very helpful", score: 2 },
  { phrase: "helpful tool", score: 1.5 },
  { phrase: "convenient system", score: 1.5 },
  { phrase: "efficient system", score: 1.5 },
  { phrase: "efficient process", score: 1.5 },
  { phrase: "easy process", score: 1.5 },
  { phrase: "simple process", score: 1.5 },
  { phrase: "clear process", score: 1 },
  { phrase: "up to date", score: 1 },
  { phrase: "comfortable using", score: 1.5 },
  { phrase: "low effort", score: 1 },
  { phrase: "minimal effort", score: 1 },
  { phrase: "no complaints", score: 1 },
  { phrase: "nothing wrong", score: 1 },

  // Mixed / hedging
  { phrase: "could be better", score: -0.5 },
  { phrase: "needs improvement", score: -0.5 },
  { phrase: "room for improvement", score: -0.5 },
  { phrase: "has pros and cons", score: -0.3 },
  { phrase: "both good and bad", score: -0.3 },
  { phrase: "mixed feelings", score: -0.3 },
  { phrase: "hit or miss", score: -0.5 },
  { phrase: "on and off", score: -0.3 },
  { phrase: "not bad", score: 0.3 },
  { phrase: "okay but", score: -0.3 },
  { phrase: "fine but", score: -0.3 },
  { phrase: "good but", score: -0.3 },
  { phrase: "convenient but", score: -0.3 },
  { phrase: "decent but", score: -0.3 },
  { phrase: "not always", score: -0.5 },
  { phrase: "in some cases", score: -0.2 },
  { phrase: "it depends", score: -0.2 },
  { phrase: "kind of", score: -0.2 },
  { phrase: "sort of", score: -0.2 },
  { phrase: "i guess", score: -0.2 },
  { phrase: "not sure", score: -0.2 },
  { phrase: "partially helpful", score: 0.3 },
  { phrase: "okay overall", score: 0.2 },
  { phrase: "fine overall", score: 0.2 },

  // Single-word negatives
  { phrase: "hate", score: -3 },
  { phrase: "scared", score: -2 },
  { phrase: "unsafe", score: -2.5 },
  { phrase: "creepy", score: -2 },
  { phrase: "violated", score: -2.5 },
  { phrase: "uncomfortable", score: -1.5 },
  { phrase: "fear", score: -2 },
  { phrase: "fearful", score: -2 },
  { phrase: "anxious", score: -1.5 },
  { phrase: "worried", score: -1.5 },
  { phrase: "harassment", score: -2.5 },
  { phrase: "annoying", score: -1.5 },
  { phrase: "absurd", score: -1.5 },
  { phrase: "ridiculous", score: -1.5 },
  { phrase: "frustrating", score: -1.5 },
  { phrase: "frustrated", score: -1.5 },
  { phrase: "inconvenient", score: -1 },
  { phrase: "confusing", score: -1 },
  { phrase: "conflict", score: -1.5 },
  { phrase: "surveillance", score: -2 },
  { phrase: "watching", score: -1 },
  { phrase: "monitoring", score: -1 },
  { phrase: "tracking", score: -1 },
  { phrase: "privacy", score: -1 },
  { phrase: "fought", score: -1.5 },
  { phrase: "forced", score: -2 },
  { phrase: "required", score: -0.5 },
  { phrase: "cannot", score: -1 },
  { phrase: "angry", score: -2 },
  { phrase: "mad", score: -1.5 },
  { phrase: "control", score: -1 },
  { phrase: "lied", score: -2 },
  { phrase: "lies", score: -2 },
  { phrase: "nightmare", score: -3 },
  { phrase: "broken", score: -2 },
  { phrase: "glitch", score: -1.5 },
  { phrase: "ignores", score: -1.5 },
  { phrase: "redundant", score: -1 },
  { phrase: "gentrification", score: -2 },
  { phrase: "eviction", score: -2.5 },
  { phrase: "displacement", score: -2 },
  { phrase: "racist", score: -3 },
  { phrase: "looters", score: -1.5 },
  { phrase: "nervous", score: -1.5 },
  { phrase: "vulnerable", score: -1.5 },
  { phrase: "terrible", score: -2.5 },
  { phrase: "awful", score: -2.5 },
  { phrase: "horrible", score: -2.5 },
  { phrase: "worst", score: -3 },
  { phrase: "difficult", score: -1 },
  { phrase: "complicated", score: -1 },
  { phrase: "stressful", score: -1.5 },
  { phrase: "stress", score: -1 },
  { phrase: "overwhelming", score: -1.5 },
  { phrase: "unreliable", score: -1.5 },
  { phrase: "inconsistent", score: -1 },
  { phrase: "slow", score: -1 },
  { phrase: "laggy", score: -1.5 },
  { phrase: "buggy", score: -1.5 },
  { phrase: "crashes", score: -2 },
  { phrase: "error", score: -1 },
  { phrase: "fails", score: -1.5 },
  { phrase: "unfair", score: -2 },
  { phrase: "biased", score: -2 },
  { phrase: "discriminatory", score: -2.5 },
  { phrase: "intrusive", score: -2 },
  { phrase: "overbearing", score: -1.5 },
  { phrase: "micromanaged", score: -2 },
  { phrase: "policed", score: -1.5 },
  { phrase: "exploit", score: -2 },
  { phrase: "exploited", score: -2.5 },
  { phrase: "expensive", score: -1.5 },
  { phrase: "overpriced", score: -1.5 },
  { phrase: "costly", score: -1 },
  { phrase: "ignored", score: -1.5 },
  { phrase: "dismissed", score: -1.5 },
  { phrase: "delayed", score: -1 },
  { phrase: "unresolved", score: -1.5 },
  { phrase: "intimidating", score: -2 },
  { phrase: "hostile", score: -2 },
  { phrase: "aggressive", score: -2 },
  { phrase: "unprofessional", score: -1.5 },
  { phrase: "rude", score: -2 },
  { phrase: "burden", score: -1.5 },
  { phrase: "hassle", score: -1.5 },
  { phrase: "disorganized", score: -1 },
  { phrase: "messy", score: -1 },
  { phrase: "unclear", score: -1 },
  { phrase: "pressure", score: -1.5 },
  { phrase: "pressured", score: -2 },
  { phrase: "unstable", score: -1.5 },
  { phrase: "unpredictable", score: -1.5 },
  { phrase: "pointless", score: -1.5 },
  { phrase: "useless", score: -2 },
  { phrase: "misleading", score: -2 },

  // Single-word positives
  { phrase: "good", score: 1 },
  { phrase: "great", score: 1.5 },
  { phrase: "convenient", score: 1 },
  { phrase: "helpful", score: 1 },
  { phrase: "useful", score: 1 },
  { phrase: "efficient", score: 1 },
  { phrase: "easy", score: 1 },
  { phrase: "secure", score: 1 },
  { phrase: "safe", score: 1.5 },
  { phrase: "better", score: 0.5 },
  { phrase: "improved", score: 1 },
  { phrase: "nice", score: 1 },
  { phrase: "comfortable", score: 1 },
  { phrase: "intuitive", score: 1 },
  { phrase: "beneficial", score: 1 },
  { phrase: "positive", score: 1 },
  { phrase: "love", score: 2 },
  { phrase: "smooth", score: 1 },
  { phrase: "simple", score: 1 },
  { phrase: "straightforward", score: 1 },
  { phrase: "fast", score: 1 },
  { phrase: "quick", score: 1 },
  { phrase: "responsive", score: 1 },
  { phrase: "reliable", score: 1 },
  { phrase: "consistent", score: 0.5 },
  { phrase: "accessible", score: 1 },
  { phrase: "clear", score: 0.5 },
  { phrase: "organized", score: 1 },
  { phrase: "practical", score: 1 },
  { phrase: "effective", score: 1 },
  { phrase: "helped", score: 1 },
  { phrase: "supportive", score: 1 },
  { phrase: "modern", score: 0.5 },
  { phrase: "flexible", score: 0.5 },
  { phrase: "adaptable", score: 0.5 },
  { phrase: "fair", score: 1 },
  { phrase: "reasonable", score: 0.5 },
  { phrase: "affordable", score: 1 },
  { phrase: "transparent", score: 1 },
  { phrase: "trustworthy", score: 1.5 },
  { phrase: "trust", score: 1 },
  { phrase: "improves", score: 1 },
  { phrase: "enhances", score: 1 },
  { phrase: "pleasant", score: 1 },
  { phrase: "enjoyable", score: 1.5 },
  { phrase: "streamlined", score: 1 },
  { phrase: "dependable", score: 1 },
  { phrase: "solid", score: 1 },
  { phrase: "satisfied", score: 1.5 },
  { phrase: "okay", score: 0.3 },
  { phrase: "fine", score: 0.3 },
  { phrase: "average", score: 0 },
  { phrase: "neutral", score: 0 },
  { phrase: "sometimes", score: -0.2 },
  { phrase: "somewhat", score: -0.2 },
];

SENTIMENT_PHRASES.sort((a, b) => b.phrase.length - a.phrase.length);

const NEGATION_WORDS = new Set([
  "not", "no", "never", "neither", "nor", "barely", "hardly",
  "scarcely", "without", "nobody", "nothing", "nowhere",
  "cannot", "can't", "won't", "wouldn't", "shouldn't",
  "didn't", "doesn't", "don't", "isn't", "aren't", "wasn't",
  "weren't", "hasn't", "haven't", "hadn't"
]);

const NEGATION_WINDOW = 4;

function computeSentiment(text) {
  if (!text || typeof text !== "string") return 0;

  const lower = text.toLowerCase();

  const consumed = new Uint8Array(lower.length);
  let score = 0;

  for (const { phrase, score: baseScore } of SENTIMENT_PHRASES) {
    let searchFrom = 0;

    while (searchFrom < lower.length) {
      const idx = lower.indexOf(phrase, searchFrom);
      if (idx === -1) break;

      const end = idx + phrase.length;

      const charBefore = idx === 0 ? " " : lower[idx - 1];
      const charAfter = end >= lower.length ? " " : lower[end];
      const atWordBoundary =
        !/[a-z0-9']/.test(charBefore) && !/[a-z0-9']/.test(charAfter);

      if (atWordBoundary) {

        let alreadyConsumed = false;
        for (let i = idx; i < end; i++) {
          if (consumed[i]) { alreadyConsumed = true; break; }
        }

        if (!alreadyConsumed) {
          const precedingText = lower.slice(Math.max(0, idx - 60), idx);
          const precedingTokens = precedingText.trim().split(/\s+/);
          const windowTokens = precedingTokens.slice(-NEGATION_WINDOW);
          const isNegated = windowTokens.some(t =>
            NEGATION_WORDS.has(t.replace(/[^a-z']/g, ""))
          );

          let effectiveScore = baseScore;
          if (isNegated) {
            effectiveScore = baseScore > 0
              ? -baseScore * 0.8
              : Math.abs(baseScore) * 0.4;
          }

          score += effectiveScore;

          for (let i = idx; i < end; i++) consumed[i] = 1;
        }
      }

      searchFrom = idx + 1;
    }
  }

  return score;
}

const FIELD_WEIGHTS = {
  "How do you feel about the use of this technology?": 1.5,
  "What kind of technology is being used by your building's management, landlord, or a property owner in your neighborhood? Please describe it.": 1.0,
  "Have you seen indications of gentrification in your building or neighborhood, and if so, what have you noticed?": 1.0,
  "Have you had trouble with your landlord in the past? How so?": 1.2,
};

function getSentimentScore(row) {
  let score = 0;
  for (const [field, weight] of Object.entries(FIELD_WEIGHTS)) {
    score += computeSentiment(row[field]) * weight;
  }
  return score;
}

function getRentBucket(rent) {
  if (rent < 1000) return 'low';
  if (rent <= 2000) return 'mid';
  return 'high';
}

const SENTIMENT_SCALE = 10;

function applyFixedScale(features) {
  features.forEach(f => {
    const val = f.properties.raw_sentiment || 0;
    f.properties.sentiment_score = Math.max(-1, Math.min(1, val / SENTIMENT_SCALE));
  });
  return features;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.mapLoaded && this.props.mapLoaded) {
      this.loadData();
    }
  }

  async loadData() {
    const response = await fetch(process.env.REACT_APP_SPREADSHEET_URL, { method: "get" });

    if (response.ok) {
      let responseText = await response.text();
      let data = csvParse(responseText);
      let geojson = convGeoJSON(data);

      geojson.features.forEach(f => {
        const row = f.properties;

        f.properties.raw_sentiment = getSentimentScore(row);
        f.properties.tech_count = (row.techType || []).length;

        const rentRaw = row["What is your monthly rent?"];
        const rent = Number(rentRaw) || 0;
        f.properties.rent = rent;
        f.properties.rent_bucket = getRentBucket(rent);
      });

      geojson.features = applyFixedScale(geojson.features);
      this.props.dispatch(updateData(geojson));
    } else {
      console.error("Failed to fetch CSV data");
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.props.dispatch(windowResize(window.innerWidth, window.innerHeight));
  }

  render() {
    return (
      <Fragment>
        <a name="top"></a>
        <Header />
        <Hero />
        <Intro />
        <MapArea />
        <SurveyArea />
        <PamphletArea />
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  mapLoaded: state.mapLoaded
});

export default connect(mapStateToProps)(App);