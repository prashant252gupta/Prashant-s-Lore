import { Github, ExternalLink } from 'lucide-react';

export const projects = [
  {
    slug: 'ai-web3-crm',
    title: 'AI Web3 CRM',
    description: 'A landing page for a Web3-focused CRM powered by AI. Designed to showcase features and capture leads.',
    image: '/images/CRM.png',
    tags: ['React', 'Next.js', 'AI', 'Web3', 'Tailwind CSS'],
    liveUrl: 'https://ai-web3-crm-landing-page.netlify.app/',
    githubUrl: '#',
    aiHint: 'crm dashboard',
    documentation: ``,
  },
  {
    slug: 'nyxie',
    title: 'Nyxie',
    description: 'A multi-purpose bot for Discord, offering moderation, entertainment, and utility commands to enhance server engagement.',
    image: '/images/Nyxie.png',
    tags: ['Node.js', 'Discord.js', 'JavaScript'],
    liveUrl: 'https://nyxiebot.netlify.app/',
    githubUrl: '#',
    aiHint: 'discord bot',
    documentation: `
# Nyxie - Your AI Wingman

**Talk dirty, undress minds.**

## Overview

Nyxie is not just another dating assistant; it's a sophisticated AI wingman designed to revolutionize your dating app experience. By embodying one of six distinct, iconic personas, Nyxie provides users with witty, strategic, and psychologically-backed advice on how to craft the perfect responses for their matches. It analyzes your unique personality through a quick "vibe quiz" and helps you navigate the complex world of modern romance with confidence and charm.

---
## Project Philosophy: The Thought Process

### Why Nyxie?

The world of online dating is often superficial. Generic advice like "be yourself" or "be funny" falls flat because it lacks context and strategy. Nyxie was born from the idea that social interaction, especially in the realm of dating, is a game of psychology and power dynamics. The goal was to create a tool that was not just a response generator, but a strategic confidant. Instead of just giving you a line, Nyxie gives you a line *and* the reason it works.

### Why Personas?

A single AI voice is monotonous. People have different styles, and advice is more impactful when it's delivered in a voice that resonates. By using iconic, archetypal personas, the user can choose a "wingman" that aligns with their own personality or the one they wish to project. This makes the interaction more engaging, personal, and fun. It transforms the AI from a simple utility into a character and a partner in crime. The AI speaks *to* the user, not *at* them.

### Why These Books? The Strategic Library

The choice of texts was deliberate and forms the core of Nyxie's strategic intelligence. The goal wasn't just to be clever, but to be effective. These books, while not explicitly about dating, are timeless treatises on human nature, strategy, and influence.

- **"The Art of Seduction" & "The 48 Laws of Power" by Robert Greene:** These are the cornerstones. Greene's work is a masterclass in understanding the underlying currents of social dynamics, attraction, and influence. They provide the framework for creating mystery, desire, and maintaining control in social interactions.
- **"The Prince" by Niccolò Machiavelli:** While often seen as cynical, "The Prince" is fundamentally about strategic calculation. It teaches the importance of adapting your approach, understanding when to be bold versus when to be cautious, and how to wield influence effectively.
- **"The Art of War" by Sun Tzu:** This classic is about more than just battle; it's about winning without conflict. Its principles—knowing yourself, knowing your "opponent" (the match), and choosing your battles wisely—are directly applicable to the subtle art of conversation and attraction.

By prompting the Gemini model with this specific library, Nyxie's advice is grounded in proven psychological and strategic principles, making it far more potent than generic dating tips.

---

## How It Works: The Backend Process

Nyxie's intelligence is powered by a carefully structured backend flow using Genkit and the Google Gemini model. Here’s a step-by-step breakdown:

1. **The Vibe Quiz:** The user experience begins with a three-question quiz. This isn't just for show; the answers form a string of text that captures a snapshot of the user's communication style and personality.
2. **Personality Analysis (\`analyzeVibeQuiz\`):** The quiz results are sent to a dedicated Genkit flow. This flow prompts the Gemini model to analyze the results and generate a concise summary of the user's "vibe" (e.g., "This user is confident, enjoys intellectual sparring, and isn't afraid to be provocative."). This insight is stored and used as context for all future interactions.
3. **The User's Request:** The user selects their desired persona (e.g., "Tyler Durden") and enters their situation (e.g., "She just messaged me 'hey', what do I say?").
4. **Strategic Response Generation (\`generateWingmanResponse\`):** This is the core flow. Three key pieces of information are sent to the Gemini model:
    * **The Persona:** The name of the chosen wingman.
    * **The User's Vibe:** The personality insights generated from the quiz.
    * **The Input Text:** The user's specific question or situation.
5. **The Master Prompt:** The Genkit prompt is engineered to make the AI perform several tasks at once:
    * **Embody the Persona:** It's strictly instructed to adopt the voice, tone, and worldview of the chosen character.
    * **Consult the Library:** It's told to use its knowledge of Greene, Machiavelli, and Sun Tzu as its strategic foundation.
    * **Synthesize and Advise:** It cross-references the user's personality with the strategic principles and the immediate situation to craft a response.
    * **Direct Communication:** The final instructions tell the AI to speak directly to the user in a short, impactful way, providing both a ready-to-use message and the psychological strategy behind it.
6. **The Final Output:** The model returns a single string containing the persona's direct advice, which is then displayed in the chat interface. The entire process ensures that the advice is not just a random line, but a tailored, strategic recommendation from a trusted AI wingman.

---

## Key Features

- **Dynamic Vibe Quiz:** A quick, three-question quiz to analyze the user's personality, allowing the AI to tailor its advice.
- **Six Distinct AI Personas:** Choose from a curated roster of iconic characters, each with a unique voice, style, and strategic approach.
- **Strategic Response Generation:** Receive short, impactful, and ready-to-use responses to send to dating app matches.
- **Actionable Psychological Tips:** Every suggestion is backed by a concise strategic tip explaining the psychological principle at play.
- **Sleek, Modern UI:** A dark, glassy interface inspired by modern design trends, creating an immersive and stylish user experience.
- **Responsive Design:** Fully functional across desktop and mobile devices.

---

## The Personas

- **Tyler Durden:** Anarchic and charismatic. His style is provocative and challenges social norms.
- **Harley Quinn:** Unpredictably charming and chaotic. Expect witty, bold, and unhinged banter.
- **Deadpool:** Sarcastic and hilariously inappropriate. Nothing is off-limits.
- **Tony Stark:** Brilliant, billionaire, playboy, philanthropist. Witty, confident, and a bit arrogant.
- **Luna Lovegood:** Dreamy and ethereal. Responses are quirky, insightful, and uniquely perceptive.
- **Patrick Bateman:** Meticulous and materialistic. Obsessed with status, appearance, and hidden meanings.

---

## Tech Stack

Nyxie is built with a modern, powerful, and scalable technology stack.

- **Frontend:**
    - **Next.js:** A React framework for building fast, server-rendered applications.
    - **React & TypeScript:** For building robust, type-safe, and interactive user interfaces.
- **Styling:**
    - **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
    - **ShadCN UI:** A collection of beautifully designed, accessible, and reusable components.
- **AI & Backend Logic:**
    - **Google Gemini Pro:** The advanced large language model powering the AI's reasoning and persona embodiment.
    - **Genkit (by Firebase):** The framework used to structure, define, and manage the interactions with the Gemini model, creating robust AI "flows".
- **Deployment & Version Control:**
    - **Netlify:** For continuous integration and deployment, providing a fast and reliable hosting platform.
    - **GitHub:** For version control and source code management.
`,
  },
  {
    slug: 'stock-trend-prediction',
    title: 'Stock Trend Prediction',
    description: 'A machine learning model that predicts stock market trends using historical data and various technical indicators.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    liveUrl: '#',
    githubUrl: 'https://github.com/prashant252gupta/Stock_trend_prediction',
    aiHint: 'stock chart',
    documentation: `
### **Overview**

This project delivers a **simple web application designed to predict stock trends** using a Long Short-Term Memory (LSTM) deep learning model. The application provides users with an intuitive interface to enter any stock ticker symbol, retrieve historical data, visualise various technical indicators, and view the predicted future closing prices against the original prices. Built with Streamlit, the application demonstrates capabilities in data fetching, processing, machine learning model deployment, and interactive data visualisation.

**Disclaimer:** This application is developed purely for **educational purposes** and to showcase predictive analytics capabilities. It should not be used for making real-world investment decisions with actual money.

### **Key Features**

- **Dynamic Stock Data Retrieval:** Users can enter any valid stock ticker symbol (e.g., 'TSLA' for Tesla, 'SBIN.NS' for State Bank of India) to fetch real-time and historical data.
- **Data Description:** Presents a descriptive summary of the fetched stock data, including statistics like maximum/minimum high, low, opening, and closing values over the selected period.
- **Historical Closing Price Visualisation:** Displays a clear chart illustrating the stock's closing price movement over time.
- **Moving Averages Analysis:**
  - **Calculates and plots 100-day and 200-day Moving Averages (MA)** on the closing price chart.
  - **Explains basic technical analysis strategies**, where the 100-day MA crossing above the 200-day MA indicates an uptrend, and crossing below indicates a downtrend.
- **Stock Price Prediction:** Leverages a trained LSTM model to predict future stock closing prices.
- **Prediction vs. Original Price Comparison:** Visualises the predicted closing prices against the actual original closing prices, allowing for a direct comparison of the model's accuracy. The "offset" (difference between original and predicted prices) is typically low, indicating good model performance.

### **Technologies Used**

- **Programming Language:** Python
- **Web Framework:** **Streamlit** (for building the interactive web interface)
- **Deep Learning Library:** **Keras** with TensorFlow backend (for building and training the LSTM model)
- **Data Manipulation:** **Pandas** (for data handling and analysis)
- **Numerical Operations:** **NumPy** (for numerical computations, especially with arrays)
- **Data Visualisation:** **Matplotlib** (for plotting charts)
- **Machine Learning Utilities:** **Scikit-learn** (specifically \`MinMaxScaler\` for data scaling)
- **Data Source:** Yahoo Finance (for collecting historical stock data)

### **Methodology and Technical Approach**

1.  **Data Acquisition:** Historical stock data is fetched from the Yahoo Finance website based on the user-provided stock ticker.
2.  **Data Preprocessing:**
    -   The 'Date' column is set as the index, and irrelevant columns like 'Adj Close' are dropped, focusing primarily on the **'Close' price column** for predictions.
    -   The data is split into **training (70%) and testing (30%) sets**.
    -   **Min-Max Scaling** is applied to normalise the data into a range between 0 and 1, a crucial step for LSTM models to perform effectively.
3.  **LSTM Model Architecture:**
    -   A **Sequential Keras LSTM model** is constructed.
    -   The model consists of multiple **LSTM layers** (e.g., with 50, 60, 80, and 120 units) to capture complex temporal dependencies in the stock data.
    -   **Dropout layers** (e.g., with rates of 0.2, 0.3, 0.4, 0.5) are strategically placed between LSTM layers to prevent overfitting.
    -   A final **Dense layer with a single unit** is used to output the predicted closing price.
    -   The **input shape** for the first LSTM layer is defined as \`(timesteps, 1)\`, where \`timesteps\` represents the number of previous days' data used for prediction (e.g., 100 days).
4.  **Training Data Preparation for LSTM:**
    -   A **sliding window approach** is used to prepare the input sequences for the LSTM model. For instance, to predict the price on the 101st day, the model is trained on the closing prices of the preceding 100 days. This generates \`X_train\` (sequences of 100 days) and \`y_train\` (the 101st day's price).
    -   The data is then reshaped into the required 3D format for LSTM input: \`(number_of_samples, timesteps, features)\`.
5.  **Model Training:**
    -   The model is compiled using the **Adam optimizer** and **Mean Squared Error (MSE) loss function**, suitable for regression tasks like time series prediction.
    -   The model is trained over a specified number of **epochs** (e.g., 50) using the prepared training data.
6.  **Prediction and Evaluation:**
    -   The **trained Keras model is saved** and then loaded for making predictions.
    -   The testing data is preprocessed similarly to the training data, including scaling and sequence creation, to generate \`X_test\`.
    -   Predictions (\`y_predicted\`) are generated using the \`model.predict(X_test)\` function.
    -   The **inverse transformation** is applied to \`y_predicted\` and \`y_test\` to revert the scaled values back to their original price range, enabling a meaningful comparison.
    -   The results are visualised to show how closely the predicted prices align with the actual closing prices.

### **Outcome and Impact**

This project successfully demonstrates the application of deep learning, specifically LSTM networks, for **time series forecasting in the financial domain**. It provides a robust framework for understanding stock price movements and showcases the potential of machine learning in predictive analytics. The Streamlit interface makes complex data analysis accessible and interactive for end-users, highlighting skills in full-stack development with a strong focus on data science.
    `,
  },
  {
    slug: 'portfolio',
    title: 'Portfolio',
    description: 'a design and 3D model and animation project',
    image: '/images/Lore.png',
    tags: ['Design', '3D Modeling', 'Animation', 'Spline'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: '3d animation',
    documentation: ``,
  },
];

export type Project = (typeof projects)[0];
