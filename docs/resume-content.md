# Vansh Oberoi - Resume Content

**Contact Information:**
- Address: 462 Model Town, Kapurthala, Punjab 144601
- Phone: +91 9646570760
- Email: learnsolo462@gmail.com
- LinkedIn: https://linkedin.com/in/Vansh462
- GitHub: https://github.com/Vansh462

## Education
**Guru Nanak Dev University** - State Government University | Amritsar, Punjab  
Bachelor of Technology in Computer Science & Engineering | Aug. 2022 – June 2026

**Montgomery Guru Nanak Public School** - Class XII | Kapurthala, Punjab  
April 2020 - June 2021 | 88.4% CBSE Board

**Little Angles CO-ED Public School** - Class X | Kapurthala, Punjab  
April 2018 - March 2019 | 87.4% CBSE Board

## Experience
**EaseMyMed** | AIML Development Engineer Intern | Dec. 2024 – June 2025 (6 Months)
- Developed and Managed RESTful APIs using Django REST framework.
- Integrated AI technologies (OpenAI - tested all but mostly used 4o-mini and Gemini - only used gemini-2.0.flash), developing custom AI functions to deepen understanding of core principles, bypassing LangChain where applicable.
- Implemented RAG to cross reference and give right context to AI in-between consecutive calls.
- Integrated Bhashini AI voice models, Implemented benchmarking and feedback mechanisms.
- Developed solutions for processing and analyzing images, worked with PDFs, ZIP folders and using JSON data structure as standard information passer.
- Utilized AWS SageMaker(for development) and Google Cloud Console(deployment by pipelining git repo with GCP to auto build server using DockerFile and CloudBuild file and hosting Storage Files for on-cloud access).
- Created daily technical documentation on Notion apart from regular researching and documenting prototypes on new features.
- Worked on libraries: requests, json, base64, pyMUPDF, genai, PIL, and few more

## Technical Skills (Verified from Resume)

### Languages:
- Python, C++, C, HTML/CSS, SQL, Cypher

### Developer Tools:
- VS Code, Vim, Git, Github, Android Studio, AWS SageMaker, AWS EC2, S3 buckets, GCP, Docker

### Technologies/Frameworks:
- Scikit-learn, Beautiful-Soup, TensorFlow, OpenCV, Computer Vision cv2, Linux (Kali/Arch/Mint), Google-Colab, Django, GraphDB, GraphRAG, DataStax, Make.com, LangGraph, Ollama, CI/CD

### AI-ML:
- LLMs (OpenAI, Gemini, DeepSeek), Machine Learning

### AI Tools:
- GitHub Copilot, RooCode, Amazon Q Dev, cursorAI

### Cloud:
- AWS SageMaker, AWS EC2, S3 buckets, Google Cloud Platform

### Documentation Tools:
- Napkin.ai, draw.io, Notion

### Researching Tools:
- NotebookLLM, ChatGPT, Claude, Google's-Amazon's-HuggingFace's Documentations

### System Knowledge:
- Operating systems, system calls, context switching, machine dependencies, CPU - GPU utilization, Multiprocessing, Threads

### Academic Foundations:
- Advanced data structures and algorithms, compilers, language parsers, networking concepts

## Projects (All on GitHub)

### PromptWizard | Microsoft Backend, VibeCoded Custom UI, Vercel | Jun 2025
**Links:** [Live Demo](https://prompt-wizard-three.vercel.app/) | [GitHub](https://github.com/Vansh462/PromptWizard)
(Note: don't mention unless vibe coding is explicitly asked in job desc)
- Designed and implemented a custom frontend UI from scratch for Microsoft's prompt optimizer, focusing on user flow and clarity.
- Integrated backend API with the new UI and made the whole app deployable and hostable via a single command (Vercel-first deployment) following mono repo (API and UI separate) structure.
- Designed the "Test Values" feature to auto-fill sample data, allowing instant output previews for demo and debugging.
- Added functionality for users to select multiple features and instantly receive optimized prompts tailored to their needs.
- Achieved end-to-end deployment in under 5 hours, iteratively improving UX and adding practical features post-launch.
- Ensured the final product is plug-and-play for deployment: no manual server config, just deploy and use.
- Special focus on usability: minimal setup, instant feedback, and clarity for all user actions.

### Dr's Medicine Prescription Prediction | Python, pandas, scikit-learn, seaborn, matplotlib, Jupyter Notebook | Dec 2024
**Links:** [Kaggle](https://kaggle.com/code/vanshoberoi3103/dr-s-medicine-prescription-prediction-model-99)
- Built a supervised machine learning pipeline to predict appropriate medical prescriptions based on patient symptoms and demographic data.
- Started with a dataset containing approximately 5,921 patient records; after data cleaning and preprocessing (handling missing values, encoding categorical variables, removing inconsistencies), retained around 5,900 usable samples for modeling.
- Performed extensive exploratory data analysis (EDA) and feature engineering to identify key patterns and improve model input quality.
- Developed and trained a Random Forest Classifier (with hyperparameter tuning) for prescription prediction. Also evaluated other models including Decision Tree and Logistic Regression for comparison.
- Achieved a test set accuracy of over 99% with the Random Forest model.
- Visualized results and model performance using confusion matrices and classification reports.
- Documented the complete process and code in a clear, step-by-step Jupyter Notebook, enabling reproducibility and interpretability.

### Jute Pest Classification | TensorFlow, ResNet101x1, AWS(m5.large) | Nov 2024
**Links:** [GitHub](https://github.com/Vansh462/LearningProjects/tree/main/Jute%20Pest) | [Kaggle](https://www.kaggle.com/code/vanshoberoi3103/jute-pest-tf-restnet101x1-95-acc-on-1st-try)
- Fine-tuned a deep learning model TensorFlow's ResNet101x1 to classify 13 jute pest types with 95% accuracy on a test set of 379 images (6,443 training, 443 validation).
- Implemented preprocessing techniques: cropping, resizing, and pixel normalization.
- Optimized training on an AWS m5.large instance, achieving ~10s/epoch through hyperparameter tuning (learning rate, epochs, dropout) and prefetch() for reduced data loading time.
- Utilized SparseCategoricalCrossentropy loss function and SGD optimizer.

### Sports Person Classification | scikit-learn, OpenCV(cv2), matplotlib, GridSearchCV, HaarCascades, Wavelet | Sep 2024
**Links:** [GitHub](https://github.com/Vansh462/LearningProjects/tree/main/SportsPersonClassifier)
- Engineered a face-based sports person classifier leveraging HaarCascades (OpenCV) and wavelet transforms for robust image preprocessing, including face validation, cropping, and feature extraction.
- Conducted systematic hyperparameter optimization with GridSearchCV across SVC, RandomForest, and Logistic Regression models, utilizing StratifiedShuffleSplit for balanced validation.
- Finalized Logistic Regression as the optimal classifier, achieving 84.31% test accuracy; utilized model.predict_proba for probabilistic outputs.
- Evaluated performance with post-training confusion matrix analysis and accuracy metrics to ensure model reliability.
- Workflow implemented with NumPy, Pandas, scikit-learn, OpenCV, and Matplotlib; all code modularized for reproducibility and interpretability.

### Bombay House Price Prediction Site & Model | Python, ML, Streamlit, AWS Cloud, NginX | August 2024
**Links:** [GitHub](https://github.com/Vansh462/LearningProjects/tree/main/BHP)
- Developed a house price prediction model using Python and a machine learning model (linear regression).
- Calculation of House Price based on #rooms, Town Name, Air Conditioning, Parking, and so on.
- Built a Streamlit based web application for user interaction and deployed it on AWS Cloud EC2 instance.
- Configured Nginx on cloud as a reverse proxy for efficient application serving and scalability.

### Tips App | Streamlit, scikit-learn, joblib | August 2024
**Links:** [GitHub](https://github.com/Vansh462/LearningProjects/tree/main/Tips%20App)
- Built a web-based tip prediction app using Streamlit as the frontend framework and deployed a pre-trained scikit-learn regression model (serialized with joblib).
- Designed an interactive UI with Streamlit's sidebar slider for real-time bill input and instant tip prediction output.
- Integrated model inference by loading a pickled estimator (tips.pkl) and generating predictions based on user input.
- Leveraged minimalistic dependency stack: scikit-learn (modeling), joblib (model I/O), and Streamlit (deployment/UI).
- Delivered an efficient, lightweight deployment pipeline—setup scripts (setup.sh, Procfile) support cloud or Heroku-style hosting.
- All logic modularized in a single app.py for streamlined maintainability and reproducibility.
- Achieved frictionless UX and robust backend by combining Python web tools and ML model serving best practices.

### Official Site Link Scraping from Name | Python, Selenium, Google-library, Beautiful-Soup, Multiprocessing, Threads | Jan 2024
**Links:** No public repository available
- Led a backend project to scrape official bank links using only the bank's name.
- Implemented Google library for efficient scraping, chosen after researching APIs and Selenium.
- Utilized multiprocessing for performance optimization in web scraping tasks.

### Pong Game (Pygame) | Python, Pygame | Oct 2023
**Links:** No public repository available
- Implemented classic Pong gameplay using Python and Pygame, with full OOP design: custom classes for Ball, Player, Opponent, and GameManager.
- Sprite-based architecture: Leveraged pygame.sprite.Sprite for modular, reusable paddle and ball components.
- Collision detection and response: Handled precise ball-paddle and ball-wall collisions, including edge-case corrections for realistic bounce physics.
- Sound integration: Added dynamic audio feedback with .ogg files for paddle hits and scoring, using pygame.mixer.
- Responsive controls and AI: Supported real-time keyboard input for player paddle and basic AI tracking for opponent paddle movement.
- Custom assets and visuals: Used external PNG assets for paddles/ball and drew custom backgrounds and midline for a polished arcade look.
- High-performance game loop: Maintained smooth gameplay at 120 FPS, efficient event handling, and state updates for all objects.

### Scrap & Sentimental Analysis | Python, pandas, requests, BeautifulSoup, NLTK, Jupyter Notebook | Aug 2023
**Links:** [GitHub](https://github.com/Vansh462/BlackCoffer)
- Built a robust rule-based NLP/text analytics pipeline in Python and Jupyter Notebook for the BlackCoffer assignment.
- Automated web scraping, text extraction, cleaning, and tokenization from articles using pandas, requests, BeautifulSoup, and NLTK.
- Created and leveraged vocabularies from pre-defined positive and negative wordlists (dictionary files) for sentiment analysis—no machine learning or statistical models were used; all scoring was strictly rule- and dictionary-based.
- Designed custom functions to compute a broad set of readability and sentiment metrics (e.g., positive/negative scores, polarity/subjectivity, FOG index, complex word count, average sentence/word length, personal pronoun count, etc.) using dictionary lookups and text statistics.
- Ensured clarity and reproducibility by documenting every step, with all processing logic and results consolidated in a ready-to-run Jupyter Notebook.
- Generated a comprehensive, structured Excel report via code using pandas; summarizing all extracted features and metrics for each article.

## Professional & Volunteer Experience

### Graph Database Research & Learning | Neo4j Workshops | 2025
- Researched and learned GraphDB and GraphRAG concepts through Neo4j workshops.
- Gained proficiency in Cypher query language.
- Understood the advantages of GraphDB for accurate data retrieval.

### GNDU E-Cell | Design Team Head | Spring 2022 – 2023
- Led a team of 4 members in creating innovative designs for diverse projects.
- Managed the design team and collaborated with other teams.

### ARAMBH Startup | Backend Team Trainee | Aug. 2024 – Oct. 2024
- Collaborated with ECE colleagues on backend projects using Python.
- Applied and enhanced Python skills through assigned tasks.

### Hamari Pahchan NGO | Volunteered for 7 day charity drive Intern | June 2023
- Fund raising, raising awareness, digital promotions.
- NGO provides education and skill development to underprivileged and offer internships for students.

### Corizo Company | Marketing Intern | June 2023 - July 2023
- Found and Joined various online communities to market the Corizo group.
- Noted that groups made for marketing often don't yield results due to constant spamming, but groups targeting different topics like Sports, fitness, Cooking Classes, Founders office, etc yield more responsive results for digital marketing.
