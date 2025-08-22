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
    documentation: ``,
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
