export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Research" | "NLP" | "Computer Vision" | "ML" | "Automation";
  accentColor: string;
  tech: string[];
  github: string;
  demo?: string;
  demoLabel?: string;
  accuracy?: string;
  status: "Deployed" | "Research Prototype" | "Research Complete" | "Active Research" | "Operational" | "Published" | "Complete" | "Live";
  fullDescription?: string;
  architecture?: string;
  highlight?: string;
  featured?: boolean;
  keyInsight?: string;
}

export const projects: Project[] = [
  {
    id: "understandiq",
    title: "UnderstandIQ",
    description:
      "Cognitive assessment engine that measures whether learners truly understand — not just whether they answered correctly. Confidence calibration, misconception detection, cognitive archetypes from a live AI system.",
    fullDescription: "UnderstandIQ operationalizes HCMS into a live tool. Upload any document. Answer four question types: MCQ (recall), Short Answer (articulation), Application (transfer), Explain-It (depth). Rate confidence before seeing results. The output is a cognitive fingerprint — accuracy, calibration score, archetype, detected misconceptions, and personalized study recommendations. Built on DOI: 10.5281/zenodo.18269740.",
    category: "Research",
    accentColor: "#00d4ff",
    tech: ["Python", "Streamlit", "Groq API", "LLaMA 3.3 70B", "fpdf2", "pdfplumber", "Plotly"],
    github: "https://github.com/RayanAIX/understandiq",
    demo: "https://understandiq.streamlit.app",
    accuracy: "DOI-Backed",
    status: "Live",
    featured: true,
    keyInsight: "The breakthrough was making open-ended answers score meaningfully. Keyword overlap with model answers turned binary right/wrong into a spectrum of understanding — which is exactly what HCMS says understanding actually is.",
  },
  {
    id: "fake-news-detector",
    title: "Fake News Detection AI",
    description:
      "NLP classifier achieving 97% accuracy on real-world news data. Deployed live on Hugging Face Spaces using TF-IDF + Passive Aggressive Classifier.",
    category: "NLP",
    accentColor: "#00d4ff",
    tech: ["Python", "Scikit-learn", "NLTK", "Gradio"],
    github: "https://github.com/RayanAIX/Fake-News-Detection-AI",
    demo: "https://huggingface.co/spaces/RayNetic/Fake-News-Detection-AI",
    accuracy: "97%",
    status: "Deployed",
    fullDescription:
      "A machine learning system that classifies news articles as real or fake using text-based features. The Passive Aggressive algorithm with TF-IDF vectorization provides robustness against adversarial examples while maintaining high accuracy on imbalanced datasets.",
    keyInsight: "TF-IDF outperformed BERT at 1/100th the compute. For structured classification tasks, feature engineering often matters more than model sophistication.",
  },
  {
    id: "emotion-classifier",
    title: "Emotion Classifier AI",
    description:
      "CNN trained on FER2013 dataset detecting 7 emotion classes in real-time via webcam. Keras/TensorFlow pipeline with live inference capabilities.",
    category: "Computer Vision",
    accentColor: "#f59e0b",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    github: "https://github.com/RayanAIX/emotion-classifier",
    status: "Deployed",
    fullDescription:
      "A convolutional neural network trained on the FER2013 facial expression dataset. The model detects seven basic emotions (angry, disgust, fear, happy, sad, surprise, neutral) in real-time from webcam feeds, demonstrating practical computer vision applications.",
    keyInsight: "FER2013 has significant label noise. Training with uncertain ground truth taught more about data quality than any tutorial — noise handling became the real skill.",
  },
  {
    id: "medical-imaging",
    title: "Medical Imaging AI",
    description:
      "Multi-label chest condition detection on ChestMNIST dataset using Convolutional Neural Networks for healthcare screening applications.",
    category: "Computer Vision",
    accentColor: "#10b981",
    tech: ["PyTorch", "CNN", "MedMNIST", "Healthcare AI"],
    github: "https://github.com/RayanAIX/AI-Medical-Imaging-Assistant",
    status: "Research Complete",
    fullDescription:
      "An AI system that detects multiple chest conditions from X-ray images using the ChestMNIST dataset. The multi-label classification approach allows for identifying co-occurring conditions, which is crucial for real-world medical diagnosis support.",
    keyInsight: "Multi-label classification on imbalanced medical data required custom loss weighting. Binary cross-entropy alone produced 0% recall on rare conditions.",
  },
  {
    id: "speech-translator",
    title: "Speech-to-Text Translator",
    description:
      "Real-time multilingual audio transcription powered by OpenAI Whisper + Google Translate. Supports 50+ language pairs with live audio processing.",
    category: "NLP",
    accentColor: "#00d4ff",
    tech: ["Whisper", "Google Translate API", "Python", "Gradio"],
    github: "https://github.com/RayanAIX/Speech-to-Text-Translator",
    status: "Deployed",
    fullDescription:
      "A speech translation system that converts spoken language to text, then translates to target languages. Using OpenAI's Whisper for transcription and Google Translate for translation, it supports over 50 language pairs with near real-time performance.",
    keyInsight: "Whisper latency was the bottleneck, not accuracy. Chunking audio and streaming partial results made it feel real-time without changing the model at all.",
  },
  {
    id: "social-automation",
    title: "Social Media Automation Engine",
    description:
      "AI-powered content engine that auto-generates captions, hashtags, and cross-posts to LinkedIn, Instagram, Facebook via Make.com + GPT-4.",
    category: "Automation",
    accentColor: "#ec4899",
    tech: ["Make.com", "OpenAI API", "GPT-4", "REST APIs"],
    github: "https://github.com/RayanAIX/sheet-to-social-automation",
    status: "Operational",
    fullDescription:
      "A content automation pipeline that uses GPT-4 to generate engaging social media posts, then distributes them across multiple platforms. The system includes hashtag optimization, timing algorithms, and performance tracking.",
    keyInsight: "The most fragile part wasn't the AI — it was rate limiting across three APIs simultaneously. Retry logic with exponential backoff was more valuable than prompt engineering.",
  },
  {
    id: "road-lane-detection",
    title: "Road Lane Detection (OpenCV)",
    description:
      "Real-time road lane line detection using OpenCV computer vision pipeline. Processes video frames to identify and track lane boundaries for autonomous driving contexts.",
    category: "Computer Vision",
    accentColor: "#f59e0b",
    tech: ["Python", "OpenCV", "NumPy", "Computer Vision"],
    github: "https://github.com/RayanAIX/Road-Lane-Detection-OpenCV",
    status: "Complete",
    keyInsight: "OpenCV's Hough transform performs beautifully in ideal conditions and catastrophically in shadows. 80% of the solution was preprocessing — blur, Canny edges — before the algorithm ran.",
  },
  {
    id: "casting-defect",
    title: "Casting Defect Detection (CNN)",
    description:
      "Industrial quality control system using Convolutional Neural Networks to detect surface defects in metal casting products. Computer vision for manufacturing automation.",
    category: "Computer Vision",
    accentColor: "#f59e0b",
    tech: ["Python", "TensorFlow", "CNN", "Jupyter Notebook"],
    github: "https://github.com/RayanAIX/Casting-Defect-Detection-CNN",
    status: "Complete",
    keyInsight: "Transfer learning from ImageNet cut training time by 80% without accuracy loss, even though manufacturing images look nothing like ImageNet. Pre-trained features generalize further than expected.",
  },
  {
    id: "telco-churn",
    title: "Telco Customer Churn Predictor",
    description:
      "Machine learning model predicting customer churn in telecommunications. Feature engineering, classification, and business insight generation from behavioral data.",
    category: "ML",
    accentColor: "#00d4ff",
    tech: ["Python", "Scikit-learn", "Pandas", "Jupyter Notebook"],
    github: "https://github.com/RayanAIX/Telco-Customer-Churn-Prediction",
    status: "Complete",
    keyInsight: "Customer tenure was the single most predictive feature, outperforming every behavioral signal. Sometimes the simplest feature carries the most signal.",
  },
  {
    id: "vehicle-detection",
    title: "Vehicle Detection & Counting (YOLO)",
    description:
      "Real-time vehicle detection and traffic counting system using YOLO object detection. Processes video streams to count vehicles by type across lanes.",
    category: "Computer Vision",
    accentColor: "#f59e0b",
    tech: ["Python", "YOLO", "OpenCV", "Computer Vision"],
    github: "https://github.com/RayanAIX/vehicle-detection-and-counting-yolo",
    status: "Deployed",
    keyInsight: "YOLO's confidence threshold is the entire system. Too high misses real vehicles; too low hallucinates detections from shadows. Calibration is everything.",
  },
  {
    id: "speech-emotion",
    title: "Speech Emotion Recognition",
    description:
      "Deep learning model that classifies human emotional states from raw audio signals. Uses MFCCs and spectral features with neural network classification.",
    category: "NLP",
    accentColor: "#00d4ff",
    tech: ["Python", "Librosa", "TensorFlow", "Audio ML"],
    github: "https://github.com/RayanAIX/Speech-Emotion-Recognition",
    status: "Complete",
    keyInsight: "MFCCs captured emotion better than raw waveforms — frequency content carries emotional signal more reliably than amplitude.",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const filterProjectsByCategory = (
  category: string
): Project[] => {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
};

export const categories = ["All", "Research", "NLP", "Computer Vision", "ML", "Automation"];
